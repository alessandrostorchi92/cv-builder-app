import { writable } from "svelte/store";
import * as formTypes from '../types/form_types'

export let selectedFilePicture = writable("");

let userFormData: formTypes.FormData = {

    filePicture: null,
    name: "",
    surname: "",
    profession: "",
    address: "",
    phonePrefix: "",
    phone: "",
    email: "",
    profileSummary: "",
    careerGoals: "",
    languagesSkills: [{ lang: "", level: "" },],
    drivingLicence: "",
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