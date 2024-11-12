import {formDataStore, formattedBirthDate, formattedWorkAcademicDate} from "./CvUser_data";
import { derived } from 'svelte/store';

export const cvInitialData = derived(formDataStore, ($formDataStore) => {

  const handleInitialDataJob = $formDataStore.jobs.map(job => {
    
    return {
      role: (!job.role || job.role.trim() === "") ? "Ruolo" : job.role,
      company: (!job.company || job.company.trim() === "") ? "Azienda" : job.company,
      location: (!job.location || job.location.trim() === "") ? "Località" : job.location,
      workExperienceResults: (!job.workExperienceResults || job.workExperienceResults.trim() === "") ? "In antiquitate, Romani magnas res gestas et sapientiam in diversis disciplinis coluerunt. Philosophia, ars, et litterae floruerunt inter cives, qui sapientiae et veritati studebant. Multi poëtæ, ut Virgilius et Ovidius, fabulas et historias narraverunt, quas ad posteritatem pervenire voluerunt. Sicut in vita cotidiana, ita in bellis et in pace, Romani unitatem et fortitudinem semper quaerebant. Res publica, sub duce et consilio, multis rebus periculis se opposuit, atque fines imperii a Britannia usque ad Aegyptum extendit. Haec omnia exempla docet nos de virtutibus et sapientia, quae in animis hominum semper manent." : job.workExperienceResults,
      startDateWorkExperience: (!job.startDateWorkExperience) ? "Data Inizio" : formattedWorkAcademicDate(job.startDateWorkExperience),
      endDateWorkExperience: (job.isEmployed) ? "Presente" : (!job.isEmployed && job.endDateWorkExperience) ? formattedWorkAcademicDate(job.endDateWorkExperience) : "Data Fine",
    };

  });

  const handleInitialDataEducation = $formDataStore.educations.map(education => ({
    qualification: (!education.qualification) ? "Titolo di studio" : education.qualification,
    fieldOfStudy: (!education.fieldOfStudy || education.fieldOfStudy.trim() === "") ? "Campo di studio" : education.fieldOfStudy,
    trainingCenter: (!education.trainingCenter || education.trainingCenter.trim() === "") ? "Ente di formazione" : education.trainingCenter,
    educationGoals: (!education.educationGoals || education.educationGoals.trim() === "") ? "In antiquitate, Romani magnas res gestas et sapientiam in diversis disciplinis coluerunt. Philosophia, ars, et litterae floruerunt inter cives, qui sapientiae et veritati studebant. Multi poëtæ, ut Virgilius et Ovidius, fabulas et historias narraverunt, quas ad posteritatem pervenire voluerunt. Sicut in vita cotidiana, ita in bellis et in pace, Romani unitatem et fortitudinem semper quaerebant. Res publica, sub duce et consilio, multis rebus periculis se opposuit, atque fines imperii a Britannia usque ad Aegyptum extendit. Haec omnia exempla docet nos de virtutibus et sapientia, quae in animis hominum semper manent." : education.educationGoals,
    endDateAcademicEducation: (!education.endDateAcademicEducation) ? "Data Fine" : formattedWorkAcademicDate(education.endDateAcademicEducation)
  }));

  
  const handleInitialDataAddress = {
    streetAddress: ! $formDataStore.address.streetAddress ||  $formDataStore.address.streetAddress.trim() === "" ? "Indirizzo" :  $formDataStore.address.streetAddress,
    postalCode: ! $formDataStore.address.postalCode ||  $formDataStore.address.postalCode.trim() === "" ? "CAP" :  $formDataStore.address.postalCode,
    city: ! $formDataStore.address.city ||  $formDataStore.address.city.trim() === "" ? "Città" :  $formDataStore.address.city,
    region: ! $formDataStore.address.region ||  $formDataStore.address.region.trim() === "" ? "Regione" :  $formDataStore.address.region,
  };
  
  
  const handleInitialDataLanguage = $formDataStore.languagesSkills.map(selectedLanguage => ({
    lang: (!selectedLanguage.lang) ? "Lingua" : selectedLanguage.lang,
    level: (!selectedLanguage.level) ? "Livello" : selectedLanguage.level
  }));

  
  const handleInitialDataHardSkill = $formDataStore.digitalSkills.map(digitalSkill => ({
    skill: (!digitalSkill.skill) ? "Competenza" : digitalSkill.skill,
    level: (!digitalSkill.level) ? "Livello" : digitalSkill.level
  }));

  
  return {
    profilePicture: !$formDataStore.filePicture ? "" : $formDataStore.filePicture,
    name: (!$formDataStore.name || $formDataStore.name.trim() === "") ? "Nome" : $formDataStore.name,
    surname: (!$formDataStore.surname || $formDataStore.surname.trim() === "") ? "Cognome" : $formDataStore.surname,
    profession: (!$formDataStore.profession || $formDataStore.profession.trim() === "") ? "Professione" : $formDataStore.profession,
    nationality: (!$formDataStore.nationality || $formDataStore.nationality.trim() === "") ? "Stato di nascita" : $formDataStore.nationality,
    birthDate: !$formDataStore.birthDate ? "Data di nascita" : formattedBirthDate($formDataStore.birthDate),
    birthPlace: (!$formDataStore.birthPlace || $formDataStore.birthPlace.trim() === "") ? "Luogo di Nascita" : $formDataStore.birthPlace,
    drivingLicences: $formDataStore.drivingLicences.length === 0 ? "Patenti" : $formDataStore.drivingLicences,
    isProtectedCategory: !$formDataStore.isProtectedCategory ? "Non specificato" : $formDataStore.isProtectedCategory,
    address: handleInitialDataAddress,
    phonePrefix: !$formDataStore.phonePrefix ? "Prefisso" : $formDataStore.phonePrefix,
    phoneNumber: (!$formDataStore.phone || $formDataStore.phone.trim() === "") ? "Cellulare" : $formDataStore.phone,
    email: (!$formDataStore.email || $formDataStore.email.trim() === "") ? "Email" : $formDataStore.email,
    profileSummary: (!$formDataStore.profileSummary || $formDataStore.profileSummary.trim() === "") ? "In antiquitate, Romani magnas res gestas et sapientiam in diversis disciplinis coluerunt. Philosophia, ars, et litterae floruerunt inter cives, qui sapientiae et veritati studebant. Multi poëtæ, ut Virgilius et Ovidius, fabulas et historias narraverunt, quas ad posteritatem pervenire voluerunt. Sicut in vita cotidiana, ita in bellis et in pace, Romani unitatem et fortitudinem semper quaerebant. Res publica, sub duce et consilio, multis rebus periculis se opposuit, atque fines imperii a Britannia usque ad Aegyptum extendit. Haec omnia exempla docet nos de virtutibus et sapientia, quae in animis hominum semper manent." : $formDataStore.profileSummary,
    jobs: handleInitialDataJob,
    educations: handleInitialDataEducation,
    languagesSkills: handleInitialDataLanguage,
    digitalSkills: handleInitialDataHardSkill,
    jobSeekerSign: !$formDataStore.userSignature ? "" : $formDataStore.userSignature,
    color: !$formDataStore.selectedColor ? "var(--primary-color)" : $formDataStore.selectedColor,
  };


});
