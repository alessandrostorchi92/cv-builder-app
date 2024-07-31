<script lang="ts">

import { formDataStore, selectedFilePicture } from '../stores/form_store';

// import { jsPDF } from "jspdf";

let hasPrivacyPolicyApproval = false;

function isProfilePictureUploaded(): void {
    const filePictureUploadedInput: HTMLInputElement | null = document.querySelector('[name="filePicture"]');
    const errorProfilePictureUploadedMessage: HTMLDivElement | null = document.querySelector(".error-file-picture-message");

    const setProfilePictureUploadedErrorFeedBack = (message: string) => {

        if (errorProfilePictureUploadedMessage) {
            errorProfilePictureUploadedMessage.innerText = message;
            errorProfilePictureUploadedMessage.classList.add("error-user-data", "fw-medium");
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
            errorProtectedCategoryMessage.classList.add("error-user-data", "fw-medium");
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
            errorDrivingLicenceMessage.classList.add("error-user-data", "fw-medium");
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
            errorHasOwnCarMessage.classList.add("error-user-data", "fw-medium");
            errorHasOwnCarMessage.style.fontSize = "0.8rem";
        }
    
    };

    if (!isSelected) {
        setHasOwnCarErrorFeedback ("Mi dispiace, devi selezionare almeno un'opzione");
    }

};


function downloadCV(): void {

    isProfilePictureUploaded();
    isProtectedCategoryRadiosSelected();
    checkDrivingLicenceCheckboxesInput();
    isHasOwnCarRadiosSelected();
  
}


// function downloadCV() {

//     const cvContent = document.querySelector('.cv-preview-container') as HTMLElement | null;

//     if (cvContent) {

//         const cvPdf = new jsPDF('p', 'px', 'a4');

//         const contentWidth: number = cvContent.offsetWidth;
//         const contentHeight: number = cvContent.offsetHeight;
//         const pageWidth: number = cvPdf.internal.pageSize.getWidth();
//         const pageHeight: number = cvPdf.internal.pageSize.getHeight();
       
    
//         cvPdf.html(cvContent, {
//             callback: function (pdf) {

//                 pdf.save('curriculum-vitae.pdf');
//             },

//             x: (pageWidth - contentWidth * 0.5) / 2,
//             y: (pageHeight - contentHeight * 0.5) / 2,    
            
//             html2canvas: {
//                 scale: 0.5,
//             },
            
//         });

//     } else {
//         console.error('Curriculum non trovato');
//     }
// }

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

<div id="curriculum-content" class="flex-column-utility flex-center-utility">

    
    <div class="cv-preview-container">
        
        <h1 class="text-center py-4">Curriculum Vitae</h1>

        <div class="cv-header-container">

            <div class="header-left-section flex-center-utility">
                
                <!---- Immagine di profilo ---->
                
                {#if $formDataStore.filePicture}
                
                    <div class="file-picture-container"> 
                
                        <img class="file-picture" src="{ $selectedFilePicture }" alt="Immagine profilo">
                        
                    </div>
                            
                {/if}

            </div>

            <div class="header-right-section flex-center-utility">

                <!---- Nome e Professione ---->
    
                <div class="text-wrap-utility">
        
                    <h2 class="text-uppercase">{ $formDataStore.name } { $formDataStore.surname }</h2>
                    <h4 class="text-center fst-italic">{ $formDataStore.profession }</h4>
        
                </div>

            </div>
            
        </div>

        <div class="cv-main-container">

            <div class="main-left-section">

                <div class="profile-info-container text-wrap-utility add-vertical-space-utility">

                    <!---- Luogo di Nascita ---->

                    <div>

                        {#if $formDataStore.birthPlace }
    
                            <span class="profile-info-label">Luogo di nascita:</span>
                            
                        {/if}
    
                        <span>{ $formDataStore.birthPlace }</span>

                    </div>

                    <!---- Data di Nascita ---->

                    <div>

                        {#if $formDataStore.birthDate }
    
                            <span class="profile-info-label">Data di nascita:</span>
                                
                        {/if}

                        <span>{ formattedBirtDate($formDataStore.birthDate) }</span>

                    </div>

                    <!---- Location ---->

                    <div>

                        {#if $formDataStore.address }

                            <span class="profile-info-label">Residenza/Domicilio:</span>
 
                        {/if}

                        <span>{ $formDataStore.address }</span>

                    </div>

                     <!---- Phone ---->
    
                     <div>

                        {#if $formDataStore.phonePrefix  || $formDataStore.phone }

                            <span class="profile-info-label">Cellulare:</span>

                        {/if}

                        <span>{ $formDataStore.phonePrefix }</span>
                        <span>{ $formDataStore.phone }</span>
        
                    </div>

                    <!---- Email ---->

                    <div>

                        {#if $formDataStore.email }

                            <span class="profile-info-label">E-mail:</span>

                        {/if}

                        <span>{ $formDataStore.email }</span>
    
                     </div>

                     <!---- Categorie protette ---->

                     <div>

                        {#if $formDataStore.isProtectedCategory }

                            <span class="profile-info-label">Categorie protette:</span>

                        {/if}

                        <span>{ $formDataStore.isProtectedCategory }</span>
    
                     </div>

                </div>
            
                <div class="user-details-container">

                    <!-- Profilo Personale -->

                    <div class="title-center-utility add-vertical-space-utility">
                        
                        {#if $formDataStore.profileSummary }
                        
                            <h6>Profilo Personale</h6>
                                                
                        {/if}
                                                
                        <p>{ $formDataStore.profileSummary }</p>

                    </div>
    
                    <!-- Successi Professionali -->


                    <div class="title-center-utility add-vertical-space-utility">

                        {#if $formDataStore.digitalSkills }
    
                            <h6>Competenze digitali</h6>
    
                        {/if}
    
                        <p>{ $formDataStore.digitalSkills }</p>

                    </div>

    
                    <!-- Lingue -->

                    <div class="title-center-utility add-vertical-space-utility">

                        {#if $formDataStore.languagesSkills.some(selectedLanguage => selectedLanguage.lang !== "")}
    
                            <h6>Competenze Linguistiche</h6>
    
                        {/if}

                        {#each $formDataStore.languagesSkills as selectedLanguage(selectedLanguage)}
    
                            <div class="title-center-utility">
    
                                <span>{selectedLanguage.lang}</span>
    
                                {#if selectedLanguage.lang}
                                <span>{selectedLanguage.level}</span>
                                {/if}
    
                            </div>
    
                        {/each}

                    </div>

                        <div class="title-center-utility add-vertical-space-utility">

                            {#if $formDataStore.drivingLicences.length > 0}

                                <h6 class="mt-4">Patente</h6>

                            {/if}

                            <span>{ $formDataStore.drivingLicences.join(', ') }</span>

                        </div>

                        <!---- Automunito ---->

                    <div class="title-center-utility">

                        {#if $formDataStore.hasOwnCar }

                            <span><i class="fa-solid fa-car"></i></span>
                            <span>Automunito:</span>

                        {/if}
                        
                        <span>{ $formDataStore.hasOwnCar }</span>
    
                    </div>

                </div>

            </div>

            <div class="main-right-section">

                <!-- Esperienza lavorativa -->

                    <div class="user-work-experience-info">

                        {#if $formDataStore.jobs.some(job => job.role !== "" || job.company !== "" || job.workExperienceResults !== "" || job.startDateWorkExperience !== "" || job.endDateWorkExperience !== "" )}

                            <div class="text-center fw-bold py-1">ESPERIENZE LAVORATIVE</div>

                        {/if}

                        {#each $formDataStore.jobs as job(job)}

                            <span class="role-info">{ job.role }</span>

                            {#if job.role}

                                <span>presso</span>

                            {/if}

                            <span class="company-info">{ job.company }</span>

                            <div class="date-info">

                                {#if job.startDateWorkExperience !== "" ||  job.endDateWorkExperience !== ""}

                                    <span>({ formattedWorkAccademicDate(job.startDateWorkExperience) } / { formattedWorkAccademicDate(job.endDateWorkExperience) })</span>

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

                            <div class="text-center fw-bold py-1">FORMAZIONE ACCADEMICA</div>

                        {/if}

                            {#each $formDataStore.educations as education(education)}
                            
                                <span class="qualification-info">{ education.qualification }</span>

                                {#if education.fieldOfStudy}
                                
                                    <span>:</span>
                                
                                {/if}
                            
                                <span class="fieldOfStudy-detail">{ education.fieldOfStudy }</span>

                                {#if education.educationType}
                                
                                    <span>presso</span>
                                
                                {/if}
                            
                                <span class="training-institution-info">{ education.educationType }</span>


                                <div class="date-info">

                                    {#if education.startDateAcademicEducation || education.endDateAcademicEducation }

                                        <span>({ formattedWorkAccademicDate(education.startDateAcademicEducation) }  / { formattedWorkAccademicDate(education.endDateAcademicEducation) })</span>

                                    {/if}
                
                                </div>

                                <p class="goals-info">{ education.educationGoals }</p>

                            {/each}
                            
                    </div>

            </div>
    
        </div>
   
    </div>

    <!---- Privacy Policy ---->

    <div>
        <div class="form-check form-switch privacy-label">
            <input class="form-check-input" 
                   type="checkbox" 
                   role="switch" 
                   id="privacyPolicySwitch" 
                   bind:checked={hasPrivacyPolicyApproval}>
            <label class="form-check-label" for="flexSwitchCheckChecked">Accetta la privacy policy per scaricare il CV</label>
        </div>
           
    </div>

    <!---- Download Button ---->

    <div class="flex-center-utility py-2">

        <button class="download-btn" on:click={downloadCV} disabled={!hasPrivacyPolicyApproval}>DOWNLOAD CV</button>

    </div>

       
</div>

<style>

#curriculum-content {
    flex-grow: 1;
    overflow: -moz-scrollbars-none; 
    overflow: -moz-scrollbars-none; 
}

.flex-column-utility {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.flex-center-utility {
    display: flex;
    justify-content: center;
    align-items: center;
}

.title-center-utility {
    text-align: center;
}

.cv-header-container, .cv-main-container {
    display: flex;
}

.main-left-section p, .main-right-section p {
    word-wrap: break-word;
    max-width: 100%;
}

.add-vertical-space-utility {
    padding: 0.6rem 0 ;
}

.text-wrap-utility {
    overflow-wrap: break-word;
    overflow: hidden;
}

::-webkit-scrollbar {
  display: none;
  }

.cv-preview-container {
    padding: 0.5rem;
    overflow-y: auto;
    width: 800px;
}

.file-picture-container {
    position: relative;
    width: 180px;
    height: 180px;
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
    padding: 0 1rem; 
}

.profile-info-container {
    font-size: 1rem;
}

.profile-info-label {
    font-weight: 600;
}

.user-details-container {
    font-size: 0.8rem;
}
.main-right-section, .header-right-section {
    flex-grow: 1;
    overflow: hidden;
    padding: 0 1rem;  
}

.user-work-experience-info .date-info,  .user-education-history-info .date-info {

    font-size: 0.8rem;
    display: inline-block;
}

.user-work-experience-info .role-info, .qualification-info {
    font-size: 1rem;
    font-weight:700;
}

.user-education-history-info .fieldOfStudy-detail {

    font-size: 1rem;
    font-weight:600;


}

.user-work-experience-info .company-info, .user-education-history-info .training-institution-info  {
    font-size: 0.9rem;
    font-weight:400;
    font-style: oblique;
}

.user-work-experience-info .results-info, .user-education-history-info .goals-info{
    font-size: small;
    padding: 0.3rem 0;
}

.privacy-label {
    font-size: 0.8rem ;
    font-style: oblique;
    font-weight: 500;
}

.download-btn {
  padding: 0.5rem;
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  background-color: #e74c3c;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.download-btn:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
}

.download-btn:disabled {
    color: #999;
    background-color: #f0f0f0; 
    cursor: not-allowed; 
}

</style>