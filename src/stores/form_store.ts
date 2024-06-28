import { writable } from "svelte/store";
import * as formTypes from '../types/form_types'

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
    jobs: [{
        role: "",
        company: "",
        workExperienceResults: "",
        startDateWorkExperience: "",
        endDateWorkExperience: ""
    }],
    educations: [{
        educationType: "",
        qualification: "",
        educationGoals: "",
        startDateAcademicEducation: "",
        endDateAcademicEducation: "",
      }]

}

export const formDataStore = writable(userFormData);