import { writable } from "svelte/store";
import * as formTypes from '../types/form_types'

export let selectedFilePicture = writable("");

let userFormData: formTypes.FormData = {

    filePicture: null,
    name: "",
    surname: "",
    profession: "",
    birthDate: "",
    birthPlace: "",
    address: "",
    phonePrefix: "",
    phone: "",
    email: "",
    profileSummary: "",
    isProtectedCategory: "",
    digitalSkills: "",
    languagesSkills: [{ lang: "", level: "" }],
    drivingLicences: [],
    hasOwnCar: "",   
    jobs: [{
        role: "",
        company: "",
        workExperienceResults: "",
        startDateWorkExperience: "",
        endDateWorkExperience: ""
    }],
    educations: [{
        qualification: "",
        fieldOfStudy: "",
        educationType: "",
        educationGoals: "",
        startDateAcademicEducation: "",
        endDateAcademicEducation: "",
      }]

}

// Salvo i dati nel localStorage
export function storeUserData( storeData: formTypes.FormData) {

    if(typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        
        localStorage.setItem('formData', JSON.stringify(storeData));
    }
};

// Recupero i dati dal localStorage
if(typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const savedStoreData = localStorage.getItem('formData');

    if (savedStoreData) {
        userFormData = JSON.parse(savedStoreData); 
    }

}

export const formDataStore = writable(userFormData);

formDataStore.subscribe((currentUserFormData) => {
    storeUserData(currentUserFormData);
        
});
