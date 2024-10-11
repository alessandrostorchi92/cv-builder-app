<script lang="ts">

   import {formDataStore, isAllowed, isPrivacyPolicyApproved, currentTenant, currentCopyrightPolicy} from "../stores/CvUser_data";
   import { cvInitialData }  from "../stores/cvDefault_data";
    
</script>

<div class="cv-template3-container">

    <div class="left-section">

        <!-- Picture image-->

        <!-- <div class="profile-picture-container">
    
            {#if $formDataStore.filePicture}
    
                <img class="user-profile-picture" src="{$formDataStore.filePicture}" alt="Immagine Profilo">
    
            {:else}
    
                <div class="tenant-picture" style="background-image: url(https://{currentTenant}.blob.core.windows.net/cdn/cv/circle.svg);"></div>
    
            {/if}
    
        </div> -->

        <!-- Personal Data-->

        <!-- <div class="profile-info-container">

            <div class="user-full-name" style="color: {$formDataStore.selectedColor || "black"}">{$cvInitialData.name} {$cvInitialData.surname}</div>

        </div>
       -->
    
    </div>

    <div class="right-section">

    </div>

</div>
        
<style>

    .cv-template3-container{
        display: flex;
        flex-direction: row;
        width: 90%;
        font-family: Montserrat;
    }
    .left-section {
        flex-basis: 30%;
        flex-shrink: 0;
        border: 1px solid red;
        background-color:#efefef;
    }

    .right-section {
        flex-basis: 70%;
        flex-grow: 0;
        border: 1px solid blue;
    }

    .profile-picture-container {
        
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        padding: 0.5rem 3rem;
    }

    /* .user-profile-picture {
        border-radius: 50%;
        object-position: center;
        object-fit: cover;
    } */

    /* .tenant-picture {
        height: 100%;
        width: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    } */

</style>

