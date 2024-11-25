import { writable } from "svelte/store";
import * as formTypes from "../types/form_types";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";
import { downloadCv } from "../api/cvGeneratorApi";
import { currentDomain } from "./domainStore";

let userFormData: formTypes.FormData = {
  filePicture: "",
  name: "",
  surname: "",
  profession: "",
  nationality: "",
  birthPlace: "",
  birthDate: "",

  address: {
    streetAddress: "",
    postalCode: "",
    city: "",
    region: "",
  },
  phonePrefix: "",
  phone: "",
  email: "",
  profileSummary: "",
  isProtectedCategory: false,
  digitalSkills: [{ skill: "", level: "" }],
  languagesSkills: [{ lang: "", level: "" }],
  drivingLicences: [],
  hasOwnCar: false,

  jobs: [
    {
      role: "",
      company: "",
      location: "",
      workExperienceResults: "",
      startDateWorkExperience: "",
      endDateWorkExperience: "",
      isEmployed: false,
    },
  ],

  educations: [
    {
      qualification: "",
      fieldOfStudy: "",
      trainingCenter: "",
      educationGoals: "",
      endDateAcademicEducation: "",
    },
  ],

  userSignature: "",
  selectedColor: "",
  selectedCvTemplate: "",
};

export const formDataStore = writable(userFormData);

// Salvo i dati nel localStorage
export function storeUserData(storeData: formTypes.FormData): void {
  try {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(storeData));
    }
  } catch (error) {
    console.error(
      "Il salvataggio dei dati nel localStorage non è andato a buon fine",
      error
    );
  }
}

// Aggiornamento dei dati salvati nel localStorage
export function updateStoreUserData(): void {
  try {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      formDataStore.subscribe((currentUserFormData) => {
        storeUserData(currentUserFormData);

        return currentUserFormData;
      });
    }
  } catch (error) {
    console.error(
      "L'aggiornamento dei dati del localStorage non è andato a buon fine",
      error
    );
  }
}

// Recupero i dati dal localStorage
export function getStoreUserData(): void {
  try {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const savedStoreData = localStorage.getItem("formData");

      if (savedStoreData) {
        userFormData = JSON.parse(savedStoreData);
        formDataStore.set(userFormData);
      }
    }
  } catch (error) {
    console.error(
      "Il recupero dei dati dal localStorage non è andato a buon fine",
      error
    );
  }
}

// Eliminazione dei dati del localStorage
export function clearLocalStorage(): void {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    localStorage.clear();
  }
}

export let isAllowed = writable(false);
export let isPrivacyPolicyApproved  = writable(false);
export let isModifyBtnDisabled = writable(false);
export let isFormValidated = false;
export let showPopup = writable(false);
export let viewportWidth = writable(0);
export let typeName = writable(false);

// Formattazione data di nascita
export function formattedBirthDate(date: string): string {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

// Formattazione data delle esperienze lavorative e accademiche
export function formattedWorkAcademicDate(date: string): string {
  if (!date) return "";
  const [year] = date.split("-");
  return `${year}`;
}

let tenant: any;

// Funzione per ottenere il logo
export function getTenant(currentDomain: any) {
  try {
    if (currentDomain?.includes("during")) {
      tenant = "during";
    }
    if (currentDomain?.includes("jobcamere")) {
      tenant = "jobcamere";
    }
    if (currentDomain?.includes("lavoroexpress")) {
      tenant = "lavoroexpress";
    }
    if (currentDomain?.includes("archimedespa")) {
      tenant = "archimede";
    }
    if (currentDomain?.includes("localhost")) {
      tenant = "lavoroexpress";
    }
    return tenant;
  } catch (error) {
    console.error("Errore nel recupero del tenant:", error);
    return null;
  }
}

export let currentTenant : any;
currentDomain.subscribe((value) => {
  currentTenant = getTenant(value);
});

export function getTenantColor(currentTenant: string) {
  switch (currentTenant) {
    case "during":
      return "during-tenant";
    case "jobcamere":
      return "jobcamere-tenant";
    case "lavoroexpress":
      return "lavoroexpress-tenant";
    case "archimede":
      return "archimede-tenant";
  }
}

// Funzione per ottenere la didascalia del footer
export function getCopyrightPolicy(currentTenant: string) {
  let footerText: string = "";
  switch (currentTenant) {
    case "during":
      footerText =
        "During SpA © 2024 | CF e P.IVA 13434210152 - REA 959395 - Sede Legale: Via Cavalli 42 - 10138 Torino - Autorizzazione definitiva del Ministero del Lavoro Prot.n.1180 SG del 13/12/2004 Capitale Sociale Euro 724.011,00 i.v.";
      break;
    case "jobcamere":
      footerText =
        "Tutti i diritti riservati Copyright © 2024 Job Camere S.r.l. a socio unico - P.IVA 04117630287 - Autorizzazione Definitiva del Min. del Lav. Prot. n. 13/I/0013604 del 15/10/2009 sez. 1 Società con Unico Socio sottoposta a direzione e coordinamento di During S.p.A - Capitale Sociale Euro 600.000,00 i.v.";
      break;
    case "archimede":
      footerText =
        "Tutti i diritti riservati Copyright © 2023 Archimede SpA - CF e P.IVA 02104290354 - REA: RE – 251769 - Sede Legale: Via Galliano, 10 – 42124 Reggio Emilia (RE) - Soc. soggetta alla direzione e coordinamento di During S.p.A.";
      break;
    case "lavoroexpress":
      footerText = "Copyright © 2024 – Tutti i diritti riservati";
      break;
  }
  return footerText;
}

export const currentCopyrightPolicy = getCopyrightPolicy(tenant);

export function showCvTemplates(): void {
  let origin: boolean = false;
  showPopup.set(true);
  isModifyBtnDisabled.set(true);
}

function checkMandatoryInputs(inputName: string,errorMessageSelector: string,errorMessage: string): void {

  const mandatoryInput: HTMLInputElement | null = document.querySelector(`[name='${inputName}']`);
  const errorMessages: HTMLDivElement | null = document.querySelector(errorMessageSelector);

  const setErrorFeedback = (message: string) => {
    if (errorMessages) {
      errorMessages.innerText = message;
      errorMessages.classList.add("error-user-data", "fw-bolder");
      errorMessages.style.fontSize = "0.8rem";
    }

    if (mandatoryInput) {
      mandatoryInput.classList.add("is-invalid");
    }
  };

  if (mandatoryInput) {
    const inputValue = mandatoryInput.value.trim();
    if (inputValue === "") {
      setErrorFeedback(errorMessage);
    }
  }
}

function checkNameInput(): void {
  checkMandatoryInputs(
    "name",
    ".error-name-message",
    "Il nome è obbligatorio. Per favore inseriscilo."
  );
}

function checkSurnameInput(): void {
  checkMandatoryInputs(
    "surname",
    ".error-surname-message",
    "Il cognome è obbligatorio. Per favore inseriscilo."
  );
}

function checkProfessionInput(): void {
  checkMandatoryInputs(
    "profession",
    ".error-profession-message",
    "Lo stato di nascita è obbligatorio. Per favore inseriscilo."
  );
}

function checkNationalityInput(): void {
  checkMandatoryInputs(
    "nationality",
    ".error-nationality-message",
    "Lo stato di nascita è obbligatorio. Per favore inseriscilo."
  );
}

function checkBirthPlaceInput(): void {
  checkMandatoryInputs(
    "birthPlace",
    ".error-birthplace-message",
    "Il luogo di nascita è obbligatorio. Per favore inseriscilo."
  );
}

function checkBirthDateInput(): void {
  checkMandatoryInputs(
    "birthDate",
    ".error-birthdate-message",
    "La data di nascita è obbligatoria. Per favore inseriscila."
  );
}

function checkStreetAddressInput(): void {
  checkMandatoryInputs(
    "streetAddress",
    ".error-street-address-message",
    "L'indirizzo di residenza è obbligatorio. Per favore inseriscilo."
  );
}

function checkPostalCodeInput(): void {
  checkMandatoryInputs(
    "postalCode",
    ".error-postal-code-messages",
    "Il codice postale è obbligatorio. Per favore inseriscilo."
  );

}

function checkCityInput(): void {
  checkMandatoryInputs(
    "city",
    ".error-city-message",
    "La città è obbligatoria: Per favore inseriscila."
  );
}

function checkRegionInput(): void {
  checkMandatoryInputs(
    "region",
    ".error-region-message",
    "La regione è obbligatoria: Per favore inseriscila."
  );
}

function checkPhonePrefixSelect(): void {
  checkMandatoryInputs(
    "phonePrefix",
    ".error-phoneprefix-message",
    "Per favore, seleziona almeno un prefisso telefonico."
  );
}

function checkPhoneInput(): void {
  checkMandatoryInputs(
    "phone",
    ".error-phone-messages",
    "Il cellulare è obbligatorio. Per favore inseriscilo."
  );
}

function checkEmailInput(): void {
  checkMandatoryInputs(
    "email",
    ".error-email-messages",
    "L'email è obbligatoria. Per favore inseriscila."
  );
}

function checkMandatoryRadioInputs(
  radioName: string,
  errorMessageSelector: string,
  errorMessage: string
): void {
  const radioInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    `input[name="${radioName}"]`
  );
  const errorMessages: HTMLDivElement | null =
    document.querySelector(errorMessageSelector);
  let isSelected = false;

  radioInputs.forEach((radio) => {
    if (radio.checked) {
      radio.classList.add("is-valid");
      isSelected = true;
    } else {
      radio.classList.add("is-invalid");
    }
  });

  const setErrorFeedback = (message: string) => {
    if (errorMessages) {
      errorMessages.innerText = message;
      errorMessages.classList.add("error-user-data", "fw-bolder");
      errorMessages.style.fontSize = "0.8rem";
    }
  };

  if (!isSelected) {
    setErrorFeedback(errorMessage);
  }
}

function isProtectedCategoryRadiosSelected(): void {
  checkMandatoryRadioInputs(
    "protectedCategoryRadioOptions",
    ".error-protected-category-message",
    "Per favore, seleziona almeno un'opzione"
  );
}

function isHasOwnCarRadiosSelected(): void {
  checkMandatoryRadioInputs(
    "drivingLicenceRadioOptions",
    ".error-has-own-car-message",
    "Per favore, seleziona almeno un'opzione"
  );
}

function checkRequiredFields() {

  isFormValidated = true;

  formDataStore.subscribe(currentUserFormData => {

    if (!currentUserFormData.name) {
      checkNameInput();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.surname) {
      checkSurnameInput();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.profession) {
      checkProfessionInput();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.nationality) {
      checkNationalityInput();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.isProtectedCategory) {
      isProtectedCategoryRadiosSelected();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.hasOwnCar) {
      isHasOwnCarRadiosSelected();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.birthPlace) {
      checkBirthPlaceInput();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.birthDate) {
      checkBirthDateInput();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.address.streetAddress) {
      checkStreetAddressInput();
      isFormValidated = false;
    }

    console.log(currentUserFormData.address.postalCode);
    

    if (!currentUserFormData.address.postalCode) {
      checkPostalCodeInput();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.address.city) {
      checkCityInput();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.address.region) {
      checkRegionInput();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.phonePrefix) {
      checkPhonePrefixSelect();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.phone) {
      checkPhoneInput();
      isFormValidated = false;
    }
  
    if (!currentUserFormData.email) {
      checkEmailInput();
      isFormValidated = false;
    }


  });

  return isFormValidated;

}

function getPdfCv(): void {

  downloadCv()
    .then((response) => {
      if (response.data) {
        const url = window.URL.createObjectURL(new Blob([response.data]));

        const element = document.createElement("a");
        element.href = url;
        element.download = "Cv.pdf";

        document.body.append(element);
        element.click();
        element.remove();

        URL.revokeObjectURL(url);

        Swal.fire({
          title: "Download completato!",
          text: `Il tuo CV è stato scaricato con successo.`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        console.error("Nessun dato ricevuto dal server");
        alert("Non funziona");
      }
    })
    .catch((error) => {
      console.error("Errore durante il download del CV:", error);
    });
}

export function handleDownloadCv() {
  let isCvDownloadAllowed = checkRequiredFields();

  if (!isCvDownloadAllowed) {
    Swal.fire({
      title: "Impossibile scaricare il CV!",
      text: `Compila i campi obbligatori.`,
      icon: "error",
      timer: 2000,
      showConfirmButton: false,
    });
  } else {
    getPdfCv();
  }
}