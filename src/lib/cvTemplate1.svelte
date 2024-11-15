<script lang="ts">

    import {formDataStore, isAllowed, isPrivacyPolicyApproved, currentTenant, currentCopyrightPolicy, tenantColor} from "../stores/CvUser_data"; 
    import { cvInitialData }  from "../stores/cvDefault_data";

</script>

<div id="cv-template1-container">

    <div class="header-section">
    
        <!-- Profile picture -->
    
        <div class="profile-picture-container">
    
            {#if $formDataStore.filePicture}
    
                <img class="user-profile-picture" src="{$formDataStore.filePicture}" alt="Immagine Profilo">
    
            {:else}
            
                <div class="tenant-picture-container" style=" background-color: {$formDataStore.selectedColor || "white"}; padding: 20px;">
                    <div class="tenant-picture" style="background-image: url(https://{currentTenant}.blob.core.windows.net/cdn/cv/circle.svg);"></div>
                </div>
                
            {/if}
    
        </div>
    
        <div class="profile-info-container">
    
            <!-- Profile data -->
    
            <div class="user-full-name {tenantColor}"><strong><span style="color: {$cvInitialData.color};">{$cvInitialData.name}</span> {$cvInitialData.surname}</strong></div>
            
            <div class="user-profession">{$cvInitialData.profession}</div>
    
            <div class="user-personal-info">
    
                <div class="left-section">

                    <!-- Nationality Icon -->
                    <div class="info-item">
                        <i class="fa-solid fa-earth-americas {tenantColor}" style="color: {$cvInitialData.color}"></i>
                        <span>Nazionalità: {$cvInitialData.nationality}</span>
                    </div>

                    <!-- BirthCake Icon -->   
                    <div class="info-item">
                        <i class="fa-solid fa-cake-candles {tenantColor}" style="color: {$cvInitialData.color}"></i>
                        <span>{$cvInitialData.birthDate}, {$cvInitialData.birthPlace}</span>
                    </div>

                    <!-- HasOwnCar Icon -->
                    <div class="info-item">
                        <i class="fa-solid fa-car-side {tenantColor}" style="color: {$cvInitialData.color}"></i>
                        <span>Automunito:</span><span class="ms-1">{$cvInitialData.drivingLicences}</span>
                    </div>
                    
                    <!-- IsProtectedCategory Icon -->
                    <div class="info-item">
                        <i class="fa-regular fa-heart {tenantColor}" style="color: {$cvInitialData.color}"></i>
                        <span>Categoria protetta:</span><span style="margin-left: 5px">{$cvInitialData.isProtectedCategory}</span>
                    </div>
       
                </div>
    
                <div class="right-section">
                    
                    <!-- House Icon -->

                    <div class="info-item">

                        <i class="fa-solid fa-house {tenantColor}" style="color: {$cvInitialData.color}"></i>

                        <span>{$cvInitialData.address.streetAddress},<span class="ms-1">{$cvInitialData.address.postalCode},</span> {$cvInitialData.address.city} - {$cvInitialData.address.region}</span>


                    </div>

                    <!-- Phone Icon-->
                    <div class="info-item">

                        <i class="fa-solid fa-mobile-screen {tenantColor}" style="color: {$cvInitialData.color}"></i>
                        <span>{$cvInitialData.phonePrefix} {$cvInitialData.phoneNumber}</span>
                        
                    </div>

                    <!-- Email Icon -->
                    <div class="info-item">
                        <i class="fa-regular fa-envelope {tenantColor}" style="color: {$cvInitialData.color}"></i>
                        <span>{$cvInitialData.email}</span>
                    </div>
    
                </div>
    
            </div>
           
        </div>
    
    </div>
    
    <div class="main-section">
    
        <!-- Profile Summary Section-->
        <div class="profile-summary-container">
            <div class="profile-summary-title {tenantColor}" style="color: {$cvInitialData.color};">BREVE PRESENTAZIONE</div>
            <p class="personal-profile-summary">{$cvInitialData.profileSummary}</p>
        </div>
    
        <div class="watermark-logo" style="background-image: url(https://{currentTenant}.blob.core.windows.net/cdn/cv/transparent-logo.png);"></div>

        <!-- Work Experience Section-->
        <div class="work-experience-container">
    
            <div class="work-experience-title {tenantColor}" style="color:{$cvInitialData.color};">ESPERIENZE</div>
                
            {#each $cvInitialData.jobs as job}
    
                    <div class="work-experience-item">
                                    
                        <div class="job-details-container">
                    
                            <div class="dot-item" style="background-color: {$formDataStore.selectedColor || "black"};"></div>
                            <div class="job-details">{job.role} - {job.company} - in {job.location}</div>
                                        
                        </div>
                    
                        <div class="job-dates">{job.startDateWorkExperience}/{job.endDateWorkExperience}</div>
                                    
                    </div>
                    
                    <p class="job-results">{job.workExperienceResults}</p>
                    
            {/each}
            
        </div>
        
        <!-- Academic Background Section -->
        <div class="academic-background-container">
        
                <div class="academic-background-title {tenantColor}" style="color:{$cvInitialData.color};">FORMAZIONE</div>
            
                {#each $cvInitialData.educations as education (education)}
        
                    <div class="academic-background-item">
                            
                        <div class="education-details-container">
        
                            <div class="dot-item" style="background-color: {$formDataStore.selectedColor || "black"};"></div>
                            <div class="education-details">{education.qualification} - {education.trainingCenter} - {education.fieldOfStudy}</div>
                            
                        </div>
        
                        <div class="education-dates">{education.endDateAcademicEducation}</div>
                        
                    </div>
        
                    <p class="education-goals">{education.educationGoals}</p>
                    
                {/each}
        
        </div>
    
        <!-- Language Section -->
        <div class="language-container">
    
            <div class="language-title {tenantColor}" style="color: {$cvInitialData.color};">LINGUE</div>
            
            {#each $cvInitialData.languagesSkills as selectedLanguage (selectedLanguage)}
        
                <div class="language-details-container">
        
                    <div class="dot-item" style="background-color: {$formDataStore.selectedColor || 'black'};"></div>
                    <div class="language-details">{selectedLanguage.lang} - {selectedLanguage.level}</div>
                    
                </div>
        
            {/each}
        
        </div>
        
        <!-- Hard Skills Section-->
        <div class="hard-skills-container">
    
            <div class="hard-skills-title {tenantColor}" style="color:{$cvInitialData.color};">SKILLS E COMPETENZE DIGITALI</div>
           
            {#each $cvInitialData.digitalSkills as digitalSkill (digitalSkill)}
    
                <div class="hard-skills-details-container">
    
                    <div class="dot-item" style="background-color: {$formDataStore.selectedColor || "black"};"></div>
                    <div class="hard-skills-details">{digitalSkill.skill} - {digitalSkill.level}</div>
                    
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
        
                <div class="company-logo" style="background-image:url(https://{currentTenant}.blob.core.windows.net/cdn/cv/extended-logo.png);"></div>
                <p class="copyright-text">{currentCopyrightPolicy}</p>
                    
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
        height: auto;
    }

    .profile-picture-container, .tenant-picture-container {
        flex-shrink: 0;
        flex-basis: 20%;
        aspect-ratio: 1/1;
    }
    
    .user-profile-picture {
        height: 100%;
        width: 100%;
        object-position: center;
        object-fit: cover;
    }

    .tenant-picture {
        height: 100%;
        width: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .profile-info-container {
        display: flex;
        flex-direction: column;
        flex-basis: 80%;
        background-color: #f2f2f2;
        padding-left: 1rem;
    }

    .user-full-name {
        text-transform: uppercase;
        font-size: 2rem;
    }

    .user-profession {
        opacity: 0.5;
        text-transform: uppercase;
        font-size: 1.2rem;
    }

    .user-personal-info{
        display: flex;
        flex-direction: row;
        gap: 3rem;
        font-size: 0.6rem;
        padding: 1rem 0;
    }

    .left-section, .right-section {
        display: flex;
        flex-direction: column;
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

    .personal-profile-summary {
        opacity: 0.6;
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

    .dot-item {
        display: inline-block; 
        height: 8px; 
        width: 8px;
        border-radius: 50%;
        margin-right: 12px;
    }

    .work-experience-item, .academic-background-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-basis: 100%;
        font-size: 1rem;
        padding-top: 0.3rem;
    }

    .job-dates, .education-dates {
        font-size: 0.8rem;
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

        .user-personal-info{
            gap: 3rem;
            font-size: 0.6rem;
            padding: 1rem 0;
        }

        .watermark-logo {
            width: 400px; 
            height: 400px;
        }

    }

    @media screen and (max-width: 992px) {

        .user-full-name {
            font-size: 1.5rem;
        }

        .user-personal-info{
            gap: 1.5rem;
        }

        .info-item i {
            font-size: 0.6rem;
        }

        .info-item span {
            font-size: 0.6rem;
        }

        .profile-summary-title, .work-experience-title, .academic-background-title, .language-title, .hard-skills-title {
            font-size: 1.2rem;
        }

        .profile-summary-container, .work-experience-container, .academic-background-container, .language-container, .hard-skills-container {
            font-size: 0.8rem;
        }

        .work-experience-item, .academic-background-item {
            font-size: 0.8rem;
        }

        .job-dates, .education-dates {
            font-size: 0.6rem;
        }

        .watermark-logo {
            width: 350px; 
            height: 350px;
        }

    }


</style>