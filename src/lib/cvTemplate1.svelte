
<script lang="ts">

    import {formDataStore, formattedWorkAccademicDate, isAllowed, isPrivacyPolicyApproved, currentTenant, currentCopyrightPolicy} from "../stores/CvUser_data"; 
    import { cvInitialData }  from "../stores/cvDefault_data";

</script>

<div class="header-section">

    <!-- Profile picture -->

    <div class="profile-picture-container">

        {#if $formDataStore.filePicture}

            <img class="user-profile-picture" src="{$formDataStore.filePicture}" alt="Immagine Profilo">

        {:else}

            <div class="tenant-picture" style="background-image: url(https://{currentTenant}.blob.core.windows.net/cdn/cv/circle.svg);"></div>

        {/if}

    </div>

    <div class="profile-info-container">

        <!-- Profile data -->

        <div class="user-full-name"><strong><span style="color: {$formDataStore.selectedColor || "black"};">{$cvInitialData.name}</span> {$cvInitialData.surname}</strong></div>
        
        <div class="user-profession">{$cvInitialData.profession}</div>

        <div class="user-personal-info">


            <div class="left-section">
    
                <div class="info-item">

                    <i class="fa-solid fa-earth-americas" style="color: {$formDataStore.selectedColor || "black"}"></i>
                    <span>Nazionalità: {$cvInitialData.nationality}</span>

                </div>
                    
                <div class="info-item">
                    <i class="fa-solid fa-cake-candles" style="color: {$formDataStore.selectedColor || "black"}"></i>
                    <span>{$cvInitialData.birthDate}, {$cvInitialData.birthPlace}</span>
                </div>
    
                <div class="info-item">
                    <i class="fa-solid fa-car-side" style="color: {$formDataStore.selectedColor || "black"}"></i>
                    <span>Automunito:{$cvInitialData.hasOwnCar}</span><span>-</span><span>{$cvInitialData.drivingLicences}</span>
                </div>
    
                <div class="info-item">
                    <i class="fa-regular fa-heart" style="color: {$formDataStore.selectedColor || "black"}"></i>
                    <span>Categoria protetta:</span><span style="margin-left: 5px">{$cvInitialData.isProtectedCategory}</span>
                </div>
   
            </div>

            <div class="right-section">

                <div class="info-item">
                    <i class="fa-solid fa-house" style="color: {$formDataStore.selectedColor || "black"}"></i>
                    <span>{$cvInitialData.address}</span>
                </div>

                <div class="info-item">
                    <i class="fa-solid fa-mobile-screen" style="color: {$formDataStore.selectedColor || "black"}"></i>
                    <span>{$cvInitialData.phonePrefix} {$cvInitialData.phoneNumber}</span>
                </div>

                <div class="info-item">
                    <i class="fa-regular fa-envelope" style="color: {$formDataStore.selectedColor || "black"}"></i>
                    <span>{$cvInitialData.email}</span>
                </div>

            </div>

        </div>
       
    </div>

</div>

<div class="main-section">

    <!-- Profile Summary Section-->

    <div class="profile-summary-container">
        <div class="profile-summary-title" style="color: {$formDataStore.selectedColor || "black"};">BREVE PRESENTAZIONE</div>
        <p class="personal-profile-summary">{$formDataStore.profileSummary}</p>
    </div>

    <div class="position-relative">

        <div class="watermark-container">
            <div class="watermark-logo" style="background-image: url(https://{currentTenant}.blob.core.windows.net/cdn/cv/transparent-logo.png);"></div>
        </div>

        <!-- Work Experience Section-->
    
        <div class="work-experience-container">
    
            <div class="work-experience-title" style="color:{$formDataStore.selectedColor};">ESPERIENZE</div>
            
            {#each $formDataStore.jobs as job (job)}
    
                <div class="work-experience-item">
                    
                    <div class="job-details-container">
    
                        {#if job.role && job.company && job.location}
                            <div class="dot-item" style="background-color: {$formDataStore.selectedColor};"></div>
                            <div class="job-details">{job.role} - {job.company} - in {job.location}</div>
                        {/if}
    
                    </div>
    
                    {#if job.startDateWorkExperience && job.endDateWorkExperience }
                        <div class="job-dates">{formattedWorkAccademicDate(job.startDateWorkExperience)} / {job.endDateWorkExperience === "" ? "Presente" : formattedWorkAccademicDate(job.endDateWorkExperience)}</div>
                    {/if}
    
                </div>
    
                {#if job.workExperienceResults}
                    <p class="job-results">{job.workExperienceResults}</p>
                {/if}
    
            {/each}
            
        </div>
    
         <!-- Academic Background Section -->
    
        <div class="academic-background-container">
    
            {#if $formDataStore.educations.some((education) => education.educationType !== "" || education.fieldOfStudy !== "" || education.qualification.length > 0 || education.educationGoals !== "" || education.startDateAcademicEducation !== "" || education.endDateAcademicEducation !== "")}
                <div class="academic-background-title" style="color:{$formDataStore.selectedColor};">FORMAZIONE</div>
            {/if}
    
            
            {#each $formDataStore.educations as education (education)}
    
                <div class="academic-background-item">
                        
                    <div class="education-details-container">
    
                        {#if education.qualification && education.educationType && education.fieldOfStudy}
                            <div class="dot-item" style="background-color: {$formDataStore.selectedColor};"></div>
                            <div class="education-details">{education.qualification} - {education.educationType} - {education.fieldOfStudy}</div>
                        {/if}
    
                    </div>
    
                    {#if education.endDateAcademicEducation}
                        <div class="education-dates">{formattedWorkAccademicDate(education.endDateAcademicEducation) === "" ? "Presente" : formattedWorkAccademicDate(education.endDateAcademicEducation)}</div>
                    {/if}
    
                </div>
    
                {#if education.educationGoals}
                    <p class="education-goals">{education.educationGoals}</p>
                {/if}
    
            {/each}
    
        </div>

    </div>


    <!-- Language Section -->

    <div class="language-container">

        {#if $formDataStore.languagesSkills.some((selectedLanguage) => selectedLanguage.lang !== "")}
            <div class="language-title" style="color:{$formDataStore.selectedColor};">LINGUE</div>
        {/if}

        {#each $formDataStore.languagesSkills as selectedLanguage (selectedLanguage)}

            <div class="language-details-container">

                {#if selectedLanguage.lang}
                    <div class="dot-item" style="background-color: {$formDataStore.selectedColor};"></div>
                    <div class="language-details">{selectedLanguage.lang} - {selectedLanguage.level} </div>
                {/if}

            </div>

        {/each}

    </div>

    <!-- Hard Skills Section-->

    <div class="hard-skills-container">

        {#if $formDataStore.digitalSkills.some((digitalSkill) => digitalSkill.skill !== "")}
            <div class="hard-skills-title" style="color:{$formDataStore.selectedColor};">SKILLS E COMPETENZE DIGITALI</div>
        {/if}

        {#each $formDataStore.digitalSkills as digitalSkill (digitalSkill)}

            <div class="hard-skills-details-container">

                {#if digitalSkill.skill}
                    <div class="dot-item" style="background-color: {$formDataStore.selectedColor};"></div>
                    <div class="hard-skills-details">{digitalSkill.skill} - {digitalSkill.level}</div>
                {/if}

            </div>

        {/each}

    </div>

    <!-- Footer Section -->

    <div style="margin-top: 40px;padding: 20px; border-top: 1px solid #e6e6e6;">

        <!-- Policy Privacy & Signature Section -->

        {#if $isPrivacyPolicyApproved && $isAllowed}

            <div class="d-flex">

                <div class="policy-privacy-container">

                    <p style="font-size: 14px; color: #666; margin: 0;">Autorizzo il trattamento dei dati personali nel rispetto della vigente normativa sulla protezione dei dati personali ed in particolare il Regolamento Europeo per la protezione dei dati personali 2016/679, il d.lgs. 30/06/2003 n. 196 e successive modifiche e integrazioni.</p>

                </div>

                <div class="user-signature-container">

                    <img src="{$formDataStore.userSignature}" alt="Firma digitale" style="width:60%;">

                </div>

            </div>

        {/if}

        
        <!-- Company info Section -->

        {#if $isAllowed && $isPrivacyPolicyApproved}

            <div class="copyright-container">
    
                <div class="company-logo" style="background-image:url(https://{currentTenant}.blob.core.windows.net/cdn/cv/extended-logo.png);"></div>
                <p class="copyright-text">{currentCopyrightPolicy}</p>
                
            </div>
                        
        {/if}
 
    </div>

</div>

<style>

    .header-section, .main-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 90%;
    }

    .profile-picture-container {
        flex-shrink: 0;
        flex-basis: 20%;
        height: 200px;
        aspect-ratio: 1/1;
        padding: 1rem;
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
    }

    .profile-info-container {
        display: flex;
        flex-direction: column;
        flex-basis: 80%;
        height: 200px;
        background-color: #f2f2f2; 
        padding: 10px;
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
        gap: 4rem;
        font-size: 0.7rem;
        padding: 0.8rem 0;
    }

    .left-section, .right-section {
        display: flex;
        flex-direction: column;
        gap: 4px;
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
        font-size: 1rem; 
        color: gray;
    }

    .watermark-container {
        position: absolute;
        width: 600px; 
        height: 600px;
        aspect-ratio: 1/1; 
        left: 65%;
        bottom: 30%; 
        z-index: 0;
    }

    .watermark-logo {
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-size: contain;
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
        padding-right: 2rem;
        padding-top: 0.3rem;
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

    .policy-privacy-container {
        flex-basis: 70%;
    }

    .policy-privacy-container p {
        font-size: 14px; 
        color: #666;
        padding: 1rem;
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
        gap: 10px
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


</style>


