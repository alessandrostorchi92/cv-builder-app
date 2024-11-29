<script lang="ts">

    import {formDataStore, isAllowed, isPrivacyPolicyApproved, showPopup} from "../stores/cvForm_data"; 
    import { cvInitialData }  from "../stores/cvDefault_data";
        
    export let tenant: any;
    export let color: any;
    export let footer: any;

</script>

<div id="cv-template1-container">

    <div class="header-section">
    
        <!-- Profile picture -->
    
        <div class="profile-picture-container">
    
            {#if $formDataStore.filePicture}
    
                <img class="user-profile-picture" src="{$formDataStore.filePicture}" alt="Immagine Profilo">
    
            {:else}
            
                <div class="tenant-picture-container" style=" background-color: white; padding: 20px;">
                    <div class="tenant-picture" style="background-image:url({tenant == 'lavoroexpress' ? '/logo-back-transp.svg' : `https://${tenant}.blob.core.windows.net/cdn/cv/circle.svg`});"></div>
                </div>
                
            {/if}
    
        </div>
    
    
        <div class="{$showPopup ? "profile-info-container-popup" : "profile-info-container"}">
    
            <!-- Profile data -->
    
            <div class="{$showPopup ? "user-full-name-popup" : "user-full-name"} {color}"><strong><span style="color: {$cvInitialData.color};">{$cvInitialData.name}</span> {$cvInitialData.surname}</strong></div>
            
            <div class="{$showPopup ? "user-profession-popup" : "user-profession"}">{$cvInitialData.profession}</div>
    
            <div class="user-personal-info {$showPopup ? "user-personal-info-popup" : "user-personal-info"}">
    
                <div class="left-section">

                    <!-- Nationality Icon -->
                    <div class="{$showPopup ? "info-item-popup" : "info-item"}">
                        <i class="fa-solid fa-earth-americas {color}" style="color: {$cvInitialData.color}"></i>
                        <span>Nazionalità: {$cvInitialData.nationality}</span>
                    </div>

                    <!-- BirthCake Icon -->   
                    <div class="{$showPopup ? "info-item-popup" : "info-item"}">
                        <i class="fa-solid fa-cake-candles {color}" style="color: {$cvInitialData.color}"></i>
                        <span>{$cvInitialData.birthDate}, {$cvInitialData.birthPlace}</span>
                    </div>

                    <!-- HasOwnCar Icon -->
                    <div class="{$showPopup ? "info-item-popup" : "info-item"}">

                        <i class="fa-solid fa-car-side {color}" style="color: {$cvInitialData.color}"></i>
                        {#if $formDataStore.hasOwnCar === true || $formDataStore.hasOwnCar === null}
                            <span>Automunito</span><span class="ms-1">-</span>
                        {/if}

                        <span class="ms-1">{$cvInitialData.drivingLicences}</span>
                      
                    </div>

                    <!-- IsProtectedCategory Icon -->
                    <div class="{$showPopup ? "info-item-popup" : "info-item"}">

                        {#if $formDataStore.isProtectedCategory === true || $formDataStore.isProtectedCategory === null}
                            <i class="fa-regular fa-heart {color}" style="color: {$cvInitialData.color}"></i>
                            <span>Categoria protetta:</span><span style="margin-left: 5px">{$cvInitialData.isProtectedCategory}</span>
                        {/if}

                    </div>
       
                </div>
    
                <div class="right-section">
                    
                    <!-- House Icon -->
                    <div class="{$showPopup ? "info-item-popup" : "info-item"}">
                        <i class="fa-solid fa-house {color}" style="color: {$cvInitialData.color}"></i>
                        <span>{$cvInitialData.address.streetAddress},<span class="ms-1">{$cvInitialData.address.postalCode},</span> {$cvInitialData.address.city} - {$cvInitialData.address.region}</span>
                    </div>

                    <!-- Phone Icon-->
                    <div class="{$showPopup ? "info-item-popup" : "info-item"}">
                        <i class="fa-solid fa-mobile-screen {color}" style="color: {$cvInitialData.color}"></i>
                        <span>{$cvInitialData.phonePrefix} {$cvInitialData.phoneNumber}</span>  
                    </div>

                    <!-- Email Icon -->
                    <div class="{$showPopup ? "info-item-popup" : "info-item"}">
                        <i class="fa-regular fa-envelope {color}" style="color: {$cvInitialData.color}"></i>
                        <span>{$cvInitialData.email}</span>
                    </div>
    
                </div>
    
            </div>
           
        </div>
    
    </div>
    
    <div class="main-section">
    
        <!-- Profile Summary Section-->
        <div class="profile-summary-container">
            <div class="{$showPopup ? "profile-summary-title-popup" : "profile-summary-title"} {color}" style="color: {$cvInitialData.color};">BREVE PRESENTAZIONE</div>
            <p class="{$showPopup ? "personal-profile-summary-popup" : "personal-profile-summary"}">{$cvInitialData.profileSummary}</p>
        </div>
    
        <div class="watermark-logo" style="background-image:url({tenant == "lavoroexpress" ? '/logo-back.svg' : `https://${tenant}.blob.core.windows.net/cdn/cv/transparent-logo.png`}); opacity: {tenant == 'lavoroexpress' ? '0.2' : '1'};"></div>

        <!-- Work Experience Section-->
        <div class="work-experience-container">
    
            <div class="{$showPopup ? "work-experience-title-popup" : "work-experience-title"} {color}" style="color:{$cvInitialData.color};">ESPERIENZE</div>
                
            {#each $cvInitialData.jobs as job}
    
                    <div class="work-experience-item">
                                    
                        <div class="job-details-container {color}">
                    
                            <div class="{$showPopup ? "dot-item-popup" : "dot-item"}" style="background-color: {$cvInitialData.color};"></div>
                            <div class="{$showPopup ? "job-details-popup" : "job-details"}">{job.role} - {job.company} - in {job.location}</div>
                                        
                        </div>
                    
                        <div class="job-dates {$showPopup ? "job-dates-popup" : "job-dates"}"><span class="start-date-work">{job.startDateWorkExperience}</span>/<span class="end-date-work">{job.endDateWorkExperience}</span></div>
                                    
                    </div>
                    
                    <p class="{$showPopup ? "job-results-popup" : "job-results"}">{job.workExperienceResults}</p>
                    
            {/each}
            
        </div>
        
        <!-- Academic Background Section -->
        <div class="academic-background-container">
        
                <div class="{$showPopup ? "academic-background-title-popup" : "academic-background-title"} {color}" style="color:{$cvInitialData.color};">FORMAZIONE</div>
            
                {#each $cvInitialData.educations as education (education)}
        
                    <div class="academic-background-item">
                            
                        <div class="education-details-container {color}">
        
                            <div class="{$showPopup ? "dot-item-popup" : "dot-item"}" style="background-color: {$cvInitialData.color};"></div>
                            <div class="{$showPopup ? "education-details-popup" : "education-details"}">{education.qualification} - {education.trainingCenter} - {education.fieldOfStudy}</div>
                            
                        </div>
        
                        <div class="{$showPopup ? "education-dates-popup" : "education-dates"}">{education.endDateAcademicEducation}</div>
                        
                    </div>
        
                    <p class="{$showPopup ? "education-goals-popup" : "education-goals"}">{education.educationGoals}</p>
                    
                {/each}
        
        </div>
    
        <!-- Language Section -->
        <div class="language-container">
    
            <div class="{$showPopup ? "language-title-popup" : "language-title"} {color}" style="color: {$cvInitialData.color};">LINGUE</div>
            
            {#each $cvInitialData.languagesSkills as selectedLanguage (selectedLanguage)}
        
                <div class="language-details-container {color}">
        
                    <div class="{$showPopup ? "dot-item-popup" : "dot-item"}" style="background-color: {$cvInitialData.color};"></div>
                    <div class="{$showPopup ? "language-details-popup" : "language-details"}">{selectedLanguage.lang} - {selectedLanguage.level}</div>
                    
                </div>
        
            {/each}
        
        </div>
        
        <!-- Hard Skills Section-->
        <div class="hard-skills-container">
    
            <div class="hard-skills-title {$showPopup ? "hard-skills-title-popup" : "hard-skills-title"} {color}" style="color:{$cvInitialData.color};">SKILLS E COMPETENZE DIGITALI</div>
           
            {#each $cvInitialData.digitalSkills as digitalSkill (digitalSkill)}
    
                <div class="hard-skills-details-container {color}">
    
                    <div class="{$showPopup ? "dot-item-popup" : "dot-item"}" style="background-color: {$cvInitialData.color};"></div>
                    <div class="{$showPopup ? "hard-skills-details-popup" : "hard-skills-details"}">{digitalSkill.skill} - {digitalSkill.level}</div>
                    
                </div>
    
            {/each}
    
        </div>
    
        <!-- Footer Section -->
        <div class="footer-divider">
    
        <!-- Policy Privacy & Signature Section -->
            {#if $isPrivacyPolicyApproved && $isAllowed}
    
                <div class="policy-privacy-container">
    
                    <div class="policy-privacy">
                        <p>Autorizzo il trattamento dei dati personali nel rispetto della vigente normativa sulla protezione dei dati personali ed in particolare il Regolamento Europeo per la protezione dei dati personali 2016/679, il d.lgs. 30/06/2003 n. 196 e successive modifiche e integrazioni.</p>
                    </div>
    
                    <div class="user-signature-container">
                        <img src="{$formDataStore.userSignature}" alt="Firma digitale" style="width:60%;">
                    </div>
    
                </div>
    
            {/if}
    
        <!-- Company info Section -->
            <div class="copyright-container">
                <div class="company-logo" style="background-image:url({tenant == "lavoroexpress" ? 'https://lavoroexpress.it/assets/img/cv/extended-logo.png' : `https://${tenant}.blob.core.windows.net/cdn/cv/extended-logo.png`})"></div>
                <p class="copyright-text">{footer}</p>   
            </div>                   
     
        </div>
    
    </div>

</div>

<style>

    #cv-template1-container {
        display: flex;
        flex-direction: column;
        width: 90%;
    }

    .header-section, .main-section {
        display: flex;
        font-family: Ubuntu;
        font-weight: 300;
    }
        
    .profile-picture-container, .tenant-picture-container {
        flex-shrink: 0;
        flex-basis: 30%;
        aspect-ratio: 1 / 1;
    }
    
    .user-profile-picture, .tenant-picture  {
        height: 100%;
        width: 100%;
    }

    .user-profile-picture {
        object-position: center;
        object-fit: cover;
    }

    .tenant-picture {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .profile-info-container, .profile-info-container-popup {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 70%;
        background-color: #f2f2f2;
        padding-left: 1rem;
    }

    .user-full-name {
        text-transform: uppercase;
        font-size: 2rem;
    }

    .user-full-name-popup {
        text-transform: uppercase;
        font-size: 1.8rem;
    }

    .user-profession {
        opacity: 0.5;
        text-transform: uppercase;
        font-size: 1.8rem;
    }

    .user-profession-popup {
        opacity: 0.5;
        text-transform: uppercase;
        font-size: 1.6rem;
    }

    .user-personal-info {
        display: flex;
        flex-direction: row;
        line-height: 12px;
        padding: 1rem 0;
    }

    .user-personal-info-popup {
        display: flex;
        flex-direction: row;
        line-height: 12px;
        padding: 1rem 0;
    }

    .left-section, .right-section {
        display: flex;
        flex-direction: column;
    }

    .info-item i {
        text-align: center;
        font-size: 0.7rem;
        width: 15px;
        height: 15px;
        aspect-ratio: 1/1;
    }
    .info-item span {
        font-size: 0.65rem;
    }

    .info-item-popup i {
        text-align: center;
        font-size: 0.6rem;
        width: 12px;
        height: 12px;
        aspect-ratio: 1/1;
    }

    .info-item-popup span {
        font-size: 0.6rem;
    }

    .main-section {
        display: flex;
        flex-direction: column;
        flex-basis: auto;
        position: relative;
        z-index: 0;
    }

    .profile-summary-container, .work-experience-container, .academic-background-container, .language-container, .hard-skills-container {
        padding: 0.5rem;
    }

    .profile-summary-title, .work-experience-title, .academic-background-title, .language-title, .hard-skills-title {
        font-weight: bold; 
        font-size: 1.5rem;
        padding: 0.5rem 0;
    }

    .profile-summary-title-popup, .work-experience-title-popup, .academic-background-title-popup, .language-title-popup, .hard-skills-title-popup {
        font-weight: bold; 
        font-size: 1.3rem;
        padding: 0.3rem 0;
    }

    .personal-profile-summary, .personal-profile-summary-popup {
        opacity: 0.6;
    }

    .personal-profile-summary-popup, .job-results-popup, .education-goals-popup {
        font-size: 0.9rem;
    }

    .dot-item, .dot-item-popup {
        display: inline-block; 
        height: 8px; 
        width: 8px;
        border-radius: 50%;
        margin-right: 12px;
    }

    .watermark-logo {
        position: absolute;
        width: 400px; 
        height: 400px;
        top: 100px;
        right: -230px;
        aspect-ratio: 1/1;
        background-size: cover;
        overflow: hidden;
        z-index: -1;
    }

    .work-experience-item, .academic-background-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-basis: 100%;
        padding-top: 0.3rem;
    }

    .job-details, .education-details, .job-details-popup, .education-details-popup {
        font-size: 1rem;
    }

    .job-dates, .education-dates {
        font-size: 0.8rem;
    }

    .job-dates-popup, .education-dates-popup {
        font-size: 0.65rem; 
    }

    .job-dates .start-date-work {
        margin-right: 0.1rem;
    }

    .job-dates .end-date-work {
        margin-left: 0.1rem;
    }

    .job-details-container, .education-details-container {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
    }

    .job-results, .education-goals {
        padding: 0.3rem 0;
    }

    p {
        margin-bottom: 0;
    }

    .language-details-container, .hard-skills-details-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .language-details, .hard-skills-details, .language-details-popup, .hard-skills-details-popup  {
        font-size: 0.85rem;
    }

    .footer-divider {
        margin-top: 1rem;
        border-top: 1px solid #e6e6e6;
    }

    .policy-privacy-container {
        display: flex;
        align-items: center;
        padding: 1rem;
    }

    .policy-privacy {
        font-size: 0.6rem; 
        color: #666;
    }

    .policy-privacy {
        flex-basis: 70%;
    }

    .user-signature-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 30%;
    }

    .copyright-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem; 
        gap: 10px;
    }

    .company-logo {
        flex-shrink: 0;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        aspect-ratio: 2 / 1;
        width: 50px; 
        height: 25px; 
        text-align: center; 
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

        .user-full-name {
            font-size: 1.8rem;
        }

        .user-full-name-popup {
            font-size: 1.6rem;
        }

        .user-profession {
            font-size: 1.4rem;
        }

        .user-profession-popup {
            font-size: 1.4rem;
        }

        .profile-info-container {
            padding-left: 0.3rem;
        }

        .user-personal-info {
            line-height: 15px;
            padding: .5rem 0;
        }

        .user-personal-info-popup {
            line-height: 12px;
            padding: .5rem 0;
        }

        .info-item i {
            font-size: 0.6rem;
        }

        .info-item span {
        font-size: 0.6rem;
        }

        .info-item-popup i {
            font-size: 0.5rem;
            width: 10px;
            height: 10px;  
        }

        .info-item-popup span {
            font-size: 0.5rem;
        }

        .watermark-logo {
            width: 400px; 
            height: 400px;
        }

        .profile-summary-title, .work-experience-title, .academic-background-title, .language-title, .hard-skills-title {
            font-size: 1.3rem;
        }

        .profile-summary-title-popup, .work-experience-title-popup, .academic-background-title-popup, .language-title-popup, .hard-skills-title-popup {
            font-size: 1.2rem; 
        }

        .personal-profile-summary, .personal-profile-summary-popup {
            font-size: 0.8rem;
        } 

        .dot-item, .dot-item-popup {
            display: inline-block; 
            height: 6px; 
            width: 6px;
        }

        .work-experience-item, .academic-background-item {
            font-size: 0.8rem;
        }

        .job-dates, .education-dates {
            font-size: 0.7rem;
        }

        .job-results, .education-goals, .job-results-popup, .education-goals-popup {
            font-size: 0.8rem;
        }

        .language-details, .hard-skills-details {
            font-size: 0.85rem;
        }

        .policy-privacy {
            font-size: 0.5rem; 
        }

        .company-logo {
            width: 40px; 
            height: 20px;  
        }

        .copyright-text {
            font-size: 8px; 
            color: #666;
            flex-grow: 1;
        }

        .copyright-text {
            font-size: 6px; 
        }

    }

    @media screen and (max-width: 992px) {

        .user-full-name {
            font-size: 1.4rem;
        }

        .user-full-name-popup {
            font-size: 1.2rem;
        }

        .user-profession {
            font-size: 1.1rem;
        }

        .user-profession-popup {
            font-size: 1rem;
        }

        .user-personal-info {
            line-height: 12px;
            padding-top: 1rem 0;
        }

        .user-personal-info-popup {
            display: flex;
            flex-direction: row;
            line-height: 10px;
            padding: 1rem 0;
        }

        .profile-info-container {
            padding-left: 0.3rem;
        }

        .profile-info-container-popup {
            padding-left: 0.1rem;
        }

        .tenant-picture-container {
            padding: 0.5rem;
        }

       .tenant-picture-container-popup{
            height: 140px;
            width: 140px;
       }

       .tenant-picture-container-popup {
        padding: 0.5rem;
       }

        .info-item-popup i {
            text-align: center;
            font-size: 0.45rem;
            width: 10px;
            height: 10px;
            aspect-ratio: 1/1;
        }

        .info-item-popup span {
            font-size: 0.35rem; 
        }

        .info-item i {
            font-size: 0.5rem;
        }

        .info-item span {
            font-size: 0.5rem;
        }

        .profile-summary-title, .work-experience-title, .academic-background-title, .language-title, .hard-skills-title {
            font-size: 1.1rem;
        }

        .job-details-popup, .education-details-popup {
            font-size: 0.7rem;
        }

        .profile-summary-title-popup, .work-experience-title-popup, .academic-background-title-popup, .language-title-popup, .hard-skills-title-popup {
            font-weight: bold; 
            font-size: 0.9rem;
            padding: 0.5rem 0;
        }

        .profile-summary-title-popup, .work-experience-title-popup, .academic-background-title-popup, .language-title-popup, .hard-skills-title-popup {
            font-size: 1rem; 
        }

        .profile-summary-container, .work-experience-container, .academic-background-container, .language-container, .hard-skills-container {
            font-size: 0.8rem;
        }

        .work-experience-item, .academic-background-item {
            font-size: 0.8rem;
        }

        .personal-profile-summary-popup, .job-results-popup, .education-goals-popup {
            font-size: 0.6rem;
        }

        .job-dates, .education-dates {
            font-size: 0.6rem;
        }

        .watermark-logo {
            width: 350px; 
            height: 350px;
        }

        .dot-item-popup {
            display: inline-block; 
            height: 4px; 
            width: 4px;
            border-radius: 50%;
            margin-right: 0.4rem;
        }

        .language-details-popup, .hard-skills-details {
            font-size: 0.7rem;
        }

    }

    @media screen and (max-width: 390px) {

        .profile-picture-container, .tenant-picture-container {
            height: 110px;
            width: 110px;
        }

        .user-full-name {
            font-size: 0.8rem;
        }

        .user-profession {
            font-size: 0.7rem;
        }

        .user-personal-info{
            gap: 0.2rem;
            font-size: 0.4rem;
            padding: 0.2rem 0;
        }

        .info-item i {
            font-size: 0.4rem;
        }

        .info-item span {
            font-size: 0.3rem;
        }

        .profile-summary-title, .work-experience-title, .academic-background-title, .language-title, .hard-skills-title {
            font-size: 0.8rem;
        }

        .profile-summary-container, .work-experience-container, .academic-background-container, .language-container, .hard-skills-container {
            font-size: 0.6rem;
        }

        .work-experience-item, .academic-background-item {
            font-size: 0.5rem;
        }

        .job-dates, .education-dates {
            font-size: 0.5rem;
        }

        .dot-item { 
            height: 3px; 
            width: 3px;
        }

        .policy-privacy p {
            font-size: 0.4rem;
        }

        .company-logo {
            
            width: 30px; 
            height: 15px; 
           
        }

        .copyright-text {
            font-size: 0.4rem; 
        }


    }


</style>