import { writable } from "svelte/store";
import * as formTypes from "../types/form_types";
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';
import { downloadCv } from "../api/cvGeneratorApi";

let userFormData: formTypes.FormData = {
  
  filePicture: "",
  name: "",
  surname: "",
  profession: "",
  nationality: "",
  birthPlace: "",
  birthDate: "",

  address: 
    {
      streetAddress: "",
      postalCode: "",
      city: "",
      region: "",
    }
  ,

  phonePrefix: "",
  phone: "",
  email: "",
  profileSummary: "",
  isProtectedCategory: "",
  digitalSkills: [{ skill: "", level: "" }],
  languagesSkills: [{ lang: "", level: "" }],
  drivingLicences: [],
  hasOwnCar: "",

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
    console.error("Il salvataggio dei dati nel localStorage non è andato a buon fine", error);
  }

};

// Aggiornamento dei dati salvati nel localStorage
export function updateStoreUserData(): void {

  try {

    if (typeof window !== "undefined" && typeof localStorage !== "undefined") { 

      formDataStore.subscribe((currentUserFormData) => {
          storeUserData(currentUserFormData);
            
          return currentUserFormData;
      });

    }

  } catch(error) {
    console.error("L'aggiornamento dei dati del localStorage non è andato a buon fine", error);
  } 

};

// Recupero i dati dal localStorage
export function getStoreUserData(): void {

  try {

    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {

      const savedStoreData = localStorage.getItem("formData");
      
      if (savedStoreData) {
        userFormData = JSON.parse(savedStoreData);
        formDataStore.set(userFormData);
        console.log(savedStoreData);
      }


    }

  } catch(error) {
    console.error("Il recupero dei dati dal localStorage non è andato a buon fine", error);
  }

};

// Eliminazione dei dati del localStorage
export function clearLocalStorage(): void {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    localStorage.clear();
  }
};

export let isAllowed: formTypes.isAllowed = writable(false);
export let isPrivacyPolicyApproved: formTypes.isAllowed = writable(false);
export let isModifyBtnDisabled: formTypes.isAllowed = writable(false);
export let isFormValid: formTypes.isFormValid = writable(false);
export let showPopup: formTypes.isFormValid = writable(false);
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

// Funzione per ottenere il logo
function getTenant(): string | null {

    try {

      const currentDomain: string = "https://www.during.it/";

      if (currentDomain.includes('during')) {
        return 'during';
      }
      if (currentDomain.includes('jobcamere')) {
        return 'jobcamere';
      }
      if (currentDomain.includes('lavoroexpress')) {
        return 'lavoroexpress';
      }
      if (currentDomain.includes('archimede')) {
        return 'archimede';
      }
  
      throw new Error("Tenant non trovato");

    } catch (error) {
      console.error("Errore nel recupero del tenant:", error);
      return null;
    }
    
}

export const currentTenant = getTenant();

export function getTenantColor() {
  
  switch (currentTenant) {
    case 'during':
      return "during-tenant";
    case 'jobcamere':
      return "jobcamere-tenant";
    case 'lavoroexpress':
      return "lavoroexpress-tenant";
    case 'archimede':
      return "archimede-tenant";
  }
  
}

export  const tenantColor = getTenantColor();

// Funzione per ottenere la didascalia del footer
function getCopyrightPolicy(): string | null {

  try {

    const currentDomain: string = window.location.hostname;
    // console.log("Dominio corrente:", currentDomain);

    const copyrightMapping: Record<string, string> = {
      'during': 'Copyright © 2024 – Tutti i diritti riservati',
      'localhost': 'Tutti i diritti riservati Copyright © 2023 Job Camere S.r.l. a socio unico - P.IVA 04117630287 - Autorizzazione Definitiva del Min. del Lav. Prot. n. 13/I/0013604 del 15/10/2009 sez. 1 Società con Unico Socio sottoposta a direzione e coordinamento di During S.p.A - Capitale Sociale Euro 600.000,00 i.v.',
      'lavoroexpress': 'Copyright © 2024 – Tutti i diritti riservati',
      'archimedespa': 'Tutti i diritti riservati Copyright © 2023 Archimede SpA - CF e P.IVA 02104290354 - REA: RE – 251769 - Sede Legale: Via Galliano, 10 – 42124 Reggio Emilia (RE) - Soc. soggetta alla direzione e coordinamento di During S.p.A.'
    };

    const copyright = copyrightMapping[currentDomain];
    // console.log("Copyright trovato:", copyright);

    if (!copyright) {
      throw new Error("Copyright Policy non trovata"); 
    }

    return copyright;

  } catch (error) {
    console.error("Errore nel recupero della Copyright Policy:", error);
    return null;
  }
  

}

export const currentCopyrightPolicy = getCopyrightPolicy();

function checkMandatoryInputs(
  inputName: string,
  errorMessageSelector: string,
  errorMessage: string
): void {
  const mandatoryInput: HTMLInputElement | null = document.querySelector(
    `[name='${inputName}']`
  );
  const errorMessages: HTMLDivElement | null =
    document.querySelector(errorMessageSelector);

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
  checkMandatoryInputs("name", ".error-name-message", "Il nome è obbligatorio. Per favore inseriscilo.");
}

function checkSurnameInput(): void {
  checkMandatoryInputs("surname", ".error-surname-message", "Il cognome è obbligatorio. Per favore inseriscilo.");
}

function checkProfessionInput(): void {
  checkMandatoryInputs("profession", ".error-profession-message", "Lo stato di nascita è obbligatorio. Per favore inseriscilo.");
}

function checkNationalityInput(): void {
  checkMandatoryInputs("nationality", ".error-nationality-message", "Lo stato di nascita è obbligatorio. Per favore inseriscilo.");
}

function checkBirthPlaceInput(): void {
  checkMandatoryInputs("birthPlace", ".error-birthplace-message", "Il luogo di nascita è obbligatorio. Per favore inseriscilo.");
}

function checkBirthDateInput(): void {
  checkMandatoryInputs("birthDate", ".error-birthdate-message", "La data di nascita è obbligatoria. Per favore inseriscila.");
}

function checkStreetAddressInput(): void {
  checkMandatoryInputs("streetAddress", ".error-street-address-message", "L'indirizzo di residenza è obbligatorio. Per favore inseriscilo.");
}

function checkCityInput(): void {
  checkMandatoryInputs("city", ".error-city-message", "La città è obbligatoria: Per favore inseriscila.");
}

function checkRegionInput(): void {
  checkMandatoryInputs("region", ".error-region-message", "La regione è obbligatoria: Per favore inseriscila.");
}

function checkPhonePrefixSelect(): void {
  checkMandatoryInputs("phonePrefix", ".error-phoneprefix-message", "Per favore, seleziona almeno un prefisso telefonico.");
}

function checkPhoneInput(): void {
  checkMandatoryInputs("phone", ".error-phone-messages", "Il cellulare è obbligatorio. Per favore inseriscilo.");
}

function checkEmailInput(): void {
  checkMandatoryInputs("email", ".error-email-messages", "L'email è obbligatoria. Per favore inseriscila.");
}

function checkMandatoryRadioInputs(radioName: string, errorMessageSelector: string, errorMessage: string): void {
  const radioInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[name="${radioName}"]`);
  const errorMessages: HTMLDivElement | null = document.querySelector(errorMessageSelector);
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
  checkMandatoryRadioInputs("protectedCategoryRadioOptions", ".error-protected-category-message", "Per favore, seleziona almeno un'opzione");
}

function isHasOwnCarRadiosSelected(): void {
  checkMandatoryRadioInputs("drivingLicenceRadioOptions", ".error-has-own-car-message", "Per favore, seleziona almeno un'opzione");
}

export function checkRequiredFields() {

  isFormValid.set(true);

  if (!userFormData.name) {
    checkNameInput();
    isFormValid.set(false);
  }

  if (!userFormData.surname) {
    checkSurnameInput();
    isFormValid.set(false);
  }

  if (!userFormData.profession) {
    checkProfessionInput();
    isFormValid.set(false);
  }

  if (!userFormData.nationality) {
    checkNationalityInput();
    isFormValid.set(false);
  }

  if (!userFormData.isProtectedCategory) {
    isProtectedCategoryRadiosSelected();
    isFormValid.set(false);
  }
  
  if (!userFormData.hasOwnCar) {
    isHasOwnCarRadiosSelected();
    isFormValid.set(false);
  }
  
  if (!userFormData.birthPlace) {
    checkBirthPlaceInput();
    isFormValid.set(false);
  }

  if (!userFormData.birthDate) {
    checkBirthDateInput();
    isFormValid.set(false);
  }

  if (!userFormData.address.streetAddress) {
    checkStreetAddressInput();
    isFormValid.set(false);
  }

  if (!userFormData.address.city) {
    checkCityInput();
    isFormValid.set(false);
  }

  if (!userFormData.address.region) {
    checkRegionInput();
    isFormValid.set(false);
  }

  if (!userFormData.phonePrefix) {
    checkPhonePrefixSelect();
    isFormValid.set(false);
  }

  if (!userFormData.phone) {
    checkPhoneInput();
    isFormValid.set(false);
  }

  if (!userFormData.email) {
    checkEmailInput();
    isFormValid.set(false);
  }

  return isFormValid;
  
}

export function showCvTemplates() : void {
  let origin: boolean = false;
  showPopup.set(true);
  isModifyBtnDisabled.set(true);
}

export function getPdfCv(): void {
  if (checkRequiredFields()) {
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
              title: 'Download completato!',
              text: `Il tuo CV è stato scaricato con successo.`,
              icon: 'success',
              timer: 1500,          
              showConfirmButton: false 
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
}
