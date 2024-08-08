import { formDataStore } from '../stores/form_store';
import * as formTypes from '../types/form_types'

export function storeUserData(attributeName: string, storageKey: keyof formTypes.FormData): void {

    formDataStore.update((currentDataStore: formTypes.FormData) => {
        console.log(currentDataStore)
        localStorage.setItem(attributeName, JSON.stringify(currentDataStore[storageKey]));

        return {...currentDataStore};

    });

};






