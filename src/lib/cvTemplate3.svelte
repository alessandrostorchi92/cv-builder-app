<script lang="ts">

    import {formDataStore, formattedBirtDate, formattedWorkAccademicDate, isAllowed, isPrivacyPolicyApproved, currentTenant, currentCopyrightPolicy} from "../stores/form_store";
    
</script>

<div style="margin: 0 auto; font-family: Montserrat; position: relative;">

    <div style="position: absolute; left: 65%; bottom: 580px; z-index: 0; width: 240px;">
        <div style="
            width: 700px; 
            height: 700px; 
            background-image: url(https://during.blob.core.windows.net/cdn/cv/transparent-logo.png);
            background-repeat: no-repeat;
            background-size: contain;">
        </div>
    </div>

    <table style="width:100%; height:100%; border-spacing: 0;">

        <tbody>

             <!-- Colonna sinistra (Grigia) -->
             <tr>
                <td style="width:30%; background-color:#efefef; vertical-align:top; padding: 0 20px;">

                    <!-- Logo e Dati Personali -->
                    <div style="text-align:center; margin-bottom:30px; margin-top:40px;">
                        <img src="{$formDataStore.filePicture}" alt="Logo" style="width:200px; margin: -16px 0 0 0;border-radius:400px">
                        <h1 style="font-weight:bold; font-size:56px; color:{$formDataStore.selectedColor};font-family: Anton;margin: 0;">{$formDataStore.name} {$formDataStore.surname}</h1>
                        <p style="font-size: 40px; color:#808080;">{$formDataStore.profession}</p>
                    </div>

                    <!-- Dati di contatto -->
                    <div>

                        <p style="display: flex; align-items: center; flex-direction:row; margin: 16px 2px;">

                            {#if $formDataStore.nationality}
                                <!-- Icona Nazionalità -->
                                <svg style="margin-right:6px" width="20px" height="20px" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15407 7.30116C7.52877 5.59304 9.63674 4.5 12 4.5C12.365 4.5 12.7238 4.52607 13.0748 4.57644L13.7126 5.85192L11.2716 8.2929L8.6466 8.6679L7.36009 9.95441L6.15407 7.30116ZM5.2011 8.82954C4.75126 9.79256 4.5 10.8669 4.5 12C4.5 15.6945 7.17133 18.7651 10.6878 19.3856L11.0989 18.7195L8.8147 15.547L10.3741 13.5256L9.63268 13.1549L6.94027 13.6036L6.41366 11.4972L5.2011 8.82954ZM7.95559 11.4802L8.05962 11.8964L9.86722 11.5951L11.3726 12.3478L14.0824 11.9714L18.9544 14.8135C19.3063 13.9447 19.5 12.995 19.5 12C19.5 8.93729 17.6642 6.30336 15.033 5.13856L15.5377 6.1481L11.9787 9.70711L9.35371 10.0821L7.95559 11.4802ZM18.2539 16.1414C16.9774 18.0652 14.8369 19.366 12.3859 19.4902L12.9011 18.6555L10.6853 15.578L12.0853 13.7632L13.7748 13.5286L18.2539 16.1414ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="{$formDataStore.selectedColor}"></path></g></svg>
                                <span style="font-size: 15px;"> Nazionalità: {$formDataStore.nationality}</span>
                            {/if}

                        </p>

                        <p style="display: flex; align-items: center; gap:8px;margin: 16px 2px;">

                            {#if $formDataStore.birthPlace || $formDataStore.birthDate}
                                <!-- Icona Data di nascita -->
                                <svg style="margin-right:6px" width="12px" height="12px" fill="{$formDataStore.selectedColor}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="{$formDataStore.selectedColor}"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>birthday-cake</title><path d="M28 13.75h-2.75v-2.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 2.75h-5.5v-2.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 2.75h-5.5v-2.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 2.75h-2.75c-1.794 0.002-3.248 1.456-3.25 3.25v11c0.002 1.794 1.456 3.248 3.25 3.25h24c1.794-0.001 3.249-1.456 3.25-3.25v-11c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM4 16.25h2.75v1.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-1.75h5.5v1.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-1.75h5.5v1.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-1.75h2.75c0.412 0.006 0.744 0.338 0.75 0.749v5.979l-1.865-1.865c-0.231-0.225-0.547-0.364-0.896-0.364-0.040 0-0.080 0.002-0.119 0.005l0.005-0c-0.385 0.039-0.714 0.248-0.915 0.55l-0.003 0.005c-1.086 1.641-2.75 3.6-4.363 3.438-1.682-0.133-3.063-2.4-3.454-3.262-0.202-0.437-0.636-0.734-1.14-0.734s-0.938 0.298-1.136 0.727l-0.003 0.008c-0.386 0.85-1.754 3.084-3.431 3.223-1.616 0.172-3.296-1.775-4.393-3.406-0.205-0.303-0.533-0.509-0.911-0.546l-0.005-0c-0.035-0.003-0.076-0.005-0.117-0.005-0.346 0-0.66 0.139-0.888 0.365l0-0-1.866 1.866v-5.98c0.006-0.412 0.338-0.744 0.75-0.75h0.001zM28 28.75h-24c-0.412-0.006-0.744-0.338-0.75-0.749v-1.484l2.602-2.602c1.231 1.952 3.358 3.24 5.789 3.285l0.007 0c1.827-0.295 3.369-1.328 4.335-2.777l0.015-0.023c0.984 1.494 2.54 2.542 4.349 2.835l0.037 0.005c0.127 0.010 0.252 0.016 0.377 0.016 2.281-0.225 4.226-1.487 5.379-3.303l0.017-0.029 2.594 2.596v1.483c-0.006 0.412-0.338 0.744-0.749 0.75h-0.001zM7.991 9.25c1.972-0.032 3.58-1.553 3.749-3.486l0.001-0.014c-0.484-1.837-1.473-3.399-2.81-4.576l-0.010-0.009c-0.229-0.255-0.561-0.415-0.929-0.415-0 0-0 0-0 0h-0.002c-0.369 0.001-0.701 0.162-0.93 0.417l-0.001 0.001c-1.3 1.215-2.273 2.764-2.782 4.511l-0.018 0.071c0.165 1.943 1.766 3.463 3.729 3.5l0.004 0zM7.995 3.943c0.465 0.541 0.878 1.151 1.216 1.805l0.025 0.053c-0.192 0.526-0.669 0.904-1.239 0.949l-0.005 0c-0.559-0.051-1.025-0.404-1.237-0.892l-0.004-0.010c0.349-0.728 0.765-1.354 1.254-1.915l-0.009 0.010zM15.991 9.25c1.972-0.032 3.579-1.553 3.748-3.486l0.001-0.014c-0.484-1.837-1.473-3.399-2.809-4.576l-0.010-0.009c-0.229-0.255-0.56-0.415-0.929-0.415-0 0-0.001 0-0.001 0h-0.002c-0.369 0.001-0.701 0.162-0.93 0.417l-0.001 0.001c-1.3 1.215-2.273 2.764-2.782 4.511l-0.018 0.071c0.165 1.943 1.766 3.463 3.729 3.5l0.004 0zM15.994 3.944c0.466 0.541 0.879 1.15 1.216 1.804l0.024 0.052c-0.192 0.526-0.668 0.904-1.238 0.949l-0.005 0c-0.559-0.051-1.025-0.404-1.237-0.892l-0.004-0.010c0.349-0.727 0.764-1.354 1.253-1.914l-0.009 0.010zM23.99 9.25c1.972-0.032 3.579-1.553 3.749-3.486l0.001-0.014c-0.484-1.837-1.473-3.399-2.81-4.576l-0.010-0.009c-0.229-0.255-0.56-0.415-0.928-0.415-0.001 0-0.001 0-0.002 0h-0.002c-0.37 0.001-0.702 0.162-0.931 0.417l-0.001 0.001c-1.299 1.215-2.271 2.765-2.779 4.511l-0.018 0.071c0.164 1.943 1.764 3.463 3.727 3.5l0.004 0zM23.994 3.944c0.466 0.541 0.878 1.15 1.216 1.804l0.025 0.052c-0.192 0.526-0.669 0.904-1.239 0.949l-0.005 0c-0.558-0.051-1.023-0.404-1.235-0.892l-0.004-0.010c0.346-0.728 0.761-1.354 1.25-1.914l-0.008 0.010z"></path><path d="M7 15L17 15" stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                                <span style="font-size: 15px;">{formattedBirtDate($formDataStore.birthDate)}, {$formDataStore.birthPlace}</span>
                            {/if}

                        </p>

                        <p style="display: flex;align-items: top; gap: 4px; margin: 16px 2px;">

                            {#if $formDataStore.address}
                                <!-- Icona Residenza -->
                                <svg style="margin-right:6px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14" height="14" viewBox="0 0 16 16">
                                    <path fill="{$formDataStore.selectedColor}" d="M 8 1.320313 L 0.660156 8.132813 L 1.339844 8.867188 L 2 8.253906 L 2 14 L 7 14 L 7 9 L 9 9 L 9 14 L 14 14 L 14 8.253906 L 14.660156 8.867188 L 15.339844 8.132813 Z M 8 2.679688 L 13 7.328125 L 13 13 L 10 13 L 10 8 L 6 8 L 6 13 L 3 13 L 3 7.328125 Z"></path>
                                </svg> 
                                <span style="font-size: 15px;">{$formDataStore.address}</span>
                            {/if}

                        </p>

                        <p style="display: flex; align-items: center; margin: 16px 2px;">

                            {#if $formDataStore.email}
                                <!-- Icona Email -->
                                <svg style="margin-right:6px" width="18px" height="18px" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6ZM3.10658 5.55395C3.27196 5.22692 3.61204 5 4 5H20C20.388 5 20.728 5.22692 20.8934 5.55395L12 11.7793L3.10658 5.55395ZM3 7.92066L10.8531 13.4178C11.5417 13.8999 12.4583 13.8999 13.1469 13.4178L21 7.92066V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18V7.92066Z" fill="{$formDataStore.selectedColor}"></path> </g></svg>
                                <span style="font-size: 15px;">{$formDataStore.email}</span>
                            {/if}

                        </p>

                        <p style="display: flex; align-items: center; gap: 4px; margin: 16px 2px;">

                            {#if $formDataStore.phone}
                            <!-- Icona Telefono -->
                            <svg style="margin-right:6px" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10" stroke="{$formDataStore.selectedColor}" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 19H9" stroke="black" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                            <span style="font-size: 15px;">{$formDataStore.phone}</span>
                            {/if}

                        </p>

                    </div>

                    <!-- Lingue -->
                    <div style="padding: 10px 0;">

                        {#if $formDataStore.languagesSkills.some((selectedLanguage) => selectedLanguage.lang !== "")}
                            <p style="font-size:32px; font-weight:bold; color:{$formDataStore.selectedColor};border-bottom: 1px solid {$formDataStore.selectedColor};">LINGUE</p>
                        {/if}

                        {#each $formDataStore.languagesSkills as selectedLanguage (selectedLanguage)}
                            <p style="font-size:20px; color:#000;">{selectedLanguage.lang} - {selectedLanguage.level}</p>
                        {/each}

                    </div>

                    <!-- Competenze -->
                    <div style="padding: 10px 0;">

                        {#if $formDataStore.digitalSkills.some((digitalSkill) => digitalSkill.skill !== "")}
                            <p style="font-size:32px; font-weight:bold; color:{$formDataStore.selectedColor}; border-bottom: 1px solid {$formDataStore.selectedColor};">SKILLS E COMPETENZE</p>
                        {/if}
                        
                        {#each $formDataStore.digitalSkills as digitalSkill (digitalSkill)}
                            <p style="font-size:20px; color:#000;">{digitalSkill.skill} - {digitalSkill.level}</p>
                        {/each}

                    </div>

                </td>

                <!-- Colonna destra -->
                <td style="width:70%; vertical-align:top; padding:20px; position: relative;">

                    <table>

                        <tbody>

                            <tr>
                                <td style="font-size: 24px;"><span style="color: {$formDataStore.selectedColor};">Categoria protetta:</span>{$formDataStore.isProtectedCategory}</td>
                                <td style="font-size: 24px;"><div style="width: 20px;"></div></td>
                                
                                {#if  $formDataStore.drivingLicences.length > 0}
                                <td style="font-size: 24px;"><span style="color: {$formDataStore.selectedColor};">Automunito</span> - {$formDataStore.drivingLicences}</td>
                                {/if}
                            </tr>

                        </tbody>

                    </table>

                    <!-- (Descrizione) -->
                    <div style="padding:10px 0;">

                        <p style="font-size: 1.5rem; line-height:1.5; color:#000;">
                            {$formDataStore.profileSummary} 
                        </p>

                    </div>

                    <!-- Esperienze Lavorative -->
                    <div style="padding: 10px 0;">

                        {#if $formDataStore.jobs.some((job) => job.role !== "" || job.company !== "" || job.workExperienceResults !== "" || job.startDateWorkExperience !== "" || job.endDateWorkExperience !== "")}
                            <h5 style="font-size:32px; font-weight:bold; color:{$formDataStore.selectedColor}; border-bottom: 1px solid {$formDataStore.selectedColor}; margin-bottom: 0;">ESPERIENZE LAVORATIVE</h5>
                        {/if}

                        {#each $formDataStore.jobs as job (job)}
                            <table>
                                <tbody>

                                    <tr>
                                        <h6 style="font-size:24px; color:#6d6d6d;margin: 12px 0 0 0;">{job.role} - {job.company} - in {job.location}</h6>
                                    </tr>

                                    <tr>
                                        
                                        <p style="font-size: 16px;"><b>{formattedWorkAccademicDate(job.startDateWorkExperience)} / {job.endDateWorkExperience === "" ? "Presente" : formattedWorkAccademicDate(job.endDateWorkExperience)}</b> - 
                                                
                                            <span>{job.workExperienceResults}</span>
                                    
                                        </p>
                                        
                                
                                    </tr>

                                </tbody>
                            </table>
                        {/each}
                        
                    </div>

                    <!-- Formazione e Qualifiche -->
                    <div style="padding: 10px 0;">

                        {#if $formDataStore.educations.some((education) => education.educationType !== "" || education.fieldOfStudy !== "" || education.qualification.length > 0 || education.educationGoals !== "" || education.startDateAcademicEducation !== "" || education.endDateAcademicEducation !== "")}
                            <h5 style="font-size:32px; font-weight:bold; color:{$formDataStore.selectedColor} ; border-bottom: 1px solid {$formDataStore.selectedColor}; margin-bottom: 0;">FORMAZIONE E QUALIFICHE</h5>
                        {/if}
                        

                        {#each $formDataStore.educations as education (education)}

                            <table>

                                <tbody>

                                    <tr>
                                        <h6 style="font-size:24px; color:#6d6d6d;margin: 12px 0 0 0;">{education.endDateAcademicEducation === "" ? "Presente" : formattedWorkAccademicDate(education.endDateAcademicEducation)} - {education.qualification} - {education.educationType}</h6>
                                    </tr>

                                    <tr>
                                        <p style="font-size: 16px;">{education.fieldOfStudy} - {education.educationGoals}</p>
                                    </tr>

                                </tbody>
                                
                            </table>
                        
                        {/each}

                    </div>
                   
                    <div style="display: flex;align-items: top;gap: 8px;position: absolute;top: 110%;">
                        <div style="background-image:url(https://{currentTenant}.blob.core.windows.net/cdn/cv/extended-logo.png);background-size: contain;background-position: center; background-repeat: no-repeat; width: 42px; height: 12px; display: inline-block; text-align: center; line-height: 12px;">
                        </div>
                      <div style="width:12px"></div>
                        <p style="font-size:8px; color:#000; margin-top: 5px;">
                            {currentCopyrightPolicy}
                        </p>
                    </div>

                </td>
            </tr>

             <!-- Box Arancione sotto la colonna grigia -->
             <tr>
                <td style="background-color:{$formDataStore.selectedColor}; vertical-align:middle; padding:10px;">
                    <p style="font-size:14px; color:#fff; text-align:left; line-height:1.4;">
                        Autorizzo il trattamento dei dati personali nel rispetto della vigente normativa sulla protezione dei dati personali ed in particolare il Regolamento Europeo per la protezione dei dati personali 2016/679, il d.lgs. 30/06/2003 n. 196 e successive modifiche e integrazioni.
                    </p>
                    <div style="display: flex;align-items: center;justify-content: center;flex-direction: column;padding-top: 12px;">
                        <span>{@html $formDataStore.userSignature}</span> 
                        <div style="height: 10px; border-bottom: 1px solid #e6e6e6; width: 200px; margin-bottom: 10px;"></div>
                    </div>
                </td>
                <td></td>
            </tr>

        </tbody>
        
    </table>

</div>
