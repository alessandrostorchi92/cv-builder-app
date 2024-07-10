<script lang="ts">

import { formDataStore, selectedFilePicture } from '../stores/form_store';

import { jsPDF } from "jspdf";

let hasPrivacyPolicyApproval = false;

// $: console.log(hasPrivacyPolicyApproval);

function downloadCV() {

    const cvContent = document.querySelector('.cv-preview-container') as HTMLElement | null;

    if (cvContent) {

        const cvPdf = new jsPDF('p', 'px', 'a4');

        const contentWidth: number = cvContent.offsetWidth;
        const contentHeight: number = cvContent.offsetHeight;
        const pageWidth: number = cvPdf.internal.pageSize.getWidth();
        const pageHeight: number = cvPdf.internal.pageSize.getHeight();
       
    
        cvPdf.html(cvContent, {
            callback: function (pdf) {

                pdf.save('curriculum-vitae.pdf');
            },

            x: (pageWidth - contentWidth * 0.5) / 2,
            y: (pageHeight - contentHeight * 0.5) / 2,    
            
            html2canvas: {
                scale: 0.5,
            },
            
        });

    } else {
        console.error('Curriculum non trovato');
    }
}
          
</script>

<div id="curriculum-content" class="flex-column-utility flex-center-utility">

    
    <div class="cv-preview-container">
        
        <h1 class="text-center py-4">Curriculum Vitae</h1>

        <div class="cv-header-container">

            <!---- Profile Picture ---->

            {#if $formDataStore.filePicture}

                <div class="file-picture-container"> 
                    
                    <img class="file-picture" src="{ $selectedFilePicture }" alt="Immagine profilo">
        
                </div>
            
            {/if}
            
                <!---- Full Name & Profession ---->
            <div>

                <h2 class="text-uppercase">{ $formDataStore.name } { $formDataStore.surname }</h2>

        
                <h4 class="text-center fst-italic">{ $formDataStore.profession }</h4>

            </div>

        </div>

        <div class="cv-main-container">

            <div class="left-section">

                <div class="profile-information-container add-vertical-space-utility">

                    <!---- Location ---->

                    <div>

                        {#if $formDataStore.address }

                            <span><i class="fa-solid fa-house"></i></span>
 
                        {/if}

                        <span>{ $formDataStore.address }</span>

                    </div>

                     <!---- Phone ---->
    
                     <div>

                        {#if $formDataStore.phonePrefix  || $formDataStore.phone }

                            <span><i class="fa-solid fa-phone"></i></span>

                        {/if}

                        <span>{ $formDataStore.phonePrefix }</span>
                        <span>{ $formDataStore.phone }</span>
        
                    </div>

                    <!---- Email ---->

                    <div>

                        {#if $formDataStore.email }

                            <span><i class="fa-solid fa-envelope"></i></span>

                        {/if}

                        <span>{ $formDataStore.email }</span>
    
                     </div>

                     <!---- Categorie protette ---->

                     <div>

                        {#if $formDataStore.isProtectedCategory }

                            <span><i class="fa-solid fa-user-shield"></i></span>
                            <span>Categorie protette:</span>

                        {/if}

                        <span>{ $formDataStore.isProtectedCategory }</span>
    
                     </div>

                     <!---- Automunito ---->

                     <div>

                        {#if $formDataStore.hasOwnCar }

                            <span><i class="fa-solid fa-car"></i></span>
                            <span>Automunito:</span>

                        {/if}
                        
                        <span>{ $formDataStore.hasOwnCar }</span>
    
                     </div>


                </div>
            
                <div class="user-details-container add-vertical-space-utility">

                    <!-- Profilo Personale -->

                    {#if $formDataStore.profileSummary }

                        <h6 class="title-center-utility">Profilo Personale</h6>
                        
                    {/if}
                        
                    <p>{ $formDataStore.profileSummary }</p>
    
                    <!-- Successi Professionali -->

                    {#if $formDataStore.careerGoals }

                        <h6 class="title-center-utility">Successi Professionali</h6>

                    {/if}

                    <p>{ $formDataStore.careerGoals }</p>
    
                    <!-- Lingue -->

                        {#if $formDataStore.languagesSkills.some(selectedLanguage => selectedLanguage.lang !== "" || selectedLanguage.level !== "" )  }

                            <h6 class="title-center-utility">Competenze Linguistiche</h6>

                        {/if}

                        {#each $formDataStore.languagesSkills as selectedLanguage(selectedLanguage)}

                            <div class="title-center-utility">

                                <span>{selectedLanguage.lang} {selectedLanguage.level}</span>

                            </div>

                        {/each}

                        <div  class="driving-licence-container title-center-utility">

                            {#if $formDataStore.drivingLicence}

                            <h6 class="title-center-utility">Patente</h6>

                            {/if}

                            <span>{ $formDataStore.drivingLicence }</span>

                        </div>
                </div>

            </div>

            <div class="right-section">

                <!-- Esperienza lavorativa -->

                    <div class="user-work-experience-info">

                        {#if $formDataStore.jobs.some(job => job.role !== "" || job.company !== "" || job.workExperienceResults !== "" || job.startDateWorkExperience !== "" || job.endDateWorkExperience !== "" )}

                            <div class="text-center py-2">ESPERIENZE LAVORATIVE</div>

                        {/if}

                        {#each $formDataStore.jobs as job(job)}

                            <span class="role-info">{ job.role }</span>

                            {#if job.role}

                                <span>presso</span>

                            {/if}

                            <span class="company-info">{ job.company }</span>

                            <div class="date-info">

                                {#if job.startDateWorkExperience !== "" ||  job.endDateWorkExperience !== ""}

                                    <span>({ job.startDateWorkExperience } / { job.endDateWorkExperience })</span>

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

                            <div class="text-center py-2">FORMAZIONE ACCADEMICA</div>

                        {/if}

                            {#each $formDataStore.educations as education(education)}
                            
                                <span class="qualification-info">{ education.qualification }</span>

                                {#if education.fieldOfStudy}
                                
                                    <span>in</span>
                                
                                {/if}
                            
                                <span class="qualification-info">{ education.fieldOfStudy }</span>

                                {#if education.educationType}
                                
                                    <span>presso</span>
                                
                                {/if}
                            
                            <span class="training-institution-info">{ education.educationType }</span>


                            <div class="date-info">

                                {#if education.startDateAcademicEducation || education.endDateAcademicEducation }

                                    <span>({ education.startDateAcademicEducation } / { education.endDateAcademicEducation })</span>

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
        <div class="form-check form-switch privacy-label ">
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

.left-section p, .right-section p {
    word-wrap: break-word;
    white-space: pre-wrap;
    max-width: 100%;
}

.add-vertical-space-utility {
    padding: 0.5rem 0;
}

::-webkit-scrollbar {
  display: none;
  }

.cv-preview-container {
    padding: 0.5rem;
    overflow-y: auto;
    width: 800px;
}

.cv-header-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
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

.cv-main-container {
    display: flex;
}

.driving-licence-container {
    padding: 1rem 0;
}

.left-section {
    flex-shrink: 0;
    flex-basis: 40%;
    overflow: hidden;
    padding: 0 1rem; 
}

.profile-information-container {

    font-size: 0.9rem;
}

.user-details-container {
    font-size: 0.8rem;
}
.right-section {
    flex-grow: 1;
    overflow: hidden;
    padding: 0 1rem;  
}

.user-work-experience-info .date-info,  .user-education-history-info .date-info {

    font-size: 0.8rem;
    display: inline-block;
}

.user-work-experience-info .role-info, .user-education-history-info .qualification-info {
    font-size: 1rem;
    font-weight:600;
}

.user-work-experience-info .company-info, .user-education-history-info .training-institution-info  {
    font-size: 1rem;
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

.download-btn:disabled {
    color: #999;
    background-color: #f0f0f0; 
    cursor: not-allowed; 
}

.download-btn:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
}

</style>