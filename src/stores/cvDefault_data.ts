import {formDataStore, formattedBirthDate} from "./CvUser_data";
import { derived } from 'svelte/store';

export const cvInitialData = derived(formDataStore, ($formDataStore) => ({

    name: (!$formDataStore.name || $formDataStore.name.trim() === "") ? "Nome" : $formDataStore.name,
    surname: (!$formDataStore.surname || $formDataStore.surname.trim() === "") ? "Cognome" : $formDataStore.surname,
    profession: (!$formDataStore.profession || $formDataStore.profession.trim() === "") ? "Professione" : $formDataStore.profession,
    nationality: (!$formDataStore.nationality || $formDataStore.nationality.trim() === "") ? "Stato di nascita" : $formDataStore.nationality,
    birthDate: !$formDataStore.birthDate ? "Data di nascita" : formattedBirthDate($formDataStore.birthDate),
    birthPlace: (!$formDataStore.birthPlace || $formDataStore.birthPlace.trim() === "") ? "Luogo di Nascita" : $formDataStore.birthPlace,
    hasOwnCar: !$formDataStore.hasOwnCar ? "Non specificato" : $formDataStore.hasOwnCar,
    drivingLicences: $formDataStore.drivingLicences.length === 0 ? "Tipologia Patenti" : $formDataStore.drivingLicences.join(", "),
    isProtectedCategory: !$formDataStore.isProtectedCategory ? "Non specificato" : $formDataStore.isProtectedCategory,
    address: (!$formDataStore.address || $formDataStore.address.trim() === "") ? "Indirizzo Postale" : $formDataStore.address,
    phonePrefix: !$formDataStore.phonePrefix ? "Prefisso" : $formDataStore.phonePrefix,
    phoneNumber: (!$formDataStore.phone || $formDataStore.phone.trim() === "") ? "Cellulare" : $formDataStore.phone,
    email: (!$formDataStore.email || $formDataStore.email.trim() === "") ? "Email" : $formDataStore.email,
    
}))
   