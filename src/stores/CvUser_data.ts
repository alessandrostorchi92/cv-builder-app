import { writable } from "svelte/store";
import * as formTypes from "../types/form_types";

let userFormData: formTypes.FormData = {
  filePicture: "",
  name: "",
  surname: "",
  profession: "",
  nationality: "",
  birthPlace: "",
  birthDate: "",
  address: [
    {
      streetAddress: "",
      streetNumber: "",
      city: "",
      region: "",
    }
  ],
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
      educationType: "",
      educationGoals: "",
      startDateAcademicEducation: "",
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

  } catch(error) {
    console.error("L'aggiornamento dei dati del localStorage non è andato a buon fine", error);
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
        console.log(savedStoreData);
      }


    }

  } catch(error) {
    console.error("Il recupero dei dati dal localStorage non è andato a buon fine", error);
  }

}

// Eliminazione dei dati del localStorage
export function clearLocalStorage(): void {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    localStorage.clear();
  }
}

export let isAllowed: formTypes.isAllowed = writable(false);
export let isPrivacyPolicyApproved: formTypes.isAllowed = writable(false);

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

      const currentDomain: string = "https://archimedespa.it/";

      console.log("Dominio corrente:", currentDomain);

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
