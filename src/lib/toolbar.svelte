<script lang="ts">

import {formDataStore, isAllowed, isPrivacyPolicyApproved, isModifyBtnDisabled, showCvTemplates, handleDownloadCv, viewportWidth, typeName} from "../stores/CvUser_data";

// $: console.log($typeName);

export let color: any;

</script>

<div class="toolbar">

  {#if $viewportWidth >= 992}

    <!---- Modify Button ---->
    <div>
      <button class="modify-template-btn {color}" style="background-color: white; color: var(--primary-color);" aria-label="Modifica lo stile del Cv" on:click={() => showCvTemplates()} disabled={$isModifyBtnDisabled}>SCEGLI STILE CV</button>
    </div>

    <!---- Custom colour Button ---->
    <div class="custom-icon-container">
      <label for="color-picker-input"><i class="fas fa-palette {color} custom-icon"></i></label>
      <input
          type="color"
          id="color-picker-input"
          bind:value={$formDataStore.selectedColor}
      />
    </div>

  {:else}

    <div class="custom-container">

      <!---- Modify Button ---->
      <div>
        <button class="modify-template-btn {color}" style="background-color: white; color: var(--primary-color);" aria-label="Modifica lo stile del Cv" on:click={() => {$typeName = false; showCvTemplates()}} disabled={$isModifyBtnDisabled}>MODIFICA STILE CV</button>
      </div>

      <!---- Custom colour Button ---->
      <div class="custom-icon-container">
        <label for="color-picker-input"><i class="fas fa-palette {color} custom-icon"></i></label>
        <input
            type="color"
            id="color-picker-input"
            bind:value={$formDataStore.selectedColor}
        />
      </div>

    </div>
    

  {/if}

  <!---- Cv Preview Button---->
  <div class="cv-preview-container">
    <button class="cv-preview-btn" aria-label="Mostra Cv" on:click={() => {$typeName = true; showCvTemplates()}} disabled={$isModifyBtnDisabled}>MOSTRA CV</button>
  </div>

  <!---- Download Button ---->
  <div class="download-container">
      <button class="download-btn {color}" style="background-color: var(--primary-color); color: white;" aria-label="Scarica Curriculum Vitae" on:click={() => handleDownloadCv()} disabled={!$isAllowed || !$isPrivacyPolicyApproved}>SCARICA CV <i class="fa-solid fa-download"></i></button>
  </div>

</div>

  <style>

    .toolbar {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-shrink: 0;
        flex-basis: 15%;
        width: 100%;
    }

    .cv-preview-container {
        display: none;
      }

    .modify-template-btn:disabled {
      background-color: #cccccc;
      color: #666666;
      cursor: not-allowed;
      opacity: 0.6;
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

    .modify-template-btn, .download-btn, .cv-preview-btn {
      width: 12rem;
      display: block;
      margin: 0 auto;
      padding: 1rem;
      font-size: 1rem;
      text-decoration: none;
      font-weight: bold;
      color: #fff;
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

    @media screen and (max-width: 1200px) {


      .modify-template-btn, .download-btn {
        width: 12rem;
        font-size: 0.8rem;
      }

      .custom-icon {
        width: 50px;
        height: 50px;
        font-size: 1.8rem;
      }

    }

    @media screen and (max-width: 992px) {

      .modify-template-btn, .download-btn{
        width: 10rem;
        font-size: 0.8rem;
      }

      .custom-icon {
        width: 50px;
        height: 50px;
        font-size: 1.8rem;
      }

    }

    @media screen and (max-width: 768px) {

      .toolbar {
        position: fixed;
        flex-direction: column;
        z-index: 2;
        bottom: 0;
        left: 0;
        height: auto;
        flex-basis: 100%;
        width: calc(100% - 0.3rem);
        background-color: rgba(0, 0, 0, 0.7);
        padding: 1rem 0;
      }

      .custom-container {
        display: flex;
        justify-content: space-around;
        width: 100%;
      }

      .download-container {
        display: none;
      }
      .cv-preview-container {
        display: block;
        width: 100%;
        padding: 1rem 0;
      }

      .cv-preview-btn {
        font-size: 0.8rem;
        width: 80%;
        padding: 0.6rem 0;
        background-color: #007BFF;
      }

    }

    @media screen and (max-width: 576px) {

      .toolbar {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
      }

      .custom-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
      }

      .modify-template-btn {
        width: 8rem;
        font-size: 0.6rem;
      }

      .cv-preview-container {
        width: 100%;
        padding: 8px 16px;
        display: block;
      }

      .download-container {
        display: none;
      }
    }

  </style>