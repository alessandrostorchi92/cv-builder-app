export function saveNameData(): void {

    const userNameInput: HTMLInputElement | null = document.querySelector("[name='name']");

    if(userNameInput) {
        localStorage.setItem("name", userNameInput.value);    
    }

};

export function saveSurnameData(): void {

    const userSurnameInput: HTMLInputElement | null = document.querySelector("[name='surname']");

    if(userSurnameInput) {
        localStorage.setItem("surname", userSurnameInput.value);       
    }

};

export function saveProfessionData(): void {

    const userProfessionInput: HTMLInputElement | null = document.querySelector("[name='profession']");

    if(userProfessionInput) {
        localStorage.setItem("profession", userProfessionInput.value);       
    }

};

export function saveBirthPlaceData(): void {

    const userBirthPlaceInput: HTMLInputElement | null = document.querySelector("[name='birthPlace']");

    if(userBirthPlaceInput) {
        localStorage.setItem("birthPlace", userBirthPlaceInput.value);       
    }

};

export function saveBirthDateData(): void {

    const userBirthDateInput: HTMLInputElement | null = document.querySelector("[name='birthDate']");

    if(userBirthDateInput) {
        localStorage.setItem("birthDate", userBirthDateInput.value);       
    }

};

export function saveAddressData(): void {

    const userAddressInput: HTMLInputElement | null = document.querySelector("[name='address']");

    if(userAddressInput) {
        localStorage.setItem("address", userAddressInput.value);       
    }

};

export function savePhonePrefixData(): void {

    const userPhonePrefixInput: HTMLInputElement | null = document.querySelector("[name='phonePrefix']");

    if(userPhonePrefixInput) {
        localStorage.setItem("phonePrefix", userPhonePrefixInput.value);       
    }

}

export function savePhoneData(): void {

    const userPhoneInput: HTMLInputElement | null = document.querySelector("[name='phone']");

    if(userPhoneInput) {
        localStorage.setItem("phone", userPhoneInput.value);       
    }

};

export function saveEmailData(): void {

    const userEmailInput: HTMLInputElement | null = document.querySelector("[name='email']");

    if(userEmailInput) {
        localStorage.setItem("email", userEmailInput.value);       
    }

};

export function saveProfileSummaryData(): void {

    const userProfileSummaryInput: HTMLInputElement | null = document.querySelector("[name='profileSummary']");

    if(userProfileSummaryInput) {
        localStorage.setItem("profileSummary", userProfileSummaryInput.value);       
    }

};

export function saveProtectedCategoryData(): void {

    const userProtectedCategoryRadioInputs:  NodeListOf<HTMLInputElement> | null = document.querySelectorAll("[name='protectedCategoryRadioOptions']");

    userProtectedCategoryRadioInputs.forEach((protectedCategoryRadio) => {
        if(protectedCategoryRadio.checked) {
            localStorage.setItem("protectedCategoryRadioOptions", protectedCategoryRadio.value); 
        }
    }); 
              
};

export function saveDigitalSkillsData(): void {

    const userDigitalSkillsInput: HTMLInputElement | null = document.querySelector("[name='digitalSkills']");

    if(userDigitalSkillsInput) {
        localStorage.setItem("digitalSkills", userDigitalSkillsInput.value);       
    }

};

export function saveDrivingLicenceData(): void {

    const userDrivingLicenceInput: HTMLInputElement | null = document.querySelector("[name='drivingLicenceCheckBoxOptions']");

    if(userDrivingLicenceInput) {
        localStorage.setItem("drivingLicenceCheckBoxOptions", userDrivingLicenceInput.value);       
    }

};

