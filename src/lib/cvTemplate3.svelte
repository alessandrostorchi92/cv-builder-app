<script lang="ts">

import {formDataStore, isPrivacyPolicyApproved, isAllowed} from "../stores/cvForm_data";
import {cvInitialData}  from "../stores/cvDefault_data";


   export let tenant: any;
   export let color: any;
   export let footer: any;

</script>

<div id="cv-template3-container">

    <div class="left-section">
        
        <div class="profile-user-data-container">
        
            <!-- Picture image-->
            {#if $formDataStore.filePicture}
            
                <div class="profile-picture-container">
                    <img class="user-profile-picture" src="{$formDataStore.filePicture}" alt="Immagine Profilo">
                </div>

            {:else}

            <div class="tenant-picture-container">
                <div class="tenant-picture" style="background-image:url({tenant == "lavoroexpress" ? 'https://lavoroexpress.it/assets/img/cv/circle.svg' : `https://${tenant}.blob.core.windows.net/cdn/cv/circle.svg`})"></div>
            </div>
               
            {/if}
            
        
            <!-- User Full Name -->
            <div class="user-full-name {color}" style="color: {$cvInitialData.color}">{$cvInitialData.name} {$cvInitialData.surname}</div>
            <div class="user-profession">{$cvInitialData.profession}</div>
        
            <!-- Dati di contatto -->
        
            <!-- Nationality Icon -->
            <div class="info-item">
                    <i class="fa-solid fa-earth-americas {color}" style="color: {$cvInitialData.color}"></i>
                    <span>Nazionalità: {$cvInitialData.nationality}</span>
            </div>
        
            <!-- BirthCake Icon -->
            <div class="info-item">
                    <i class="fa-solid fa-cake-candles {color}" style="color: {$cvInitialData.color}"></i>
                    <span>{$cvInitialData.birthDate}, {$cvInitialData.birthPlace}</span>
            </div>
        
            <!-- House Icon -->
            <div class="info-item">
                    <i class="fa-solid fa-house {color}" style="color: {$cvInitialData.color}"></i>
                    <span>{$cvInitialData.address.streetAddress},<span class="ms-1">{$cvInitialData.address.postalCode},</span> {$cvInitialData.address.city} - {$cvInitialData.address.region}</span>
            </div>
        
            <!-- Email Icon -->
            <div class="info-item">
                    <i class="fa-regular fa-envelope {color}" style="color: {$cvInitialData.color}"></i>
                    <span>{$cvInitialData.email}</span>
            </div>
            
            <!-- Phone Icon-->
            <div class="info-item">
                    <i class="fa-solid fa-mobile-screen {color}" style="color: {$cvInitialData.color}"></i>
                    <span>{$cvInitialData.phonePrefix} {$cvInitialData.phoneNumber}</span>
            </div>
        
            <!-- Language Section-->
            <div class="languages-container {color}">
        
                    <div class="languages-title" style="color: {$cvInitialData.color}; border-bottom: 1px solid {$cvInitialData.color};">LINGUE</div>
                        
                    <div class="py-3">
        
                        {#each $cvInitialData.languagesSkills as selectedLanguage (selectedLanguage)}
                            <div class="language-details">{selectedLanguage.lang} - {selectedLanguage.level}</div>
                        {/each}
        
                    </div>   
        
            </div>
        
            <!-- Hard Skill Section-->
            <div class="hard-skills-container {color}">
        
                    <div class="hard-skills-title" style="color: {$cvInitialData.color}; border-bottom: 1px solid {$cvInitialData.color};">SKILLS E COMPETENZE</div>
                
                    <div class="py-3">
        
                        {#each $cvInitialData.digitalSkills as digitalSkill (digitalSkill)}
                            <div class="hard-skills-details">{digitalSkill.skill} - {digitalSkill.level}</div>
                        {/each}
        
                    </div>
        
            </div>
        
        </div>

        <!-- Policy Privacy & UserSignature Section-->
                 
        {#if isPrivacyPolicyApproved && $isAllowed}
        
            <div class="auth-container {color}" style="background-color: {$cvInitialData.color};">
        
                        <!-- Policy Privacy -->
                        <div class="policy-privacy-container">
            
                            <p class="px-1">Autorizzo il trattamento dei dati personali nel rispetto della vigente normativa sulla protezione dei dati personali ed in particolare il Regolamento Europeo per la protezione dei dati personali 2016/679, il d.lgs. 30/06/2003 n. 196 e successive modifiche e integrazioni.</p>
            
                        </div>
            
                        <!-- User Signature -->
                        <div class="user-signature-container">
            
                            <img src="{$cvInitialData.jobSeekerSign}" alt="Firma digitale" style="width:60%;">
            
                        </div>
        
            </div>
            
        {/if}

    </div>
        
        
    <div class="right-section">
        
        <!-- User Status Section-->
        <div class="user-status-info {color}">
        
            <div class="info-item">
                <span style="color: {$cvInitialData.color};">Categoria protetta:</span><span style="margin-left: 5px">{$cvInitialData.isProtectedCategory}</span>
            </div>
        
            <div class="info-item">
        
                        <span style="color: {$cvInitialData.color};">Automunito -</span>
        
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
        <div class="work-experience-container {color}">
        
                    <div class="watermark-logo" style="background-image:url({tenant == "lavoroexpress" ? 'https://lavoroexpress.it/assets/img/cv/transparent-logo.png' : `https://${tenant}.blob.core.windows.net/cdn/cv/transparent-logo.png`})"></div>
                    
                    <div class="work-experience-title" style="color: {$cvInitialData.color}; border-bottom: 1px solid {$cvInitialData.color};">ESPERIENZE LAVORATIVE</div>
                        
                    {#each $cvInitialData.jobs as job}
            
                        <div class="work-experience-item">
                                        
                            <div class="job-details-container">
                                <div class="job-details">{job.role} - {job.company} - in {job.location}</div>            
                            </div>
        
                            <div class="job-specs-container">
        
                                <b class="job-dates">{job.startDateWorkExperience}/{job.endDateWorkExperience} -</b>
                                <p class="job-results">{job.workExperienceResults}</p>
                                
                            </div>
                            
                        </div>
        
                    {/each}
                    
        </div>
        
        <!-- Academic Background Section -->
        <div class="academic-background-container {color}">
                
                    <div class="academic-background-title" style="color: {$cvInitialData.color}; border-bottom: 1px solid {$cvInitialData.color};">FORMAZIONE E QUALIFICHE</div>
                
                    {#each $cvInitialData.educations as education (education)}
        
                        <div class="academic-background-item">
                                
                            <div class="education-details-container">
        
                                <div class="education-details">{education.endDateAcademicEducation} - {education.qualification} - {education.trainingCenter}</div>
                                
                            </div>
        
                            <div class="education-specs-container">
        
                                <b class="education-field-of-study">{education.fieldOfStudy} - </b>
                                <p class="education-goals ms-1">{education.educationGoals}</p>
        
                            </div>
                            
                        </div>
         
                    {/each}
        
        </div>
        
        <!-- Footer Section -->
        <div class="footer-container">
                    <div class="company-logo" style="background-image:url({tenant == "lavoroexpress" ? 'https://lavoroexpress.it/assets/img/cv/extended-logo.png' : `https://${tenant}.blob.core.windows.net/cdn/cv/extended-logo.png`})"></div>
                    <p class="copyright-text">{footer}</p>               
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
        display: flex;
        flex-direction: column;
        width: 35%;
        flex-shrink: 0;
    }

    .profile-user-data-container {
        background-color:#efefef;
        padding: 0 0.5rem;
        padding-top: 1.5rem;
        padding-bottom: 0;
        height: 100%;
    }

    .profile-picture-container {
        height: 160px;
        text-align: center;
        vertical-align:top;
    }

    .user-profile-picture {
        width: 120px;
        height: 160px;
        border-radius: 400px;
        object-fit: cover;
    }

    .tenant-picture-container {
        width: 200px;
        aspect-ratio: 2/1;
        padding: 0 1rem;
    }

    .tenant-picture  {
        width: 100%;         
        height: 100%;  
        background-size: contain; 
        background-repeat: no-repeat;
        background-position: center; 
    }

    .user-full-name {
        font-weight:bold; 
        font-size:2rem;
        font-family: Anton;
        text-align: center;
        padding-top: 0.5rem;
    }

    .user-profession {
        color:#808080;
        font-size:1.5rem;
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
        font-size: 0.6rem;
    }

    .languages-container {
        padding-top: 1rem;
    }

    .languages-title, .hard-skills-title, .work-experience-title, .academic-background-title {
        font-size: 1.2rem; 
        font-weight:bold;
    }

    .language-details, .hard-skills-details {
        font-size: 0.75rem;
    }

    .auth-container {
        margin-top: auto; 
    }

    .policy-privacy-container {
        padding-top: 2rem; 
    }

    .policy-privacy-container p {
        font-size: 0.7rem;
    }

    .user-signature-container {
        text-align: center;
        padding: 1rem 0;
    }

    .right-section {
        width: 65%;
        flex-grow: 0;
        height: auto;
        position: relative;
        z-index: 0;
    }

    .user-status-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 1rem;
    }

    .user-status-info span {
        font-size: 0.8rem;
    }

    .profile-summary-container, .work-experience-container, .academic-background-container {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
    }

    .watermark-logo {
        position: absolute;
        width: 500px; 
        height: 500px;
        top: 120px;
        right: -250px;
        aspect-ratio: 1/1;
        background-size: contain;
        overflow: hidden;
        z-index: -1;
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

    /*-------------------------------------

    <!---- Media Queries ---->

    ------------------------------------- */
    @media screen and (max-width: 1200px) {

        .user-profile-picture {
            width: 120px;
            height: 160px;
            border-radius: 400px;
            object-fit: cover;
        }

        .user-full-name {
            font-size:1.7rem;
        }

        .user-profession {
            font-size:1.4rem;
        }

        .policy-privacy-container p {
            font-size: 0.5rem;
        }

        .company-logo {
            width: 40px; 
            height: 20px; 
        }

        .copyright-text {
            font-size: 0.3rem;    
        }

        .user-status-info span {
            font-size: 0.7rem;
        }

        .watermark-logo {
            width: 400px; 
            height: 400px;
        }

    }

    @media screen and (max-width: 992px) {

        .profile-summary-container p, .job-results, .education-goals  {
            font-size: 0.7rem;
        }

        .languages-title, .hard-skills-title, .work-experience-title, .academic-background-title {
            font-size: 1rem;  
        }

        .job-details, .education-details{
            font-size: 0.8rem; 
        }

        .job-dates, .education-field-of-study {
            font-size: 0.7rem; 
        }

        .watermark-logo {
            width: 350px; 
            height: 350px;
        }


    }

    @media screen and (max-width: 390px) {

         .user-profile-picture{
            width: 80px;
            height: 120px;
        }

        .user-full-name {
            font-size: 1rem;
        }

        .user-profession {
            font-size: 0.8rem;
        }

        .info-item i {
            font-size: 0.5rem;
        }

        .info-item span {
            font-size: 0.4rem;
        }

        .languages-title, .hard-skills-title, .work-experience-title, .academic-background-title {
            font-size: 0.6rem; 
        }

        .language-details, .hard-skills-details {
            font-size: 0.5rem;
        }

        .user-status-info {
            gap: 0.5rem;
            padding: 0.2rem 0.5rem;
        }

        .profile-summary-container p, .job-results, .education-goals {
            font-size: 0.5rem;
            padding: 0.2rem 0;
        }

    

        .job-details, .education-details{
            font-size: 0.5rem; 
        }

        .job-dates, .education-field-of-study {
            font-size: 0.5rem; 
        }

    } 

</style>

