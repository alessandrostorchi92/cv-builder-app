
    export type FormData = {

        filePicture: FileList | null,
        name: string,
        surname: string,
        profession: string,
        address: string,
        phonePrefix: string,
        phone: string,
        email: string,
        profileSummary: string,
        careerGoals: string,
        languagesSkills: { lang: string; level: string }[];
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

    export let selectedFilePicture:string;







        



