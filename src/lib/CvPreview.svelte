<script lang="ts">
  
  import {formDataStore, getStoreUserData, updateStoreUserData, clearLocalStorage, showPopup, isModifyBtnDisabled, viewportWidth, typeName,} from "../stores/cvForm_data";

  import PopupTemplates from "$lib/popupTemplates.svelte";
  import Template1 from "$lib/cvTemplate1.svelte";
  import Template2 from "$lib/cvTemplate2.svelte";
  import Template3 from "$lib/cvTemplate3.svelte";
  import Toolbar from "./toolbar.svelte";

  import { onMount, afterUpdate } from "svelte";

  export let color: any;
  export let tenant: any;
  export let footer: any;

  let isOverlay: boolean;

  function hideCvTemplates(e: CustomEvent) {
    $isModifyBtnDisabled = false;
  }

  function selectTemplate(): void {
    if ($viewportWidth > 768) {
      isOverlay = false;
      $showPopup = true;
    } else {
      CloseOffcanvas();
    }
  }

  $: {
    if ($showPopup && $viewportWidth < 768) {
      let x = document.getElementById("offcanvas") ?? null;
      x?.classList.add("show");
    }
  }
  
  $: showPreview = $typeName;
  
  function CloseOffcanvas(): void {
    let x = document.getElementById("offcanvas") ?? null;
    x?.classList.remove("show");
    $showPopup = false;
    $isModifyBtnDisabled = false;
  }

  function displaySelectedCvTemplates(event: CustomEvent): void {
    $formDataStore.selectedCvTemplate = event.detail.template;
    localStorage.setItem("selectedCvTemplate",$formDataStore.selectedCvTemplate);
    $isModifyBtnDisabled = false;
    CloseOffcanvas();
  }

  onMount(() => {

    localStorage.removeItem("selectedCvTemplate");

    getStoreUserData();

    isOverlay = true;

    updateStoreUserData();

    $viewportWidth = window.innerWidth;

  });

  afterUpdate(() => {
    clearLocalStorage();
  });

</script>

<div id="curriculum-content">

  {#if isOverlay}

    {#if $viewportWidth > 768}

      <div class="overlay-container flex-center-utility">
        <button class="select-template-button" on:click={() => selectTemplate()}>SCEGLI TEMPLATE</button>
      </div>

    {:else}
      <div
        class="offcanvas offcanvas-start {color}"
        style="background-color: var(--primary-color);"
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            on:click={CloseOffcanvas}
          ></button>
        </div>

        <div class="offcanvas-body">

          {#if showPreview == false}

              <h1 class="offcanvas-title text-center" id="offcanvasLabel">SCEGLI MODELLO</h1>

              <PopupTemplates bind:color on:hideCvTemplates={hideCvTemplates} on:setClickedCvTemplate={displaySelectedCvTemplates}></PopupTemplates>

          {:else}

            <div class="cv-preview-container">

                {#if $formDataStore.selectedCvTemplate === "cv-template1.png"}
                  <Template1 bind:tenant bind:color bind:footer></Template1>
                {/if}
          
                {#if $formDataStore.selectedCvTemplate === "cv-template2.png"}
                  <Template2 bind:tenant bind:color bind:footer></Template2>
                {/if}
          
                {#if $formDataStore.selectedCvTemplate === "cv-template3.png"}
                  <Template3 bind:tenant bind:color bind:footer></Template3>
                {/if}

            </div>
              
          {/if}
          
        </div>
      </div>

    {/if}
    
  {/if}

  {#if $showPopup == true}
    <PopupTemplates
    bind:color
      on:hideCvTemplates={hideCvTemplates}
      on:setClickedCvTemplate={displaySelectedCvTemplates}
    ></PopupTemplates>
  {/if}

  <div class="d-flex align-items-center flex-direction-column-utility flex-grow-1">

    <div class="cv-preview-container">
      {#if $formDataStore.selectedCvTemplate === "cv-template1.png"}
        <Template1 bind:color bind:tenant bind:footer></Template1>
      {/if}

      {#if $formDataStore.selectedCvTemplate === "cv-template2.png"}
        <Template2 bind:color bind:tenant bind:footer></Template2>
      {/if}

      {#if $formDataStore.selectedCvTemplate === "cv-template3.png"}
        <Template3 bind:color bind:tenant bind:footer></Template3>
      {/if}
    </div>

    <Toolbar bind:color></Toolbar>

  </div>
</div>

<style>
  #curriculum-content {
    display: flex;
    height: 100vh;
    flex-basis: 65%;
    flex-grow: 0;
    background-color: #e5e5e5;
    position: relative;
  }

  .overlay-container {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: #dadada;
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
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.5),
      0 8px 16px rgba(0, 0, 0, 0.15);
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
    background-color: #ff1616;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;
  }

  .select-template-button:hover {
    transform: translateY(-5px);
    background-color: #e01010;
  }

  /*-------------------------------------

  <!---- Media Queries ---->

  ------------------------------------- */

  @media screen and (max-width: 1200px) {
    .select-template-button {
      width: 12rem;
      padding: 1rem;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 992px) {
    .select-template-button {
      width: 10rem;
      padding: 1rem;
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 768px) {
    .cv-preview-container {
      margin: 0 auto;
      width: 100%;
    }

  }


</style>