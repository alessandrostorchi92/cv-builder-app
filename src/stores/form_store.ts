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
  address: "",
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
      workExperienceResults: "",
      startDateWorkExperience: "",
      endDateWorkExperience: "",
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
  
};

export const formDataStore = writable(userFormData);

// Salvo i dati nel localStorage

export function storeUserData(storeData: formTypes.FormData) {

  try {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(storeData));
    }
  } catch (error) {
    console.error("Il salvataggio dei dati nel localStorage non è andato a buon fine", error);
  }

}

// Recupero i dati dal localStorage

export function getStoreUserData() {

  try {

    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {

      const savedStoreData = localStorage.getItem("formData");

      if (savedStoreData) {
        userFormData = JSON.parse(savedStoreData);
        formDataStore.set(userFormData);
      }

    }

  } catch(error) {
    console.error("Il recupero dei dati dal localStorage non è andato a buon fine", error);
  }

}

// Aggiornamento dei dati salvati ne localStorage

export function updateStoreUserData() {

  try {

    if (typeof window !== "undefined" && typeof localStorage !== "undefined") { 

      const unsubscribe = formDataStore.subscribe((currentUserFormData) => {
          storeUserData(currentUserFormData); 
         
      });

      return unsubscribe;
      
    }

  } catch(error) {
    console.error("L'aggiornamento dei dati del localStorage non è andato a buon fine", error);
  }

}

// Eliminazione dei dati del localStorage

export function clearLocalStorage() {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    localStorage.clear();
  }
}

export let isAllowed: formTypes.isAllowed = writable(false);
export let isPrivacyPolicyApproved: formTypes.isAllowed = writable(false);
