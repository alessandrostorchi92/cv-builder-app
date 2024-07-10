import { writable } from "svelte/store";
import * as formTypes from '../types/form_types'

export let selectedFilePicture = writable("");

let userFormData: formTypes.FormData = {

    filePicture: null,
    name: "",
    surname: "",
    profession: "",
    birthDate: "",
    address: "",
    phonePrefix: "",
    phone: "",
    email: "",
    profileSummary: "",
    isProtectedCategory: "",
    digitalSkills: "",
    languagesSkills: [{ lang: "", level: "" },],
    drivingLicence: "",
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

export const formDataStore = writable(userFormData);