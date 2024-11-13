<script lang="ts">

  import {formDataStore, getStoreUserData, updateStoreUserData, clearLocalStorage, isAllowed,
    isPrivacyPolicyApproved, tenantColor} from "../stores/CvUser_data";

  import PopupTemplates from "$lib/popupTemplates.svelte";
  import Template1 from "$lib/cvTemplate1.svelte";
  import Template2 from "$lib/cvTemplate2.svelte";
  import Template3 from "$lib/cvTemplate3.svelte";

  import { downloadCv } from "../api/cvGeneratorApi";
  import 'sweetalert2/dist/sweetalert2.min.css';
  import Swal from 'sweetalert2';

  import { onMount, afterUpdate } from "svelte";

  let showPopup: boolean = false;
  let isOverlay: boolean;
  let isModifyBtnDisabled: boolean = true;
  let isFormValid: boolean;

  function showCvTemplates(): void {
    showPopup = true;
    isModifyBtnDisabled = true;
  }

  function hideCvTemplates(): void {
    showPopup = false;
    isModifyBtnDisabled = false;
  }

  function selectTemplate(): void {
    isOverlay = false;
    showPopup = true;
  }

  function displaySelectedCvTemplates(event: CustomEvent): void {
    
    $formDataStore.selectedCvTemplate = event.detail.template;

    localStorage.setItem('selectedCvTemplate', $formDataStore.selectedCvTemplate);

    isModifyBtnDisabled = false;

  }

  function checkMandatoryInputs(
    inputName: string,
    errorMessageSelector: string,
    errorMessage: string
  ): void {
    const mandatoryInput: HTMLInputElement | null = document.querySelector(
      `[name='${inputName}']`
    );
    const errorMessages: HTMLDivElement | null =
      document.querySelector(errorMessageSelector);

    const setErrorFeedback = (message: string) => {
      if (errorMessages) {
        errorMessages.innerText = message;
        errorMessages.classList.add("error-user-data", "fw-bolder");
        errorMessages.style.fontSize = "0.8rem";
      }

      if (mandatoryInput) {
        mandatoryInput.classList.add("is-invalid");
      }
    };

    if (mandatoryInput) {
      const inputValue = mandatoryInput.value.trim();
      if (inputValue === "") {
        setErrorFeedback(errorMessage);
      }
    }
  }

  function checkNameInput(): void {
    checkMandatoryInputs(
      "name",
      ".error-name-message",
      "Il nome è obbligatorio. Per favore inseriscilo."
    );
  }

  function checkSurnameInput(): void {
    checkMandatoryInputs(
      "surname",
      ".error-surname-message",
      "Il cognome è obbligatorio. Per favore inseriscilo."
    );
  }

  function checkProfessionInput(): void {
    checkMandatoryInputs(
      "profession",
      ".error-profession-message",
      "Lo stato di nascita è obbligatorio. Per favore inseriscilo."
    );
  }

  function checkNationalityInput(): void {
    checkMandatoryInputs(
      "nationality",
      ".error-nationality-message",
      "Lo stato di nascita è obbligatorio. Per favore inseriscilo."
    );
  }

  function checkBirthPlaceInput(): void {
    checkMandatoryInputs(
      "birthPlace",
      ".error-birthplace-message",
      "Il luogo di nascita è obbligatorio. Per favore inseriscilo."
    );
  }

  function checkBirthDateInput(): void {
    checkMandatoryInputs(
      "birthDate",
      ".error-birthdate-message",
      "La data di nascita è obbligatoria. Per favore inseriscila."
    );
  }

  function checkStreetAddressInput(): void {
    checkMandatoryInputs(
      "streetAddress",
      ".error-street-address-message",
      "L'indirizzo di residenza è obbligatorio. Per favore inseriscilo."
    );
  }

  function checkCityInput(): void {
    checkMandatoryInputs(
      "city",
      ".error-city-message",
      "La città è obbligatoria: Per favore inseriscila."
    );
  }

  function checkRegionInput(): void {
    checkMandatoryInputs(
      "region",
      ".error-region-message",
      "La regione è obbligatoria: Per favore inseriscila."
    );
  }

  function checkPhonePrefixSelect(): void {
    checkMandatoryInputs(
      "phonePrefix",
      ".error-phoneprefix-message",
      "Per favore, seleziona almeno un prefisso telefonico."
    );
  }

  function checkPhoneInput(): void {
    checkMandatoryInputs(
      "phone",
      ".error-phone-messages",
      "Il cellulare è obbligatorio. Per favore inseriscilo."
    );
  }

  function checkEmailInput(): void {
    checkMandatoryInputs(
      "email",
      ".error-email-messages",
      "L'email è obbligatoria. Per favore inseriscila."
    );
  }

  function checkMandatoryRadioInputs(radioName: string, errorMessageSelector: string, errorMessage: string): void {
    const radioInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[name="${radioName}"]`);
    const errorMessages: HTMLDivElement | null = document.querySelector(errorMessageSelector);
    let isSelected = false;

    radioInputs.forEach((radio) => {
      if (radio.checked) {
        radio.classList.add("is-valid");
        isSelected = true;
      } else {
        radio.classList.add("is-invalid");
      }
    });

    const setErrorFeedback = (message: string) => {
      if (errorMessages) {
        errorMessages.innerText = message;
        errorMessages.classList.add("error-user-data", "fw-bolder");
        errorMessages.style.fontSize = "0.8rem";
      }
    };

    if (!isSelected) {
      setErrorFeedback(errorMessage);
    }
  }

  function isProtectedCategoryRadiosSelected(): void {
    checkMandatoryRadioInputs(
      "protectedCategoryRadioOptions",
      ".error-protected-category-message",
      "Per favore, seleziona almeno un'opzione"
    );
  }

  function isHasOwnCarRadiosSelected(): void {
    checkMandatoryRadioInputs(
      "drivingLicenceRadioOptions",
      ".error-has-own-car-message",
      "Per favore, seleziona almeno un'opzione"
    );
  }

  function checkRequiredFields() {
    isFormValid = true;

    if (!$formDataStore.name) {
      checkNameInput();
      isFormValid = false;
    }

    if (!$formDataStore.surname) {
      checkSurnameInput();
      isFormValid = false;
    }

    if (!$formDataStore.profession) {
      checkProfessionInput();
      isFormValid = false;
    }

    if (!$formDataStore.nationality) {
      checkNationalityInput();
      isFormValid = false;
    }

    if (!$formDataStore.isProtectedCategory) {
      isProtectedCategoryRadiosSelected();
      isFormValid = false;
    }

    if (!$formDataStore.hasOwnCar) {
      isHasOwnCarRadiosSelected();
      isFormValid = false;
    }

    if (!$formDataStore.birthPlace) {
      checkBirthPlaceInput();
      isFormValid = false;
    }

    if (!$formDataStore.birthDate) {
      checkBirthDateInput();
      isFormValid = false;
    }

    if (!$formDataStore.address.streetAddress) {
      checkStreetAddressInput();
      isFormValid = false;
    }

    if (!$formDataStore.address.city) {
      checkCityInput();
      isFormValid = false;
    }

    if (!$formDataStore.address.region) {
      checkRegionInput();
      isFormValid = false;
    }

    if (!$formDataStore.phonePrefix) {
      checkPhonePrefixSelect();
      isFormValid = false;
    }

    if (!$formDataStore.phone) {
      checkPhoneInput();
      isFormValid = false;
    }

    if (!$formDataStore.email) {
      checkEmailInput();
      isFormValid = false;
    }

    return isFormValid;
  }

  function getPdfCv(): void {
    if (checkRequiredFields()) {
      downloadCv()
        .then((response) => {
          if (response.data) {
            const url = window.URL.createObjectURL(new Blob([response.data]));

            const element = document.createElement("a");
            element.href = url;
            element.download = "Cv.pdf";

            document.body.append(element);
            element.click();
            element.remove();

            URL.revokeObjectURL(url);

            Swal.fire({
                title: 'Download completato!',
                text: `Il tuo CV è stato scaricato con successo.`,
                icon: 'success',
                timer: 1500,          
                showConfirmButton: false 
            });

          } else {
            console.error("Nessun dato ricevuto dal server");
            alert("Non funziona");
          }
        })
        .catch((error) => {
          console.error("Errore durante il download del CV:", error);
        });
    }
  }

  onMount(() => {

    getStoreUserData();

    if ($formDataStore.selectedCvTemplate) {
      isOverlay = false;
      isModifyBtnDisabled = false;
    } else {
      isOverlay = true;
    }

    updateStoreUserData();

  });

  // afterUpdate(() => {

  //   clearLocalStorage();

  // });

</script>

<div id="curriculum-content">

  {#if isOverlay}
    <div class="overlay-container flex-center-utility">
      <button class="select-template-button" on:click={selectTemplate}>SCEGLI TEMPLATE</button>
    </div>
  {/if}

  {#if showPopup}
    <PopupTemplates on:hideCvTemplates={hideCvTemplates} on:setClickedCvTemplate={displaySelectedCvTemplates}></PopupTemplates>
  {/if}

  <div class="d-flex align-items-center flex-direction-column-utility flex-grow-1">

    <div class="cv-preview-container">

      {#if $formDataStore.selectedCvTemplate === "cv-template1.png"}
        <Template1></Template1>
      {/if}

      {#if $formDataStore.selectedCvTemplate === "cv-template2.png"}
        <Template2></Template2>
      {/if}

      {#if $formDataStore.selectedCvTemplate=== "cv-template3.png"}
        <Template3></Template3>
      {/if}

    </div>

    <div class="toolbar">

      <!---- Modify Button ---->

      <div class="flex-center-utility">
        <button class="modify-template-btn {tenantColor}" style="background-color: white; color: var(--primary-color);" aria-label="Modifica lo stile del Cv" on:click={showCvTemplates} disabled={isModifyBtnDisabled}>MODIFICA STILE CV</button>
      </div>

      <!---- Download Button ---->

      <div class="flex-center-utility">
        <button class="download-btn {tenantColor}" style="background-color: var(--primary-color); color: white;" aria-label="Scarica Curriculum Vitae" on:click={getPdfCv} disabled={!$isAllowed || !$isPrivacyPolicyApproved}>SCARICA CV <i class="fa-solid fa-download"></i></button>
      </div>

      <!---- Custom colour Button ---->

      <div class="flex-center-utility">

        <label for="color-picker-input"><i class="fas fa-palette {tenantColor} custom-icon"></i></label>

        <input
          type="color"
          id="color-picker-input"
          bind:value={$formDataStore.selectedColor}
        />

      </div>

    </div>

  </div>

</div>

<style>

  #curriculum-content {
    display: flex;
    height: 100vh;
    flex-basis: 65%;
    flex-grow: 0;
    background-color: #E5E5E5;
    position: relative;
  }

  .overlay-container {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: #DADADA; 
    z-index: 2;
 }

  .cv-preview-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    flex-basis: calc(100vh - 15%);
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #f5feff;
    padding: 2rem 0;
    margin-top: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.15); 

  }

  .toolbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-shrink: 0;
    flex-basis: 15%;
    width: 100%;
  }

  .cv-preview-container::-webkit-scrollbar {
    width: 0.5rem;
  }

  .cv-preview-container::-webkit-scrollbar-track {
    border-radius: 100vw;
  }

  .cv-preview-container::-webkit-scrollbar-thumb {
    background: hsl(196, 72%, 86%);
    border-radius: 100vw;
  }

  .cv-preview-container::-webkit-scrollbar-track-piece {
    background: hsl(187, 100%, 98%);
  }

  .flex-direction-column-utility {
    flex-direction: column;
  }

  .flex-center-utility {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .select-template-button {
    width: 16rem;
    padding: 1rem;
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .modify-template-btn:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    opacity: 0.6;
  }

  .select-template-button:hover {
    transform: translateY(-5px);
    background-color: #0056b3;
  }

  input[type="color"] {
    visibility: hidden;
  }

  .custom-icon {
    color: white;
    font-size: 2rem;
    cursor: pointer;
    width: 60px;
    height: 60px;
    background-color: var(--primary-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modify-template-btn, .download-btn {
    width: 12rem;
    display: block;
    margin: 0 auto;
    padding: 1rem;
    font-size: 1rem;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;
  }

  .modify-template-btn:hover, .download-btn:hover {
    transform: translateY(-2px);
    background-color: #0056b3;
  }

  .modify-template-btn:hover:disabled, .download-btn:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    opacity: 0.6;
  }

</style>
