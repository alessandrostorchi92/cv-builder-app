      
export type FormData = {

    filePicture: string | null,
    name: string,
    surname: string,
    profession: string,
    nationality: string,
    birthPlace: string
    birthDate: string,
    address: Residence,
    phonePrefix: string,
    phone: string,
    email: string,
    profileSummary: string,
    isProtectedCategory:boolean,
    digitalSkills: { skill: string; level: string }[],
    languagesSkills: { lang: string; level: string }[];
    drivingLicences: string[],
    hasOwnCar: boolean,       
    jobs: WorkHistory[],
    educations: AcademicHistory[],
    userSignature: string;
    selectedColor: string;
    selectedCvTemplate: string;   
}

export type Residence = {
    streetAddress: string;
    postalCode: string,
    city: string;
    region: string;
};

export type WorkHistory = {
    role: string,
    company: string,
    location: string,
    workExperienceResults: string,
    startDateWorkExperience: string,
    endDateWorkExperience: string,
    isEmployed: boolean,
};

export type AcademicHistory = {
    qualification: string,
    fieldOfStudy: string,
    trainingCenter: string,
    educationGoals: string,
    endDateAcademicEducation: string,
};












