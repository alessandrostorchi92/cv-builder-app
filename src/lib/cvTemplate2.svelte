<script lang="ts">

    import {formDataStore, formattedBirtDate, formattedWorkAccademicDate, isAllowed, isPrivacyPolicyApproved, currentTenant, currentCopyrightPolicy} from "../stores/form_store";
    
</script>

<div style="margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif;margin: 0 auto;">

    <!-- Main Table to Structure the CV -->

    <table width="100%" cellpadding="0" cellspacing="0" style="overflow:hidden; width: 100%; margin: 0 auto; box-sizing: border-box; padding: 20px;">

        <tbody style="display:block;overflow: hidden;position: relative;border: 1px solid {$formDataStore.selectedColor}; border-radius: 12px; height: auto">

            <div style="position: absolute; left: 61.2%; z-index: -1; margin-right: 50px; margin-top: 280px; width: 240px; overflow: hidden;">
                <div style="
                    width: 500px; 
                    height: 500px; 
                    background-image: url(https://{currentTenant}.blob.core.windows.net/cdn/cv/transparent-logo.png);
                    background-repeat: no-repeat;
                    background-size: contain;">
                </div>
            </div>

            <!-- Header Section -->
            <tr>
                <td colspan="3" style="padding: 10px; text-align: center;">
                    <div style="font-size: 32px; font-weight: bold; letter-spacing:0.6cap;"><span style="color: {$formDataStore.selectedColor};">{$formDataStore.name}</span><span style="color: #888888;">{$formDataStore.surname}</span></div>
                    <div style="font-size: 24px; color: gray; margin-top: 5px; letter-spacing:0.2cap;">{$formDataStore.profession}</div>
                </td>
            </tr>

            <!-- Contact Information Section -->
            <tr>
                <td colspan="4" style="padding-bottom: 12px; text-align: center;">
                    <table cellpadding="5" cellspacing="0" style="width: 100%; font-size: 12px; color: gray;">
                        <tr style="display: flex;align-items: center;justify-content: center;">
                            <td style="text-align: center;font-size: 12px;">
                                <span style="color: {$formDataStore.selectedColor};">●</span> {$formDataStore.birthDate}, {$formDataStore.birthPlace}
                            </td>
                            <td style="text-align: center;font-size: 12px;">
                                <span style="color: {$formDataStore.selectedColor};">●</span> {$formDataStore.address}
                            </td>
                            <td style="text-align: center;font-size: 12px;">
                                <span style="color: {$formDataStore.selectedColor};">●</span> {$formDataStore.phone}
                            </td>
                            <td style="text-align: center;font-size: 12px;">
                                <span style="color: {$formDataStore.selectedColor};">●</span> {$formDataStore.email}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr>
                <td colspan="3" style="padding-bottom: 4px; text-align: center;padding: 10px 0; border-top: 1px solid {$formDataStore.selectedColor};">
                    <table cellpadding="6" cellspacing="0" style="width: 100%; font-size: 12px; color: gray;">
                        <tr style="display: flex;align-items: center;justify-content: center;">
                            <td style="text-align: center;font-size: 14px;">
                                <span style="color: {$formDataStore.selectedColor};">●</span> Nazionalità:{$formDataStore.nationality}
                            </td>
                            <td style="text-align: center;font-size: 14px;">
                                <span style="color: {$formDataStore.selectedColor};">●</span> Categoria protetta: {$formDataStore.isProtectedCategory}
                            </td>
                            {#if $formDataStore.drivingLicences.length > 0}
                                <td style="text-align: center;font-size: 14px;">
                                    <span style="color: {$formDataStore.selectedColor};">●</span> Automunito - {$formDataStore.drivingLicences}
                                </td>
                            {/if}
                        </tr>
                    </table>
                </td>
            </tr>

            <!-- Breve Presentazione Section -->
            <tr>
                <td colspan="3" style="padding: 12px; border-top: 1px solid {$formDataStore.selectedColor}">
                    <div style="font-size: 24px; color: {$formDataStore.selectedColor}; margin-bottom:12px; text-align: center; letter-spacing:0.2cap;">BREVE PRESENTAZIONE</div>
                    <p style="font-size: 14px; color: gray; margin: 10px 0 0 0;">
                        {$formDataStore.profileSummary}
                    </p>
                </td>
            </tr>

            <!-- Esperienze di Lavoro Section -->
            <tr>
                <td colspan="3" style="padding: 12px; border-top: 1px solid {$formDataStore.selectedColor}">
                    {#if $formDataStore.jobs.some((job) => job.role !== "" || job.company !== "" || job.workExperienceResults !== "" || job.startDateWorkExperience !== "" || job.endDateWorkExperience !== "")}
                        <div style="font-size: 24px; color: {$formDataStore.selectedColor}; margin-bottom:12px; text-align: center; letter-spacing:0.2cap;">ESPERIENZE DI LAVORO</div>
                    {/if}

                    <table cellpadding="5" cellspacing="0" style="width: 100%; font-size: 12px; color: gray;">
                        {#each $formDataStore.jobs as job (job)}
                            <tr>
                                <td width="100%">
                                    <div style="margin-bottom: 4px;display: flex;justify-content: space-between;"><span style="font-weight: 600;">{job.role} - in {job.company}</span><span style="font-size: 14px;">{job.startDateWorkExperience}/{job.endDateWorkExperience}</span></div>
                                    <span style="color: {$formDataStore.selectedColor}">●</span> <span style="font-size: 14px;">{job. workExperienceResults}</span><br>
                                </td>
                            </tr>
                        {/each}
                    </table>
                </td>
            </tr>

            <!-- Formazione Section -->
            <tr>
                <td colspan="3" style="padding: 12px; border-top: 1px solid {$formDataStore.selectedColor}">

                    {#if $formDataStore.educations.some((education) => education.educationType !== "" || education.fieldOfStudy !== "" || education.qualification.length > 0 || education.educationGoals !== "" || education.startDateAcademicEducation !== "" || education.endDateAcademicEducation !== "")}
                        <div style="font-size: 24px; color: {$formDataStore.selectedColor}; margin-bottom:12px; text-align: center; letter-spacing:0.2cap;">FORMAZIONE</div>
                    {/if}

                    <table cellpadding="5" cellspacing="0" style="width: 100%; font-size: 12px; color: gray;">
                            
                        {#each $formDataStore.educations as education (education)}
                            <tr>
                                <td style="display: block;padding: 0 4px;">
                                    <div style="margin-bottom: 0px; display: flex; justify-content: space-between;"><span><span style="color: {$formDataStore.selectedColor};">●</span> <span style="font-weight: 600;">{education.qualification} - {education.fieldOfStudy} - {education.educationType} </span></span><span style="font-size: 14px;">{education.endDateAcademicEducation}</span></div>
                                </td>
                            </tr>
                        {/each}
                            
                    </table>

                </td>
                    
            </tr>

            <!-- Skills e Competenze Section -->
            <tr>
                <td colspan="3" style="padding: 12px; border-top: 1px solid {$formDataStore.selectedColor}">
                    {#if $formDataStore.digitalSkills.some((digitalSkill) => digitalSkill.skill !== "")}
                        <div style="font-size: 24px; color: {$formDataStore.selectedColor}; margin-bottom:12px; text-align: center; letter-spacing:0.2cap;">SKILLS E COMPETENZE</div>
                    {/if}

                    <table cellpadding="5" cellspacing="0" style="width: 100%; font-size: 12px; color: gray;">

                        <tr>

                            <td>
                            
                                {#each $formDataStore.digitalSkills as digitalSkill (digitalSkill)}
                                    <td style="font-size: 14px;"><span style="padding:4px; background-color: #ffffff; border: 1px solid {$formDataStore.selectedColor}; border-radius: 12px; margin-right: 4px;"><span style="font-weight: 600;">{digitalSkill.skill}</span> <span>- {digitalSkill.level}</span> </span></td>
                                {/each}

                            </td>

                        </tr>

                        <tr><td></td></tr>

                    </table>
                </td>
            </tr>

            <!-- Lingue Section -->
            <tr>
                <td colspan="3" style="padding: 12px; border-top: 1px solid {$formDataStore.selectedColor};">

                    {#if $formDataStore.languagesSkills.some((selectedLanguage) => selectedLanguage.lang !== "")}
                        <div style="font-size: 24px; color: {$formDataStore.selectedColor};margin-bottom:12px;text-align: center;letter-spacing:0.2cap;">LINGUE</div>
                    {/if}

                    <p style="font-size: 14px; color: {$formDataStore.selectedColor};">
                        
                        {#each $formDataStore.languagesSkills as selectedLanguage (selectedLanguage)}
                            <span style="padding:4px;background-color: #ffffff;border: 1px solid black; border-radius: 12px; margin-right: 4px;"><span style="font-weight: 600;">{selectedLanguage.lang}</span> <span>-{selectedLanguage.level}</span> </span>
                        {/each}

                    </p>

                </td>

            </tr>

            <!-- Footer Section -->
            <tr>
                <td colspan="3" style="padding: 16px 12px; display: flex;align-items: center; border-top: 1px solid {$formDataStore.selectedColor};">
                <div style="display: flex;align-items: center;gap: 8px;">
                    <p style="font-size: 8px; color: #666; margin: 0;">Autorizzo il trattamento dei dati personali nel rispetto della vigente normativa sulla protezione dei dati personali ed in particolare il Regolamento Europeo per la protezione dei dati personali 2016/679, il d.lgs. 30/06/2003 n. 196 e successive modifiche e integrazioni.</p>
                    <div style="display: flex;align-items: center;justify-content: center;flex-direction: column;">
                        <span>{@html $formDataStore.userSignature}</span> 
                        <div style="height: 10px; border-bottom: 1px solid #e6e6e6; width: 200px; margin-bottom: 10px;"></div>
                    </div>
                </div>
                </td>
            </tr>

            <tr>
                <td colspan="3" style="text-align: center;">
                    <div style="display: flex; justify-content: center; align-items: center; gap: 10px; font-size: 8px; color: #666; margin-top: 46px;padding-bottom: 16px;">
                        <div style="background-image:url(https://{currentTenant}.blob.core.windows.net/cdn/cv/extended-logo.png);background-size: contain;background-position: center;background-repeat: no-repeat;width: 42px; height: 12px; display: inline-block; text-align: center; line-height: 12px;"></div>
                        <p style="margin: 0;">{currentCopyrightPolicy}</p>
                    </div>
                </td>
            </tr>

        </tbody>

    </table>

</div>