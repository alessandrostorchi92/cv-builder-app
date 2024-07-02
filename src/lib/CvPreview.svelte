<script lang="ts">

import { formDataStore } from '../stores/form_store';

console.log($formDataStore.filePicture);



</script>

<div id="curriculum-content" class="flex-column-utility flex-center-utility  py-2">

    <div class="cv-preview-container">

        <div class="cv-header-container">

            <!---- Profile Picture ---->

            <div class="file-picture-container">
                <div style="background-image: url(/{$formDataStore.filePicture});" class="file-picture"></div>
            </div>

            
                <!---- Full Name & Profession ---->
            <div>

                <h2 class="text-uppercase">{ $formDataStore.name } { $formDataStore.surname }</h2>

        
                <h4 class="text-center fst-italic">{ $formDataStore.profession }</h4>

            </div>

        </div>

        <div class="cv-main-container">

            <div class="left-section py-2">

                <div class="contact-information-container">

                    <!---- Email ---->

                    <div>

                        <span><i class="fa-solid fa-envelope"></i></span>
                        <span>{ $formDataStore.email }</span>
    
                     </div>

                    <!---- Phone ---->
    
                    <div>

                        <span><i class="fa-solid fa-phone"></i></span>
                        <span>{ $formDataStore.phonePrefix }</span>
                        <span>{ $formDataStore.phone }</span>
        
                    </div>

                    <!---- Location ---->

                    <div>

                        <span><i class="fa-solid fa-house"></i></span>
                        <span>{ $formDataStore.address }</span>

                    </div>
                
                </div>
            
                <div class="profile-details-container py-4 px-2"><div></div>

                    <!-- Profilo Personale -->

                    <h6 class="text-center">Profilo Personale</h6>

                    <div class="container">

                        <p>{ $formDataStore.profileSummary }</p>

                    </div>

                    <!-- Successi Professionali -->

                    <h6 class="text-center">Successi Professionali</h6>

                    <div class="container">

                        <p>{ $formDataStore.careerGoals }</p>
    
                    </div>

                    <!-- Lingue -->

                    <div class="lang-skills-container">

                        <h6>Competenze Linguistiche</h6>

                        <div>

                            {#each $formDataStore.languagesSkills as selectedLanguage(selectedLanguage)}

                            <div>

                                {selectedLanguage.lang} {selectedLanguage.level}

                            </div>

                            {/each}

                        </div>

                    </div>

                </div>

            </div>

            <div class="right-section px-2">

                <!-- Esperienza lavorativa -->

                    <div class="user-work-experience-info">

                        <div class="text-center py-2">ESPERIENZE LAVORATIVE</div>

                        {#each $formDataStore.jobs as job(job)}

                           <span class="role-info">{ job.role }</span>

                           {#if job.role}

                           <span>presso</span>

                           {/if}

                           <span class="company-info">{ job.company }</span>

                           <div class="date-info">

                            {#if job.company}

                                <span>({ job.startDateWorkExperience } / { job.endDateWorkExperience })</span>
 
                            {/if}

                           </div>

                           <p class="results-info">{ job.workExperienceResults }</p>

                        {/each}

                    </div>

                <!-- Formazione Accademica -->

                    <div class="user-education-history-info">


                        <div class="text-center py-2">FORMAZIONE ACCADEMICA</div>

                            {#each $formDataStore.educations as education(education)}

                                <span class="qualification-info">{ education.qualification }</span>

                                {#if education.educationType}

                                    <span>presso</span>

                                {/if}

                                <span class="training-institution-info">{ education.educationType }</span>

                                {#if education.qualification }

                                    <div class="date-info">

                                        <span>({ education.startDateAcademicEducation } / { education.endDateAcademicEducation })</span>
                
                                    </div>

                                {/if}

                                <p class="goals-info">{ education.educationGoals }</p>

                            {/each}
                    </div>

            </div>
    
        </div>
   
    </div>

    <div>

        <!---- Download Button ---->

        <div class="flex-center-utility py-2">

            <button class="download-btn">DOWNLOAD CV</button>

        </div>

    </div>
       
</div>

<style>

#curriculum-content {
    flex-grow: 1;
    border: 2px solid lightblue;  
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

.cv-preview-container {
    padding: 0.5rem;
    border: 1px solid black;
    overflow-y: auto;
    width: 800px;
}

.cv-header-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.file-picture-container {
    position: relative;
    width: 140px;
    height: 140px;
    border-radius: 50%;
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

.left-section {
    flex-shrink: 0;
    flex-basis: 40%;
}

.contact-information-container {
    font-size: 0.9rem;
}

.profile-details-container {
    font-size: 0.8rem;
}

.lang-skills-container {
    text-align: center;
}

.right-section {
    flex-grow: 1;
    width: 60%;
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

.download-btn {
  padding: 0.5rem;
  font-size: 1rem;
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

.download-btn:active {
  background-color: #a93226;
  transform: translateY(0);
}


</style>