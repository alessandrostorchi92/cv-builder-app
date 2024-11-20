<script lang="ts">

    import {formDataStore, isPrivacyPolicyApproved, isAllowed, currentTenant, currentCopyrightPolicy, tenantColor} from "../stores/CvUser_data";
    import { cvInitialData }  from "../stores/cvDefault_data";

</script>

<div id="cv-template2-container">

    <!-- Header Section -->
    <div class="header-section {tenantColor}" style="border: 1px solid {$cvInitialData.color};">

        <div class="text-center">
             
             <!-- User Full Name -->
             <div class="user-full-name {tenantColor}"><span style="color: {$cvInitialData.color};">{$cvInitialData.name}</span><span class="ms-1" style="color: #888888;">{$cvInitialData.surname}</span></div>
     
             <!-- User Profession -->
             <div class="user-profession">{$cvInitialData.profession}</div>
     
             <div class="profile-info-container">
     
                 <!-- User BirthCake -->                 
                 <div class="info-item">
                     <span class="{tenantColor}" style="color: {$cvInitialData.color}">●</span>
                     <span class="specs-item">{$cvInitialData.birthDate}, {$cvInitialData.birthPlace}</span>
                 </div>
     
                 <!-- User House -->
                 <div class="info-item">
                     <span class="{tenantColor}" style="color: {$cvInitialData.color}">●</span>
                     <span class="specs-item">{$cvInitialData.address.streetAddress},<span>{$cvInitialData.address.postalCode},</span> {$cvInitialData.address.city} - {$cvInitialData.address.region}</span>
     
                 </div>
     
                 <!-- User Phone -->
                 <div class="info-item">
                    <span class="{tenantColor}" style="color: {$cvInitialData.color}">●</span>
                    <span class="specs-item">{$cvInitialData.phonePrefix} {$cvInitialData.phoneNumber}</span>
                 </div>
     
                 <!-- User Email -->
                 <div class="info-item">
                    <span class="{tenantColor}" style="color: {$cvInitialData.color}">●</span>
                     <span class="specs-item">{$cvInitialData.email}</span>
                 </div>
     
             </div>
     
             <div class="user-info-container {tenantColor}" style="border-top: 1px solid {$cvInitialData.color};">
     
                 <!-- Nationality -->
                 <div class="info-item">
                     <span class="{tenantColor}" style="color: {$cvInitialData.color}">●</span>
                     <span class="specs-item">Nazionalità: {$cvInitialData.nationality}</span>
                 </div>
     
                 <!-- IsProtectedCategory -->
                 <div class="info-item">
                    <span class="{tenantColor}" style="color: {$cvInitialData.color}">●</span>
                     <span>Categoria protetta:</span><span class="specs-item" style="margin-left: 5px">{$cvInitialData.isProtectedCategory}</span>
                 </div>
     
                 <!-- HasOwnCar -->  
                 <div class="info-item">
                    <span class="{tenantColor}" style="color: {$cvInitialData.color}">●</span>
                     <span>Automunito -</span>
                     {#if $formDataStore.hasOwnCar}
                         <span class="specs-item ms-1">{$cvInitialData.drivingLicences}</span>
                     {/if}
                 </div>
                 
             </div>
         
        </div>

    </div>

    <!-- Main Section -->
    <div class="main-section">

        <!-- Profile Summary --> 
        <div class="profile-summary-container {tenantColor}" style="border: 1px solid {$cvInitialData.color}; border-top: none; border-bottom: none">
            <div class="profile-summary-title" style="color: {$cvInitialData.color};">BREVE PRESENTAZIONE</div>
            <p>{$cvInitialData.profileSummary}</p>
        </div>

        <div class="watermark-logo" style="background-image: url(https://{currentTenant}.blob.core.windows.net/cdn/cv/transparent-logo.png);"></div>

        <!-- Work Experiences --> 
        <div class="work-experience-container py-2 {tenantColor}" style="border: 1px solid {$cvInitialData.color};">
        
            <div class="work-experience-title" style="color: {$cvInitialData.color};">ESPERIENZE DI LAVORO</div>
    
            {#each $cvInitialData.jobs as job}
            
                <div class="work-experience-item">
                        <div class="job-details">{job.role} - {job.company} - in {job.location}</div>         
                        <div class="job-dates">{job.startDateWorkExperience}/{job.endDateWorkExperience}</div>          
                </div>
                    
                <div class="job-results-wrapper">
                    <span class="me-1 {tenantColor}" style="color: {$cvInitialData.color}">●</span><p class="job-results">{job.workExperienceResults}</p>
                </div>
                
            {/each}
    
        </div>
        
        <!-- Academic Background -->
        <div class="academic-background-container {tenantColor}"  style="border: 1px solid {$cvInitialData.color}; border-top: none;">
                    
            <div class="academic-background-title" style="color:{$cvInitialData.color};">FORMAZIONE</div>
        
            {#each $cvInitialData.educations as education (education)}
        
                        <div class="academic-background-item">
        
                            <div class="education-goals-wrapper">
                                <span class="me-1 {tenantColor}" style="color: {$cvInitialData.color}">●</span><div class="education-details">{education.qualification} - {education.trainingCenter} - {education.fieldOfStudy}</div>
                            </div>
        
                            <div class="education-dates">{education.endDateAcademicEducation}</div>
        
                        </div>
                        
            {/each}
                    
        </div>
            
        <!-- Hard Skills -->
        <div class="hard-skills-container {tenantColor}" style="border: 1px solid {$cvInitialData.color}; border-top: none;">
                    
            <div class="hard-skills-title" style="color:{$cvInitialData.color};">SKILLS E COMPETENZE</div>
                        
            <div class="hard-skills-wrapper">
                            
                {#each $cvInitialData.digitalSkills as digitalSkill (digitalSkill)}
                        <div class="hard-skills-details" style="border: 1px solid {$cvInitialData.color};">{digitalSkill.skill} - {digitalSkill.level}</div>
                {/each}
                                
            </div>
            
        </div>
            
        <!-- Language Skills -->
        <div class="language-skills-container {tenantColor}" style="border: 1px solid {$cvInitialData.color}; border-top: none;">
                    
            <div class="language-skills-title" style="color:{$cvInitialData.color};">LINGUE</div>
                    
            <div class="language-skills-wrapper {tenantColor}">
                            
                {#each $cvInitialData.languagesSkills as selectedLanguage (selectedLanguage)}
                    <div class="language-skills-details" style="border: 1px solid {$cvInitialData.color}; color:{$cvInitialData.color};">{selectedLanguage.lang} - {selectedLanguage.level}</div>
                {/each}
                                
            </div>
            
        </div>

    </div>
  
    <!-- Footer Section -->
    {#if $isPrivacyPolicyApproved && $isAllowed}

        <div class="footer-section {tenantColor}" style="border: 1px solid {$cvInitialData.color}; border-top: none">
    
            <div class="d-flex">

                    <div class="policy-privacy-container">
                        <p>Autorizzo il trattamento dei dati personali nel rispetto della vigente normativa sulla protezione dei dati personali ed in particolare il Regolamento Europeo per la protezione dei dati personali 2016/679, il d.lgs. 30/06/2003 n. 196 e successive modifiche e integrazioni.</p>
                    </div>

                    <div class="user-signature-container">
                        <img src="{$formDataStore.userSignature}" alt="Firma digitale" style="width:60%;">
                    </div>

            </div>
   
        </div>

    {/if}           

</div>

 <!-- Company info Section -->

<div class="copyright-container">
    
    <div class="company-logo" style="background-image:url(https://{currentTenant}.blob.core.windows.net/cdn/cv/extended-logo.png);"></div>
    <p class="copyright-text">{currentCopyrightPolicy}</p>
        
</div>        

<style>

#cv-template2-container{
    display: flex;
    flex-direction: column;
    width: 90%;
    font-family: 'Poppins', sans-serif;
    height: auto;
    border-radius: 12px;
}

.user-full-name {
    padding-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
}

.user-profession {
    padding-top: 0.5rem;
    font-size: 1rem;
    color: gray;
    padding: 0.2rem 0;
}

.profile-info-container, .user-info-container {
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;
    font-size: 0.7rem;
    color: gray;
}

.info-item > .specs-item {
  margin-right: 0.5rem;
}

.main-section {
    position: relative;
    z-index: 0;
}

.profile-summary-title, .work-experience-title, .academic-background-title, .hard-skills-title, .language-skills-title {
    font-size: 1rem;
    text-align: center;
    padding-top: 0.5rem;
}

p {
    margin: 0;
    font-size: 0.7rem;
    color: gray;
}

.profile-summary-container p {
    padding: 0.5rem 1rem;
}

.watermark-logo {
    position: absolute;
    width: 400px; 
    height: 400px;
    top: 40px;
    right: -160px;
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
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
}

.job-results-wrapper {
    padding: 0 1rem;
}

.job-details {
    font-weight: 600;
}

.job-goals-wrapper {
    padding: 0 1rem;
}

.job-results, .education-details {
    display: inline;
}

.hard-skills-wrapper, .language-skills-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.4rem;
    font-size: 0.9rem;
    padding: 1rem;
}

.hard-skills-details, .language-skills-details {
    display: inline-block;
    padding: 0.2rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.7rem;
}

.footer-section {
    padding: 0 1rem;
}

.policy-privacy-container {
    flex-basis: 70%;
}

.policy-privacy-container p {
    font-size: 0.6rem; 
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
        width: 90%;
        margin-top: 1rem; 
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

        .profile-info-container, .user-info-container {
            font-size: 0.6rem;
        }

        .watermark-logo {
            width: 300px; 
            height: 300px;
        }

    }

    @media screen and (max-width: 992px) {
        .profile-info-container, .user-info-container {
            font-size: 0.5rem;
        }

        .user-full-name {
            font-size: 1.1rem;
        }

        .user-profession {
            font-size: 1rem;
        }

        .profile-summary-title, .work-experience-title, .academic-background-title, .hard-skills-title, .language-skills-title {
            font-size: 0.9rem;
    
        }

        .profile-summary-title p, .job-results-wrapper p {
            font-size: 0.6rem;
        }

        .work-experience-item, .academic-background-item {
            font-size: 0.6rem;
        }


    }

    @media screen and (max-width: 390px) {

        .user-full-name {
            font-size: 0.8rem;
        }

        .user-profession {
            font-size: 0.7rem;
        }

        .profile-info-container, .user-info-container {
            font-size: 0.3rem; 
        }

        .profile-summary-title, .work-experience-title, .academic-background-title, .hard-skills-title, .language-skills-title {
            font-size: 0.5rem;
    
        }

        .profile-summary-container p, .job-results-wrapper p {
            font-size: 0.5rem;
        }

        .job-results-wrapper span, .education-goals-wrapper span {
            font-size: 0.5rem;
        }

        .job-details, .job-dates, .education-details, .education-dates, .hard-skills-details, .language-skills-details  {
            font-size: 0.4rem;
        }

        .policy-privacy-container p {
            font-size: 0.4rem; 
        }

        .company-logo {
            width: 40px; 
            height: 20px; 
        }

        .copyright-text {
            font-size: 0.4rem; 
        }


    }

</style>