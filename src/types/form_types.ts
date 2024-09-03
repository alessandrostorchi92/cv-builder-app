
    import type { Writable } from "svelte/store"; 
      
    export type FormData = {

        filePicture: string | null,
        name: string,
        surname: string,
        profession: string,
        birthDate: string,
        birthPlace: string
        address: string,
        phonePrefix: string,
        phone: string,
        email: string,
        profileSummary: string,
        isProtectedCategory:string,
        digitalSkills: string,
        languagesSkills: { lang: string; level: string }[];
        drivingLicences: string[],
        hasOwnCar: string,       
        jobs: WorkHistory[],
        educations: AcademicHistory[],  
    }

  
    export type WorkHistory = {

        role: string,
        company: string,
        workExperienceResults: string,
        startDateWorkExperience: string,
        endDateWorkExperience: string,

    };

    export type AcademicHistory = {
        qualification: string,
        fieldOfStudy: string,
        educationType: string,
        educationGoals: string,
        startDateAcademicEducation: string,
        endDateAcademicEducation: string,
    };

    export type hasPrivacyPolicyApproval = Writable<boolean>;





    

