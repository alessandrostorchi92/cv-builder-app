import {formDataStore, formattedBirthDate, formattedWorkAcademicDate } from "./CvUser_data";
import { derived } from 'svelte/store';

export const cvInitialData = derived(formDataStore, ($formDataStore) => {
  
  // Funzione che imposta i valori di default da assegnare alla sezione esperienze lavorative

  const handleInitialDataJob = $formDataStore.jobs.map(job => {
    
    return {

      role: (!job.role || job.role.trim() === "") ? "Ruolo" : job.role,
      company: (!job.company || job.company.trim() === "") ? "Azienda" : job.company,
      location: (!job.location || job.location.trim() === "") ? "Località" : job.location,
      workExperienceResults: (!job.workExperienceResults || job.workExperienceResults.trim() === "") ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." : job.workExperienceResults,
      startDateWorkExperience: (!job.startDateWorkExperience) ? "Data Inizio" : formattedWorkAcademicDate(job.startDateWorkExperience),
      endDateWorkExperience: (job.isEmployed) ? "Presente" : (!job.isEmployed && job.endDateWorkExperience) ? formattedWorkAcademicDate(job.endDateWorkExperience) : "Data Fine",

    };

  });

  // Funzione che imposta i valori di default da assegnare alla sezione formazione

  const handleInitialDataEducation = $formDataStore.educations.map(education => ({

    qualification: (!education.qualification) ? "Titolo di studio" : education.qualification,
    fieldOfStudy: (!education.fieldOfStudy || education.fieldOfStudy.trim() === "") ? "Campo di studio" : education.fieldOfStudy,
    educationType: (!education.educationType || education.educationType.trim() === "") ? "Ente di formazione" : education.educationType,
    educationGoals: (!education.educationGoals || education.educationGoals.trim() === "") ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." : education.educationGoals,
    startDateAcademicEducation: (!education.startDateAcademicEducation) ? "Data Inizio" : formattedWorkAcademicDate(education.startDateAcademicEducation),
    endDateAcademicEducation: (!education.endDateAcademicEducation) ? "Data Fine" : formattedWorkAcademicDate(education.endDateAcademicEducation)

  }));

  // Funzione che imposta i valori di default da assegnare alla sezione lingue

  const handleInitialDataLanguage = $formDataStore.languagesSkills.map(selectedLanguage => ({

    lang: (!selectedLanguage.lang) ? "Lingua" : selectedLanguage.lang,
    level: (!selectedLanguage.level) ? "Livello" : selectedLanguage.level

  }));

  // Funzione che imposta i valori di default da assegnare alla sezione competenze
  const handleInitialDataHardSkill = $formDataStore.digitalSkills.map(digitalSkill => ({

    skill: (!digitalSkill.skill) ? "Competenza" : digitalSkill.skill,
    level: (!digitalSkill.level) ? "Livello" : digitalSkill.level

  }));

  
  return {

    name: (!$formDataStore.name || $formDataStore.name.trim() === "") ? "Nome" : $formDataStore.name,
    surname: (!$formDataStore.surname || $formDataStore.surname.trim() === "") ? "Cognome" : $formDataStore.surname,
    profession: (!$formDataStore.profession || $formDataStore.profession.trim() === "") ? "Professione" : $formDataStore.profession,
    nationality: (!$formDataStore.nationality || $formDataStore.nationality.trim() === "") ? "Stato di nascita" : $formDataStore.nationality,
    birthDate: !$formDataStore.birthDate ? "Data di nascita" : formattedBirthDate($formDataStore.birthDate),
    birthPlace: (!$formDataStore.birthPlace || $formDataStore.birthPlace.trim() === "") ? "Luogo di Nascita" : $formDataStore.birthPlace,
    hasOwnCar: !$formDataStore.hasOwnCar ? "Non specificato" : $formDataStore.hasOwnCar,
    drivingLicences: $formDataStore.drivingLicences.length === 0 ? "Tipologia Patenti" : $formDataStore.drivingLicences.join(", "),
    isProtectedCategory: !$formDataStore.isProtectedCategory ? "Non specificato" : $formDataStore.isProtectedCategory,
    address: (!$formDataStore.address || $formDataStore.address.trim() === "") ? "Indirizzo Postale" : $formDataStore.address,
    phonePrefix: !$formDataStore.phonePrefix ? "Prefisso" : $formDataStore.phonePrefix,
    phoneNumber: (!$formDataStore.phone || $formDataStore.phone.trim() === "") ? "Cellulare" : $formDataStore.phone,
    email: (!$formDataStore.email || $formDataStore.email.trim() === "") ? "Email" : $formDataStore.email,
    profileSummary: (!$formDataStore.profileSummary || $formDataStore.profileSummary.trim() === "") ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." : $formDataStore.profileSummary,
    jobs: handleInitialDataJob,
    educations: handleInitialDataEducation,
    languagesSkills: handleInitialDataLanguage,
    digitalSkills: handleInitialDataHardSkill

  };

});
