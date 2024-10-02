
<script lang="ts">
    import {formDataStore, formattedBirtDate, isAllowed, isPrivacyPolicyApproved, currentTenant, currentCopyrightPolicy} from "../stores/form_store";
</script>

<div style="font-family: Ubuntu; font-weight: 300; margin: 0 auto; position: relative; padding:0">

    <div style="position: absolute; left: 78%; z-index: -1;margin-top: 380px; width: 600px;">
        <div style="
            width: 700px; 
            height: 700px; 
            background-image: url(https://{currentTenant}.blob.core.windows.net/cdn/cv/transparent-logo.png);
            background-repeat: no-repeat;
            background-size: contain;">
        </div>
    </div>

     <!-- Header Table with two sections: Logo/Title and Personal Information -->

    <table style="width: 100%; border-collapse: collapse;">
        <tr>
            <!-- Left Side: Logo and Company Name -->

            <td style="width: 30%; color: white;">
                {#if $formDataStore.filePicture}
                    <div style="
                        width: 100%;
                        height: 364px;
                        background-image: url({$formDataStore.filePicture});
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        margin: 0 auto;
                        ">
                    </div>
                {:else}
                    <div style="
                        background-image: url(https://{currentTenant}.blob.core.windows.net/cdn/cv/circle.svg);
                        width: 120px;
                        height: 120px;
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                        margin: 0 auto;
                        border-radius: 20px;
                        ">
                    </div>
                {/if}
            </td>

            <!-- Right Side: Personal Information -->

            <td style="width: 70%; background-color: #f2f2f2; padding: 20px">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {#if $formDataStore.name || $formDataStore.surname}
                                    <p style="margin: 12px 0; font-size: 48px; text-transform: uppercase;font-family: Oxygen;"><strong><span style="color: {$formDataStore.selectedColor};">{$formDataStore.name}</span>{$formDataStore.surname}</strong></p>
                                {/if}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {#if $formDataStore.profession}
                                    <p style="margin: 12px 0; font-size: 36px; text-transform: uppercase;opacity: 0.5;">{$formDataStore.profession}</p>
                                {/if}
                            </td>
                        </tr>
                    </tbody>
                </table>
            <table>
                <tbody>
                    <tr style="display: flex;gap: 62px;">
                        <td style="width:300px">
                            <p style="margin: 12px 0; font-size: 14px;display: flex;align-items: center;">
                                {#if $formDataStore.nationality}
                                <!-- Icona Data di nascita -->
                                    <svg width="20px" height="20px" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15407 7.30116C7.52877 5.59304 9.63674 4.5 12 4.5C12.365 4.5 12.7238 4.52607 13.0748 4.57644L13.7126 5.85192L11.2716 8.2929L8.6466 8.6679L7.36009 9.95441L6.15407 7.30116ZM5.2011 8.82954C4.75126 9.79256 4.5 10.8669 4.5 12C4.5 15.6945 7.17133 18.7651 10.6878 19.3856L11.0989 18.7195L8.8147 15.547L10.3741 13.5256L9.63268 13.1549L6.94027 13.6036L6.41366 11.4972L5.2011 8.82954ZM7.95559 11.4802L8.05962 11.8964L9.86722 11.5951L11.3726 12.3478L14.0824 11.9714L18.9544 14.8135C19.3063 13.9447 19.5 12.995 19.5 12C19.5 8.93729 17.6642 6.30336 15.033 5.13856L15.5377 6.1481L11.9787 9.70711L9.35371 10.0821L7.95559 11.4802ZM18.2539 16.1414C16.9774 18.0652 14.8369 19.366 12.3859 19.4902L12.9011 18.6555L10.6853 15.578L12.0853 13.7632L13.7748 13.5286L18.2539 16.1414ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="{$formDataStore.selectedColor}"></path></g></svg>
                                    <span style="font-size: 24px; margin-top: -4px; margin-left: 6px"> Nazionalità: {$formDataStore.nationality}</span>
                                {/if}
                            </p>
                            <p style="margin: 12px 0; font-size: 14px;display: flex;align-items: center; gap:8px">
                                {#if $formDataStore.birthPlace || $formDataStore.birthDate}
                                <!-- Icona Data di nascita -->
                                    <svg width="12px" height="12px" fill="{$formDataStore.selectedColor}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="{$formDataStore.selectedColor}"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>birthday-cake</title><path d="M28 13.75h-2.75v-2.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 2.75h-5.5v-2.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 2.75h-5.5v-2.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 2.75h-2.75c-1.794 0.002-3.248 1.456-3.25 3.25v11c0.002 1.794 1.456 3.248 3.25 3.25h24c1.794-0.001 3.249-1.456 3.25-3.25v-11c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM4 16.25h2.75v1.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-1.75h5.5v1.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-1.75h5.5v1.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-1.75h2.75c0.412 0.006 0.744 0.338 0.75 0.749v5.979l-1.865-1.865c-0.231-0.225-0.547-0.364-0.896-0.364-0.040 0-0.080 0.002-0.119 0.005l0.005-0c-0.385 0.039-0.714 0.248-0.915 0.55l-0.003 0.005c-1.086 1.641-2.75 3.6-4.363 3.438-1.682-0.133-3.063-2.4-3.454-3.262-0.202-0.437-0.636-0.734-1.14-0.734s-0.938 0.298-1.136 0.727l-0.003 0.008c-0.386 0.85-1.754 3.084-3.431 3.223-1.616 0.172-3.296-1.775-4.393-3.406-0.205-0.303-0.533-0.509-0.911-0.546l-0.005-0c-0.035-0.003-0.076-0.005-0.117-0.005-0.346 0-0.66 0.139-0.888 0.365l0-0-1.866 1.866v-5.98c0.006-0.412 0.338-0.744 0.75-0.75h0.001zM28 28.75h-24c-0.412-0.006-0.744-0.338-0.75-0.749v-1.484l2.602-2.602c1.231 1.952 3.358 3.24 5.789 3.285l0.007 0c1.827-0.295 3.369-1.328 4.335-2.777l0.015-0.023c0.984 1.494 2.54 2.542 4.349 2.835l0.037 0.005c0.127 0.010 0.252 0.016 0.377 0.016 2.281-0.225 4.226-1.487 5.379-3.303l0.017-0.029 2.594 2.596v1.483c-0.006 0.412-0.338 0.744-0.749 0.75h-0.001zM7.991 9.25c1.972-0.032 3.58-1.553 3.749-3.486l0.001-0.014c-0.484-1.837-1.473-3.399-2.81-4.576l-0.010-0.009c-0.229-0.255-0.561-0.415-0.929-0.415-0 0-0 0-0 0h-0.002c-0.369 0.001-0.701 0.162-0.93 0.417l-0.001 0.001c-1.3 1.215-2.273 2.764-2.782 4.511l-0.018 0.071c0.165 1.943 1.766 3.463 3.729 3.5l0.004 0zM7.995 3.943c0.465 0.541 0.878 1.151 1.216 1.805l0.025 0.053c-0.192 0.526-0.669 0.904-1.239 0.949l-0.005 0c-0.559-0.051-1.025-0.404-1.237-0.892l-0.004-0.010c0.349-0.728 0.765-1.354 1.254-1.915l-0.009 0.010zM15.991 9.25c1.972-0.032 3.579-1.553 3.748-3.486l0.001-0.014c-0.484-1.837-1.473-3.399-2.809-4.576l-0.010-0.009c-0.229-0.255-0.56-0.415-0.929-0.415-0 0-0.001 0-0.001 0h-0.002c-0.369 0.001-0.701 0.162-0.93 0.417l-0.001 0.001c-1.3 1.215-2.273 2.764-2.782 4.511l-0.018 0.071c0.165 1.943 1.766 3.463 3.729 3.5l0.004 0zM15.994 3.944c0.466 0.541 0.879 1.15 1.216 1.804l0.024 0.052c-0.192 0.526-0.668 0.904-1.238 0.949l-0.005 0c-0.559-0.051-1.025-0.404-1.237-0.892l-0.004-0.010c0.349-0.727 0.764-1.354 1.253-1.914l-0.009 0.010zM23.99 9.25c1.972-0.032 3.579-1.553 3.749-3.486l0.001-0.014c-0.484-1.837-1.473-3.399-2.81-4.576l-0.010-0.009c-0.229-0.255-0.56-0.415-0.928-0.415-0.001 0-0.001 0-0.002 0h-0.002c-0.37 0.001-0.702 0.162-0.931 0.417l-0.001 0.001c-1.299 1.215-2.271 2.765-2.779 4.511l-0.018 0.071c0.164 1.943 1.764 3.463 3.727 3.5l0.004 0zM23.994 3.944c0.466 0.541 0.878 1.15 1.216 1.804l0.025 0.052c-0.192 0.526-0.669 0.904-1.239 0.949l-0.005 0c-0.558-0.051-1.023-0.404-1.235-0.892l-0.004-0.010c0.346-0.728 0.761-1.354 1.25-1.914l-0.008 0.010z"></path><path d="M7 15L17 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                                    <span style="font-size: 24px; margin-top: -4px; margin-left: 6px"> {$formDataStore.birthPlace}, {formattedBirtDate($formDataStore.birthDate)}</span>
                                {/if}
                            </p>
                        
                            <p style="margin:0; font-size: 14px;display: flex;align-items: center;">
                                {#if $formDataStore.drivingLicences.length > 0}
                                <!-- Icona Automunito -->
                                    <svg width="20px" height="20px" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 17H16M8 17C8 18.1046 7.10457 19 6 19C4.89543 19 4 18.1046 4 17M8 17C8 15.8954 7.10457 15 6 15C4.89543 15 4 15.8954 4 17M16 17C16 18.1046 16.8954 19 18 19C19.1046 19 20 18.1046 20 17M16 17C16 15.8954 16.8954 15 18 15C19.1046 15 20 15.8954 20 17M10 5V11M4 11L4.33152 9.01088C4.56901 7.58593 4.68776 6.87345 5.0433 6.3388C5.35671 5.8675 5.79705 5.49447 6.31346 5.26281C6.8993 5 7.6216 5 9.06621 5H12.4311C13.3703 5 13.8399 5 14.2662 5.12945C14.6436 5.24406 14.9946 5.43194 15.2993 5.68236C15.6435 5.96523 15.904 6.35597 16.425 7.13744L19 11M4 17H3.6C3.03995 17 2.75992 17 2.54601 16.891C2.35785 16.7951 2.20487 16.6422 2.10899 16.454C2 16.2401 2 15.9601 2 15.4V14.2C2 13.0799 2 12.5198 2.21799 12.092C2.40973 11.7157 2.71569 11.4097 3.09202 11.218C3.51984 11 4.0799 11 5.2 11H17.2C17.9432 11 18.3148 11 18.6257 11.0492C20.3373 11.3203 21.6797 12.6627 21.9508 14.3743C22 14.6852 22 15.0568 22 15.8C22 15.9858 22 16.0787 21.9877 16.1564C21.9199 16.5843 21.5843 16.9199 21.1564 16.9877C21.0787 17 20.9858 17 20.8 17H20" stroke="{$formDataStore.selectedColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>  
                                    <span style="font-size: 24px;margin-top: -4px;">Automunito</span><span style="font-size: 24px;margin-top: -4px;">-</span><span style="font-size: 24px;margin-top: -4px;">{$formDataStore.drivingLicences}</span>
                                {/if}                               
                            </p>

                            <p style="margin:0; font-size: 14px;display: flex;align-items: center;gap: 4px;">
                                {#if $formDataStore.isProtectedCategory}
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 48 48" fill="none">
                                        <path fill="{$formDataStore.selectedColor}" d="M 15 7 C 8.9424416 7 4 11.942442 4 18 C 4 22.096154 7.0876448 25.952899 10.851562 29.908203 C 14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547 C 28.751621 37.869472 33.384518 33.863507 37.148438 29.908203 C 40.912356 25.952899 44 22.096154 44 18 C 44 11.942442 39.057558 7 33 7 C 29.523564 7 26.496821 8.8664883 24 12.037109 C 21.503179 8.8664883 18.476436 7 15 7 z M 15 10 C 17.928571 10 20.3663 11.558399 22.732422 15.300781 A 1.50015 1.50015 0 0 0 25.267578 15.300781 C 27.6337 11.558399 30.071429 10 33 10 C 37.436442 10 41 13.563558 41 18 C 41 20.403846 38.587644 24.047101 34.976562 27.841797 C 31.68359 31.30221 27.590312 34.917453 24 38.417969 C 20.409688 34.917453 16.31641 31.30221 13.023438 27.841797 C 9.4123552 24.047101 7 20.403846 7 18 C 7 13.563558 10.563558 10 15 10 z"></path>
                                    </svg>                        
                                    <span style="font-size: 24px; margin-top: -4px; margin-left: 5px">Categoria protetta: {$formDataStore.isProtectedCategory}</span>
                                {/if}
                            </p>

                        </td>
                        <td style="background-color: #f2f2f2; display: block;margin-left: 100px;">

                            <p style="margin: 12px 0; font-size: 14px;display: flex;align-items: center;gap: 4px;">
                                {#if $formDataStore.address}
                                <!-- Icona Residenza -->
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14" height="14" viewBox="0 0 16 16">
                                        <path fill="{$formDataStore.selectedColor}" d="M 8 1.320313 L 0.660156 8.132813 L 1.339844 8.867188 L 2 8.253906 L 2 14 L 7 14 L 7 9 L 9 9 L 9 14 L 14 14 L 14 8.253906 L 14.660156 8.867188 L 15.339844 8.132813 Z M 8 2.679688 L 13 7.328125 L 13 13 L 10 13 L 10 8 L 6 8 L 6 13 L 3 13 L 3 7.328125 Z"></path>
                                    </svg>                        
                                    <span style="font-size: 24px; margin-top: -3px; margin-left: 6px">{$formDataStore.address}</span>
                                {/if}
                            </p>
                            
                            <p style="margin: 12px 0; font-size: 14px; display: flex; align-items: center; gap: 4px;">
                                {#if $formDataStore.phone}
                                <!-- Icona Telefono -->
                                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10" stroke="{$formDataStore.selectedColor}" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 19H9" stroke="{$formDataStore.selectedColor}" stroke-width="1.5" stroke-linecap="round"></path></g></svg>
                                    <span style="font-size: 24px; margin-left: 5px">{$formDataStore.phone}</span>
                                {/if}
                            </p>

                            <p style="margin: 12px 0; font-size: 14px; display: flex; align-items: center;">

                                {#if $formDataStore.email}
                                <!-- Icona Email -->
                                <svg width="20px" height="20px" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6ZM3.10658 5.55395C3.27196 5.22692 3.61204 5 4 5H20C20.388 5 20.728 5.22692 20.8934 5.55395L12 11.7793L3.10658 5.55395ZM3 7.92066L10.8531 13.4178C11.5417 13.8999 12.4583 13.8999 13.1469 13.4178L21 7.92066V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18V7.92066Z" fill="{$formDataStore.selectedColor}"></path></g></svg>
                                <span style="font-size: 24px; margin-top: -4px;">{$formDataStore.email} </span>
                                {/if}

                            </p>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
                
            </td>
        </tr>
    </table>

    <table>
        <tr>
            <td colspan="3" style="padding: 32px 4px;">
                <div style="font-weight: bold; font-size: 40px; color: {$formDataStore.selectedColor}; margin-bottom: 12px; padding-top: 16px;font-family: Oxygen;">BREVE PRESENTAZIONE</div>
                <p style="font-size: 24px; color: gray; margin: 12px 0 0 0;">
                    {$formDataStore.profileSummary}
                </p>
            </td>
        </tr>
    </table>

    <div style="padding: 0 12px;">

        <!-- Esperienze Section -->
        <div style="margin-bottom: 20px;">
            {#if $formDataStore.jobs.some((job) => job.role !== "" || job.company !== "" || job.workExperienceResults !== "" || job.startDateWorkExperience !== "" || job.endDateWorkExperience !== "")}
            <div style="font-weight: bold; font-size: 40px; color: {$formDataStore.selectedColor}; margin-bottom: 12px; padding-top: 16px; font-family: Oxygen;">ESPERIENZE</div>
            {/if}

            <table style="width: 100%;">
                
                {#each $formDataStore.jobs as job (job)}
                <tr >
                  <td>
                    <table>
                      <tr>
                    <td style="display: flex;align-items: center;">
                        <div style="height: 12px; width: 12px; background-color: {$formDataStore.selectedColor}; border-radius: 50%; display: inline-block; margin-right: 12px;"></div>
                        <div style="display: flex;align-items: center;justify-content: space-between;width: 100%;font-size: 24px;">
                            <span style="font-weight: 400;">{job.role} - in {job.company}</span><span>- {job.startDateWorkExperience}/{job.endDateWorkExperience}</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 24px;padding-left: 24px;">
                       
                        <span>{job.workExperienceResults}</span>
                        
                    </td>
                </tr>
                    </table>
                  </td>
                </tr>
                {/each}
                 
            </table>

        </div>

        <!-- Formazione Section -->
        <div style="margin-bottom: 20px;">

            {#if $formDataStore.educations.some((education) => education.educationType !== "" || education.fieldOfStudy !== "" || education.qualification.length > 0 || education.educationGoals !== "" || education.startDateAcademicEducation !== "" || education.endDateAcademicEducation !== "")}
                <div style="font-weight: bold; font-size: 40px; color: {$formDataStore.selectedColor}; margin-bottom: 12px; padding-top: 16px; font-family: Oxygen;">FORMAZIONE</div>
            {/if}

            <table style="width: 100%;">
              
                {#each $formDataStore.educations as education (education)}
                <tr>
                    <td style="display: flex;align-items: center;">
                        <div style="height: 12px; width: 12px; background-color: {$formDataStore.selectedColor}; border-radius: 50%; display: inline-block; margin-right: 12px;"></div>
                        <div style="display: flex;align-items: center;justify-content: space-between;width: 100%;font-size: 24px;">
                            <span style="font-weight: 400;">{education.qualification} - {education.fieldOfStudy} - {education.educationType}</span><span>{education.endDateAcademicEducation}</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 24px;padding-left: 24px;">{education.educationGoals}</td>
                </tr>
                
                {/each}
            </table>
        </div>

        <!-- Lingue Section -->
        <div style="margin-bottom: 20px;">
            {#if $formDataStore.languagesSkills.some((selectedLanguage) => selectedLanguage.lang !== "")}
                <div style="font-weight: bold; font-size: 40px; color: {$formDataStore.selectedColor}; margin-bottom: 12px; padding-top: 16px;font-family: Oxygen;">LINGUE</div>
            {/if}
            <table style="width: 100%;">
                
                {#each $formDataStore.languagesSkills as selectedLanguage (selectedLanguage)}
                <tr style="display: flex; gap: 24px;">
                    <td>
                        <div style="height: 12px; width: 12px; background-color: {$formDataStore.selectedColor}; border-radius: 50%; display: inline-block; margin-right: 12px;"></div>
                        <span style="font-size: 24px;">{selectedLanguage.lang} - {selectedLanguage.level}</span>
                    </td>   
                </tr>
                {/each}
            </table>
        </div>

        <!-- Skills Section -->
        <div style="margin-bottom: 20px;">
                
            {#if $formDataStore.digitalSkills.some((digitalSkill) => digitalSkill.skill !== "")}
                <div style="font-weight: bold; font-size:40px; color: {$formDataStore.selectedColor}; margin-bottom: 12px; padding-top: 16px;font-family: Oxygen;">SKILLS E COMPETENZE DIGITALI</div>
            {/if}

            <table style="width: 100%;">
                    
            {#each $formDataStore.digitalSkills as digitalSkill (digitalSkill)}
                <tr>
                    <td>
                        {#if $formDataStore.digitalSkills.some((digitalSkill) => digitalSkill.skill !== "")}
                            <div style="height: 12px; width: 12px; background-color: {$formDataStore.selectedColor}; border-radius: 50%; display: inline-block; margin-right: 12px;"></div>
                        {/if}
                        <span style="font-weight: 300;font-size: 24px;">{digitalSkill.skill} - {digitalSkill.level}</span>
                    </td>
                </tr>
            {/each}
                    
            </table>

        </div>

    </div>

    <!-- Footer Section -->
    <div style="margin-top: 40px;padding: 20px; border-top: 1px solid #e6e6e6;">
        <!-- Row 1: Autorizzo text + Signature -->
        {#if $isAllowed && $isPrivacyPolicyApproved && $formDataStore.userSignature}
            <div style="display: flex; justify-content: space-between; align-items: center;gap: 20px;">
                <p style="font-size: 14px; color: #666; margin: 0;">Autorizzo il trattamento dei dati personali nel rispetto della vigente normativa sulla protezione dei dati personali ed in particolare il Regolamento Europeo per la protezione dei dati personali 2016/679, il d.lgs. 30/06/2003 n. 196 e successive modifiche e integrazioni.</p>
                <div style="display: flex;align-items: center;justify-content: center;flex-direction: column;">
                        <span>{@html $formDataStore.userSignature}</span> 
                        <div style="height: 4px; border-bottom: 1px solid #e6e6e6; width: 200px; margin-bottom: 12px;"></div>
                </div>
            </div>
        {/if}

        <!-- Row 2: Company info text + Logo -->
        <div style="display: flex; justify-content: center; align-items: center; gap: 12px; font-size: 8px; color: #666; margin-top: 24px;">
            <div style="background-image:url(https://{currentTenant}.blob.core.windows.net/cdn/cv/extended-logo.png);background-size: contain;background-position: center;background-repeat: no-repeat;width: 42px; height: 12px; display: inline-block; text-align: center; line-height: 12px;"></div>
            <p style="margin: 0;">{currentCopyrightPolicy}</p>
        </div>
    </div>

</div>


