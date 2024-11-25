import axios from "axios";
import type { AxiosResponse, ResponseType, AxiosError } from "axios";
import { formDataStore, formattedWorkAcademicDate, currentCopyrightPolicy, currentTenant } from "../stores/cvForm_data";
import { readable, get } from "svelte/store";

export const renamedFormDataStore = readable({}, (set) => {

  const getJsonData = () => {

    const renamedData = get(formDataStore);
    const fullPhone = `${renamedData.phonePrefix} ${renamedData.phone}`;

    switch (renamedData.selectedCvTemplate) {
      case "cv-template1.png":
        renamedData.selectedCvTemplate = "1";
        break;
      case "cv-template2.png":
        renamedData.selectedCvTemplate = "2";
        break;
      case "cv-template3.png":
        renamedData.selectedCvTemplate = "3";
        break;
    }

    let tenantColor: string;
    switch (currentTenant) {
      case "during":
        tenantColor = "#e8641b";
        break;
      case 'jobcamere':
        tenantColor = "#DD0731";
        break;
      case 'lavoroexpress':
        tenantColor = "#FF1616";
        break;
      case 'archimede':
        tenantColor = "#9A2C54";
        break;
      default:
        tenantColor = "#000000"; // Valore di fallback, se il tenant non corrisponde a nessuno
        break;
    }

    const jsonPendingData = {
      image_data: renamedData.filePicture?.split(",")[1] ?? "",
      firstName: renamedData.name,
      lastName: renamedData.surname,
      job_name: renamedData.profession,
      nationality: renamedData.nationality,
      birth_city: renamedData.birthPlace,
      dateOfBirth: renamedData.birthDate,
      address: {
        street_address: renamedData.address.streetAddress,
        city: renamedData.address.city,
        state_province: renamedData.address.region,
        postal_code: renamedData.address.postalCode,
      },
      phone_number: fullPhone,
      email: renamedData.email,
      short_description: renamedData.profileSummary,
      protected_category: renamedData.isProtectedCategory,
      skill: renamedData.digitalSkills.map((digitalSkillItem) => ({
        name: digitalSkillItem.skill,
        level: digitalSkillItem.level,
      })),
      language: renamedData.languagesSkills.map((languageSkillItem) => ({
        name: languageSkillItem.lang,
        level: languageSkillItem.level,
      })),
      driver_license_type: renamedData.drivingLicences.join(",") ?? "",
      experience: renamedData.jobs.map((jobItem) => ({
        job_title: jobItem.role,
        job_company: jobItem.company,
        job_location: jobItem.location,
        job_description: [jobItem.workExperienceResults],
        job_start_year: formattedWorkAcademicDate(jobItem.startDateWorkExperience),
        job_end_year: jobItem.isEmployed ? "Presente" : formattedWorkAcademicDate(jobItem.endDateWorkExperience),
      })),
      education: renamedData.educations.map((educationItem) => ({
        degree: educationItem.qualification,
        major: educationItem.fieldOfStudy,
        school: educationItem.trainingCenter,
        description: educationItem.educationGoals,
        year: formattedWorkAcademicDate(educationItem.endDateAcademicEducation),
      })),
      sign_data: renamedData.userSignature?.split(",")[1] ?? "",
      flagTemplate: renamedData.selectedCvTemplate,
      tenant: currentTenant,
      color: renamedData.selectedColor || tenantColor,
      footer: currentCopyrightPolicy,
    };
    set(JSON.stringify(jsonPendingData));
  };

  const unsubscribe = formDataStore.subscribe(getJsonData);

  return () => {
    unsubscribe();
  };
});


export const downloadCv = async (): Promise<AxiosResponse> => {

    const urlApi = "https://ai.reindal.cloud/generation-app/api/CvGenerator";
    const cvData = get(renamedFormDataStore);
    try {

      const config = {

        headers: {
          "Content-Type": "text/plain",
        },

        responseType: 'arraybuffer' as ResponseType,

      };
  
      const response = await axios.post(urlApi, cvData, config);

      return response;

    } catch (error) {

      if (axios.isAxiosError(error)) {

        const axiosError: AxiosError = error;
        console.error("Errore Axios:", axiosError);
  
        if (axiosError.response) {

          console.error("Errore nella risposta del server:", axiosError.response.status);
          console.error("Errore nell'invio dei dati:", axiosError.response.data);
          console.error("Errore negli headers HTTP inviati:", axiosError.response.headers);

        } else if (axiosError.request) {

          console.error("Nessuna risposta dal server:", axiosError.request);

        } else {

          console.error('Errore nella configurazione della richiesta:', axiosError.message);
        }

        console.error("Configurazione della richiesta:", axiosError.config);

      } else {

        console.error("Errore durante la chiamata API:", (error as Error).message);

      }

      throw error;
      
    }

};
