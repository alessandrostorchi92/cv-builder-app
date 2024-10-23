import { isPrivacyPolicyApproved, isAllowed } from "../stores/CvUser_data";

// ProfilePicture Validation

export function isProfilePictureUploaded(): void {

    const filePictureUploadedInput: HTMLInputElement | null = document.querySelector('[name="filePicture"]');
    const successProfilePictureUploadedMessage: HTMLDivElement | null = document.querySelector(".success-file-picture-message");
    const errorProfilePictureUploadedMessage: HTMLDivElement | null = document.querySelector(".error-file-picture-message");

    const setProfilePictureUploadedSuccessFeedback = (message: string) => {

        if (successProfilePictureUploadedMessage) {
            successProfilePictureUploadedMessage.innerText = message;
            successProfilePictureUploadedMessage.classList.add("success-user-data", "fw-bolder");
            successProfilePictureUploadedMessage.style.fontSize = "0.8rem";
        }

    }

    if(filePictureUploadedInput) {
            
        if (filePictureUploadedInput) {
            setProfilePictureUploadedSuccessFeedback("Ottimo lavoro, hai caricato la tua immagine di profilo nel CV");
            if(errorProfilePictureUploadedMessage) {
                errorProfilePictureUploadedMessage.style.display = "none";
            }
        } 
    }

}

// Profile Data Validations
    
export function checkNameInput(): void {

    const userNameInput: HTMLInputElement | null = document.querySelector("[name='name']");
    const errorNameMessages: HTMLDivElement | null = document.querySelector(".error-name-messages");
    const successNameMessage: HTMLDivElement | null = document.querySelector(".success-name-message");

    const setNameSuccessFeedback= (message:string) => {

        if(successNameMessage) {
            successNameMessage.innerText = message;
            successNameMessage.classList.add("success-user-data", "fw-bolder");
            successNameMessage.style.fontSize = "0.8rem";
        }

        if(userNameInput) {
            userNameInput.classList.remove("is-invalid");
            userNameInput.classList.add("is-valid");
        }

        if(errorNameMessages) {
            errorNameMessages.innerText = "";
        }

    };

    if(userNameInput) {

        const userNameValue = userNameInput.value.trim();

        if(userNameValue === "") {

            if(successNameMessage) {
                successNameMessage.innerText = "";
            }

            if (userNameInput) {
                userNameInput.classList.remove("is-valid");
            }

        } else {
            
            setNameSuccessFeedback("Ottimo lavoro, il nome è stato inserito nel CV.");

        }
    
    }

};

export function checkSurnameInput(): void {

    const userSurnameInput: HTMLInputElement | null = document.querySelector("[name='surname']");
    const errorSurnameMessages: HTMLDivElement | null = document.querySelector(".error-surname-messages");
    const successSurnameMessage: HTMLDivElement | null = document.querySelector(".success-surname-message");

    const setSurnameSuccessFeedback = (message: string) => {

        if(successSurnameMessage) {
            successSurnameMessage.innerText = message;
            successSurnameMessage.classList.add("success-user-data", "fw-bolder");
            successSurnameMessage.style.fontSize = "0.8rem"
        }

        if(userSurnameInput) {
            userSurnameInput.classList.remove("is-invalid");
            userSurnameInput.classList.add("is-valid");
        }

        if(errorSurnameMessages) {
            errorSurnameMessages.innerText = "";
        }
    };

    if(userSurnameInput) {

        const userSurnameValue = userSurnameInput.value.trim();

        if(userSurnameValue === "") {

            if(successSurnameMessage) {
                successSurnameMessage.innerText = "";
            }

            if (userSurnameInput) {
                userSurnameInput.classList.remove("is-valid");
            }

        } else {
            
            setSurnameSuccessFeedback("Ottimo lavoro, il cognome è stato inserito nel CV.");

        }
    }
};

export function checkProfessionInput(): void {

    const userProfessionInput: HTMLInputElement | null = document.querySelector("[name='profession']");
    const errorProfessionMessages: HTMLDivElement | null = document.querySelector(".error-profession-messages");
    const successProfessionMessage: HTMLDivElement | null = document.querySelector(".success-profession-message");

    const setProfessionSuccessFeedback = (message: string) => {

        if(successProfessionMessage) {
            successProfessionMessage.innerText = message;
            successProfessionMessage.classList.add("success-user-data", "fw-bolder");
            successProfessionMessage.style.fontSize = "0.8rem"
        }

        if(userProfessionInput) {
            userProfessionInput.classList.remove("is-invalid");
            userProfessionInput.classList.add("is-valid");
        }

        if(errorProfessionMessages) {
            errorProfessionMessages.innerHTML = "";
        }

    };

    if(userProfessionInput) {

        const userProfessionValue = userProfessionInput.value.trim();

        if(userProfessionValue === "") {

            if(successProfessionMessage) {
                successProfessionMessage.innerText = "";
            }

            if (userProfessionInput) {
                userProfessionInput.classList.remove("is-valid");
            }

        } else {
            
            setProfessionSuccessFeedback ("Ottimo lavoro, la professione è stata inserita nel CV.");

        }
    
    }

};

export function checkNationalityInput(): void { 

    const userNationalityInput: HTMLInputElement | null = document.querySelector("[name='nationality']");
    const errorNationalityMessages: HTMLDivElement | null = document.querySelector(".error-nationality-messages");
    const successNationalityMessage: HTMLDivElement | null = document.querySelector(".success-nationality-message");

    const setNationalityErrorFeedback = (message:string) => {

        if(errorNationalityMessages) {
            errorNationalityMessages.innerText = message;
            errorNationalityMessages.classList.add("error-user-data", "fw-bolder");
            errorNationalityMessages.style.fontSize = "0.8rem";
        }

        if(userNationalityInput) {
            userNationalityInput.classList.add("is-invalid");
        }

        if(successNationalityMessage) {
            successNationalityMessage.innerText = "";
        }

    };

    const setNationalitySuccessFeedback = (message:string) => {

        if(successNationalityMessage) {
            successNationalityMessage.innerText = message;
            successNationalityMessage.classList.add("success-user-data", "fw-bolder");
            successNationalityMessage.style.fontSize = "0.8rem";
        }

        if(userNationalityInput) {
            userNationalityInput.classList.remove("is-invalid");
            userNationalityInput.classList.add("is-valid");
        }

        if(errorNationalityMessages) {
            errorNationalityMessages.innerText = "";
        }

    };

    if(userNationalityInput) {

        const userNationalityValue = userNationalityInput.value.trim();

        if(userNationalityValue === "") {

            if(successNationalityMessage) {
                successNationalityMessage.innerText = "";
            }

            if (userNationalityInput) {
                userNationalityInput.classList.remove("is-valid");
            }

        } else {
            
            setNationalitySuccessFeedback("Ottimo lavoro, lo stato di nascita è stato inserito nel CV.");

        }

    }

};

export function checkBirthPlaceInput(): void { 

    const userBirthPlaceInput: HTMLInputElement | null = document.querySelector("[name='birthPlace']");
    const errorBirthPlaceMessages: HTMLDivElement | null = document.querySelector(".error-birthplace-message");
    const successBirthPlaceMessage: HTMLDivElement | null = document.querySelector(".success-birthplace-message");

    const setBirthPlaceSuccessFeedback = (message:string) => {

        if(successBirthPlaceMessage) {
            successBirthPlaceMessage.innerText = message;
            successBirthPlaceMessage.classList.add("success-user-data", "fw-bolder");
            successBirthPlaceMessage.style.fontSize = "0.8rem";
        }

        if(userBirthPlaceInput) {
            userBirthPlaceInput.classList.remove("is-invalid");
            userBirthPlaceInput.classList.add("is-valid");
        }

        if(errorBirthPlaceMessages) {
            errorBirthPlaceMessages.innerText = "";
        }

    };

    if(userBirthPlaceInput) {

        const userBirthPlaceValue = userBirthPlaceInput.value.trim();

        if(userBirthPlaceValue === "") {

            if(successBirthPlaceMessage) {
                successBirthPlaceMessage.innerText = "";
            }

            if (userBirthPlaceInput) {
                userBirthPlaceInput.classList.remove("is-valid");
            }

        } else {
            
            setBirthPlaceSuccessFeedback("Ottimo lavoro, il luogo di nascita è stato inserito nel CV.");

        }

    }

};

export function checkBirthDateInput(): void {

    const userBirthDateInput: HTMLInputElement | null = document.querySelector("[name='birthDate']");
    const errorBirthDateMessage: HTMLDivElement | null = document.querySelector(".error-birthdate-message");
    const successBirthDateMessage: HTMLDivElement | null = document.querySelector(".success-birthdate-message");

    const setBirthDateErrorFeedback = (message:string) => {

        if(errorBirthDateMessage) {
            errorBirthDateMessage.innerText = message;
            errorBirthDateMessage.classList.add("error-user-data", "fw-bolder");
            errorBirthDateMessage.style.fontSize = "0.8rem";
        }

        if(userBirthDateInput) {
            userBirthDateInput.classList.add("is-invalid");
        }

        if(successBirthDateMessage) {
            successBirthDateMessage.innerText = "";
        }

    };

    const setBirthDateSuccessFeedback = (message:string) => {

        if(successBirthDateMessage) {
            successBirthDateMessage.innerText = message;
            successBirthDateMessage.classList.add("success-user-data", "fw-bolder");
            successBirthDateMessage.style.fontSize = "0.8rem";
        }

        if(userBirthDateInput) {
            userBirthDateInput.classList.remove("is-invalid");
            userBirthDateInput.classList.add("is-valid");
        }

        if(errorBirthDateMessage) {
            errorBirthDateMessage.innerText = "";
        }

    };

    if(userBirthDateInput) {

        const birthDateValue: string = userBirthDateInput.value;
        const birthDate: Date = new Date(birthDateValue);

        const birthDateMin = new Date(userBirthDateInput.min);
        const birthDateMax = new Date(userBirthDateInput.max);
        
        if (birthDate < birthDateMin || birthDate > birthDateMax) {

            setBirthDateErrorFeedback("La data di nascita non è valida. Inserisci una data compresa tra il 1954 e il 2006.");

        } else if(birthDateValue === "") {

            if(successBirthDateMessage) {
                successBirthDateMessage.innerText = "";
            }

            if (userBirthDateInput) {
                userBirthDateInput.classList.remove("is-valid");
            }

            if(errorBirthDateMessage) {
                errorBirthDateMessage.innerText = "";
            }

            if (userBirthDateInput) {
                userBirthDateInput.classList.remove("is-invalid");
            }

        } else {
            
            setBirthDateSuccessFeedback("Ottimo lavoro, la data di nascita è stata inserita nel CV.");

        }
        
    }

};

export function checkStreetAddressInput(): void {

    const userStreetAddressInput: HTMLInputElement | null = document.querySelector("[name='streetAddress']");
    const errorStreetAddressMessages: HTMLDivElement | null = document.querySelector(".error-street-address-messages");
    const successStreetAddressMessage: HTMLDivElement | null = document.querySelector(".success-street-address-message");

    const setStreetAddressSuccessFeedback = (message:string) => {

        if(successStreetAddressMessage) {
             successStreetAddressMessage.innerText = message;
             successStreetAddressMessage.classList.add("success-user-data", "fw-bolder");
             successStreetAddressMessage.style.fontSize = "0.8rem";
            }
    
        if(userStreetAddressInput) {
            userStreetAddressInput.classList.remove("is-invalid");
            userStreetAddressInput.classList.add("is-valid");
            }
    
        if(errorStreetAddressMessages) {
             errorStreetAddressMessages.innerText = "";
        }
    
    }; 
    
    if(userStreetAddressInput) {

        const userAddressValue = userStreetAddressInput.value.trim();
    
        if(userAddressValue === "") {

            if(successStreetAddressMessage) {
                successStreetAddressMessage.innerText = "";
            }

            if (userStreetAddressInput) {
                userStreetAddressInput.classList.remove("is-valid");
            }

        } else {
            
            setStreetAddressSuccessFeedback("Ottimo lavoro, l'indirizzo di residenza è stato inserito nel CV.");

        }
    
    }

};

export function checkStreetNumberInput(): void {

    const userStreetNumberInput: HTMLInputElement | null = document.querySelector("[name='streetNumber']");
    const errorStreetNumberMessages: HTMLDivElement | null = document.querySelector(".error-street-number-messages");
    const successStreetNumberMessage: HTMLDivElement | null = document.querySelector(".success-street-number-message");

    const setStreetNumberSuccessFeedback = (message:string) => {

        if(successStreetNumberMessage) {
            successStreetNumberMessage.innerText = message;
            successStreetNumberMessage.classList.add("success-user-data", "fw-bolder");
            successStreetNumberMessage.style.fontSize = "0.8rem";
            }
    
        if(userStreetNumberInput) {
            userStreetNumberInput.classList.remove("is-invalid");
            userStreetNumberInput.classList.add("is-valid");
            }
    
        if(errorStreetNumberMessages) {
            errorStreetNumberMessages.innerText = "";
        }
    
    }; 

    if(userStreetNumberInput) {

        const userStreetNumberValue = userStreetNumberInput.value.trim();

        if(userStreetNumberValue === "") {

            if(successStreetNumberMessage) {
                successStreetNumberMessage.innerText = "";
            }

            if (userStreetNumberInput) {
                userStreetNumberInput.classList.remove("is-valid");
            }

        } else {
            
            setStreetNumberSuccessFeedback ("Ottimo lavoro, il numero civico è stato inserito nel CV.");

        }


    }

};

export function checkCityInput(): void {

    const userCityInput: HTMLInputElement | null = document.querySelector("[name='city']");
    const errorCityMessages: HTMLDivElement | null = document.querySelector(".error-city-messages");
    const successCityMessage: HTMLDivElement | null = document.querySelector(".success-city-message");

    const setCitySuccessFeedback = (message:string) => {

        if(successCityMessage) {
            successCityMessage.innerText = message;
            successCityMessage.classList.add("success-user-data", "fw-bolder");
            successCityMessage.style.fontSize = "0.8rem";
        }
    
        if(userCityInput) {
            userCityInput.classList.remove("is-invalid");
            userCityInput.classList.add("is-valid");
        }
    
        if(errorCityMessages) {
            errorCityMessages.innerText = "";
        }
    
    };

    if(userCityInput) {

        const userCityValue = userCityInput.value.trim();
    
        if( userCityValue === "") {

            if(successCityMessage) {
                successCityMessage.innerText = "";
            }

            if (userCityInput) {
                userCityInput.classList.remove("is-valid");
            }

        } else {
            
            setCitySuccessFeedback("Ottimo lavoro, la città di residenza è stata inserita nel CV.");

        }
    
    }

};

export function checkRegionInput(): void {

    const userRegionInput: HTMLInputElement | null = document.querySelector("[name='region']");
    const errorRegionMessages: HTMLDivElement | null = document.querySelector(".error-region-messages");
    const successRegionMessage: HTMLDivElement | null = document.querySelector(".success-region-message");

    const setRegionSuccessFeedback = (message:string) => {

        if(successRegionMessage) {
            successRegionMessage.innerText = message;
            successRegionMessage.classList.add("success-user-data", "fw-bolder");
            successRegionMessage.style.fontSize = "0.8rem";
        }
    
        if(userRegionInput) {
            userRegionInput.classList.remove("is-invalid");
            userRegionInput.classList.add("is-valid");
        }
    
        if(errorRegionMessages) {
            errorRegionMessages.innerText = "";
        }
    
    };

    if(userRegionInput) {

        const userRegionValue = userRegionInput.value.trim();
    
        if(userRegionValue === "") {

            if(successRegionMessage) {
                successRegionMessage.innerText = "";
            }

            if (userRegionInput) {
                userRegionInput.classList.remove("is-valid");
            }

        } else {
            
            setRegionSuccessFeedback("Ottimo lavoro, la regione di residenza è stata inserita nel CV.");

        }
    
    }

};

export function checkPhonePrefixSelect(): void {
    
    const userPhonePrefixSelect: HTMLInputElement | null = document.querySelector("[name='phonePrefix']");
    const errorPhonePrefixMessage: HTMLDivElement | null = document.querySelector(".error-phoneprefix-message");
    const successPhonePrefixMessage: HTMLDivElement | null = document.querySelector(".success-phoneprefix-message");

    const setPhonePrefixSuccessFeedback = (message:string) => {

        if(successPhonePrefixMessage) {
            successPhonePrefixMessage.innerText = message;
            successPhonePrefixMessage.classList.add("success-user-data", "fw-bolder");
            successPhonePrefixMessage.style.fontSize = "0.8rem";
        }

        if(userPhonePrefixSelect) {
            userPhonePrefixSelect.classList.remove("is-invalid");
            userPhonePrefixSelect.classList.add("is-valid");
        }

        if(errorPhonePrefixMessage) {
            errorPhonePrefixMessage.innerText = "";
        }

    };

    if(userPhonePrefixSelect) {

        const userPhonePrefixOption = userPhonePrefixSelect.value;

        if(userPhonePrefixOption) {

            setPhonePrefixSuccessFeedback("Ottimo lavoro, il prefisso telefonico è stato inserito nel CV.");

        } 

    } 

};

export function checkPhoneInput(): void {

    const userPhoneInput: HTMLInputElement | null = document.querySelector("[name='phone']");
    const errorPhoneMessages: HTMLDivElement | null = document.querySelector(".error-phone-messages");
    const successPhoneMessage: HTMLDivElement | null = document.querySelector(".success-phone-message");
    const namePattern = /^\d+$/;

    const setBirthPlaceErrorFeedback = (message:string) => {

        if(errorPhoneMessages) {
            errorPhoneMessages.innerText = message;
            errorPhoneMessages.classList.add("error-user-data", "fw-bolder");
            errorPhoneMessages.style.fontSize = "0.8rem";
        }

        if(userPhoneInput) {
            userPhoneInput.classList.add("is-invalid");
        }

        if(successPhoneMessage) {
            successPhoneMessage.innerText = "";
        }

    };

    const setBirthPlaceSuccessFeedback = (message:string) => {

        if(successPhoneMessage) {
            successPhoneMessage.innerText = message;
            successPhoneMessage.classList.add("success-user-data", "fw-bolder");
            successPhoneMessage.style.fontSize = "0.8rem";
        }

        if(userPhoneInput) {
            userPhoneInput.classList.remove("is-invalid");
            userPhoneInput.classList.add("is-valid");
        }

        if(errorPhoneMessages) {
            errorPhoneMessages.innerText = "";
        }

    };

    if(userPhoneInput) {

        const userPhoneValue = userPhoneInput.value.trim();

        if(userPhoneValue === "") {

            if(successPhoneMessage) {
                successPhoneMessage.innerText = "";
            }

            if (userPhoneInput) {
                userPhoneInput.classList.remove("is-valid");
            }

            if(errorPhoneMessages) {
                errorPhoneMessages.innerText = "";
            }

            if (userPhoneInput) {
                userPhoneInput.classList.remove("is-invalid");
            }

        } else if(userPhoneValue.length >= 15) {

            setBirthPlaceErrorFeedback("Il cellulare non può contenere più di 15 numeri.");

        } else if(!namePattern.test(userPhoneValue)) {

            setBirthPlaceErrorFeedback("Il cellulare può contenere solo numeri.");

        } else {

            setBirthPlaceSuccessFeedback("Ottimo lavoro, il cellulare è stato inserito nel CV.");

        }

    }
}; 

export function checkEmailInput(): void {
        
    const userEmailInput: HTMLInputElement | null = document.querySelector("[name='email']");
    const errorEmailMessages: HTMLDivElement | null = document.querySelector(".error-email-messages");
    const successEmailMessage: HTMLDivElement | null = document.querySelector(".success-email-message");
    const emailPattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,6}$/;

    const setEmailErrorFeedBack = (message: string) => {

        if(errorEmailMessages) {
            errorEmailMessages.innerText = message;
            errorEmailMessages.classList.add("error-user-data", "fw-bolder");
            errorEmailMessages.style.fontSize = "0.8rem";
        }

        if(userEmailInput) {
            userEmailInput.classList.add("is-invalid");
        }

        if(successEmailMessage) {
            successEmailMessage.innerText = "";
        }

    };

    const setEmailSuccessFeedback = (message: string) => {

        if(successEmailMessage) {
            successEmailMessage.innerText = message;
            successEmailMessage.classList.add("success-user-data", "fw-bolder");
            successEmailMessage.style.fontSize = "0.8rem"
        }

        if(userEmailInput) {
            userEmailInput.classList.remove("is-invalid");
            userEmailInput.classList.add("is-valid");
        }

        if(errorEmailMessages) {
            errorEmailMessages.innerText = "";
        }
    };

    if(userEmailInput) {

        const userEmailValue = userEmailInput.value.trim();

        if(userEmailValue === "") {

            if(successEmailMessage) {
                successEmailMessage.innerText = "";
            }

            if (userEmailInput) {
                userEmailInput.classList.remove("is-valid");
            }

            if(errorEmailMessages) {
                errorEmailMessages.innerText = "";
            }

            if (userEmailInput) {
                userEmailInput.classList.remove("is-invalid");
            }

        } else if(!emailPattern.test(userEmailValue)) {

            setEmailErrorFeedBack("Mi dispiace, L'email inserita contiene caratteri non validi nel nome utente. Puoi utilizzare lettere, numeri, punti, trattini bassi (_) e trattini (-)");;

        } else {

            setEmailSuccessFeedback ("Ottimo lavoro, l'email è stata inserita nel CV.");

        }

    }

        if(!emailPattern.test(userEmailValue)) {

            setEmailErrorFeedBack("Mi dispiace, l'email inserita non rispetta l'esempio fornito");

        } else {

            setEmailSuccessFeedback("Ottimo lavoro, l'email è corretta");

        }

};

// ProfileSummary Validation

export function checkProfileSummaryTextArea(): void {

    const profileSummaryTextArea: HTMLTextAreaElement | null = document.querySelector("[name='profileSummary']");
    const errorProfileSummaryMessages: HTMLDivElement | null = document.querySelector(".error-profile-summary-messages");
    const successProfileSummaryMessage: HTMLDivElement | null = document.querySelector(".success-profile-summary-message");

    const setProfileSummaryErrorFeedBack = (message: string) => {

        if(errorProfileSummaryMessages) {
            errorProfileSummaryMessages.innerText = message;
            errorProfileSummaryMessages.classList.add("error-user-data", "fw-bolder");
            errorProfileSummaryMessages.style.fontSize = "0.8rem";
        }

        if(profileSummaryTextArea) {
            profileSummaryTextArea.classList.add("is-invalid");
        }

        if(successProfileSummaryMessage) {
            successProfileSummaryMessage.innerText = "";
        }

    };

    const setProfileSummarySuccessFeedback = (message: string) => {

        if(successProfileSummaryMessage) {
            successProfileSummaryMessage.innerText = message;
            successProfileSummaryMessage.classList.add("success-user-data", "fw-bolder");
            successProfileSummaryMessage.style.fontSize = "0.8rem"
        }

        if(profileSummaryTextArea) {
            profileSummaryTextArea.classList.remove("is-invalid");
            profileSummaryTextArea.classList.add("is-valid");
        }

        if(errorProfileSummaryMessages) {
            errorProfileSummaryMessages.innerText = "";
        }
    };

    if(profileSummaryTextArea) {

        const profileSummaryValue = profileSummaryTextArea.value.trim();

        if(profileSummaryValue === "") {

            if (successProfileSummaryMessage) {
                successProfileSummaryMessage.innerText = "";
            }

            if (profileSummaryTextArea) {
                profileSummaryTextArea.classList.remove("is-valid");
            }

        }

         else if(profileSummaryValue.length >= 500) {

            setProfileSummaryErrorFeedBack("Mi dispiace, il profilo personale non può contenere più di 500 caratteri");

        } else {

            setProfileSummarySuccessFeedback ("Ottimo lavoro, il profilo personale è corretto");

        }
    
    }

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

    const digitalSkillsTextInput: HTMLSelectElement | null = document.querySelector(`[name="digitalSkill${index}"]`);
    const errorDigitalSkillMessage: HTMLDivElement | null = document.querySelector(`#error-digital-skill-message${index}`);
    const successDigitalSkillMessage: HTMLDivElement | null = document.querySelector(`#success-digital-skill-message${index}`);

    const setDigitalSkillErrorFeedBack = (message:string) => {

        if(errorDigitalSkillMessage) {
            errorDigitalSkillMessage.innerText = message;
            errorDigitalSkillMessage.classList.add("error-user-data", "fw-bolder");
            errorDigitalSkillMessage.style.fontSize = "0.8rem";
        }

        if(digitalSkillsTextInput) {
            digitalSkillsTextInput.classList.add("is-invalid");
        }

        if(successDigitalSkillMessage) {
            successDigitalSkillMessage.innerText = "";
        }

    };

    const setDigitalSkillSuccessFeedback = (message:string) => {

        if(successDigitalSkillMessage) {
            successDigitalSkillMessage.innerText = message;
            successDigitalSkillMessage.classList.add("success-user-data", "fw-bolder");
            successDigitalSkillMessage.style.fontSize = "0.8rem";
        }

        if(digitalSkillsTextInput) {
            digitalSkillsTextInput.classList.remove("is-invalid");
            digitalSkillsTextInput.classList.add("is-valid");
        }

        if(errorDigitalSkillMessage) {
            errorDigitalSkillMessage.innerText = "";
        }

    };

    if( digitalSkillsTextInput) {

        const digitalSkillValue =  digitalSkillsTextInput.value.trim();

        if(digitalSkillValue === "") {

            setDigitalSkillErrorFeedBack("La competenza digitale è obbligatoria");

        } else {

            setDigitalSkillSuccessFeedback("Ottimo lavoro, la competenza digitale è corretta");

        }
    
    }

}

export function checkLevelSkillSelect(index: number): void {

    const levelSkillSelect: HTMLSelectElement | null = document.querySelector(`[name="skillLevel${index}"]`);
    const errorLevelSkillMessage: HTMLDivElement | null = document.querySelector(`#error-level-skill-message${index}`);
    const successLevelSkillMessage: HTMLDivElement | null = document.querySelector(`#success-level-skill-message${index}`);

    const setLevelSkillErrorFeedBack = (message:string) => {

        if(errorLevelSkillMessage) {
            errorLevelSkillMessage.innerText = message;
            errorLevelSkillMessage.classList.add("error-user-data", "fw-bolder");
            errorLevelSkillMessage.style.fontSize = "0.8rem";
        }

        if(levelSkillSelect) {
            levelSkillSelect.classList.add("is-invalid");
            levelSkillSelect.classList.remove("is-valid");
        }

    };

    const setLevelSkillSuccessFeedback = (message:string) => {

        if(successLevelSkillMessage) {
            successLevelSkillMessage.innerText = message;
            successLevelSkillMessage.classList.add("success-user-data", "fw-bolder");
            successLevelSkillMessage.style.fontSize = "0.8rem";
        }

        if(levelSkillSelect) {
            levelSkillSelect.classList.remove("is-invalid");
            levelSkillSelect.classList.add("is-valid");
        }

        if(errorLevelSkillMessage) {
            errorLevelSkillMessage.innerText = "";
        }

    };

    if(levelSkillSelect) {

        const levelSkillValue =  levelSkillSelect.value.trim();

        if(levelSkillValue  === "") {

            setLevelSkillErrorFeedBack("Mi dispiace, il livello della competenza digitale è obbligatorio");

        } else {

            setLevelSkillSuccessFeedback("Ottimo lavoro, il livello della competenza digitale è corretto");

        }
    
    }

}

//  Language Validations

export function checkLanguageSelect(index: number): void {

    const languageSelect: HTMLSelectElement | null = document.querySelector(`#formSelectLanguages${index}`);
    const errorLanguageMessage: HTMLDivElement | null = document.querySelector(`#error-language-message${index}`);
    const successLanguageMessage: HTMLDivElement | null = document.querySelector(`#success-language-message${index}`);
    
    const setLanguageErrorFeedback = (message:string) => {

        if (errorLanguageMessage) {
            errorLanguageMessage.innerText = message;
            errorLanguageMessage.classList.add("error-user-data", "fw-bolder");
            errorLanguageMessage.style.fontSize = "0.8rem";
        }

        if (languageSelect) {
            languageSelect.classList.add("is-invalid");
        }

        if (successLanguageMessage) {
            successLanguageMessage.innerText = "";
        }

    };

    const setLanguageSuccessFeedback = (message:string) => {

        if (successLanguageMessage) {
            successLanguageMessage.innerText = message;
            successLanguageMessage.classList.add("success-user-data", "fw-bolder");
            successLanguageMessage.style.fontSize = "0.8rem";
        }

        if (languageSelect) {
            languageSelect.classList.remove("is-invalid");
            languageSelect.classList.add("is-valid");
        }

        if (errorLanguageMessage) {
            errorLanguageMessage.innerText = "";
        }

    };

    if (languageSelect) {

        const languageOption = languageSelect.value;

        if (languageOption === "") {

            setLanguageErrorFeedback("Mi dispiace, seleziona almeno una lingua");

        } else {

            setLanguageSuccessFeedback("Ottimo lavoro, hai inserito la lingua nel CV");

        }

    } 

};

export function checkLanguageLevelSelect(index: number): void {

    const languageLevelSelect: HTMLInputElement | null = document.querySelector(`#formSelectLanguageLevels${index}`);
    const errorLanguageLevelMessage: HTMLDivElement | null = document.querySelector(`#error-language-level-message${index}`);
    const successLanguageLevelMessage: HTMLDivElement | null = document.querySelector(`#success-language-level-message${index}`);

    const setLanguageLevelErrorFeedback = (message:string) => {

        if (errorLanguageLevelMessage) {
            errorLanguageLevelMessage.innerText = message;
            errorLanguageLevelMessage.classList.add("error-user-data", "fw-bolder");
            errorLanguageLevelMessage.style.fontSize = "0.8rem";
        }

        if (languageLevelSelect) {
            languageLevelSelect.classList.add("is-invalid");
        }

        if (successLanguageLevelMessage) {
            successLanguageLevelMessage.innerText = "";
        }

    };

    const setLanguageLevelSuccessFeedback = (message:string) => {

        if (successLanguageLevelMessage) {
            successLanguageLevelMessage.innerText = message;
            successLanguageLevelMessage.classList.add("success-user-data", "fw-bolder");
            successLanguageLevelMessage.style.fontSize = "0.8rem";
        }

        if (languageLevelSelect) {
            languageLevelSelect.classList.remove("is-invalid");
            languageLevelSelect.classList.add("is-valid");
        }

        if (errorLanguageLevelMessage) {
            errorLanguageLevelMessage.innerText = "";
        }

    };

    if (languageLevelSelect) {

        const languageLevelOption = languageLevelSelect.value;

        if (languageLevelOption === "") {

            setLanguageLevelErrorFeedback("Mi dispiace, seleziona almeno un livello di lingua");

        } else {

            setLanguageLevelSuccessFeedback("Ottimo lavoro, hai inserito il livello di lingua nel CV");

        }

    } 

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

export function checkJobRoleTextInput(index: number): void {

    const jobRoleTextInput: HTMLInputElement | null = document.querySelector(`#textInputJobRole${index}`);
    const successJobRoleMessage: HTMLDivElement | null = document.querySelector(`#success-job-role-message${index}`);

    const setJobRoleSuccessFeedback= (message:string) => {

        if(successJobRoleMessage) {
            successJobRoleMessage.innerText = message;
            successJobRoleMessage.classList.add("success-user-data", "fw-bolder");
            successJobRoleMessage.style.fontSize = "0.8rem";
        }

        if(jobRoleTextInput) {
            jobRoleTextInput.classList.remove("is-invalid");
            jobRoleTextInput.classList.add("is-valid");
        }

        if(jobRoleTextInput) {
            jobRoleTextInput.innerText = "";
        }

    };

    if(jobRoleTextInput) {

        const jobRoleValue = jobRoleTextInput.value.trim();

        if(jobRoleValue === "") {

            if(successJobRoleMessage) {
                successJobRoleMessage.innerText = "";
            }

            if (jobRoleTextInput) {
                jobRoleTextInput.classList.remove("is-valid");
            }

        } else {

            setJobRoleSuccessFeedback("Ottimo lavoro, il ruolo è stato inserito nel CV");

        }
    
    }

};

export function checkCompanyTextInput(index: number): void {

    const companyTextInput: HTMLInputElement | null = document.querySelector(`#textInputCompany${index}`);
    const errorCompanyMessages: HTMLDivElement | null = document.querySelector(`#error-company-messages${index}`);
    const successCompanyMessage: HTMLDivElement | null = document.querySelector(`#success-company-message${index}`);

    const setCompanySuccessFeedback= (message:string) => {

        if(successCompanyMessage) {
            successCompanyMessage.innerText = message;
            successCompanyMessage.classList.add("success-user-data", "fw-bolder");
            successCompanyMessage.style.fontSize = "0.8rem";
        }

        if(companyTextInput) {
            companyTextInput.classList.remove("is-invalid");
            companyTextInput.classList.add("is-valid");
        }

        if(errorCompanyMessages) {
            errorCompanyMessages.innerText = "";
        }

    };

    if(companyTextInput) {

        const companyValue = companyTextInput.value.trim();

        if(companyValue === "") {

            if(successCompanyMessage) {
                successCompanyMessage.innerText = "";
            }

            if (companyTextInput) {
                companyTextInput.classList.remove("is-valid");
            }

        } else {

            setCompanySuccessFeedback("Ottimo lavoro, l'azienda è stata inserita nel CV");

        }
    
    }

};

export function checkLocationTextInput(index: number): void {

    const locationTextInput: HTMLInputElement | null = document.querySelector(`#textInputLocation${index}`);
    const errorLocationMessages: HTMLDivElement | null = document.querySelector(`#error-location-messages${index}`);
    const successLocationMessage: HTMLDivElement | null = document.querySelector(`#success-location-message${index}`);

    const setLocationSuccessFeedback = (message: string) => {
        if (successLocationMessage) {
            successLocationMessage.innerText = message;
            successLocationMessage.classList.add("success-user-data", "fw-bolder");
            successLocationMessage.style.fontSize = "0.8rem";
        }

        if (locationTextInput) {
            locationTextInput.classList.remove("is-invalid");
            locationTextInput.classList.add("is-valid");
        }

        if (errorLocationMessages) {
            errorLocationMessages.innerText = "";
        }
    };

    if (locationTextInput) {
        const locationValue = locationTextInput.value.trim();

        if (locationValue === "") {

            if(successLocationMessage) {
                successLocationMessage.innerText = "";
            }

            if (locationTextInput) {
                locationTextInput.classList.remove("is-valid");
            }

        } else {

            setLocationSuccessFeedback("Ottimo lavoro, il luogo di lavoro è stato inserito nel CV");

        }
    }
    
};

export function checkWorkExperienceResultsTextArea(index: number): void {

    const workExperienceResultsTextArea: HTMLTextAreaElement | null = document.querySelector(`#textAreaInputWorkExperienceResults${index}`);
    const errorWorkExperienceResultsMessages: HTMLDivElement | null = document.querySelector(`#error-work-experience-results-messages${index}`);
    const successWorkExperienceResultsMessage: HTMLDivElement | null = document.querySelector(`#success-work-experience-results-message${index}`);

    const setProfileSummaryErrorFeedBack = (message: string) => {

        if(errorWorkExperienceResultsMessages) {
            errorWorkExperienceResultsMessages.innerText = message;
            errorWorkExperienceResultsMessages.classList.add("error-user-data", "fw-bolder");
            errorWorkExperienceResultsMessages.style.fontSize = "0.8rem";
        }

        if(workExperienceResultsTextArea) {
            workExperienceResultsTextArea.classList.add("is-invalid");
        }

        if(successWorkExperienceResultsMessage) {
            successWorkExperienceResultsMessage.innerText = "";
        }

    };

    const setProfileSummarySuccessFeedback = (message: string) => {

        if(successWorkExperienceResultsMessage) {
            successWorkExperienceResultsMessage.innerText = message;
            successWorkExperienceResultsMessage.classList.add("success-user-data", "fw-bolder");
            successWorkExperienceResultsMessage.style.fontSize = "0.8rem"
        }

        if(workExperienceResultsTextArea) {
            workExperienceResultsTextArea.classList.remove("is-invalid");
            workExperienceResultsTextArea.classList.add("is-valid");
        }

        if(errorWorkExperienceResultsMessages) {
            errorWorkExperienceResultsMessages.innerText = "";
        }
    };

    if(workExperienceResultsTextArea) {

        const workExperienceResultsValue = workExperienceResultsTextArea.value.trim();

        if(workExperienceResultsValue === "") {

            if(successWorkExperienceResultsMessage) {
                successWorkExperienceResultsMessage.innerText = "";
            }

            if (workExperienceResultsTextArea) {
                workExperienceResultsTextArea.classList.remove("is-valid");
            }

        } else if(workExperienceResultsValue.length >= 500) {

            setProfileSummaryErrorFeedBack("Mi dispiace, il campo risultati professionali ottenuti non può contenere più di 500 caratteri");

        } else {

            setProfileSummarySuccessFeedback ("Ottimo lavoro, il campo risultati professionali ottenuti è stato inserito nel CV");

        }
    
    }

};

export function checkStartAndEndWorkExperienceDateInput(index: number): void {
    
    const startDateWorkExperienceDateInput: HTMLInputElement | null = document.querySelector(`#startDateInputWorkExperience${index}`);
    const errorStartDateWorkExperienceMessages: HTMLDivElement | null = document.querySelector(`#error-startDateWorkExperience-messages${index}`);
    const successStartDateWorkExperienceMessage: HTMLDivElement | null = document.querySelector(`#success-startDateWorkExperience-message${index}`);

    const setStartDateWorkExperienceSuccessFeedBack = (message: string) => {

        if(successStartDateWorkExperienceMessage) {
            successStartDateWorkExperienceMessage.innerText = message;
            successStartDateWorkExperienceMessage.classList.add("success-user-data", "fw-bolder");
            successStartDateWorkExperienceMessage.style.fontSize = "0.8rem"
        }

        if(startDateWorkExperienceDateInput) {
            startDateWorkExperienceDateInput.classList.remove("is-invalid");
            startDateWorkExperienceDateInput.classList.add("is-valid");
        }

        if(errorStartDateWorkExperienceMessages) {
            errorStartDateWorkExperienceMessages.innerText = "";
        }

    };

    const endDateWorkExperienceDateInput: HTMLInputElement | null = document.querySelector(`#endDateInputWorkExperience${index}`);
    const errorEndDateWorkExperienceMessages: HTMLDivElement | null = document.querySelector(`#error-endDateWorkExperience-messages${index}`);
    const successEndDateWorkExperienceMessage: HTMLDivElement | null = document.querySelector(`#success-endDateWorkExperience-message${index}`);
    const isEmployedCheckbox = document.getElementById("checkboxNoLabel") as HTMLInputElement | null;


    const setEndDateWorkExperienceSuccessFeedBack = (message: string) => {

        if(successEndDateWorkExperienceMessage) {
            successEndDateWorkExperienceMessage.innerText = message;
            successEndDateWorkExperienceMessage.classList.add("success-user-data", "fw-bolder");
            successEndDateWorkExperienceMessage.style.fontSize = "0.8rem"
        }

        if(endDateWorkExperienceDateInput) {
            endDateWorkExperienceDateInput.classList.remove("is-invalid");
            endDateWorkExperienceDateInput.classList.add("is-valid");
        }

        if(errorEndDateWorkExperienceMessages) {
            errorEndDateWorkExperienceMessages.innerText = "";
        }

    };

    if(startDateWorkExperienceDateInput) {

        const startDateWorkExperienceValue = startDateWorkExperienceDateInput?.value.trim();

        if (startDateWorkExperienceValue === "") {

            if (successStartDateWorkExperienceMessage) {
                successStartDateWorkExperienceMessage.innerText = "";
            }
        
            if (startDateWorkExperienceDateInput) {
                startDateWorkExperienceDateInput.classList.remove("is-valid");
            }
        
           
        } else {
        
            setStartDateWorkExperienceSuccessFeedBack("Ottimo lavoro, la data di inizio lavoro è stata inserita nel CV");
        
        }
    }

    if(endDateWorkExperienceDateInput) {

        const endDateWorkExperienceValue: string = endDateWorkExperienceDateInput?.value.trim();
        const isChecked: boolean | undefined = isEmployedCheckbox?.checked;

        if (endDateWorkExperienceValue === "") {

            if (successEndDateWorkExperienceMessage) {
                successEndDateWorkExperienceMessage.innerText = "";
            }
        
            if (endDateWorkExperienceDateInput) {
                endDateWorkExperienceDateInput.classList.remove("is-valid");
            }
         
        } else {

            if(isChecked) {

                if(successEndDateWorkExperienceMessage) {
                    successEndDateWorkExperienceMessage.innerText = "";
                }
                
                endDateWorkExperienceDateInput.classList.remove("is-valid");

            } else {
        
                setEndDateWorkExperienceSuccessFeedBack("Ottimo lavoro, la data di fine lavoro è stata inserita nel CV");
        
            }

        }
   
    }
}

export function checkCurrentJob(index: number): void {

    const endDateWorkExperienceDateInput: HTMLInputElement | null = document.querySelector(`#endDateInputWorkExperience${index}`);
    const successEndDateWorkExperienceMessage: HTMLDivElement | null = document.querySelector(`#success-endDateWorkExperience-message${index}`);
    const isEmployedCheckbox = document.getElementById("checkboxNoLabel") as HTMLInputElement | null;

    if(endDateWorkExperienceDateInput) {

        const isChecked: boolean | undefined = isEmployedCheckbox?.checked;

        if(isChecked) {

            if(successEndDateWorkExperienceMessage) {
                successEndDateWorkExperienceMessage.innerText = "";
                endDateWorkExperienceDateInput.classList.remove("is-valid");
            }

        }

    }

}

// Education Validations 

export function checkQualificationsSelect(index:number): void {

    const qualificationsSelect: HTMLSelectElement | null = document.querySelector(`#selectQualification${index}`);
    const errorQualificationMessage: HTMLDivElement | null = document.querySelector(`#error-qualification-message${index}`);
    const successQualificationMessage: HTMLDivElement | null = document.querySelector(`#success-qualification-message${index}`);

    const setQualificationSuccessFeedback = (message:string) => {

        if (successQualificationMessage) {
            successQualificationMessage.innerText = message;
            successQualificationMessage.classList.add("success-user-data", "fw-bolder");
            successQualificationMessage.style.fontSize = "0.8rem";
        }

        if (qualificationsSelect) {
            qualificationsSelect.classList.remove("is-invalid");
            qualificationsSelect.classList.add("is-valid");
        }

        if (errorQualificationMessage) {
            errorQualificationMessage.innerText = "";
        }

    };

    if (qualificationsSelect) {

        const qualificationOption = qualificationsSelect.value.trim();

        if (qualificationOption) {

            setQualificationSuccessFeedback("Ottimo lavoro, il titolo di studio è stato inserito nel CV");

        } 

    } 
    
};

export function checkFieldOfStudyTextInput(index: number): void {

    const fieldOfStudyTextInput: HTMLInputElement | null = document.querySelector(`#textInputFieldOfStudy${index}`);
    const errorFieldOfStudyMessage: HTMLDivElement | null = document.querySelector(`#error-field-study-message${index}`);
    const successFieldOfStudyMessage: HTMLDivElement | null = document.querySelector(`#success-field-study-message${index}`);

    const setFieldOfStudySuccessFeedback = (message:string) => {

        if(successFieldOfStudyMessage) {
            successFieldOfStudyMessage.innerText = message;
            successFieldOfStudyMessage.classList.add("success-user-data", "fw-bolder");
            successFieldOfStudyMessage.style.fontSize = "0.8rem";
        }

        if(fieldOfStudyTextInput) {
            fieldOfStudyTextInput.classList.remove("is-invalid");
            fieldOfStudyTextInput.classList.add("is-valid");
        }

        if(errorFieldOfStudyMessage) {
            errorFieldOfStudyMessage.innerText = "";
        }

    };

    if(fieldOfStudyTextInput) {

        const fieldOfStudyValue = fieldOfStudyTextInput.value.trim();

        if(fieldOfStudyValue === "") {

            if(successFieldOfStudyMessage) {
                successFieldOfStudyMessage.innerText = "";
            }

            if (fieldOfStudyTextInput) {
                fieldOfStudyTextInput.classList.remove("is-valid");
            }

        } else {

            setFieldOfStudySuccessFeedback("Ottimo lavoro, il campo di studio è stato inserito nel CV");

        }
    
    }

};

export function checkEducationTypeTextInput(index: number): void {

    const educationTypeTextInput: HTMLInputElement | null = document.querySelector(`#textInputEducationType${index}`);
    const errorEducationTypeMessages: HTMLDivElement | null = document.querySelector(`#error-education-type-messages${index}`);
    const successEducationTypeMessage: HTMLDivElement | null = document.querySelector(`#success-education-type-message${index}`);

    const setEducationTypeSuccessFeedback = (message:string) => {

        if(successEducationTypeMessage) {
            successEducationTypeMessage.innerText = message;
            successEducationTypeMessage.classList.add("success-user-data", "fw-bolder");
            successEducationTypeMessage.style.fontSize = "0.8rem";
        }

        if(educationTypeTextInput) {
            educationTypeTextInput.classList.remove("is-invalid");
            educationTypeTextInput.classList.add("is-valid");
        }

        if(errorEducationTypeMessages) {
            errorEducationTypeMessages.innerText = "";
        }

    };

    if(educationTypeTextInput) {

        const educationTypeValue = educationTypeTextInput.value.trim();

        if(educationTypeValue === "") {

            if(successEducationTypeMessage) {
                successEducationTypeMessage.innerText = "";
            }

            if (educationTypeTextInput) {
                educationTypeTextInput.classList.remove("is-valid");
            }

        } else {

            setEducationTypeSuccessFeedback("Ottimo lavoro, l'ente di formazione è stato inserito nel CV");

        }

        
    
    }

};

export function checkEducationGoalsTextArea(index:number): void {

    const educationGoalsTextArea: HTMLTextAreaElement | null = document.querySelector(`#formInputEducationGoals${index}`);
    const errorEducationGoalsMessages: HTMLDivElement | null = document.querySelector(`#error-education-goals-messages${index}`);
    const successEducationGoalsMessage: HTMLDivElement | null = document.querySelector(`#success-education-goals-message${index}`);

    const setProfileSummaryErrorFeedBack = (message: string) => {

        if(errorEducationGoalsMessages) {
            errorEducationGoalsMessages.innerText = message;
            errorEducationGoalsMessages.classList.add("error-user-data", "fw-bolder");
            errorEducationGoalsMessages.style.fontSize = "0.8rem";
        }

        if(educationGoalsTextArea) {
            educationGoalsTextArea.classList.add("is-invalid");
        }

        if(successEducationGoalsMessage) {
            successEducationGoalsMessage.innerText = "";
        }

    };

    const setProfileSummarySuccessFeedback = (message: string) => {

        if(successEducationGoalsMessage) {
            successEducationGoalsMessage.innerText = message;
            successEducationGoalsMessage.classList.add("success-user-data", "fw-bolder");
            successEducationGoalsMessage.style.fontSize = "0.8rem"
        }

        if(educationGoalsTextArea) {
            educationGoalsTextArea.classList.remove("is-invalid");
            educationGoalsTextArea.classList.add("is-valid");
        }

        if(errorEducationGoalsMessages) {
            errorEducationGoalsMessages.innerText = "";
        }
    };

    if(educationGoalsTextArea) {

        const educationGoalsValue = educationGoalsTextArea.value.trim();

        if(educationGoalsValue === "") {

            if(successEducationGoalsMessage) {
                successEducationGoalsMessage.innerText = "";
            }

            if (educationGoalsTextArea) {
                educationGoalsTextArea.classList.remove("is-valid");
            }

        } else if(educationGoalsValue.length >= 500) {

            setProfileSummaryErrorFeedBack("Mi dispiace, il campo risultati accademici raggiunti non può contenere più di 500 caratteri");

        } else {

            setProfileSummarySuccessFeedback ("Ottimo lavoro, il campo risultati accademici raggiunti è stato inserito nel CV");

        }
    
    }

};

export function checkEndAcademicEducationDateInput(index: number): void {

    const endDateAcademicEducationDateInput: HTMLInputElement | null = document.querySelector(`#endDateInputAcademicEducation${index}`);
    const errorEndDateAcademicEducationMessages: HTMLDivElement | null = document.querySelector(`#error-endDateAcademicEducation-messages${index}`);
    const successEndDateAcademicEducationMessage: HTMLDivElement | null = document.querySelector(`#success-endDateAcademicEducation-message${index}`);

    const setEndDateAcademicEducationSuccessFeedBack = (message: string) => {

        if(successEndDateAcademicEducationMessage) {
            successEndDateAcademicEducationMessage.innerText = message;
            successEndDateAcademicEducationMessage.classList.add("success-user-data", "fw-bolder");
            successEndDateAcademicEducationMessage.style.fontSize = "0.8rem"
        }

        if(endDateAcademicEducationDateInput) {
            endDateAcademicEducationDateInput.classList.remove("is-invalid");
            endDateAcademicEducationDateInput.classList.add("is-valid");
        }

        if(errorEndDateAcademicEducationMessages) {
            errorEndDateAcademicEducationMessages.innerText = "";
        }

    };

    if(endDateAcademicEducationDateInput) {

        const endDateAcademicEducationValue = endDateAcademicEducationDateInput.value.trim();

        if(endDateAcademicEducationValue === "") {

            if(successEndDateAcademicEducationMessage) {
                successEndDateAcademicEducationMessage.innerText = "";
            }

            if (endDateAcademicEducationDateInput) {
                endDateAcademicEducationDateInput.classList.remove("is-valid");
            }
            

        } else {

            setEndDateAcademicEducationSuccessFeedBack ("Ottimo lavoro, la data di fine studio è stata inserito nel CV");

        }
  
    }

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

    const setAuthSignSuccessFeedback = (message: string) => {

        if(successAuthSignMessage) {
            successAuthSignMessage.innerText = message;
            successAuthSignMessage.classList.add("success-user-data", "fw-bolder");
            successAuthSignMessage.style.fontSize = "0.8rem"
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




            
        