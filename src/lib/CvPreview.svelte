<script lang="ts">

import { formDataStore, isAllowed, isPrivacyPolicyApproved } from '../stores/form_store';

function isProfilePictureUploaded(): void {
    const filePictureUploadedInput: HTMLInputElement | null = document.querySelector('[name="filePicture"]');
    const errorProfilePictureUploadedMessage: HTMLDivElement | null = document.querySelector(".error-file-picture-message");

    const setProfilePictureUploadedErrorFeedBack = (message: string) => {

        if (errorProfilePictureUploadedMessage) {
            errorProfilePictureUploadedMessage.innerText = message;
            errorProfilePictureUploadedMessage.classList.add("error-user-data", "fw-bolder");
            errorProfilePictureUploadedMessage.style.fontSize = "0.8rem";
        }

    };

    if (filePictureUploadedInput) {
        
        if (!filePictureUploadedInput.files || filePictureUploadedInput.files.length === 0) {
            setProfilePictureUploadedErrorFeedBack("Mi dispiace, devi caricare la tua immagine di profillo");
        }

    }
    
};

function isProtectedCategoryRadiosSelected(): void {

    const protectedCategoryRadiosInput: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="protectedCategoryRadioOptions"]');
    const errorProtectedCategoryMessage: HTMLDivElement | null = document.querySelector(".error-protected-category-message");
    let isSelected = false;

    protectedCategoryRadiosInput.forEach(protectedCategoryRadio => {

        if (protectedCategoryRadio.checked) {
            isSelected = true;
        } else {
            protectedCategoryRadio.classList.add("is-invalid");
        }

    });

    const setProtectedCategoryErrorFeedBack = (message: string) => {

        if (errorProtectedCategoryMessage) {
            errorProtectedCategoryMessage.innerText = message;
            errorProtectedCategoryMessage.classList.add("error-user-data", "fw-bolder");
            errorProtectedCategoryMessage.style.fontSize = "0.8rem";
        }

    };

    if (!isSelected) {
        setProtectedCategoryErrorFeedBack("Mi dispiace, devi selezionare almeno un'opzione");
    }
};

function checkDrivingLicenceCheckboxesInput(): void {
    
    const drivingLicenceCheckboxInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="drivingLicenceCheckBoxOptions"]');
    const errorDrivingLicenceMessage: HTMLDivElement | null = document.querySelector(".error-driving-licence-message");
    let isSelected = false;

    drivingLicenceCheckboxInputs.forEach(drivingLicenceCheckbox => {

        if (drivingLicenceCheckbox.checked) {
            isSelected = true;
        } else {
            drivingLicenceCheckbox.classList.add("is-invalid");
        }

    });

    const setDrivingLicenceErrorFeedBack = (message: string) => {

        if (errorDrivingLicenceMessage) {
            errorDrivingLicenceMessage.innerText = message;
            errorDrivingLicenceMessage.classList.add("error-user-data", "fw-bolder");
            errorDrivingLicenceMessage.style.fontSize = "0.8rem";
        }

    };

    if (!isSelected) {
        setDrivingLicenceErrorFeedBack("Mi dispiace, devi selezionare almeno un'opzione");
    }
};

function isHasOwnCarRadiosSelected(): void {

    const isHasOwnCarRadioInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="drivingLicenceRadioOptions"]');
    const errorHasOwnCarMessage: HTMLDivElement | null = document.querySelector(".error-has-own-car-message");

    let isSelected = false;

    isHasOwnCarRadioInputs.forEach(isHasOwnCarRadioInput => {

        if (isHasOwnCarRadioInput.checked) {
            isHasOwnCarRadioInput.classList.add("is-valid");
            isSelected = true;
        }

    });

    const setHasOwnCarErrorFeedback = (message: string) => {

        if (errorHasOwnCarMessage) {
            errorHasOwnCarMessage.innerText = message;
            errorHasOwnCarMessage.classList.add("error-user-data", "fw-bolder");
            errorHasOwnCarMessage.style.fontSize = "0.8rem";
        }
    
    };

    if (!isSelected) {
        setHasOwnCarErrorFeedback ("Mi dispiace, devi selezionare almeno un'opzione");
    }

};

function checkCvPreview(): void {
    
    if($formDataStore.filePicture === "" || $formDataStore.isProtectedCategory === "" || $formDataStore.drivingLicences.length === 0 || $formDataStore.hasOwnCar === "" ) {
        isProfilePictureUploaded();
        isProtectedCategoryRadiosSelected();
        checkDrivingLicenceCheckboxesInput();
        isHasOwnCarRadiosSelected();
    }

}
  
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
  
</script>


<div id="curriculum-content" class="flex-center-utility">
    
    <div class="toolbar">
    
        <!---- Select Template Button ---->
    
        <div>
    
            <button class="select-template-btn">SCEGLI TEMPLATE</button>
    
        </div>
    
        <!---- Select Colour Button ---->
    
        <div>
    
            <button class="select-colour-btn">PERSONALIZZA CV</button>
    
        </div>
    
        <!---- Download Button ---->
    
        <div>
            <button class="download-btn" on:click={checkCvPreview} disabled={!$isAllowed || !$isPrivacyPolicyApproved}>DOWNLOAD CV</button>
        </div>
    
    </div>

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
    
                <div class="text-wrap-utility">
        
                    <div class="user-full-name text-uppercase">{ $formDataStore.name } { $formDataStore.surname }</div>
                    <div class="user-profession text-center fst-italic">{ $formDataStore.profession }</div>
        
                </div>

            </div>
            
        </div>

        <div class="cv-main-container">

            <div class="main-left-section">

                <div class="text-wrap-utility">

                     <!---- Dati personali ---->

                    {#if $formDataStore.birthPlace || $formDataStore.birthDate || $formDataStore.address || $formDataStore.phonePrefix || $formDataStore.phone || $formDataStore.email || $formDataStore.isProtectedCategory}
                        
                        <div class="title-user-details-utility">INFORMAZIONI PERSONALI</div>
                                                
                    {/if}

                    
                    <div class="profile-info-container">
                        
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
    
                    <!-- Successi Professionali -->

                    <div>

                        {#if $formDataStore.digitalSkills }
    
                            <div class="title-user-details-utility">COMPETENZE DIGITALI</div>
    
                        {/if}
    
                        <p>{ $formDataStore.digitalSkills }</p>

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
                                    <div class="language-skills">{selectedLanguage.level}</div>
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

                            <span><i class="fa-solid fa-address-card"></i></span>
                            
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

                    <div class="user-work-experience-info">

                        {#if $formDataStore.jobs.some(job => job.role !== "" || job.company !== "" || job.workExperienceResults !== "" || job.startDateWorkExperience !== "" || job.endDateWorkExperience !== "" )}

                            <div class="work-experience-title-section py-2">ESPERIENZE LAVORATIVE</div>

                        {/if}

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

                <!-- Formazione Accademica -->

                    <div class="user-education-history-info">


                        {#if $formDataStore.educations.some(education => education.educationType !== "" || education.fieldOfStudy !== "" || 
                        education.qualification.length > 0 || education.educationGoals !== "" || education.startDateAcademicEducation !== "" || 
                        education.endDateAcademicEducation !== "" )}

                            <div class="education-history-title-section py-2">FORMAZIONE ACCADEMICA</div>

                        {/if}

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
    --language-driving-licence-skills-font-size: 0.6rem;
    --language-driving-licence-skills-font-weight: 400;
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
    flex-direction: column;
    height: 100vh; 
    flex-basis: 60%;
    background: linear-gradient(180deg, rgba(96,100,112,1) 17%, rgba(50,54,67,1) 65%);
}
.toolbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-shrink: 0;
    flex-basis: 20%;
    width: 100%;
}
.cv-preview-container {
    display: flex;
    flex-direction: column;
    flex-basis: 80%;
    overflow-y: auto;
    width: 80%;
    height: calc(100vh - 20%);
    background-color: #f5feff;
    padding: 2rem 1rem;
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

.cv-header-container, .cv-main-container {
    display: flex;
}

.user-full-name {
    font-size: var(--user-full-name-font-size);
    font-weight: var(--user-full-name-font-weight);

}

.cv-header-container {
    padding: 1rem 0;
}

.cv-main-container {
    padding: 2rem 0;
}

.user-profession {
    font-size: var(--user-profession-font-size);
    font-weight: var(--user-profession-font-weight);
}

.main-left-section p, .main-right-section p {
    word-wrap: break-word;
    max-width: 100%;
}

.main-left-section p {
    margin-top: 1rem;
}

.text-wrap-utility {
    overflow-wrap: break-word;
    overflow: hidden;
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
.languages-container {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

.languages-container, .driving-licence-skills-container{
    padding: 1rem 0;
}

.language-skills, .driving-licence-skills-container {
    font-size: var(--language-skills-font-size);
    font-weight: var(--language-skills-font-weight);

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

.select-template-btn, .select-colour-btn, .download-btn {
  width: 12rem;
  padding: 1rem;
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  background-color: #ef7e56;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.select-template-btn:hover,.select-colour-btn:hover, .download-btn:hover {
  transform: translateY(-2px);
  background-color: #ff5e3a;
}

.download-btn:disabled {
    color: #BDBDBD;
    background-color: white; 
    cursor: not-allowed; 
} 

</style>