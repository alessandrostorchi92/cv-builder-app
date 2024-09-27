<script lang="ts">

  import {getStoreUserData, updateStoreUserData, clearLocalStorage} from "../stores/form_store";
  
  import PopupTemplates from "$lib/popupTemplates.svelte";


  import Template1 from "$lib/cvTemplate1.svelte";
  import Template2 from "$lib/cvTemplate2.svelte";
  import Template3 from "$lib/cvTemplate3.svelte";

  import { onMount } from "svelte";

  let showPopup: boolean = false;
  let isOverlay: boolean;
  let isModifyBtnDisabled: boolean = true;
  let selectedCvTemplate: string = "";

  function showCvTemplates(): void {
    showPopup = true;
    isModifyBtnDisabled = true;
  }

  function hideCvTemplates(): void {
    showPopup = false;
    isModifyBtnDisabled = false;
  }

  function enableModifyButton() {
    isModifyBtnDisabled = false;
  }

  function selectTemplate() {
    isOverlay = false;
    showPopup = true;
  }


  function displaySelectedCvTemplates(event: CustomEvent): void {
    selectedCvTemplate = event.detail.templateName;
    localStorage.setItem('selectedCvTemplate', selectedCvTemplate);
    enableModifyButton();
  }

    onMount(() => {

      const storedTemplate = localStorage.getItem('selectedCvTemplate');

      if (storedTemplate) {
        selectedCvTemplate = storedTemplate;
        isOverlay = false;
        enableModifyButton();
      } else {
        isOverlay = true;
      }
        
        getStoreUserData();
        updateStoreUserData();

        // clearLocalStorage();

    });

</script>

<div id="curriculum-content">

  {#if isOverlay}
    <div class="overlay-container flex-center-utility">
      <button class="select-template-button" on:click={selectTemplate}>SELEZIONA TEMPLATE</button>
    </div>
  {/if}

  {#if showPopup}
    <PopupTemplates
      on:hideCvTemplates={hideCvTemplates}
      on:setClickedCvTemplate={displaySelectedCvTemplates}
    ></PopupTemplates>
  {/if}

  <div class="d-flex align-items-center flex-direction-column-utility flex-grow-1">

    <div class="cv-preview-container">

      {#if selectedCvTemplate === "cv-template1.png"}
        <Template1></Template1>
      {/if}

      {#if selectedCvTemplate === "cv-template2.png"}
        <Template2></Template2>
      {/if}

      {#if selectedCvTemplate === "cv-template3.png"}
        <Template3></Template3>
      {/if}

    </div>

    <div class="toolbar flex-center-utility">

      <div>
        <button class="modify-template-btn" on:click={showCvTemplates} aria-label="Modifica Template" disabled={isModifyBtnDisabled}>MODIFICA TEMPLATE</button>
      </div>

    </div>

  </div>

</div>

<style>
  
  #curriculum-content {
    display: flex;
    height: 100vh;
    flex-basis: 65%;
    flex-grow: 0; background: linear-gradient(180deg,rgba(96, 100, 112, 1) 17%,rgba(50, 54, 67, 1) 65%);
    position: relative;
  }

  .overlay-container {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgb(17, 45, 78);
    background: linear-gradient(180deg,rgba(17, 45, 78, 1) 8%,rgba(117, 117, 117, 1) 80%);
    z-index: 2;
  }

  .cv-preview-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 80%;
    width: 70%;
    max-width: 100%;
    height: calc(100vh - 20%);
    overflow-y: auto;
    background-color: #f5feff;
    padding: 2rem 1rem;
    margin-top: 2rem;
  }

  .toolbar {
    flex-shrink: 0;
    flex-basis: 15%;
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

  .modify-template-btn,
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
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;
  }

  .modify-template-btn:disabled {
    background-color: #cccccc; 
    color: #666666; 
    cursor: not-allowed; 
    opacity: 0.6;
  }

  .modify-template-btn:hover,
  .select-template-button:hover {
    transform: translateY(-5px);
    background-color: #0056b3;
  }

  .modify-template-btn:hover:disabled {
    background-color: #cccccc; 
    color: #666666; 
    cursor: not-allowed; 
    opacity: 0.6;
  }

</style>
