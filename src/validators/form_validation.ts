
export function checkNameInput(): void {

    const userNameInput: HTMLInputElement | null = document.querySelector("[name='name']");
    const errorNameMessages: HTMLDivElement | null = document.querySelector(".error-name-messages");
    const successNameMessage: HTMLDivElement | null = document.querySelector(".success-name-message");
    const namePattern = /^[A-Za-z\s]+$/;

    const setNameErrorFeedBack = (message:string) => {

        if(errorNameMessages) {
            errorNameMessages.innerText = message;
            errorNameMessages.classList.add("error-user-data", "fw-medium");
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
            successNameMessage.classList.add("success-user-data", "fw-medium");
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

            setNameErrorFeedBack("Il campo nome è obbligatorio");

        } else if(!namePattern.test(userNameValue)) {

            setNameErrorFeedBack("Il campo nome deve contenere solo lettere maiuscole o minuscuole");

        } else if(userNameValue.length > 30) {

            setNameErrorFeedBack("Il campo nome non può avere più di 30 caratteri");

        } else {

            setNameSuccessFeedback("Il campo nome è corretto");

        }
    
    }

};

export function checkSurnameInput() {

    const userSurnameInput: HTMLInputElement | null = document.querySelector("[name='surname']");
    const errorSurnameMessages: HTMLDivElement | null = document.querySelector(".error-surname-messages");
    const successSurnameMessage: HTMLDivElement | null = document.querySelector(".success-surname-message");
    const surnamePattern = /^[A-Za-z\s]+$/;

    const setSurnameErrorFeedBack = (message: string) => {

        if(errorSurnameMessages) {
            errorSurnameMessages.innerText = message;
            errorSurnameMessages.classList.add("error-user-data", "fw-medium");
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
            successSurnameMessage.classList.add("success-user-data", "fw-medium");
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

            setSurnameErrorFeedBack("Il campo cognome è obbligatorio");

        } else if(!surnamePattern.test(userSurnameValue)) {

            setSurnameErrorFeedBack("Il campo cognome deve contenere solo lettere maiuscole o minuscole");

        } else if(userSurnameValue.length > 30) {

            setSurnameErrorFeedBack("Il campo cognome non può avere più di 30 caratteri");

        } else {

            setSurnameSuccessFeedback ("Il campo cognome è corretto");

        }
    
    }

};

export function checkProfessionInput() {

    const userProfessionInput: HTMLInputElement | null = document.querySelector("[name='profession']");
    const errorProfessionMessages: HTMLDivElement | null = document.querySelector(".error-profession-messages");
    const successProfessionMessage: HTMLDivElement | null = document.querySelector(".success-profession-message");
    const professionPattern = /^[A-Za-z\s]+$/;

    const setProfessionErrorFeedbak = (message:string) => {

        if(errorProfessionMessages) {
            errorProfessionMessages.innerText = message;
            errorProfessionMessages.classList.add("error-user-data", "fw-medium");
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
            successProfessionMessage.classList.add("success-user-data", "fw-medium");
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

            setProfessionErrorFeedbak("Il campo professione è obbligatorio");

        } else if(!professionPattern.test(userProfessionValue)) {

            setProfessionErrorFeedbak("Il campo professione deve contenere solo lettere maiuscole o minuscole");

        } else if(userProfessionValue.length > 40) {

            setProfessionErrorFeedbak("Il campo professione non può avere più di 40 caratteri");

        } else {

            setProfessionSuccessFeedback("Il campo professione è corretto");

        }
    
    }

};

export function checkBirthPlaceInput() { 

    const userBirthPlaceInput: HTMLInputElement | null = document.querySelector("[name='birthDate']");
    const errorBirthPlaceMessages: HTMLDivElement | null = document.querySelector(".error-birthplace-messages");
    const successBirthPlaceMessage: HTMLDivElement | null = document.querySelector(".success-birthplace-message");
    const birthPlacePattern = /^[A-Za-z\s]+$/;

    const setBirthPlaceErrorFeedback = (message:string) => {

        if(errorBirthPlaceMessages) {
            errorBirthPlaceMessages.innerText = message;
            errorBirthPlaceMessages.classList.add("error-user-data", "fw-medium");
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
            successBirthPlaceMessage.classList.add("success-user-data", "fw-medium");
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

            setBirthPlaceErrorFeedback("Il campo luogo di nascita è obbligatorio");

        } else if(!birthPlacePattern.test(userBirthPlaceValue)) {

            setBirthPlaceErrorFeedback("Il campo luogo di nascita deve contenere solo lettere maiuscole o minuscole");

        } else if(userBirthPlaceValue.length > 40) {

            setBirthPlaceErrorFeedback("Il campo luogo di nascita non può avere più di 40 caratteri");

        } else {

            setBirthPlaceSuccessFeedback("Il campo luogo di nascita è corretto");

        }

    }

};

export function checkAddressInput() {

    const userAddressInput: HTMLInputElement | null = document.querySelector("[name='address']");
    const errorAddressMessages: HTMLDivElement | null = document.querySelector(".error-address-messages");
    const successAddressMessage: HTMLDivElement | null = document.querySelector(".success-address-message");
    const addressRegex = /^[A-Za-zÀ-ÿ'\s]+ \d{1,5}, \d{5} [A-Za-zÀ-ÿ\s]+$/;

    const setAddressErrorFeedback = (message:string) => {

        if(errorAddressMessages) {
            errorAddressMessages.innerText = message;
            errorAddressMessages.classList.add("error-user-data", "fw-medium");
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
             successAddressMessage.classList.add("success-user-data", "fw-medium");
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
    
            setAddressErrorFeedback("Il campo residenza/domicilio è obbligatorio");
    
        } else if(!addressRegex.test(userAddressValue)) {
            
            setAddressErrorFeedback("Il campo residenza/domicilio non è corretto");
            
        } else {
            
            setBirthPlaceSuccessFeedback("Il campo residenza/domicilio è corretto");

        }
    
    }

};

export function checkPhonePrefixSelect() {
    
    const userPhonePrefixSelect: HTMLInputElement | null = document.querySelector("[name='phonePrefix']");
    const errorPhonePrefixMessage: HTMLDivElement | null = document.querySelector(".error-phoneprefix-message");
    const successPhonePrefixMessage: HTMLDivElement | null = document.querySelector(".success-phoneprefix-message");

    const setPhonePrefixErrorFeedback = (message:string) => {

        if(errorPhonePrefixMessage) {
            errorPhonePrefixMessage.innerText = message;
            errorPhonePrefixMessage.classList.add("error-user-data", "fw-medium");
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
            successPhonePrefixMessage.classList.add("success-user-data", "fw-medium");
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

            setPhonePrefixErrorFeedback("Seleziona almeno un prefisso telefonico");

        } else {

            setPhonePrefixSuccessFeedback("Hai selezionato un prefisso telefonico");

        }

    } 

};

export function checkPhoneInput() {

    const userPhoneInput: HTMLInputElement | null = document.querySelector("[name='phone']");
    const errorPhoneMessages: HTMLDivElement | null = document.querySelector(".error-phone-messages");
    const successPhoneMessage: HTMLDivElement | null = document.querySelector(".success-phone-message");
    const PhonePattern = /^\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}$/;

    const setBirthPlaceErrorFeedback = (message:string) => {

        if(errorPhoneMessages) {
            errorPhoneMessages.innerText = message;
            errorPhoneMessages.classList.add("error-user-data", "fw-medium");
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
            successPhoneMessage.classList.add("success-user-data", "fw-medium");
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

            setBirthPlaceErrorFeedback("Il campo del numero di cellulare è obbligatorio");

        } else if(!PhonePattern.test(userPhoneValue)) {

            setBirthPlaceErrorFeedback("Il campo del numero di cellulare inserito non è valido");

        } else if(userPhoneValue.length >= 15) {

            setBirthPlaceErrorFeedback("Il campo del numero di cellulare non può avere più di 15 numeri");

        } else {

            setBirthPlaceSuccessFeedback("Il campo del numero di cellulare è corretto");

        }

    }
}; 

export function checkEmailInput() {
        
    const userEmailInput: HTMLInputElement | null = document.querySelector("[name='email']");
    const errorEmailMessages: HTMLDivElement | null = document.querySelector(".error-email-messages");
    const successEmailMessage: HTMLDivElement | null = document.querySelector(".success-email-message");
    const emailPattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    const setEmailErrorFeedBack = (message: string) => {

        if(errorEmailMessages) {
            errorEmailMessages.innerText = message;
            errorEmailMessages.classList.add("error-user-data", "fw-medium");
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
            successEmailMessage.classList.add("success-user-data", "fw-medium");
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

            setEmailErrorFeedBack("Il campo email è obbligatorio");

        } else if(!emailPattern.test(userEmailValue)) {

            setEmailErrorFeedBack("Mi dispiace, il campo email contiene caratteri non validi");

        } else if(userEmailValue.length >= 30) {

            setEmailErrorFeedBack("Mi dispiace, l'email che hai inserito non è valida");

        } else {

            setEmailSuccessFeedback("Ottimo, il campo email è corretto");

        }

    }

};

export function checkProfileSummary(){

    const profileSummaryTextArea: HTMLTextAreaElement | null = document.querySelector("[name='profileSummary']");
    const errorProfileSummaryMessages: HTMLDivElement | null = document.querySelector(".error-profile-summary-messages");
    const successProfileSummaryMessage: HTMLDivElement | null = document.querySelector(".success-profile-summary-message");

    const setProfileSummaryErrorFeedBack = (message: string) => {

        if(errorProfileSummaryMessages) {
            errorProfileSummaryMessages.innerText = message;
            errorProfileSummaryMessages.classList.add("error-user-data", "fw-medium");
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
            successProfileSummaryMessage.classList.add("success-user-data", "fw-medium");
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

            setProfileSummaryErrorFeedBack("Il campo profilo personale è obbligatorio");

        } else if(profileSummaryValue.length >= 500) {

            setProfileSummaryErrorFeedBack("Mi dispiace, il campo profilo personale non può contenere più di 500 caratteri");

        } else {

            setProfileSummarySuccessFeedback ("Il campo profilo personale è corretto");

        }
    
    }

};

export function checkDigitalSkills() {

    const digitalSkillsTextArea: HTMLTextAreaElement | null = document.querySelector("[name='digitalSkills']");
    const errorDigitalSkillsMessages: HTMLDivElement | null = document.querySelector(".error-digital-skills-messages");
    const successDigitalSkillsMessage: HTMLDivElement | null = document.querySelector(".success-digital-skills-message");

    const setDigitalSkillsErrorFeedBack = (message: string) => {

        if(errorDigitalSkillsMessages) {
            errorDigitalSkillsMessages.innerText = message;
            errorDigitalSkillsMessages.classList.add("error-user-data", "fw-medium");
            errorDigitalSkillsMessages.style.fontSize = "0.8rem";
        }

        if(digitalSkillsTextArea) {
            digitalSkillsTextArea.classList.add("is-invalid");
        }

        if(successDigitalSkillsMessage) {
            successDigitalSkillsMessage.innerText = "";
        }

    };

    const setDigitalSkillsSuccessFeedback = (message: string) => {

        if(successDigitalSkillsMessage) {
            successDigitalSkillsMessage.innerText = message;
            successDigitalSkillsMessage.classList.add("success-user-data", "fw-medium");
            successDigitalSkillsMessage.style.fontSize = "0.8rem"
        }

        if(digitalSkillsTextArea) {
            digitalSkillsTextArea.classList.remove("is-invalid");
            digitalSkillsTextArea.classList.add("is-valid");
        }

        if(errorDigitalSkillsMessages) {
            errorDigitalSkillsMessages.innerText = "";
        }
    };

    if(digitalSkillsTextArea) {

        const digitalSkillsValue = digitalSkillsTextArea.value.trim();

        if( digitalSkillsValue === "") {

            setDigitalSkillsErrorFeedBack("Il campo competenze digitali è obbligatorio");

        } else if(digitalSkillsValue.length >= 500) {

            setDigitalSkillsErrorFeedBack("Il campo competenze digitali non può avere più di 500 caratteri");

        } else {

            setDigitalSkillsSuccessFeedback("Il campo competenze digitali è corretto");

        }
    
    }
};

export function checkProtectedCategoryRadios() {
    const userProtectedCategoryRadios: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="protectedCategoryRadioOptions"]');
    const errorProtectedCategoryMessage: HTMLDivElement | null = document.querySelector(".error-protected-category-message");
    const successProtectedCategoryMessage: HTMLDivElement | null = document.querySelector(".success-protected-category-message");
    let isSelected = false;

    // Funzione per impostare il messaggio di errore
    const setProtectedCategoryErrorFeedBack = (message: string) => {
        if (errorProtectedCategoryMessage) {
            errorProtectedCategoryMessage.innerText = message;
            errorProtectedCategoryMessage.classList.add("error-user-data", "fw-medium");
            errorProtectedCategoryMessage.style.fontSize = "0.8rem";
        }

        userProtectedCategoryRadios.forEach(radio => {
            radio.classList.add("is-invalid");
        });

        if (successProtectedCategoryMessage) {
            successProtectedCategoryMessage.innerText = "";
        }
    };

    // Funzione per impostare il messaggio di successo
    const setProtectedCategorySuccessFeedback = (message: string) => {
        if (successProtectedCategoryMessage) {
            successProtectedCategoryMessage.innerText = message;
            successProtectedCategoryMessage.classList.add("success-user-data", "fw-medium");
            successProtectedCategoryMessage.style.fontSize = "0.8rem";
        }

        userProtectedCategoryRadios.forEach(radio => {
            radio.classList.remove("is-invalid");
            radio.classList.add("is-valid");
        });

        if (errorProtectedCategoryMessage) {
            errorProtectedCategoryMessage.innerText = "";
        }
    };

    // Verifica se almeno un radio button è selezionato
    userProtectedCategoryRadios.forEach(radio => {
        if (radio.checked) {
            isSelected = true;
        }
    });

    // Mostra il messaggio di errore se nessun radio button è selezionato
    if (!isSelected) {
        setProtectedCategoryErrorFeedBack("Devi selezionare almeno un'opzione");
    } else {
        setProtectedCategorySuccessFeedback('Opzione selezionata correttamente');
    }
}

export function checklanguageSelect() {

    const userLanguageSelect: HTMLInputElement | null = document.querySelector("[name='languages']");
    const errorLanguageMessage: HTMLDivElement | null = document.querySelector(".error-language-message");
    const successLanguageMessage: HTMLDivElement | null = document.querySelector(".success-language-message");

    const setLanguageErrorFeedback = (message:string) => {

        if(errorLanguageMessage) {
            errorLanguageMessage.innerText = message;
            errorLanguageMessage.classList.add("error-user-data", "fw-medium");
            errorLanguageMessage.style.fontSize = "0.8rem";
        }

        if(userLanguageSelect) {
            userLanguageSelect.classList.add("is-invalid");
        }

        if(successLanguageMessage) {
            successLanguageMessage.innerText = "";
        }

    };

    const setLanguageSuccessFeedback = (message:string) => {

        if(successLanguageMessage) {
            successLanguageMessage.innerText = message;
            successLanguageMessage.classList.add("success-user-data", "fw-medium");
            successLanguageMessage.style.fontSize = "0.8rem";
        }

        if(userLanguageSelect) {
            userLanguageSelect.classList.remove("is-invalid");
            userLanguageSelect.classList.add("is-valid");
        }

        if(errorLanguageMessage) {
            errorLanguageMessage.innerText = "";
        }

    };

    if(userLanguageSelect) {

        const userLanguageOption = userLanguageSelect.value.trim();

        if(userLanguageOption === "") {

            setLanguageErrorFeedback("Seleziona almeno una lingua");

        } else {

            setLanguageSuccessFeedback("Hai selezionato una lingua");

        }

    } 

};

export function checklanguageLevelSelect() {

    const userLanguageLevelSelect: HTMLInputElement | null = document.querySelector("[name='languageLevels']");
    const errorLanguageLevelMessage: HTMLDivElement | null = document.querySelector(".error-language-level-message");
    const successLanguageLevelMessage: HTMLDivElement | null = document.querySelector(".success-language-level-message");

    const setLanguageLevelErrorFeedback = (message:string) => {

        if(errorLanguageLevelMessage) {
            errorLanguageLevelMessage.innerText = message;
            errorLanguageLevelMessage.classList.add("error-user-data", "fw-medium");
            errorLanguageLevelMessage.style.fontSize = "0.8rem";
        }

        if(userLanguageLevelSelect) {
            userLanguageLevelSelect.classList.add("is-invalid");
        }

        if(successLanguageLevelMessage) {
            successLanguageLevelMessage.innerText = "";
        }

    };

    const setLanguageLevelSuccessFeedback = (message:string) => {

        if(successLanguageLevelMessage) {
            successLanguageLevelMessage.innerText = message;
            successLanguageLevelMessage.classList.add("success-user-data", "fw-medium");
            successLanguageLevelMessage.style.fontSize = "0.8rem";
        }

        if(userLanguageLevelSelect) {
            userLanguageLevelSelect.classList.remove("is-invalid");
            userLanguageLevelSelect.classList.add("is-valid");
        }

        if(errorLanguageLevelMessage) {
            errorLanguageLevelMessage.innerText = "";
        }

    };

    if(userLanguageLevelSelect) {

        const userLanguageLevelOption = userLanguageLevelSelect.value.trim();

        if(userLanguageLevelOption  === "") {

            setLanguageLevelErrorFeedback("Seleziona almeno un livello di lingua");

        } else {

            setLanguageLevelSuccessFeedback("Hai selezionato un livello di lingua");

        }

    } 

};

export function checkWorkExperienceResults(index: number) {

    const workExperienceResultsTextArea: HTMLTextAreaElement | null = document.querySelector(`#formInputTextAreaWorkExperienceResults${index}`);
    const errorWorkExperienceResultsMessages: HTMLDivElement | null = document.querySelector(`#error-work-experience-results-messages${index}`);
    const successWorkExperienceResultsMessage: HTMLDivElement | null = document.querySelector(`#success-work-experience-results-message${index}`);

    const setProfileSummaryErrorFeedBack = (message: string) => {

        if(errorWorkExperienceResultsMessages) {
            errorWorkExperienceResultsMessages.innerText = message;
            errorWorkExperienceResultsMessages.classList.add("error-user-data", "fw-medium");
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
            successWorkExperienceResultsMessage.classList.add("success-user-data", "fw-medium");
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

            setProfileSummarySuccessFeedback ("Ottimo, il campo profilo personale è corretto");

        }
    
    }

}

export function checkEducationGoals(index:number) {

    const educationGoalsTextArea: HTMLTextAreaElement | null = document.querySelector(`#formInputEducationGoals${index}`);
    const errorEducationGoalsMessages: HTMLDivElement | null = document.querySelector(`#error-education-goals-messages${index}`);
    const successEducationGoalsMessage: HTMLDivElement | null = document.querySelector(`#success-education-goals-message${index}`);

    const setProfileSummaryErrorFeedBack = (message: string) => {

        if(errorEducationGoalsMessages) {
            errorEducationGoalsMessages.innerText = message;
            errorEducationGoalsMessages.classList.add("error-user-data", "fw-medium");
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
            successEducationGoalsMessage.classList.add("success-user-data", "fw-medium");
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

            setProfileSummarySuccessFeedback ("Ottimo, il campo risultati accademici raggiunti è corretto");

        }
    
    }

}

            
        