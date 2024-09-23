<script lang="ts">

    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const cvTemplates = [
        { name: "cv-template1.png" },
        { name: "cv-template2.png" },
        { name: "cv-template3.png" }
    ];

    let showCvTemplates = false;

    function hideCvTemplates() {
        dispatch('hideCvTemplates');
    }

    function setClickedCvTemplate(templateName: string) {
        dispatch('setClickedCvTemplate', { templateName });    
    }
    
    onMount(()=>{
        setTimeout(()=>{
            showCvTemplates=true;
        }, 400)
    })

</script>

<div class="popup-overlay">
    <div class="popup-content">

        <div class="close-btn-container">
            <button class="close-btn" aria-label="Chiudi Popup" on:click={hideCvTemplates}><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="cv-template-gallery">

            {#each cvTemplates as cvTemplate, cvTemplateIndex}
                <div class="cv-template-item" in:fade={{ delay: cvTemplateIndex * 200, duration: 500 }} hidden={!showCvTemplates}>
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
        background-color: rgba(0, 0, 0, 0.3); 
        padding: 1rem;
    }

    .popup-content {
        overflow-y: auto;
    }

    .close-btn-container {
        display: flex;
        justify-content: end;
        padding: 1rem;
    }

    .close-btn {
        background-color: #b64f43;
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
        padding: 2rem 1rem;
        gap: 3rem;
        width: 100%;
    }

    .cv-template-item {
        aspect-ratio: 2/3;
        position: relative;
    }

    .cv-template-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 700ms, opacity 350ms;
    } 

    .cv-template-item:hover {
        cursor:pointer;
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
        background-color: #007bff;
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

    .use-template-btn:hover {
        background-color: #0056b3;
    }

    .cv-template-item:hover .use-template-btn {
        display: block;
    }

    .popup-content::-webkit-scrollbar {
        width: 0.3rem;
    }

    .popup-content::-webkit-scrollbar-track {
        border-radius: 100vw;
    }

    .popup-content::-webkit-scrollbar-thumb {
        background: hsl(196, 72%, 86%);
        border-radius: 100vw;
    }
    
    .popup-content::-webkit-scrollbar-track-piece {
        background: hsl(187, 100%, 98%);
    }

</style>