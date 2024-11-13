<script lang="ts">

    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import {tenantColor} from "../stores/CvUser_data"; 
    
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const cvTemplates = [
        { name: "cv-template1.png" },
        { name: "cv-template2.png" },
        { name: "cv-template3.png" }
    ];
    
    let showCvTemplates: boolean = false;

    function hideCvTemplates() {
        dispatch('hideCvTemplates');
    }

    function setClickedCvTemplate(templateName: string) {
        dispatch('setClickedCvTemplate', { template : templateName });
        hideCvTemplates();   
    }
    
    onMount(()=>{
        setTimeout(()=>{
            showCvTemplates=true;
        }, 400);
    })


</script>

<div class="popup-overlay {tenantColor}" style="background-color: var(--primary-color);">

    <div class="popup-content">

        <div class="close-btn-container">
            <button class="close-btn" aria-label="Chiudi Popup" on:click={hideCvTemplates}><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="cv-template-gallery">

            {#each cvTemplates as cvTemplate, cvTemplateIndex}
                <div class="cv-template-item {tenantColor}" in:fade={{ delay: cvTemplateIndex * 200, duration: 500 }} hidden={!showCvTemplates}>
                    <img src="{cvTemplate.name}" alt="Esempio Template Curriculum Vitae">
                    <button class="use-template-btn" aria-label="Usa Template" on:click={() => setClickedCvTemplate(cvTemplate.name)}>USA TEMPLATE</button>
                </div>
            {/each}
              
        </div>

    </div>

</div>

<style>

    .popup-overlay {
        display: flex;
        justify-content: flex-end;
        flex-basis: 20%;
        flex-shrink: 0;
        height: 100%;
    }

    .popup-content {
        overflow-y: auto;
        width: 100%; 
    }

    .close-btn-container {
        display: flex;
        justify-content: end;
        padding: 1rem;
    }

    .close-btn {
        background-color: #3C3C3C;
        border: none;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    i {
        color: white;
        font-size: 1.5rem;
    }

    .cv-template-gallery {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        width: 100%;
        padding: 3rem 1rem;
    }

    .cv-template-item {
        position: relative;
        border: 4px solid transparent;
        transition: border-color 0.3s ease, transform 0.7s ease, opacity 0.35s ease; 
    }

    .cv-template-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 700ms, opacity 350ms;
    } 

    .cv-template-item:hover {
        border-color: #3C3C3C;
    }

    .cv-template-gallery:has(.cv-template-item:hover) .cv-template-item:not(:hover) {
        transform: scale(0.7);
        opacity: 0.6;
    }

    .use-template-btn {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 150px;
        margin-top: 0.2rem;
        border: none;
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: 600;
        border-radius: 8px;
        padding: 0.5rem;
        color: white;
        cursor: pointer;
        box-shadow:
            0.7px 0.5px 2.3px rgba(0, 0, 0, 0.05),
            1.7px 1.3px 5.8px rgba(0, 0, 0, 0.071),
            3.5px 2.7px 11.9px rgba(0, 0, 0, 0.089),
            7.3px 5.5px 24.5px rgba(0, 0, 0, 0.11),
            20px 15px 67px rgba(0, 0, 0, 0.16)
            ;
        transition:background-color 0.3s ease, color 0.3s ease;
    }

    .cv-template-item:hover .use-template-btn {
        background-color: #3C3C3C;
    }

    .cv-template-item:hover .use-template-btn {
        display: block;
    }

    .popup-content::-webkit-scrollbar {
        width: 0.2rem;
    }

    .popup-content::-webkit-scrollbar-track {
        border-radius: 100vw;
    }

    .popup-content::-webkit-scrollbar-thumb {
        background: #3C3C3C;
        border-radius: 100vw;
    }
    
    .popup-content::-webkit-scrollbar-track-piece {
        background: hsl(187, 100%, 98%);
    }

    /*-------------------------------------

    <!---- Media Queries ---->

    ------------------------------------- */

    @media screen and (max-width: 1200px) {

        .cv-template-item {
            border: 3px solid transparent;
        }

        .cv-template-gallery {
            padding: 3rem .5rem;
        }

        .close-btn {
            width: 2.5rem;
            height: 2.5rem;
        }

        .use-template-btn {
            width: 100px;
            font-size: 0.7rem;
        }

    }

    @media screen and (max-width: 992px) {

        .popup-content {
            overflow-y: hidden;
        }

        .cv-template-item {
            border: 2px solid transparent;
        }

        .cv-template-gallery {
            padding: 2rem .3rem;
        }

        .close-btn {
            width: 2rem;
            height: 2rem;
        }

        .use-template-btn {
            width: 90px;
            font-size: 0.6rem;
        }


    }
  
</style>