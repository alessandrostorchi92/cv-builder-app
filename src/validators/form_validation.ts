import { isPrivacyPolicyApproved, isAllowed } from "../stores/CvUser_data";

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
            setProfilePictureUploadedSuccessFeedback("Ottimo lavoro, hai caricato la tua immagine di profilo");
            if(errorProfilePictureUploadedMessage) {
                errorProfilePictureUploadedMessage.style.display = "none";
            }
        } 
    }

}
    
export function checkNameInput(): void {

    const userNameInput: HTMLInputElement | null = document.querySelector("[name='name']");
    const errorNameMessages: HTMLDivElement | null = document.querySelector(".error-name-messages");
    const successNameMessage: HTMLDivElement | null = document.querySelector(".success-name-message");
    const namePattern = /^[A-Za-z\s]+$/;

    const setNameErrorFeedBack = (message:string) => {

        if(errorNameMessages) {
            errorNameMessages.innerText = message;
            errorNameMessages.classList.add("error-user-data", "fw-bolder");
            errorNameMessages.style.fontSize = "0.8rem";
        }

        if(userNameInput) {
            userNameInput.classList.add("is-invalid");
        }

        if(successNameMessage) {
            successNameMessage.innerText = "";
        }

    };

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

            setNameErrorFeedBack("Mi dipiace, il nome è obbligatorio");

        } else if(!namePattern.test(userNameValue)) {

            setNameErrorFeedBack("Mi dipiace, il nome deve contenere solo lettere maiuscole o minuscuole");

        } else if(userNameValue.length > 30) {

            setNameErrorFeedBack("Mi dipiace, il nome non può contenere più di 30 caratteri");

        } else {

            setNameSuccessFeedback("Ottimo lavoro, il nome è corretto");

        }
    
    }

};

export function checkSurnameInput(): void {

    const userSurnameInput: HTMLInputElement | null = document.querySelector("[name='surname']");
    const errorSurnameMessages: HTMLDivElement | null = document.querySelector(".error-surname-messages");
    const successSurnameMessage: HTMLDivElement | null = document.querySelector(".success-surname-message");
    const surnamePattern = /^[A-Za-z\s]+$/;

    const setSurnameErrorFeedBack = (message: string) => {

        if(errorSurnameMessages) {
            errorSurnameMessages.innerText = message;
            errorSurnameMessages.classList.add("error-user-data", "fw-bolder");
            errorSurnameMessages.style.fontSize = "0.8rem";
        }

        if(userSurnameInput) {
            userSurnameInput.classList.add("is-invalid");
        }

        if(successSurnameMessage) {
            successSurnameMessage.innerText = "";
        }

    };

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

            setSurnameErrorFeedBack("Mi dispiace, ol cognome è obbligatorio");

        } else if(!surnamePattern.test(userSurnameValue)) {

            setSurnameErrorFeedBack("Mi dispiace, il cognome deve contenere solo lettere maiuscole o minuscole");

        } else if(userSurnameValue.length > 30) {

            setSurnameErrorFeedBack("Mi dispiace, il cognome non può avere più di 30 caratteri");

        } else {

            setSurnameSuccessFeedback ("Ottimo lavoro, il cognome è corretto");

        }
    
    }

};

export function checkProfessionInput(): void {

    const userProfessionInput: HTMLInputElement | null = document.querySelector("[name='profession']");
    const errorProfessionMessages: HTMLDivElement | null = document.querySelector(".error-profession-messages");
    const successProfessionMessage: HTMLDivElement | null = document.querySelector(".success-profession-message");

    const setProfessionErrorFeedbak = (message:string) => {

        if(errorProfessionMessages) {
            errorProfessionMessages.innerText = message;
            errorProfessionMessages.classList.add("error-user-data", "fw-bolder");
            errorProfessionMessages.style.fontSize = "0.8rem";
        }

        if(userProfessionInput) {
            userProfessionInput.classList.add("is-invalid");
        }

        if(successProfessionMessage) {
            successProfessionMessage.innerText = "";

        }

    };

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

            setProfessionErrorFeedbak("Mi dispiace, la professione è obbligatoria");

        } else if(userProfessionValue.length > 30) {

            setProfessionErrorFeedbak("Mi dispiace, la professione non può contenere più di 40 caratteri");

        } else {

            setProfessionSuccessFeedback("Ottimo lavoro, la professione è corretta");

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

        const userBirthPlaceValue = userNationalityInput.value.trim();

        if(userBirthPlaceValue === "") {

            setNationalityErrorFeedback("Mi dispiace, la nazionalità è obbligatoria");

        } else if(userBirthPlaceValue.length > 30) {

            setNationalityErrorFeedback("Mi dispiace, la nazionalità non può contenere più di 30 caratteri");

        } else {

            setNationalitySuccessFeedback("Ottimo lavoro, la nazionalità è corretta");

        }

    }

};

export function checkBirthPlaceInput(): void { 

    const userBirthPlaceInput: HTMLInputElement | null = document.querySelector("[name='birthPlace']");
    const errorBirthPlaceMessages: HTMLDivElement | null = document.querySelector(".error-birthplace-message");
    const successBirthPlaceMessage: HTMLDivElement | null = document.querySelector(".success-birthplace-message");

    const setBirthPlaceErrorFeedback = (message:string) => {

        if(errorBirthPlaceMessages) {
            errorBirthPlaceMessages.innerText = message;
            errorBirthPlaceMessages.classList.add("error-user-data", "fw-bolder");
            errorBirthPlaceMessages.style.fontSize = "0.8rem";
        }

        if(userBirthPlaceInput) {
            userBirthPlaceInput.classList.add("is-invalid");
        }

        if(successBirthPlaceMessage) {
            successBirthPlaceMessage.innerText = "";
        }

    };

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

            setBirthPlaceErrorFeedback("Mi dispiace, il luogo di nascita è obbligatorio");

        } else if(userBirthPlaceValue.length > 30) {

            setBirthPlaceErrorFeedback("Mi dispiace, Il luogo di nascita non può contenere più di 30 caratteri");

        } else {

            setBirthPlaceSuccessFeedback("Ottimo lavoro, Il luogo di nascita è corretto");

        }

    }

};

export function checkBirthDateInput(): void {

    const birthDateInput: HTMLInputElement | null = document.querySelector("[name='birthDate']");
    const errorBirthDateMessage: HTMLDivElement | null = document.querySelector(".error-birthdate-message");
    const successBirthDateMessage: HTMLDivElement | null = document.querySelector(".success-birthdate-message");

    const setBirthDateErrorFeedback = (message:string) => {

        if(errorBirthDateMessage) {
            errorBirthDateMessage.innerText = message;
            errorBirthDateMessage.classList.add("error-user-data", "fw-bolder");
            errorBirthDateMessage.style.fontSize = "0.8rem";
        }

        if(birthDateInput) {
            birthDateInput.classList.add("is-invalid");
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

        if(birthDateInput) {
            birthDateInput.classList.remove("is-invalid");
            birthDateInput.classList.add("is-valid");
        }

        if( errorBirthDateMessage) {
            errorBirthDateMessage.innerText = "";
        }

    };

    if(birthDateInput) {

        const birthDateValue = birthDateInput.value;

        console.log(birthDateValue);

        if(birthDateValue === "") {

            setBirthDateErrorFeedback("Mi dispiace, la data di nascita è obbligatoria");

        } else {

            setBirthDateSuccessFeedback("Ottimo lavoro, la data di nascita è corretta");
            
        }
        
    }

};

export function checkAddressInput(): void {

    const userAddressInput: HTMLInputElement | null = document.querySelector("[name='address']");
    const errorAddressMessages: HTMLDivElement | null = document.querySelector(".error-address-messages");
    const successAddressMessage: HTMLDivElement | null = document.querySelector(".success-address-message");
    const addressRegex = /^[A-Za-zÀ-ÿ'\s]+ \d{1,5}, \d{5} [A-Za-zÀ-ÿ\s]+$/;

    const setAddressErrorFeedback = (message:string) => {

        if(errorAddressMessages) {
            errorAddressMessages.innerText = message;
            errorAddressMessages.classList.add("error-user-data", "fw-bolder");
            errorAddressMessages.style.fontSize = "0.8rem";
        }

        if(userAddressInput) {
            userAddressInput.classList.add("is-invalid");
        }

        if(successAddressMessage) {
            successAddressMessage.innerText = "";
        }
    
    };

    const setBirthPlaceSuccessFeedback = (message:string) => {

        if(successAddressMessage) {
             successAddressMessage.innerText = message;
             successAddressMessage.classList.add("success-user-data", "fw-bolder");
             successAddressMessage.style.fontSize = "0.8rem";
            }
    
        if(userAddressInput) {
             userAddressInput.classList.remove("is-invalid");
             userAddressInput.classList.add("is-valid");
            }
    
        if(errorAddressMessages) {
             errorAddressMessages.innerText = "";
        }
    
        }; 
    
        if(userAddressInput) {

            const userAddressValue = userAddressInput.value.trim();
    
        if(userAddressValue === "") {
    
            setAddressErrorFeedback("Mi dispiace, il campo residenza/domicilio è obbligatorio");
    
        } else if(!addressRegex.test(userAddressValue)) {
            
            setAddressErrorFeedback("Mi dispiace, il campo residenza/domicilio non rispetta l'esempio fornito");
            
        } else {
            
            setBirthPlaceSuccessFeedback("Ottimo lavoro, il campo residenza/domicilio è corretto");

        }
    
    }

};

export function checkPhonePrefixSelect(): void {
    
    const userPhonePrefixSelect: HTMLInputElement | null = document.querySelector("[name='phonePrefix']");
    const errorPhonePrefixMessage: HTMLDivElement | null = document.querySelector(".error-phoneprefix-message");
    const successPhonePrefixMessage: HTMLDivElement | null = document.querySelector(".success-phoneprefix-message");

    const setPhonePrefixErrorFeedback = (message:string) => {

        if(errorPhonePrefixMessage) {
            errorPhonePrefixMessage.innerText = message;
            errorPhonePrefixMessage.classList.add("error-user-data", "fw-bolder");
            errorPhonePrefixMessage.style.fontSize = "0.8rem";
        }

        if(userPhonePrefixSelect) {
            userPhonePrefixSelect.classList.add("is-invalid");
        }

        if(successPhonePrefixMessage) {
            successPhonePrefixMessage.innerText = "";
        }

    };

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

        const userPhonePrefixOption = userPhonePrefixSelect.value.trim();

        if(userPhonePrefixOption === "") {

            setPhonePrefixErrorFeedback("Mi dispiace, seleziona almeno un prefisso telefonico");

        } else {

            setPhonePrefixSuccessFeedback("Ottimo lavoro, hai selezionato un prefisso telefonico");

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

            setBirthPlaceErrorFeedback("Mi dispiace, il numero di cellulare è obbligatorio");

        } else if(userPhoneValue.length >= 15) {

            setBirthPlaceErrorFeedback("Mi dispiace, il numero di cellulare non può contenere più di 15 numeri");

        } else if(!namePattern.test(userPhoneValue)) {

            setBirthPlaceErrorFeedback("Mi dispiace, il numero di cellulare può contenere solo numeri");

        } else {

            setBirthPlaceSuccessFeedback("Ottimo lavoro, il numero di cellulare è corretto");

        }

    }
}; 

export function checkEmailInput(): void {
        
    const userEmailInput: HTMLInputElement | null = document.querySelector("[name='email']");
    const errorEmailMessages: HTMLDivElement | null = document.querySelector(".error-email-messages");
    const successEmailMessage: HTMLDivElement | null = document.querySelector(".success-email-message");
    const emailPattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

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

            setEmailErrorFeedBack(" Mi dispiace, l'email è obbligatoria");

        } else if(!emailPattern.test(userEmailValue)) {

            setEmailErrorFeedBack("Mi dispiace, l'email inserita non rispetta l'esempio fornito");

        } else if(userEmailValue.length >= 50) {

            setEmailErrorFeedBack("Mi dispiace, l'email inserita non deve contenere più di 50 caratteri");

        } else {

            setEmailSuccessFeedback("Ottimo lavoro, l'email è corretta");

        }

    }

};

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

            setProfileSummaryErrorFeedBack("Mi dispiace, Il profilo personale è obbligatorio");

        } else if(profileSummaryValue.length >= 500) {

            setProfileSummaryErrorFeedBack("Mi dispiace, il profilo personale non può contenere più di 500 caratteri");

        } else {

            setProfileSummarySuccessFeedback ("Ottimo lavoro, il profilo personale è corretto");

        }
    
    }

};

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
    } else {
        setHasOwnCarErrorFeedback("Per favore, seleziona un'opzione");
    }
}

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

        const languageOption = languageSelect.value.trim();

        if (languageOption === "") {

            setLanguageErrorFeedback("Mi dispiace, seleziona almeno una lingua");

        } else {

            setLanguageSuccessFeedback("Ottimo lavoro, hai selezionato una lingua");

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

        const languageLevelOption = languageLevelSelect.value.trim();

        if (languageLevelOption === "") {

            setLanguageLevelErrorFeedback("Mi dispiace, seleziona almeno un livello di lingua");

        } else {

            setLanguageLevelSuccessFeedback("Ottimo lavoro, hai selezionato un livello di lingua");

        }

    } 

};

export function checkDrivingLicenceCheckboxesInput(): void {

    const drivingLicenceCheckBoxInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="drivingLicenceCheckBoxOptions"]');
    const successDrivingLicenceMessage: HTMLDivElement | null = document.querySelector(".success-driving-licence-message");
    const errorDrivingLicenceMessage: HTMLDivElement | null = document.querySelector(".error-driving-licence-message");
    let isSelected = false;

    drivingLicenceCheckBoxInputs.forEach(drivingLicenceCheckBox => {
        drivingLicenceCheckBox.classList.remove("is-valid");
    });

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

    const setDrivingLicenceErrorFeedback = (message: string) => {

        if (errorDrivingLicenceMessage) {
            errorDrivingLicenceMessage.innerText = message;
            errorDrivingLicenceMessage.classList.add("error-user-data", "fw-bolder");
            errorDrivingLicenceMessage.style.fontSize = "0.8rem";
            errorDrivingLicenceMessage.style.display = "block";
        }

        if (drivingLicenceCheckBoxInputs) {
            drivingLicenceCheckBoxInputs.forEach(drivingLicenceCheckBox => {
                drivingLicenceCheckBox.classList.add("is-invalid");  
            });
        }

        if (successDrivingLicenceMessage) {
            successDrivingLicenceMessage.style.display = "none";
        }

    };

    if (isSelected) {
        setDrivingLicenceSuccessFeedback("Ottimo lavoro, hai selezionato un'opzione");
    } else {
        setDrivingLicenceErrorFeedback("Per favore, seleziona almeno un'opzione");
    }
    
};

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

    const setHasOwnCarErrorFeedback = (message: string) => {

        if (errorHasOwnCarMessage) {
            errorHasOwnCarMessage.innerText = message;
            errorHasOwnCarMessage.classList.add("error-user-data", "fw-bolder");
            errorHasOwnCarMessage.style.fontSize = "0.8rem";
            errorHasOwnCarMessage.style.display = "block"; 
        }

        if (successHasOwnCarMessage) {
            successHasOwnCarMessage.style.display = "none";
        }

    };

    if (!isSelected) {
        setHasOwnCarSuccessFeedback("Ottimo lavoro, hai selezionato un'opzione");
    } else {
        setHasOwnCarErrorFeedback("Per favore, seleziona un'opzione");
    }

};

export function checkJobRoleTextInput(index: number): void {

    const jobRoleTextInput: HTMLInputElement | null = document.querySelector(`#textInputJobRole${index}`);
    const errorJobRoleMessages: HTMLDivElement | null = document.querySelector(`#error-job-role-messages${index}`);
    const successJobRoleMessage: HTMLDivElement | null = document.querySelector(`#success-job-role-message${index}`);


    const setJobRoleErrorFeedBack = (message:string) => {

        if(errorJobRoleMessages) {
            errorJobRoleMessages.innerText = message;
            errorJobRoleMessages.classList.add("error-user-data", "fw-bolder");
            errorJobRoleMessages.style.fontSize = "0.8rem";
        }

        if(jobRoleTextInput) {
            jobRoleTextInput.classList.add("is-invalid");
        }

        if(successJobRoleMessage) {
            successJobRoleMessage.innerText = "";
        }

    };

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

        if(errorJobRoleMessages) {
            errorJobRoleMessages.innerText = "";
        }

    };

    if(jobRoleTextInput) {

        const jobRoleValue = jobRoleTextInput.value.trim();

        if(jobRoleValue === "") {

            setJobRoleErrorFeedBack("Il campo ruolo è obbligatorio");

        } else if(jobRoleValue.length > 40) {

            setJobRoleErrorFeedBack("Mi dispiace, il campo ruolo non può contenere più di 30 caratteri");

        } else {

            setJobRoleSuccessFeedback("Ottimo lavoro, il campo ruolo è corretto");

        }
    
    }

};

export function checkCompanyTextInput(index: number): void {

    const companyTextInput: HTMLInputElement | null = document.querySelector(`#textInputCompany${index}`);
    const errorCompanyMessages: HTMLDivElement | null = document.querySelector(`#error-company-messages${index}`);
    const successCompanyMessage: HTMLDivElement | null = document.querySelector(`#success-company-message${index}`);

    const setCompanyErrorFeedBack = (message:string) => {

        if(errorCompanyMessages) {
            errorCompanyMessages.innerText = message;
            errorCompanyMessages.classList.add("error-user-data", "fw-bolder");
            errorCompanyMessages.style.fontSize = "0.8rem";
        }

        if(companyTextInput) {
            companyTextInput.classList.add("is-invalid");
        }

        if(successCompanyMessage) {
            successCompanyMessage.innerText = "";
        }

    };

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

            setCompanyErrorFeedBack("Mi dispiace, il nome dell'azienda è obbligatorio");

        } else if(companyValue.length > 30) {

            setCompanyErrorFeedBack("Mi dispiace, il nome dell'azienda non può contenere più di 30 caratteri");

        } else {

            setCompanySuccessFeedback("Ottimo lavoro, il nome dell'azienda è corretto");

        }
    
    }

};

export function checkLocationTextInput(index: number): void {

    const locationTextInput: HTMLInputElement | null = document.querySelector(`#textInputLocation${index}`);
    const errorLocationMessages: HTMLDivElement | null = document.querySelector(`#error-location-messages${index}`);
    const successLocationMessage: HTMLDivElement | null = document.querySelector(`#success-location-message${index}`);

    const setLocationErrorFeedBack = (message: string) => {
        if (errorLocationMessages) {
            errorLocationMessages.innerText = message;
            errorLocationMessages.classList.add("error-user-data", "fw-bolder");
            errorLocationMessages.style.fontSize = "0.8rem";
        }

        if (locationTextInput) {
            locationTextInput.classList.add("is-invalid");
        }

        if (successLocationMessage) {
            successLocationMessage.innerText = "";
        }
    };

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
            setLocationErrorFeedBack("Il luogo di lavoro è obbligatorio");
        } else if (locationValue.length > 30) {
            setLocationErrorFeedBack("Mi dispiace, il luogo di lavoro non può contenere più di 30 caratteri");
        } else {
            setLocationSuccessFeedback("Ottimo lavoro, il luogo di lavoro è corretto");
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

            setProfileSummaryErrorFeedBack("Mi dispiace, il campo risultati professionali ottenuti è obbligatorio");

        } else if(workExperienceResultsValue.length >= 500) {

            setProfileSummaryErrorFeedBack("Mi dispiace, il campo profilo personale non può contenere più di 500 caratteri");

        } else {

            setProfileSummarySuccessFeedback ("Ottimo lavoro, il campo profilo personale è corretto");

        }
    
    }

};

export function checkStartAndEndWorkExperienceDateInput(index: number): void {
    
    const startDateWorkExperienceDateInput: HTMLInputElement | null = document.querySelector(`#startDateInputWorkExperience${index}`);
    const errorStartDateWorkExperienceMessages: HTMLDivElement | null = document.querySelector(`#error-startDateWorkExperience-messages${index}`);
    const successStartDateWorkExperienceMessage: HTMLDivElement | null = document.querySelector(`#success-startDateWorkExperience-message${index}`);
    
    const setStartDateWorkExperienceErrorFeedBack = (message: string) => {

        if(errorStartDateWorkExperienceMessages) {
            errorStartDateWorkExperienceMessages.innerText = message;
            errorStartDateWorkExperienceMessages.classList.add("error-user-data", "fw-bolder");
            errorStartDateWorkExperienceMessages.style.fontSize = "0.8rem";
        }

        if(startDateWorkExperienceDateInput) {
            startDateWorkExperienceDateInput.classList.add("is-invalid");
        }

        if(successStartDateWorkExperienceMessage) {
            successStartDateWorkExperienceMessage.innerText = "";
        }
    };

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

    const setEndDateWorkExperienceErrorFeedBack = (message: string) => {

        if(errorEndDateWorkExperienceMessages) {
            errorEndDateWorkExperienceMessages.innerText = message;
            errorEndDateWorkExperienceMessages.classList.add("error-user-data", "fw-bolder");
            errorEndDateWorkExperienceMessages.style.fontSize = "0.8rem";
        }

        if(endDateWorkExperienceDateInput) {
            endDateWorkExperienceDateInput.classList.add("is-invalid");
        }

        if(successEndDateWorkExperienceMessage) {
            successEndDateWorkExperienceMessage.innerText = "";
        }
    };

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

    if(startDateWorkExperienceDateInput && endDateWorkExperienceDateInput) {

        const startDateWorkExperienceValue = startDateWorkExperienceDateInput.value.trim();
        const endDateWorkExperienceValue = endDateWorkExperienceDateInput.value.trim();

        if(startDateWorkExperienceValue === "" && endDateWorkExperienceValue === "") {

            setStartDateWorkExperienceErrorFeedBack("Mi dispiace, il campo data di inizio è obbligatorio");
            setEndDateWorkExperienceErrorFeedBack("Mi dispiace, il campo data di fine è obbligatorio");

        } else if(startDateWorkExperienceValue === "" && endDateWorkExperienceValue !== "") {

            setStartDateWorkExperienceErrorFeedBack("Mi dispiace, il campo data di inizio è obbligatorio");
            endDateWorkExperienceDateInput.classList.remove("is-invalid");
            errorEndDateWorkExperienceMessages?.remove();

        } else if(startDateWorkExperienceValue !== "" && endDateWorkExperienceValue === "") {

            setEndDateWorkExperienceErrorFeedBack("Mi dispiace, il campo data di fine è obbligatorio");
            startDateWorkExperienceDateInput.classList.remove("is-invalid");
            errorStartDateWorkExperienceMessages?.remove();
            
        } else {
                
            setStartDateWorkExperienceSuccessFeedBack("Ottimo lavoro, il campo data di inizio è corretto");
            setEndDateWorkExperienceSuccessFeedBack("Ottimo lavoro, il campo data di fine è corretto");

        }
  
    }

};

export function checkQualificationsSelect(index:number): void {

    const qualificationsSelect: HTMLSelectElement | null = document.querySelector(`#selectQualification${index}`);
    const errorQualificationMessage: HTMLDivElement | null = document.querySelector(`#error-qualification-message${index}`);
    const successQualificationMessage: HTMLDivElement | null = document.querySelector(`#success-qualification-message${index}`);
    
    const setQualificationErrorFeedback = (message:string) => {

        if (errorQualificationMessage) {
            errorQualificationMessage.innerText = message;
            errorQualificationMessage.classList.add("error-user-data", "fw-bolder");
            errorQualificationMessage.style.fontSize = "0.8rem";
        }

        if (qualificationsSelect) {
            qualificationsSelect.classList.add("is-invalid");
        }

        if (successQualificationMessage) {
            successQualificationMessage.innerText = "";
        }

    };

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

        if (qualificationOption === "") {

            setQualificationErrorFeedback("Per favore, seleziona almeno una qualifica");

        } else {

            setQualificationSuccessFeedback("Ottimo lavoro, hai selezionato una qualifica");

        }

    } 
    
};

export function checkFieldOfStudyTextInput(index: number): void {

    const fieldOfStudyTextInput: HTMLInputElement | null = document.querySelector(`#textInputFieldOfStudy${index}`);
    const errorFieldOfStudyMessage: HTMLDivElement | null = document.querySelector(`#error-field-study-message${index}`);
    const successFieldOfStudyMessage: HTMLDivElement | null = document.querySelector(`#success-field-study-message${index}`);


    const setFieldOfStudyErrorFeedBack = (message:string) => {

        if(errorFieldOfStudyMessage) {
            errorFieldOfStudyMessage.innerText = message;
            errorFieldOfStudyMessage.classList.add("error-user-data", "fw-bolder");
            errorFieldOfStudyMessage.style.fontSize = "0.8rem";
        }

        if(fieldOfStudyTextInput) {
            fieldOfStudyTextInput.classList.add("is-invalid");
        }

        if(successFieldOfStudyMessage) {
            successFieldOfStudyMessage.innerText = "";
        }

    };

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

            setFieldOfStudyErrorFeedBack("Il campo di studio è obbligatorio");

        } else {

            setFieldOfStudySuccessFeedback("Ottimo lavoro, il campo di studio è corretto");

        }
    
    }

};

export function checkEducationTypeTextInput(index: number): void {

    const educationTypeTextInput: HTMLInputElement | null = document.querySelector(`#textInputEducationType${index}`);
    const errorEducationTypeMessages: HTMLDivElement | null = document.querySelector(`#error-education-type-messages${index}`);
    const successEducationTypeMessage: HTMLDivElement | null = document.querySelector(`#success-education-type-message${index}`);


    const setEducationTypeErrorFeedBack = (message:string) => {

        if(errorEducationTypeMessages) {
            errorEducationTypeMessages.innerText = message;
            errorEducationTypeMessages.classList.add("error-user-data", "fw-bolder");
            errorEducationTypeMessages.style.fontSize = "0.8rem";
        }

        if(educationTypeTextInput) {
            educationTypeTextInput.classList.add("is-invalid");
        }

        if(successEducationTypeMessage) {
            successEducationTypeMessage.innerText = "";
        }

    };

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

            setEducationTypeErrorFeedBack("Mi dispiace, la tipologia di formazione è obbligatoria");

        } else if(educationTypeValue.length > 40) {

            setEducationTypeErrorFeedBack("Mi dispiace, la tipologia di formazione non può contenere più di 40 caratteri");

        } else {

            setEducationTypeSuccessFeedback("Ottimo lavoro, la tipologia di formazione è corretta");

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

            setProfileSummaryErrorFeedBack("Mi dispiace, il campo risultati accademici raggiunti ottenuti è obbligatorio");

        } else if(educationGoalsValue.length >= 500) {

            setProfileSummaryErrorFeedBack("Mi dispiace, il campo risultati accademici raggiunti non può contenere più di 500 caratteri");

        } else {

            setProfileSummarySuccessFeedback ("Ottimo lavoro, il campo risultati accademici raggiunti è corretto");

        }
    
    }

};

export function checkStartAndEndAcademicEducationDateInput(index: number): void {

    const startDateAcademicEducationDateInput: HTMLInputElement | null = document.querySelector(`#startDateInputAcademicEducation${index}`);
    const errorStartDateAcademicEducationMessages: HTMLDivElement | null = document.querySelector(`#error-startDateAcademicEducation-messages${index}`);
    const successStartDateAcademicEducationMessage: HTMLDivElement | null = document.querySelector(`#success-startDateAcademicEducation-message${index}`);
    
    const setStartDateAcademicEducationErrorFeedBack = (message: string) => {

        if(errorStartDateAcademicEducationMessages) {
            errorStartDateAcademicEducationMessages.innerText = message;
            errorStartDateAcademicEducationMessages.classList.add("error-user-data", "fw-bolder");
            errorStartDateAcademicEducationMessages.style.fontSize = "0.8rem";
        }

        if(startDateAcademicEducationDateInput) {
            startDateAcademicEducationDateInput.classList.add("is-invalid");
        }

        if(successStartDateAcademicEducationMessage) {
            successStartDateAcademicEducationMessage.innerText = "";
        }
    };

    const setStartDateAcademicEducationSuccessFeedBack = (message: string) => {

        if(successStartDateAcademicEducationMessage) {
            successStartDateAcademicEducationMessage.innerText = message;
            successStartDateAcademicEducationMessage.classList.add("success-user-data", "fw-bolder");
            successStartDateAcademicEducationMessage.style.fontSize = "0.8rem"
        }

        if(startDateAcademicEducationDateInput) {
            startDateAcademicEducationDateInput.classList.remove("is-invalid");
            startDateAcademicEducationDateInput.classList.add("is-valid");
        }

        if(errorStartDateAcademicEducationMessages) {
            errorStartDateAcademicEducationMessages.innerText = "";
        }

    };

    const endDateAcademicEducationDateInput: HTMLInputElement | null = document.querySelector(`#endDateInputAcademicEducation${index}`);
    const errorEndDateAcademicEducationMessages: HTMLDivElement | null = document.querySelector(`#error-endDateAcademicEducation-messages${index}`);
    const successEndDateAcademicEducationMessage: HTMLDivElement | null = document.querySelector(`#success-endDateAcademicEducation-message${index}`);

    const setEndDateAcademicEducationErrorFeedBack = (message: string) => {

        if(errorEndDateAcademicEducationMessages) {
            errorEndDateAcademicEducationMessages.innerText = message;
            errorEndDateAcademicEducationMessages.classList.add("error-user-data", "fw-bolder");
            errorEndDateAcademicEducationMessages.style.fontSize = "0.8rem";
        }

        if(endDateAcademicEducationDateInput) {
            endDateAcademicEducationDateInput.classList.add("is-invalid");
        }

        if(successEndDateAcademicEducationMessage) {
            successEndDateAcademicEducationMessage.innerText = "";
        }
    };

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

    if(startDateAcademicEducationDateInput && endDateAcademicEducationDateInput) {

        const startAcademicEducationValue = startDateAcademicEducationDateInput.value.trim();
        const endDateAcademicEducationValue = endDateAcademicEducationDateInput.value.trim();

        if(startAcademicEducationValue === "" && endDateAcademicEducationValue === "") {

            setStartDateAcademicEducationErrorFeedBack("Mi dispiace, il campo data di inizio è obbligatorio");
            setEndDateAcademicEducationErrorFeedBack("Mi dispiace, il campo data di fine è obbligatorio");

        } else if(startAcademicEducationValue === "" && endDateAcademicEducationValue  !== "") {

            setStartDateAcademicEducationErrorFeedBack("Mi dispiace, il campo data di inizio è obbligatorio");
            endDateAcademicEducationDateInput.classList.remove("is-invalid");
            errorEndDateAcademicEducationMessages?.remove();

        } else if(startAcademicEducationValue !== "" && endDateAcademicEducationValue  === "") {

            setEndDateAcademicEducationErrorFeedBack("Mi dispiace, il campo data di fine è obbligatorio");
            startDateAcademicEducationDateInput.classList.remove("is-invalid");
            errorStartDateAcademicEducationMessages?.remove();
            
        } else {
                
            setStartDateAcademicEducationSuccessFeedBack("Ottimo lavoro, la data di inizio inserita è corretta");
            setEndDateAcademicEducationSuccessFeedBack("Ottimo lavoro, la data di fine inserita è corretta");   

        }
  
    }

};

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

    const setCancSignSuccessFeedback = (message: string) => {

        if(successAuthSignMessage) {
            successAuthSignMessage.innerText = message;
            successAuthSignMessage.classList.add("success-user-data", "fw-bolder");
            successAuthSignMessage.style.fontSize = "0.8rem"
        }

        if(cancSignBtn) {
            cancSignBtn.classList.remove("is-invalid");
            cancSignBtn.classList.add("is-valid");
        }

        if(errorCancSignMessage) {
            errorCancSignMessage.innerHTML = "";
        }

    };

    isAllowed.subscribe((hasAllowed) => {

        if(hasAllowed) {
            setCancSignSuccessFeedback("Ottimo lavoro, l'autorizzazione è andata a buon fine");
        } else {
            setCancSignErrorFeedbak("Mi dispiace, non hai autorizzato la tua firma digitale");
        }

    });
}




            
        