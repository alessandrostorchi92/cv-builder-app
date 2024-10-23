<script lang="ts">

   import {formDataStore, isPrivacyPolicyApproved, isAllowed, currentTenant, currentCopyrightPolicy} from "../stores/CvUser_data";
   import {cvInitialData}  from "../stores/cvDefault_data";

</script>

<div id="cv-template3-container">

    <div class="left-section">

        <!-- Picture image-->
        <div class="profile-picture-container">

            {#if $formDataStore.filePicture}
    
                <img class="user-profile-picture" src="{$formDataStore.filePicture}" alt="Immagine Profilo">

            {:else}

                <div class= "default-profile-picture" style="background-image: url('/background-profile-picture.png');"></div>
            
            {/if}
    
        </div>

        <!-- User Full Name -->
        <div class="user-full-name" style="color: {$formDataStore.selectedColor || "black"}">{$cvInitialData.name} {$cvInitialData.surname}</div>
        <div class="user-profession">{$cvInitialData.profession}</div>

        <!-- Dati di contatto -->

        <!-- Nationality Icon -->
        <div class="info-item">
            <i class="fa-solid fa-earth-americas" style="color: {$formDataStore.selectedColor || "black"}"></i>
            <span>Nazionalità: {$cvInitialData.nationality}</span>
        </div>

        <!-- BirthCake Icon -->
        <div class="info-item">
            <i class="fa-solid fa-cake-candles" style="color: {$formDataStore.selectedColor || "black"}"></i>
            <span>{$cvInitialData.birthDate}, {$cvInitialData.birthPlace}</span>
        </div>

        <!-- House Icon -->
        <div class="info-item">
            <i class="fa-solid fa-house" style="color: {$formDataStore.selectedColor || "black"}"></i>
            {#each $cvInitialData.address as addressItem}
            <span class="specs-item">{addressItem.streetAddress} {addressItem.streetNumber}, {addressItem.city} - {addressItem.region}</span>
            {/each}
        </div>

        <!-- Email Icon -->
        <div class="info-item">
            <i class="fa-regular fa-envelope" style="color: {$formDataStore.selectedColor || "black"}"></i>
            <span>{$cvInitialData.email}</span>
        </div>
    
        <!-- Phone Icon-->
        <div class="info-item">
            <i class="fa-solid fa-mobile-screen" style="color: {$formDataStore.selectedColor || "black"}"></i>
            <span>{$cvInitialData.phonePrefix} {$cvInitialData.phoneNumber}</span>
        </div>

        <!-- Language Section-->
        <div class="languages-container">

            <div class="languages-title" style="color: {$formDataStore.selectedColor || "black"}; border-bottom: 1px solid {$formDataStore.selectedColor || "black"};">LINGUE</div>
                
            <div class="py-3">

                {#each $cvInitialData.languagesSkills as selectedLanguage (selectedLanguage)}
                    <div class="language-details">{selectedLanguage.lang} - {selectedLanguage.level}</div>
                {/each}

            </div>   

        </div>

        <!-- Hard Skill Section-->
        <div class="hard-skills-container">

            <div class="hard-skills-title" style="color: {$formDataStore.selectedColor || "black"}; border-bottom: 1px solid {$formDataStore.selectedColor || "black"};">SKILLS E COMPETENZE</div>
        
            <div class="py-3">

                {#each $cvInitialData.digitalSkills as digitalSkill (digitalSkill)}
                    <div class="hard-skills-details">{digitalSkill.skill} - {digitalSkill.level}</div>
                {/each}

            </div>

        </div>

        <!-- Policy Privacy & UserSignature Section-->
        {#if isPrivacyPolicyApproved && $isAllowed}

            <!-- Policy Privacy -->
            <div class="policy-privacy-container">

            <p>Autorizzo il trattamento dei dati personali nel rispetto della vigente normativa sulla protezione dei dati personali ed in particolare il Regolamento Europeo per la protezione dei dati personali 2016/679, il d.lgs. 30/06/2003 n. 196 e successive modifiche e integrazioni.</p>

            </div>

            <!-- User Signature -->
            <div class="user-signature-container">

            <img src="{$formDataStore.userSignature}" alt="Firma digitale" style="width:60%;">

            </div>
        
        {/if}

    </div>

    <div class="right-section">

        <!-- User Status Section-->
       <div class="user-status-info">

            <div class="info-item">
                <span style="color: {$formDataStore.selectedColor || "black"};">Categoria protetta:</span><span style="margin-left: 5px">{$cvInitialData.isProtectedCategory}</span>
            </div>

            <div class="info-item">

                <span style="color: {$formDataStore.selectedColor || 'black'};">Automunito:</span>

                {#if $formDataStore.hasOwnCar}
                    <span>{$cvInitialData.drivingLicences}</span>
                {/if}

            </div>
            
       </div>

        <!-- Profile Summary Section-->
        <div class="profile-summary-container">
            <p class="personal-profile-summary">{$cvInitialData.profileSummary}</p>
        </div>

        <!-- Work Experience Section-->
        <div class="work-experience-container">

            <div class="watermark-logo" style="background-image: url(https://{currentTenant}.blob.core.windows.net/cdn/cv/transparent-logo.png);"></div>
            
            <div class="work-experience-title" style="color: {$formDataStore.selectedColor || "black"}; border-bottom: 1px solid {$formDataStore.selectedColor || "black"};">ESPERIENZE LAVORATIVE</div>
                
            {#each $cvInitialData.jobs as job}
    
                <div class="work-experience-item">
                                
                    <div class="job-details-container">
                        <div class="job-details">{job.role} - {job.company} - in {job.location}</div>            
                    </div>

                    <div class="job-specs-container">

                        <b class="job-dates">{job.startDateWorkExperience}/{job.endDateWorkExperience}</b>
                        <p class="job-results">{job.workExperienceResults}</p>
    
                    </div>
                    
                </div>

            {/each}
            
        </div>

         <!-- Academic Background Section -->
        <div class="academic-background-container">
        
            <div class="academic-background-title" style="color: {$formDataStore.selectedColor || "black"}; border-bottom: 1px solid {$formDataStore.selectedColor || "black"};">FORMAZIONE E QUALIFICHE</div>
        
            {#each $cvInitialData.educations as education (education)}

                <div class="academic-background-item">
                        
                    <div class="education-details-container">

                        <div class="education-details">{education.endDateAcademicEducation} - {education.qualification} - {education.educationType}</div>
                        
                    </div>

                    <div class="education-specs-container">

                        <span>{education.fieldOfStudy} - </span>
                        <p class="education-goals ms-1">{education.educationGoals}</p>

                    </div>
                    
                </div>
 
            {/each}

        </div>

        <!-- Footer Section -->
        <div class="footer-container">
            <div class="company-logo" style="background-image:url(https://{currentTenant}.blob.core.windows.net/cdn/cv/extended-logo.png);"></div>
            <p class="copyright-text">{currentCopyrightPolicy}</p>               
        </div>                   
           
    </div>

</div>
        
<style>
    #cv-template3-container{
        display: flex;
        flex-direction: row;
        width: 90%;
        font-family: Montserrat;
    }

    .left-section {
        flex-basis: 35%;
        flex-shrink: 0;
        height: auto;
        border: 1px solid red;
        background-color:#efefef;
        padding: 1.5rem 0.5rem;
    }

    .right-section {
        flex-basis: 65%;
        flex-grow: 0;
        height: auto;
        border: 1px solid blue;
    }

    .profile-picture-container {
        height: 160px;
        text-align: center;
        vertical-align:top;
    }

    .user-profile-picture {
        aspect-ratio: 1/1;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        object-fit: cover;
    }

    .default-profile-picture  {
        width: 160px;
        height: 160px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        margin: 0 auto; 
    }

    .user-full-name {
        font-weight:bold; 
        font-size:1.5rem;
        font-family: Anton;
        text-align: center;
        padding-top: 0.5rem;
    }

    .user-profession {
        color:#808080;
        font-size:1rem;
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .info-item i {
        text-align: center;
        line-height: 15px;
        font-size: 0.7rem;
        width: 15px;
        height: 15px;
        aspect-ratio: 1/1;
        margin-right: 2px;
    }

    .info-item span {
        font-size: 0.7rem;
    }

    .languages-container {
        padding-top: 1rem;
    }

    .languages-title, .hard-skills-title, .work-experience-title, .academic-background-title {
        font-size: 1.2rem; 
        font-weight:bold;
    }

    .language-details, .hard-skills-details {
        font-size: 0.8rem;
    }

    .policy-privacy-container p {
        font-size: 0.7rem;
    }

    .policy-privacy-container {
        padding-top: 2rem;
    } 

    .user-signature-container {
        text-align: center;
        padding: 1rem 0;
    }

    .user-status-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 1rem;
    }

    .profile-summary-container, .work-experience-container, .academic-background-container {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
    }

    .work-experience-container {
        position: relative;
    }

    .watermark-logo {
        position: absolute;
        width: 500px; 
        height: 500px;
        top: 75px;
        right: -250px;
        aspect-ratio: 1/1;
        background-size: contain;
        overflow: hidden;
    }

    .job-details, .education-details-container {
        padding-top: 0.6rem;
        color:#6d6d6d;
        font-size: 0.9rem; 
        font-weight:bold;
    }

    p {
        margin: 0;
    }

    .job-specs-container, .education-specs-container {
        padding-top: 0.2rem;
    }

    .job-specs-container p, .education-specs-container p {
        display: inline;
    }

    .footer-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 1rem;
    }

    .company-logo {
        flex-shrink: 0;
        text-align: center; 
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        aspect-ratio: 2 / 1;
        width: 50px; 
        height: 25px; 
    }

    .copyright-text {
        font-size: 8px; 
        color: #666;
        flex-grow: 1;
    }

</style>

