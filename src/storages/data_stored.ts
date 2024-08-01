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

export function savebirthPlaceData(): void {

    const userBirthPlaceInput: HTMLInputElement | null = document.querySelector("[name='birthPlace']");

    if(userBirthPlaceInput) {
        localStorage.setItem("birthPlace", userBirthPlaceInput.value);       
    }

};