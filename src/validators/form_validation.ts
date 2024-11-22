import { isPrivacyPolicyApproved, isAllowed } from "../stores/CvUser_data";

export function checkMandatoryProfileDataInputs(inputName: string, successMessageSelector: string, errorMessageSelector: string, successFeedbackMsg: string, errorFeedbackMsg: string): void {

    const personalDetailMandatoryInput: HTMLInputElement | null = document.querySelector(`[name='${inputName}']`);
    const errorMessage: HTMLDivElement | null = document.querySelector(errorMessageSelector);
    const successMessage: HTMLDivElement | null = document.querySelector(successMessageSelector);
    const phonePattern = /^[0-9]+$/;
    const emailPattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,6}$/;

    const setErrorFeedbackMsg = (message:string) => {

        if(errorMessage) {
            errorMessage.innerText = message;
            errorMessage.classList.add("error-user-data", "fw-bolder");
            errorMessage.style.fontSize = "0.8rem";
        }

        if(personalDetailMandatoryInput) {
            personalDetailMandatoryInput.classList.add("is-invalid");
        }

        if(successMessage) {
            successMessage.innerText = "";
        }

    };


    const setSuccessFeedbackMsg = (message: string) => {

        if (successMessage) {
            successMessage.innerText = message;
            successMessage.classList.add("success-user-data", "fw-bolder");
            successMessage.style.fontSize = "0.8rem";
        }

        if (personalDetailMandatoryInput) {
            personalDetailMandatoryInput.classList.remove("is-invalid");
            personalDetailMandatoryInput.classList.add("is-valid");
        }

        if (errorMessage) {
            errorMessage.innerText = "";
        }

    };

    if (personalDetailMandatoryInput) {

        const personalDetailMandatoryValue = personalDetailMandatoryInput.value.trim();

        if (personalDetailMandatoryValue !== "") {
           
            if ((inputName === "phone" || inputName === "postalCode") && !phonePattern.test(personalDetailMandatoryValue)) {

                setErrorFeedbackMsg(errorFeedbackMsg);

            } else if(inputName === "email" && !emailPattern.test(personalDetailMandatoryValue)) {

                setErrorFeedbackMsg(errorFeedbackMsg);

            } else {
                
                setSuccessFeedbackMsg(successFeedbackMsg);

            }

        } else {
            
            if (successMessage) {
                successMessage.innerText = "";
            }

            if (personalDetailMandatoryInput) {
                personalDetailMandatoryInput.classList.remove("is-valid");
            }

            if(errorMessage) {
                errorMessage.innerText = "";
            }

            if (personalDetailMandatoryInput) {
                personalDetailMandatoryInput.classList.remove("is-invalid");
            }

        }

    }

}

export function checkOptionalProfileDataInputs(inputName: string, successMessageSelector: string, errorMessageSelector: string, successFeedbackMsg: string, errorFeedbackMsg: string): void {

    const personalDetailOptionalInput: HTMLInputElement | null = document.querySelector(`[name='${inputName}']`);
    const errorMessage: HTMLDivElement | null = document.querySelector(errorMessageSelector);
    const successMessage: HTMLDivElement | null = document.querySelector(successMessageSelector);

    const setErrorFeedbackMsg = (message: string) => {

        if (errorMessage) {
            errorMessage.innerText = message;
            errorMessage.classList.add("error-user-data", "fw-bolder");
            errorMessage.style.fontSize = "0.8rem";
        }

        if (personalDetailOptionalInput) {
            personalDetailOptionalInput.classList.add("is-invalid");
        }

        if (successMessage) {
            successMessage.innerText = "";
        }
    };

    const setSuccessFeedbackMsg = (message: string) => {

        if (successMessage) {
            successMessage.innerText = message;
            successMessage.classList.add("success-user-data", "fw-bolder");
            successMessage.style.fontSize = "0.8rem";
        }

        if (personalDetailOptionalInput) {
            personalDetailOptionalInput.classList.remove("is-invalid");
            personalDetailOptionalInput.classList.add("is-valid");
        }

        if (errorMessage) {
            errorMessage.innerText = "";
        }
    };

    if (personalDetailOptionalInput) {

        const fileSelected = personalDetailOptionalInput.files && personalDetailOptionalInput.files.length > 0;
        const optionalTextInputValue = personalDetailOptionalInput.value.trim();
        const optionalSelectInputValue = personalDetailOptionalInput.value;
        
    
        if (inputName === "filePicture" && fileSelected) {

            setSuccessFeedbackMsg(successFeedbackMsg);
    
        } else if (inputName === "profileSummary" && optionalTextInputValue.length >= 500) {

            setErrorFeedbackMsg(errorFeedbackMsg);
        
        } else if(inputName === "digitalSkill" && optionalTextInputValue) {

            setSuccessFeedbackMsg(successFeedbackMsg);
        
        } else if(inputName === "skillLevel" && optionalSelectInputValue) {

            setSuccessFeedbackMsg(successFeedbackMsg);
        
        } else if(inputName === "`languages" && optionalSelectInputValue) {

            setSuccessFeedbackMsg(successFeedbackMsg);

        } else if(inputName === "`languageLevels" && optionalSelectInputValue) {

            setSuccessFeedbackMsg(successFeedbackMsg);
        
        } else if (optionalTextInputValue.length === 0) {
    
            if (successMessage) {
                successMessage.innerText = "";
            }
    
            if (personalDetailOptionalInput) {
                personalDetailOptionalInput.classList.remove("is-valid");
            }
    
        } else {
            setSuccessFeedbackMsg(successFeedbackMsg);
        }
    }
    
}

// ProfilePicture Optional Validation

export function isProfilePictureUploaded(): void {
    checkOptionalProfileDataInputs("filePicture", ".success-file-picture-message", ".error-file-picture-message", "Ottimo lavoro, hai caricato la tua immagine di profilo nel CV", "")
}

// Profile Data Validations

export function checkNameInput(): void {
    checkMandatoryProfileDataInputs("name", ".success-name-message", ".error-name-message", "Ottimo lavoro, il nome è stato inserito nel CV", "")
};

export function checkSurnameInput(): void {
    checkMandatoryProfileDataInputs("surname", ".success-surname-message", ".error-surname-message", "Ottimo lavoro, il cognome è stato inserito nel CV", "")
};

export function checkProfessionInput(): void {
    checkMandatoryProfileDataInputs("profession", ".success-profession-message", ".error-profession-message", "Ottimo lavoro, la professione è stata inserita nel CV", "")
};

export function checkNationalityInput(): void { 
    checkMandatoryProfileDataInputs("nationality", ".success-nationality-message", ".error-nationality-message", "Ottimo lavoro, lo stato di nascita è stato inserito nel CV", "")
};

export function checkBirthPlaceInput(): void { 
    checkMandatoryProfileDataInputs("birthPlace", ".success-birthplace-message", ".error-birthplace-message", "Ottimo lavoro, il luogo di nascita è stato inserito nel CV", "")
};

export function checkBirthDateInput(): void {
    checkMandatoryProfileDataInputs("birthDate", ".success-birthdate-message", ".error-birthdate-message", "Ottimo lavoro, la data di nascita è stata inserita nel CV", "")
};

export function checkStreetAddressInput(): void {
    checkMandatoryProfileDataInputs("streetAddress", ".success-street-address-message", ".error-street-address-message", "Ottimo lavoro, l'indirizzo di residenza è stato inserito nel CV", "")
};

export function checkPostalCodeInput(): void {
    checkMandatoryProfileDataInputs("postalCode", ".success-postal-code-message", ".error-postal-code-messages", "Ottimo lavoro, il numero civico è stato inserito nel CV", "Mi dispiace , il codice postale può contenere solo numeri")
};

export function checkCityInput(): void {
    checkMandatoryProfileDataInputs("city", ".success-city-message", ".error-city-message", "Ottimo lavoro, la città di residenza è stata inserita nel CV", "")
};

export function checkRegionInput(): void {
    checkMandatoryProfileDataInputs("region", ".success-region-message", ".error-region-message", "Ottimo lavoro, la regione di residenza è stata inserita nel CV", "")
};

export function checkPhonePrefixSelect(): void {
    checkMandatoryProfileDataInputs("phonePrefix", ".success-phoneprefix-message", ".error-phoneprefix-message", "Ottimo lavoro, la regione di residenza è stata inserita nel CV", "")
};

export function checkPhoneInput(): void {
    checkMandatoryProfileDataInputs("phone", ".success-phone-message", ".error-phone-messages", "Ottimo lavoro, il cellulare è stato inserito nel CV", "Il cellulare può contenere solo numeri")
}; 

export function checkEmailInput(): void {
    checkMandatoryProfileDataInputs("email", ".success-email-message", ".error-email-messages", "Ottimo lavoro, il cellulare è stato inserito nel CV", "Mi dispiace, inserisci un'email valida nel seguente formato: cognome.nome_90@example.com")
};

// ProfileSummary Optional Validation

export function checkProfileSummaryInput(): void {
    checkOptionalProfileDataInputs("profileSummary", ".success-profile-summary-message", ".error-profile-summary-message", "Ottimo lavoro, il profilo personale è stato inserito nel CV", "Mi dispiace, il profilo personale non può contenere più di 500 caratteri")
};

// ProtectedCategory Validation

export function isProtectedCategoryRadiosSelected(): void {

    const protectedCategoryRadioInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="protectedCategoryRadioOptions"]');
    const successProtectedCategoryMessage: HTMLDivElement | null = document.querySelector(".success-protected-category-message");
    const errorProtectedCategoryMessage: HTMLDivElement | null = document.querySelector(".error-protected-category-message");
    let isSelected = false;

    protectedCategoryRadioInputs.forEach(protectedCategoryRadio => {
        if (protectedCategoryRadio.checked) {
            protectedCategoryRadio.classList.add("is-valid");
            isSelected = true;
        }
    });

    const setProtectedCategorySuccessFeedback = (message: string) => {
        if (successProtectedCategoryMessage) {
            successProtectedCategoryMessage.innerText = message;
            successProtectedCategoryMessage.classList.add("success-user-data", "fw-bolder");
            successProtectedCategoryMessage.style.fontSize = "0.8rem";
            successProtectedCategoryMessage.style.display = "block";
        }

        if (errorProtectedCategoryMessage) {
            errorProtectedCategoryMessage.style.display = "none";
        }
    };

    const setHasOwnCarErrorFeedback = (message: string) => {

        if (errorProtectedCategoryMessage) {
            errorProtectedCategoryMessage.innerText = message;
            errorProtectedCategoryMessage.classList.add("error-user-data", "fw-bolder");
            errorProtectedCategoryMessage.style.fontSize = "0.8rem";
            errorProtectedCategoryMessage.style.display = "block";
        }

        if (successProtectedCategoryMessage) {
            successProtectedCategoryMessage.style.display = "none";
        }

    };

    if (!isSelected) {
        setProtectedCategorySuccessFeedback("Ottimo lavoro, hai selezionato un'opzione");
    }
}

// DigitalSkill Validations

export function checkDigitalSkillsTextInput(index: number): void {
    checkOptionalProfileDataInputs(`digitalSkill${index}`, `#success-digital-skill-message${index}`, `#error-digital-skill-message${index}`, "Ottimo lavoro, la competenza digitale è stata inserita nel CV", "")
}

export function checkLevelSkillSelect(index: number): void {
    checkOptionalProfileDataInputs(`skillLevel${index}`, `#success-level-skill-message${index}`, `#error-level-skill-message${index}`, "Ottimo lavoro, il livello della competenza digitale è stata inserita nel CV", "")
}

//  Language Validations

export function checkLanguageSelect(index: number): void {
    checkOptionalProfileDataInputs(`languages${index}`, `#success-language-message${index}`, `#error-language-message${index}`, "Ottimo lavoro, la lingua è stata inserita nel CV", "")
};

export function checkLanguageLevelSelect(index: number): void {
    checkOptionalProfileDataInputs(`languageLevels${index}`, `#success-language-level-message${index}`, `#error-language-message${index}`, "Ottimo lavoro, il livello della lingua è stata inserita nel CV", "")
};


// Driving Licence Validations

export function isHasOwnCarRadiosSelected(): void {

    const isHasOwnCarRadioInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="drivingLicenceRadioOptions"]');
    const successHasOwnCarMessage: HTMLDivElement | null = document.querySelector(".success-has-own-car-message");
    const errorHasOwnCarMessage: HTMLDivElement | null = document.querySelector(".error-has-own-car-message");
    let isSelected = false;

    isHasOwnCarRadioInputs.forEach(isHasOwnCarRadioInput => {

        if (isHasOwnCarRadioInput.checked) {
            isHasOwnCarRadioInput.classList.add("is-valid");
            isSelected = true;
        }

    });

    const setHasOwnCarSuccessFeedback = (message: string) => {

        if (successHasOwnCarMessage) {
            successHasOwnCarMessage.innerText = message;
            successHasOwnCarMessage.classList.add("success-user-data", "fw-bolder");
            successHasOwnCarMessage.style.fontSize = "0.8rem";
            successHasOwnCarMessage.style.display = "block";
        }

        if(errorHasOwnCarMessage) {
            errorHasOwnCarMessage.style.display = "none";
        }
    
    };

    if (!isSelected) {
        setHasOwnCarSuccessFeedback("Ottimo lavoro, hai selezionato un'opzione");
    }

};

export function checkDrivingLicenceCheckboxesInput(): void {

    const drivingLicenceCheckBoxInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="drivingLicenceCheckBoxOptions"]');
    const successDrivingLicenceMessage: HTMLDivElement | null = document.querySelector(".success-driving-licence-message");
    const errorDrivingLicenceMessage: HTMLDivElement | null = document.querySelector(".error-driving-licence-message");
    let isSelected = false;

    drivingLicenceCheckBoxInputs.forEach(drivingLicenceCheckBox => {

        if (drivingLicenceCheckBox.checked) {
            drivingLicenceCheckBox.classList.add("is-valid");
            isSelected = true;
        }

    });

    const setDrivingLicenceSuccessFeedback = (message: string) => {

        if (successDrivingLicenceMessage) {
            successDrivingLicenceMessage.innerText = message;
            successDrivingLicenceMessage.classList.add("success-user-data", "fw-bolder");
            successDrivingLicenceMessage.style.fontSize = "0.8rem";
            successDrivingLicenceMessage.style.display = "block";
        }

        if (drivingLicenceCheckBoxInputs) {
            drivingLicenceCheckBoxInputs.forEach(drivingLicenceCheckBox => {
                drivingLicenceCheckBox.classList.remove("is-invalid");  
            });
        }

        if(errorDrivingLicenceMessage) {
            errorDrivingLicenceMessage.style.display = "none";;
        }
    
    };

    if (!isSelected) {
        if (successDrivingLicenceMessage) {
            successDrivingLicenceMessage.innerText = "";
        }
    
        if (drivingLicenceCheckBoxInputs) {
            drivingLicenceCheckBoxInputs.forEach(drivingLicenceCheckBox => {
                drivingLicenceCheckBox.classList.remove("is-valid");
            });
        }
    
    } else {
        setDrivingLicenceSuccessFeedback("Ottimo lavoro, hai selezionato un'opzione");
    }
    
};

// Job Validations

export function checkWorkExperienceInputs(label: string, index: number, successFeedbackMsg: string, errorFeedbackMsg: string): void {

    const jobInputNameSelector = `#input${label}${index}`;
    
    const addHyphenBetweenWords = (str: string): string => {
        return str.split(/(?=[A-Z])/).join('-').toLowerCase();
    };

    const formattedLabel = addHyphenBetweenWords(label);

    const jobSuccessMessageSelector = `#success-${formattedLabel}-message${index}`;
    
    const jobErrorMessageSelector = `#error-${formattedLabel}-messages${index}`;
    
    const jobInputLabel: HTMLInputElement | HTMLTextAreaElement | null = document.querySelector(jobInputNameSelector);

        
    const jobSuccessMessage: HTMLDivElement | null = document.querySelector(jobSuccessMessageSelector);
    const jobErrorMessage: HTMLDivElement | null = document.querySelector(jobErrorMessageSelector);

    const setSuccessFeedbackMsg = (message: string) => {
        if (jobSuccessMessage) {
            jobSuccessMessage.innerText = message;
            jobSuccessMessage.classList.add("success-user-data", "fw-bolder");
            jobSuccessMessage.style.fontSize = "0.8rem";
        }
        if (jobInputLabel) {
            jobInputLabel.classList.remove("is-invalid");
            jobInputLabel.classList.add("is-valid");
        }
        if (jobErrorMessage) {
            jobErrorMessage.innerText = "";
        }
    };

    const setErrorFeedbackMsg = (message: string) => {
        if (jobErrorMessage) {
            jobErrorMessage.innerText = message;
            jobErrorMessage.classList.add("error-user-data", "fw-bolder");
            jobErrorMessage.style.fontSize = "0.8rem";
        }
        if (jobInputLabel) {
            jobInputLabel.classList.add("is-invalid");
        }
        if (jobSuccessMessage) {
            jobSuccessMessage.innerText = "";
        }
    };

    if (jobInputLabel) {

        const jobInputValue = jobInputLabel.value.trim();
        
        if (jobInputValue === "") {

            if (jobSuccessMessage) {
                jobSuccessMessage.innerText = "";
            }
            if (jobInputLabel) {
                jobInputLabel.classList.remove("is-valid");
            }

        } else {

            if (label === "JobResults" && jobInputValue.length >= 500) {
                setErrorFeedbackMsg(errorFeedbackMsg);
            } else {
                setSuccessFeedbackMsg(successFeedbackMsg);
            }

        }
    }

}

export function checkJobRoleInput(index: number): void {
    checkWorkExperienceInputs("JobRole", index, "Ottimo lavoro, il ruolo è stato inserito nel CV", "");
}

export function checkCompanyNameInput(index: number): void {
    checkWorkExperienceInputs("CompanyName", index, "Ottimo lavoro, l'azienda è stata inserita nel CV", "");
};

export function checkJobLocationInput(index: number): void {
    checkWorkExperienceInputs("JobLocation", index, "Ottimo lavoro, il luogo di lavoro è stato inserito nel CV", "");
};

export function checkJobResultsInput(index: number): void {
    checkWorkExperienceInputs("JobResults", index, "Ottimo lavoro, il campo risultati professionali ottenuti è stato inserito nel CV", "Mi dispiace, il campo risultati professionali ottenuti non può contenere più di 500 caratteri");
};

export function checkStartJobInput(index: number): void {
    checkWorkExperienceInputs("StartJob", index, "Ottimo lavoro, la data di inizio lavoro è stata inserita nel CV", "");
};

export function checkEndJobInput(index: number): void {
    checkWorkExperienceInputs("EndJob", index, "Ottimo lavoro, la data di fine lavoro è stata inserita nel CV", "")
};
      
export function checkCurrentJob(index: number): void {

    const endDateJobInput: HTMLInputElement | null = document.querySelector(`#inputEndJob${index}`);
    const successEndDateJobFeedbackMsg: HTMLDivElement | null = document.querySelector(`#success-end-job-message${index}`);
    const isEmployedCheckbox = document.getElementById("currentJobCheckbox") as HTMLInputElement | null;
  
    if (endDateJobInput) {
      const isChecked: boolean | undefined = isEmployedCheckbox?.checked;
  
      if (isChecked) {

        if (successEndDateJobFeedbackMsg) {
          successEndDateJobFeedbackMsg.innerText = "";
          console.log(successEndDateJobFeedbackMsg);
          
          endDateJobInput.classList.remove("is-valid");
        }

      }
    }

  };
  

// Education Validations 

export function checkEducationInputs(label: string, index: number, successFeedbackMsg: string, errorFeedbackMsg: string): void {

    const educationInputNameSelector = `#input${label}${index}`;
    
    const addHyphenBetweenWords = (str: string): string => {
        return str.split(/(?=[A-Z])/).join('-').toLowerCase();
    };

    const formattedLabel = addHyphenBetweenWords(label);

    const educationSuccessMessageSelector = `#success-${formattedLabel}-message${index}`;
    const educationErrorMessageSelector = `#error-${formattedLabel}-messages${index}`;
    
    const educationInputLabel: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null = document.querySelector(educationInputNameSelector);
    const educationSuccessMessage: HTMLDivElement | null = document.querySelector(educationSuccessMessageSelector);
    const educationErrorMessage: HTMLDivElement | null = document.querySelector(educationErrorMessageSelector);

    const setSuccessFeedbackMsg = (message: string) => {
        if (educationSuccessMessage) {
            educationSuccessMessage.innerText = message;
            educationSuccessMessage.classList.add("success-user-data", "fw-bolder");
            educationSuccessMessage.style.fontSize = "0.8rem";
        }
        if (educationInputLabel) {
            educationInputLabel.classList.remove("is-invalid");
            educationInputLabel.classList.add("is-valid");
        }
        if (educationErrorMessage) {
            educationErrorMessage.innerText = "";
        }
    };

    const setErrorFeedbackMsg = (message: string) => {
        if (educationErrorMessage) {
            educationErrorMessage.innerText = message;
            educationErrorMessage.classList.add("error-user-data", "fw-bolder");
            educationErrorMessage.style.fontSize = "0.8rem";
        }
        if (educationInputLabel) {
            educationInputLabel.classList.add("is-invalid");
        }
        if (educationSuccessMessage) {
            educationSuccessMessage.innerText = "";
        }
    };

    if (educationInputLabel) {

        const educationInputValue = educationInputLabel.value;
        
        if(!educationInputValue) {

            if (educationSuccessMessage) {
                educationSuccessMessage.innerText = "";
            }
            if (educationInputLabel) {
                educationInputLabel.classList.remove("is-valid");
            }

        } else {

            if (label === "EducationGoals" && educationInputValue.length >= 500) {
                setErrorFeedbackMsg(errorFeedbackMsg);
            } else {
                setSuccessFeedbackMsg(successFeedbackMsg);
            }

        }
    }

}

export function checkEducationTitleSelect(index:number): void {
    checkEducationInputs("EducationTitle", index, "Ottimo lavoro, il titolo di studio è stato inserito nel CV", "")
};

export function checkFieldStudyInput(index: number): void {
    checkEducationInputs("StudyField", index, "Ottimo lavoro, il campo di studio è stato inserito nel CV", "")
};

export function checkEducationTypeInput(index: number): void {
    checkEducationInputs("TrainingCenter", index, "Ottimo lavoro, l'ente di formazione è stato inserito nel CV", "")
};

export function checkEducationGoalsInput(index:number): void {
    checkEducationInputs("EducationGoals", index, "Ottimo lavoro, il campo risultati accademici raggiunti è stato inserito nel CV", "Mi dispiace, il campo risultati accademici raggiunti non può contenere più di 500 caratteri")
};

export function checkEndAcademicEducationDateInput(index: number): void {
    checkEducationInputs("EndEducation", index, "Ottimo lavoro, la data di fine studio è stata inserito nel CV", "")
};

// Policy Privacy Validation (Mandatory)

export function checkPolicyPrivacySwitchInput(): void {

    const userPrivacyPolicyInput: HTMLInputElement | null = document.querySelector("[name='privacyPolicy']");
    const errorPrivacyPolicyMessage: HTMLDivElement | null = document.querySelector(".error-policy-privacy-message");
    const successPrivacyPolicyMessage: HTMLDivElement | null = document.querySelector(".success-policy-privacy-message");

    const setPrivacyPolicyErrorFeedbak = (message:string) => {

        if(errorPrivacyPolicyMessage) {
            errorPrivacyPolicyMessage.innerText = message;
            errorPrivacyPolicyMessage.classList.add("error-user-data", "fw-bolder");
            errorPrivacyPolicyMessage.style.fontSize = "0.8rem";
        }

        if(userPrivacyPolicyInput) {
            userPrivacyPolicyInput.classList.add("is-invalid");
        }

        if(successPrivacyPolicyMessage) {
            successPrivacyPolicyMessage.innerText = "";
        }

    };

    const setPrivacyPolicySuccessFeedback = (message: string) => {

        if(successPrivacyPolicyMessage) {
            successPrivacyPolicyMessage.innerText = message;
            successPrivacyPolicyMessage.classList.add("success-user-data", "fw-bolder");
            successPrivacyPolicyMessage.style.fontSize = "0.8rem"
        }

        if(userPrivacyPolicyInput) {
            userPrivacyPolicyInput.classList.remove("is-invalid");
            userPrivacyPolicyInput.classList.add("is-valid");
        }

        if(errorPrivacyPolicyMessage) {
            errorPrivacyPolicyMessage.innerHTML = "";
        }

    };

    isPrivacyPolicyApproved.subscribe((hasAcceptedPrivacyPolicy) => {

        if(hasAcceptedPrivacyPolicy) {
            setPrivacyPolicySuccessFeedback("Ottimo lavoro, hai accettato i termini della privacy policy");
        } else {
            setPrivacyPolicyErrorFeedbak("Per favore, accetta i termini della privacy policy");
        }

    });

}

export function checkClickAuthBtn(): void {

    const successAuthSignMessage: HTMLDivElement | null = document.querySelector(".success-auth-sign-message");
    const errorCancSignMessage = document.querySelector<HTMLDivElement>(".error-canc-sign-message");

    const setAuthSignSuccessFeedback = (message: string) => {

        if(successAuthSignMessage) {
            successAuthSignMessage.innerText = message;
            successAuthSignMessage.classList.add("success-user-data", "fw-bolder");
            successAuthSignMessage.style.fontSize = "0.8rem"
        }

        if (errorCancSignMessage) {
            errorCancSignMessage.innerText = "";
        }

    };

    isAllowed.subscribe((hasAllowed) => {

        if(hasAllowed) {
            setAuthSignSuccessFeedback("Ottimo lavoro, l'autorizzazione è andata a buon fine");
        }

    });
}

export function checkClickCancBtn(): void {

    const cancSignBtn: HTMLInputElement | null = document.querySelector("[name='cancBtn']");
    const errorCancSignMessage: HTMLDivElement | null = document.querySelector(".error-canc-sign-message");
    const successAuthSignMessage: HTMLDivElement | null = document.querySelector(".success-auth-sign-message");

    const setCancSignErrorFeedbak = (message:string) => {

        if(errorCancSignMessage) {
            errorCancSignMessage.innerText = message;
            errorCancSignMessage.classList.add("error-user-data", "fw-bolder");
            errorCancSignMessage.style.fontSize = "0.8rem";
        }

        if(cancSignBtn) {
            cancSignBtn.classList.add("is-invalid");
        }

        if(successAuthSignMessage) {
            successAuthSignMessage.innerText = "";

        }

    };

    isAllowed.subscribe((hasAllowed) => {

        if(!hasAllowed) {
            setCancSignErrorFeedbak("Attenzione: non hai autorizzato la tua firma digitale.");
        } 
        
    });
}




            
        