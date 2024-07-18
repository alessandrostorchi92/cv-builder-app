export function checkNameInput(): void {

    const userNameInput: HTMLInputElement | null = document.querySelector("[name='name']");
    const errorNameMessages: HTMLDivElement | null = document.querySelector(".error-name-messages");
    const successNameMessage: HTMLDivElement | null = document.querySelector(".success-name-message");
    const namePattern = /^[A-Za-z\s]+$/;

    const setNameErrorFeedBacks = (message:string) => {

        if(errorNameMessages) {
            errorNameMessages.innerText = message;
            errorNameMessages.classList.add("invalid-feedback", "fw-medium");
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
            successNameMessage.classList.add("valid-feedback", "fw-medium");
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

            setNameErrorFeedBacks("Il campo nome è obbligatorio");

        } else if(!namePattern.test(userNameValue)) {

            setNameErrorFeedBacks("Il campo nome deve contenere solo lettere maiuscole o minuscuole");

        } else if(userNameValue.length > 30) {

            setNameErrorFeedBacks("Il campo nome non può avere più di 30 caratteri");

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

    const setSurnameErrorFeedBacks = (message: string) => {

        if(errorSurnameMessages) {
            errorSurnameMessages.innerText = message;
            errorSurnameMessages.classList.add("invalid-feedback", "fw-medium");
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
            successSurnameMessage.classList.add("valid-feedback", "fw-medium");
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

            setSurnameErrorFeedBacks("Il campo cognome è obbligatorio");

        } else if(!surnamePattern.test(userSurnameValue)) {

            setSurnameErrorFeedBacks("Il campo cognome deve contenere solo lettere maiuscole o minuscole");

        } else if(userSurnameValue.length > 30) {

            setSurnameErrorFeedBacks("Il campo cognome non può avere più di 30 caratteri");

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

    const setProfessionErrorFeedbaks = (message:string) => {

        if(errorProfessionMessages) {
            errorProfessionMessages.innerText = message;
            errorProfessionMessages.classList.add("invalid-feedback", "fw-medium");
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
            successProfessionMessage.classList.add("valid-feedback", "fw-medium");
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

            setProfessionErrorFeedbaks("Il campo professione è obbligatorio");

        } else if(!professionPattern.test(userProfessionValue)) {

            setProfessionErrorFeedbaks("Il campo professione deve contenere solo lettere maiuscole o minuscole");

        } else if(userProfessionValue.length > 40) {

            setProfessionErrorFeedbaks("Il campo professione non può avere più di 40 caratteri");

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

    const setBirthPlaceErrorFeedbacks = (message:string) => {

        if(errorBirthPlaceMessages) {
            errorBirthPlaceMessages.innerText = message;
            errorBirthPlaceMessages.classList.add("invalid-feedback", "fw-medium");
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
            successBirthPlaceMessage.classList.add("valid-feedback", "fw-medium");
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

            setBirthPlaceErrorFeedbacks("Il campo luogo di nascita è obbligatorio");

        } else if(!birthPlacePattern.test(userBirthPlaceValue)) {

            setBirthPlaceErrorFeedbacks("Il campo luogo di nascita deve contenere solo lettere maiuscole o minuscole");

        } else if(userBirthPlaceValue.length > 40) {

            setBirthPlaceErrorFeedbacks("Il campo luogo di nascita non può avere più di 40 caratteri");

        } else {

            setBirthPlaceSuccessFeedback("Il campo luogo di nascita è corretto");

        }

    }

};
            
        