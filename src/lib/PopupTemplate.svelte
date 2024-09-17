<script lang="ts">

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function hideCvTemplates() {
        dispatch('hideCvTemplates')
    }

    const cvTemplateExamples = ["cv-example1.png", "cv-example2.png", "cv-example3.png"];

</script>

<div class="popup-overlay">
    <div class="popup-content">

        <div class="close-btn-container">
            <button class="close-btn" on:click={hideCvTemplates}><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="cv-template-examples-gallery">
           
            {#each cvTemplateExamples as cvTemplateExample}
                <div class="cv-template-item">
                    <img src="{cvTemplateExample}" alt="Esempio Template Curriculum Vitae">
                </div>
            {/each}
            
        </div>

    </div>
</div>

<style>
    .popup-overlay {
        display: flex;
        justify-content: flex-end;
        flex-basis: 22%;
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
    .cv-template-examples-gallery {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 1rem;
        gap: 2rem;
        width: 100%;
    }

    .cv-template-item {
        
        width: 100%;
        aspect-ratio: 2/3;
    }

    .cv-template-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: scale 350ms ease, opacity 350ms linear;
    } 

    .cv-template-examples-gallery:has(img:hover) {
        cursor:pointer;
    }

    .cv-template-examples-gallery:has(img:hover) img:not(:hover) {
        scale: 0.8;
        opacity: 0.6;
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
