import { formDataStore } from '../stores/form_store';
import * as formTypes from '../types/form_types'

export function storeUserData(attributeName: string, storageKey: string): void {
    const formInput: HTMLInputElement | null = document.querySelector(`[name='${attributeName}']`);

    if (formInput) {
        localStorage.setItem(storageKey, formInput.value);
    }

};

export function saveProtectedCategoryData(): void {

    const userProtectedCategoryRadios:  NodeListOf<HTMLInputElement> | null = document.querySelectorAll("[name='protectedCategoryRadioOptions']");

    userProtectedCategoryRadios.forEach((protectedCategoryRadio) => {
        if(protectedCategoryRadio.checked) {
            localStorage.setItem("protectedCategoryRadioOptions", protectedCategoryRadio.value); 
        }
    }); 
              
};

export function savelanguagesSkillsData() {

    formDataStore.update((currentDataStore: formTypes.FormData) => {

        localStorage.setItem('languagesSkills', JSON.stringify(currentDataStore.languagesSkills));

        return currentDataStore;

    });

};

export function saveDrivingLicenceData(): void {

    const userDrivingLicenceCheckBoxes: NodeListOf<HTMLInputElement> | null = document.querySelectorAll("[name='drivingLicenceCheckBoxOptions']");
    let selectedDrivingLicenceCheckBoxValues: string[] = [];

    userDrivingLicenceCheckBoxes.forEach((drivingLicenceCheckBox) => {
        if(drivingLicenceCheckBox.checked) {
            selectedDrivingLicenceCheckBoxValues.push(drivingLicenceCheckBox.value);
            selectedDrivingLicenceCheckBoxValues = selectedDrivingLicenceCheckBoxValues;
        }   
    });
    
    localStorage.setItem("drivingLicenceCheckBoxOptions", JSON.stringify(selectedDrivingLicenceCheckBoxValues));
};

export function saveIsHasOwnCarData(): void {

    const userIsHasOwnCarRadios:  NodeListOf<HTMLInputElement> | null = document.querySelectorAll("[name='isHasOwnCarRadioOptions']");

    userIsHasOwnCarRadios.forEach((isHasOwnCarRadio) => {
        if(isHasOwnCarRadio.checked) {
            localStorage.setItem("isHasOwnCarRadioOptions", isHasOwnCarRadio.value); 
        }
    }); 
              
};



