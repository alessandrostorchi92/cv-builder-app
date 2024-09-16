<script lang="ts">

import { formDataStore, isAllowed, isPrivacyPolicyApproved } from '../stores/form_store';
import PopupTemplate from "$lib/PopupTemplate.svelte";

let showPopup: boolean = false;

function formattedBirtDate(date: string) : string {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}

function formattedWorkAccademicDate(date: string) : string {
    if (!date) return '';
    const [year, month] = date.split('-');
    return `${month}/${year}`;
}

function showCvTemplates() {
     showPopup = true;
}

function hidePopup() {
    showPopup = false;
}
  
</script>

<div id="curriculum-content">

    {#if showPopup}
    <PopupTemplate on:hideCvTemplates={hidePopup}></PopupTemplate>
    {/if}

    <div class="flex-center-utility flex-direction-column-utility">
    
        <div class="cv-preview-container">
    
            <div class="cv-header-container">
    
                <div class="header-left-section flex-center-utility">
                    
                    <!---- Immagine di profilo ---->
                    
                    {#if $formDataStore.filePicture}
                    
                        <div class="file-picture-container"> 
                    
                            <img class="file-picture" src="{ $formDataStore.filePicture }" alt="Immagine del profilo">
                            
                        </div>
                                
                    {/if}
    
                </div>
    
                <div class="header-right-section flex-center-utility">
    
                    <!---- Nome e Professione ---->
        
                    <div>
            
                        <div class="user-full-name text-uppercase">{ $formDataStore.name } { $formDataStore.surname }</div>
                        <div class="user-profession text-center fst-italic">{ $formDataStore.profession }</div>
            
                    </div>
    
                </div>
                
            </div>
    
            <div class="cv-main-container">
    
                <div class="main-left-section">
    
                    <div>
    
                         <!---- Dati personali ---->
    
                        {#if $formDataStore.nationality || $formDataStore.birthPlace || $formDataStore.birthDate || $formDataStore.address || $formDataStore.phonePrefix || $formDataStore.phone || $formDataStore.email || $formDataStore.isProtectedCategory}
                            
                            <div class="title-user-details-utility">INFORMAZIONI PERSONALI</div>
                                                    
                        {/if}
    
                        
                        <div class="profile-info-container">
    
                            <!---- Nazione ---->
    
                            <div>
    
                                {#if $formDataStore.nationality }
            
                                    <span class="profile-info-label">Nazione:</span>
                                    
                                {/if}
            
                                <span class="profile-info-value">{ $formDataStore.nationality }</span>
        
                            </div>
                            
                            <!---- Luogo di Nascita ---->
    
                            <div>
    
                                {#if $formDataStore.birthPlace }
            
                                    <span class="profile-info-label">Luogo di nascita:</span>
                                    
                                {/if}
            
                                <span class="profile-info-value">{ $formDataStore.birthPlace }</span>
        
                            </div>
        
                            <!---- Data di Nascita ---->
        
                            <div>
        
                                {#if $formDataStore.birthDate }
            
                                    <span class="profile-info-label">Data di nascita:</span>
                                        
                                {/if}
        
                                <span class="profile-info-value">{ formattedBirtDate($formDataStore.birthDate) }</span>
        
                            </div>
        
                            <!---- Location ---->
        
                            <div>
        
                                {#if $formDataStore.address }
        
                                    <span class="profile-info-label">Residenza/Domicilio:</span>
         
                                {/if}
        
                                <span class="profile-info-value">{ $formDataStore.address }</span>
        
                            </div>
        
                             <!---- Phone ---->
            
                             <div>
        
                                {#if $formDataStore.phonePrefix  || $formDataStore.phone }
        
                                    <span class="profile-info-label">Cellulare:</span>
        
                                {/if}
        
                                <span class="profile-info-value">{ $formDataStore.phonePrefix }</span>
                                <span class="profile-info-value">{ $formDataStore.phone }</span>
                
                            </div>
        
                            <!---- Email ---->
        
                            <div>
        
                                {#if $formDataStore.email }
        
                                    <span class="profile-info-label">E-mail:</span>
        
                                {/if}
        
                                <span class="profile-info-value">{ $formDataStore.email }</span>
            
                             </div>
        
                             <!---- Categorie protette ---->
        
                             <div>
        
                                {#if $formDataStore.isProtectedCategory }
        
                                    <span class="profile-info-label">Categorie protette:</span>
        
                                {/if}
        
                                <span class="profile-info-value">{ $formDataStore.isProtectedCategory }</span>
            
                             </div>
        
    
    
                        </div>
    
                    </div>
                
                    <div class="user-details-container">
    
                        <!-- Profilo Personale -->
    
                        <div>
                            
                            {#if $formDataStore.profileSummary }
                            
                                <div class="title-user-details-utility">PROFILO PERSONALE</div>
                                                    
                            {/if}
                                                    
                            <p class="">{ $formDataStore.profileSummary }</p>
    
                        </div>
        
                        <!-- Competenze digitali -->
    
                        <div>
    
                            {#if $formDataStore.digitalSkills.some(digitalSkill => digitalSkill.skill !== "")}
        
                                <div class="title-user-details-utility">COMPETENZE DIGITALI</div>
    
                            {/if}
    
                             <div class="digital-skills-container">
    
                                {#each $formDataStore.digitalSkills as digitalSkill(digitalSkill)}
    
                                    <div class="digital-skills">{digitalSkill.skill}</div>
    
                                    {#if digitalSkill.skill}
                                        <div>:</div>
                                    {/if}
                                
                                    {#if digitalSkill.skill}
                                        <div class="digital-skill-levels">{digitalSkill.level}</div>
                                    {/if}
                                
                                {/each}
    
                            </div>
    
                        </div>
    
                        <!-- Lingue -->
    
                        <div>
    
                            {#if $formDataStore.languagesSkills.some(selectedLanguage => selectedLanguage.lang !== "")}
        
                                <div class="title-user-details-utility">COMPETENZE LINGUISTICHE</div>
        
                            {/if}
    
                            <div class="languages-container">
    
                                {#each $formDataStore.languagesSkills as selectedLanguage(selectedLanguage)}
    
                                    <div class="language-skills">{selectedLanguage.lang}</div>
    
                                    {#if selectedLanguage.lang}
                                        <div>:</div>
                                    {/if}
                                
                                    {#if selectedLanguage.lang}
                                        <div class="class= language-levels">{selectedLanguage.level}</div>
                                    {/if}
                                
                                {/each}
    
                            </div>
    
                        </div>
                        
                        <!-- Patente -->
    
                        {#if $formDataStore.drivingLicences.length > 0 || $formDataStore.hasOwnCar  }
    
                            <div class="title-user-details-utility text-center">PATENTE</div>
    
                        {/if}
    
                        <div class="text-center driving-licence-skills-container">
    
                            {#if $formDataStore.drivingLicences.length > 0 }
    
                                <span class="driving-licence-types"><i class="fa-solid fa-address-card"></i></span>
                                
                            {/if}
    
                            <span>{ $formDataStore.drivingLicences }</span>
    
                            <!---- Automunito ---->
        
                            <div>
        
                                {#if $formDataStore.hasOwnCar }
        
                                    <span><i class="fa-solid fa-car"></i></span>
                                    <span>Automunito:</span>
        
                                {/if}
                                
                                 <span>{ $formDataStore.hasOwnCar }</span>
            
                                </div>
    
                            </div>
    
                        </div>
    
                </div>
    
                <div class="main-right-section">
    
                    <!-- Esperienza lavorativa -->
    
                        <div>
    
                            {#if $formDataStore.jobs.some(job => job.role !== "" || job.company !== "" || job.workExperienceResults !== "" || job.startDateWorkExperience !== "" || job.endDateWorkExperience !== "" )}
    
                                <div class="work-experience-title-section">ESPERIENZE LAVORATIVE</div>
    
                            {/if}
    
                            <div class="user-work-experience-info">
    
                                {#each $formDataStore.jobs as job, jobIndex}
        
                                    <span class="role-info">{ job.role }</span>
        
                                    {#if job.role}
        
                                        <span class="at-span">presso</span>
        
                                    {/if}
        
                                    <span class="company-detail">{ job.company }</span>
        
                                    <div class="date-container">
        
                                        {#if job.startDateWorkExperience !== "" ||  job.endDateWorkExperience !== ""}
        
                                            <span class="date-info">({ formattedWorkAccademicDate(job.startDateWorkExperience) } - { formattedWorkAccademicDate(job.endDateWorkExperience) })</span>
        
                                        {/if}
        
                                    </div>
        
                                    <p class="results-info">{ job.workExperienceResults }</p>
        
                                {/each}
    
                            </div>
    
                            
                        </div>
    
                    <!-- Formazione Accademica -->
    
                        <div>
    
                            {#if $formDataStore.educations.some(education => education.educationType !== "" || education.fieldOfStudy !== "" || 
                            education.qualification.length > 0 || education.educationGoals !== "" || education.startDateAcademicEducation !== "" || 
                            education.endDateAcademicEducation !== "" )}
    
                                <div class="education-history-title-section py-2">FORMAZIONE ACCADEMICA</div>
    
                            {/if}
    
                            <div class="user-education-history-info">
    
                                {#each $formDataStore.educations as education, educationIndex}
                                
                                    <span class="qualification-info">{ education.qualification }</span>
        
                                    {#if education.fieldOfStudy}
                                    
                                        <span class="at-span">:</span>
                                    
                                    {/if}
                                
                                    <span class="fieldOfStudy-detail">{ education.fieldOfStudy }</span>
        
                                    {#if education.educationType}
                                    
                                        <span class="at-span">presso</span>
                                    
                                    {/if}
                                
                                    <span class="training-institution-detail">{ education.educationType }</span>
        
        
                                    <div class="date-container">
        
                                        {#if education.startDateAcademicEducation || education.endDateAcademicEducation }
        
                                            <span class="date-info">({ formattedWorkAccademicDate(education.startDateAcademicEducation) }  - { formattedWorkAccademicDate(education.endDateAcademicEducation) })</span>
        
                                        {/if}
                    
                                    </div>
        
                                    <p class="goals-info">{ education.educationGoals }</p>
        
                                {/each}
    
                            </div>
         
                        </div>
    
                </div>
        
            </div>
            
            {#if $isAllowed && $isPrivacyPolicyApproved }
            <div class="privacy-policy-authorization">Autorizzo il trattamento dei dati personali contenuti nel mio curriculum vitae in base al D. Lgs. 196/2003 e al Regolamento UE 2016/679</div>
            {/if}
    
        </div>
    
        <div class="toolbar">
        
            <!---- Select Template Button ---->
        
            <div>
        
                <button class="select-template-btn" on:click={showCvTemplates}>SCEGLI TEMPLATE</button>
        
            </div>
        
        </div>
    
    </div>

</div>



<style>
:root {
    --user-height-profile-picture: 200px;
    --user-width-profile-picture: 200px;
    --user-full-name-font-size: 2.5rem;
    --user-full-name-font-weight: 800;
    --user-profession-font-size: 1.8rem;
    --user-profession-font-weight: 700;
    --profile-info-label-font-size: 1.2rem;
    --profile-info-label-font-weight: 500;
    --profile-info-value-font-size: 1rem;
    --profile-info-value-font-weight: 450;
    --title-section-font-size: 1.5rem;
    --title-section-font-weight: 600;
    --description-font-size: 1rem;
    --description-font-weight: 400;
    --language-driving-licence-digital-skills-font-size: 0.8rem;
    --language-driving-licence-digital-skills-font-weight: 500;
    --language-levels-driving-licence-types-digital-skill-levels-font-size: 0.8rem;
    --language-levels-driving-licence-types-digital-skill-levels-font-weight: 450;
    --job-qualification-font-size: 1.1rem;
    --job-qualification-font-weight: 600;
    --company-institution-detail-font-size: 0.9rem; 
    --company-institution-detail-font-weight: 500; 
    --company-fieldOfStudy-detail-font-size: 1rem; 
    --company-fieldOfStudy-detail-font-weight: 600;
    --company-date-info-font-size:0.7rem;
    --company-date-info-font-weight:500;
}
#curriculum-content {
    display: flex;
    height: 100vh; 
    flex-basis: 65%;
    max-width: 100%;
    background: linear-gradient(180deg, rgba(96,100,112,1) 17%, rgba(50,54,67,1) 65%);
}

.cv-preview-container {
    display: flex;
    flex-direction: column;
    flex-basis: 78%;
    width: 90%;
    max-width: 100%;
    height: calc(100vh - 20%);
    overflow-y: auto;
    background-color: #f5feff;
    padding: 2rem 1rem;
}

.toolbar {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-shrink: 0;
    flex-basis: 10%;
    width: 100%;
    max-width: 100%;
}

.cv-preview-container::-webkit-scrollbar {
    width: 0.5rem;
}

.cv-preview-container::-webkit-scrollbar-track {
    border-radius: 100vw;
}

.cv-preview-container::-webkit-scrollbar-thumb {
    background: hsl(196, 72%, 86%);
    border-radius: 100vw;
}

.cv-preview-container::-webkit-scrollbar-track-piece {
  background: hsl(187, 100%, 98%);
}

.flex-direction-column-utility {
    flex-direction: column;
}
.flex-center-utility {
    display: flex;
    justify-content: center; 
    align-items: center;
}

.title-user-details-utility, .work-experience-title-section, .education-history-title-section {
    text-align: center;
    font-weight: var(--title-section-font-weight);
    font-size: var(--title-section-font-size);
}

.user-work-experience-info {
    padding-top: 0.8rem;
}

.cv-header-container, .cv-main-container {
    display: flex;
    padding: 1rem 0;
}

.user-full-name {
    font-size: var(--user-full-name-font-size);
    font-weight: var(--user-full-name-font-weight);
}

.cv-header-container {
    flex-shrink: 0;
    flex-basis: 20%;
}

.cv-main-container {
    display: flex;
    flex-basis: 80%;
}

.user-profession {
    font-size: var(--user-profession-font-size);
    font-weight: var(--user-profession-font-weight);
}

.main-left-section {
    flex-basis: 40%;
    flex-shrink: 0;
    max-width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;
}

.main-left-section p {
    margin-top: 1rem;
}

.main-right-section {
    flex-basis: 60%;
    max-width: 100%;
    overflow: hidden;
    overflow-wrap: break-word; 
}

.file-picture-container {
    position: relative;
    width: var(--user-width-profile-picture);
    height: var(--user-height-profile-picture);
    border-radius: 50%;
    border: 5px solid #ccc;
    overflow: hidden;
}

.file-picture {
    position: absolute;
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
}

.main-left-section, .header-left-section {
    flex-shrink: 0;
    flex-basis: 40%;
    overflow: hidden;
}

.profile-info-container, .user-details-container {
    padding: 1rem 0;
}

.profile-info-label {
    font-size: var(--profile-info-label-font-size);
    font-weight: var(--profile-info-label-font-weight);
}

.profile-info-value {
  font-size: var(--profile-info-value-font-size);
  font-weight: var(--profile-info-value-font-weight);
}

.digital-skills-container, .languages-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.digital-skills-container, .languages-container, .driving-licence-skills-container{
    padding: 1rem 0;
}

.digital-skills, .language-skills, .driving-licence-skills-container {
    font-size: var(--language-driving-licence-digital-skills-font-size);
    font-weight: var(--language-driving-licence-digital-skills-font-weight);
}

.digital-skill-levels, .language-levels, .driving-licence-types {
    font-size: var(--language-levels-driving-licence-types-digital-skill-levels-font-size);
    font-weight: var(--language-levels-driving-licence-types-digital-skill-levels-font-weight);
}
.main-right-section, .header-right-section {
    flex-basis: 60%;
    overflow: hidden;
    padding: 0 1rem;  
}

.date-container {
    font-size: var(--company-date-info-font-size);
    font-weight: var(--company-date-info-font-weight);
    display: inline-block;
}

.role-info, .qualification-info {

    font-size: var(--job-qualification-font-size);
    font-weight:var(--job-qualification-font-weight);
}

.at-span {
    font-size: 0.8rem;
}

.company-detail, .training-institution-detail {
    font-size: var(--company-institution-detail-font-size);
    font-weight:var(--company-institution-detail-font-weight);
}

.fieldOfStudy-detail {
    font-size: var(--company-fieldOfStudy-detail-font-size);
    font-weight: var(--company-fieldOfStudy-detail-font-weight);
}

.user-details-container, .results-info, .goals-info {
    font-size: var(--description-font-size);
    font-weight: var(--description-font-weight);
}

.privacy-policy-authorization {
    text-align: center;
    font-size: 0.7rem;
    font-weight: 500;
}

.select-template-btn {
  width: 12rem;
  padding: 1rem;
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  background-color: #f64f12;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.select-template-btn:hover  {
  transform: translateY(-5px);
  background-color: #fe2f00;
}

</style>