<script lang="ts">

  import { formDataStore, selectedFilePicture } from '../stores/form_store';
  
  const phonePrefixes = [
    { value: "+39", label: "Italia (+39)" },
    { value: "+1", label: "Stati Uniti (+1)" },
    { value: "+44", label: "Regno Unito (+44)" },
    { value: "+49", label: "Germania (+49)" },
    { value: "+33", label: "Francia (+33)" },
    { value: "+34", label: "Spagna (+34)" },
    { value: "+351", label: "Portogallo (+351)" },
    { value: "+353", label: "Irlanda (+353)" },
    { value: "+31", label: "Olanda (+31)" },
  ];
  
  const optionsLanguages = [
    { value: "Italiano", label: "Italiano" },
    { value: "Inglese", label: "Inglese" },
    { value: "Tedesco", label: "Tedesco" },
    { value: "Francese", label: "Francese" },
    { value: "Spagnolo", label: "Spagnolo" },
    { value: "Portoghese", label: "Portoghese" },
    { value: "Russo", label: "Russo" },
    { value: "Cinese", label: "Cinese" },
    { value: "Arabo", label: "Arabo" },
  ];

  const optionslanguageLevels = [
    { value: "A1", label: "Elementare" },
    { value: "B1", label: "Intermedio" },
    { value: "B2", label: "Avanzato" },
    { value: "C2", label: "Madrelingua" },
  ];

  const educationLevels = [
    { value: "Diploma" },
    { value: "Certificato di Specializzazione" },
    { value: "Laurea Triennale" },
    { value: "Laurea Magistrale" },
    { value: "Laurea a Ciclo Unico" },
    { value: "Master" },
    { value: "Dottorato di Ricerca" }

  ];

  const maxTextAreaLength: number = 500;
  const minextAreaLength: number = 300;

  function getUrlImg() {

    if($formDataStore.filePicture) {

    $selectedFilePicture = URL.createObjectURL($formDataStore.filePicture[0]);

    }; 
    
  };

  function addLanguage(): void {
    if ($formDataStore.languagesSkills.length < 3) {
      $formDataStore.languagesSkills.push({lang: "", level: ""});
      $formDataStore.languagesSkills = $formDataStore.languagesSkills;
    };
    
    if($formDataStore.languagesSkills.length >= 3) {
      disableAddLanguageButton = true;
    };

  };

  function removeLanguage(index: number): void {

    $formDataStore.languagesSkills = $formDataStore.languagesSkills.filter((selectedLanguage, i) => i !== index);
    $formDataStore.languagesSkills = $formDataStore.languagesSkills;
    disableAddLanguageButton = false; 

  };

  function addWorkExperience(): void {
    if($formDataStore.jobs.length > 0) {
      $formDataStore.jobs.push({role: "", company: "", workExperienceResults: "", startDateWorkExperience: "", endDateWorkExperience: ""});
      $formDataStore.jobs = $formDataStore.jobs;
    };

  };

  function removeWorkExperience(index:number): void {
    $formDataStore.jobs = $formDataStore.jobs.filter((job, i) => i !== index);
    $formDataStore.jobs = $formDataStore.jobs;
    disableAddWorkExperienceButton = false; 
  };

  function addAcademicEducation(): void {

    if($formDataStore.educations.length > 0) {
      $formDataStore.educations.push({
        qualification: "",
        fieldOfStudy:  "", 
        educationType: "", 
        educationGoals: "", 
        startDateAcademicEducation: "", 
        endDateAcademicEducation: ""
      });
      $formDataStore.educations = $formDataStore.educations;
    };
  };

  function removeAcademicEducation(index: number): void {
    $formDataStore.educations = $formDataStore.educations.filter((education, i) => i !== index);
    $formDataStore.educations = $formDataStore.educations;
    disableAddAcademicEducationButton = false;
  };

  let disableAddLanguageButton: boolean = false;
  

  $: if($formDataStore) {
    console.log($formDataStore);
  }

</script>

<div id="sidebar" class="flex-column-utility">
  <!-- Informazioni di contatto -->

  <div class="flex-center-utility p-4">
    <h4>Informazioni di Contatto</h4>
  </div>

  <form>
  
    <div class="container p-3">

      <div class="row">

        <!-- Immagine di profilo -->

        <div class="flex-center-utility">
          <div class="file-picture-container">
            <div class="file-picture"></div>
          </div>
        </div>

        <div class="flex-center-utility py-4">
          <label for="file-input" class="custom-file-input">
            Scegli file
          </label>

          <input
            type="file"
            id="file-input"
            name="filePicture"
            bind:files={$formDataStore.filePicture}
            on:change={() => getUrlImg()}
            accept="image/*"
          />
        </div>

        <!-- Name -->

        <div class="form-group mb-3">
          <label for="formInputName">Nome</label>
          <span class="isRequired">*</span>
          <input
            type="text"
            class="form-control"
            id="formInputName"
            name="name"
            placeholder="Inserisci il tuo nome"
            bind:value={$formDataStore.name}
          />
        </div>

        <!-- Cognome -->

        <div class="form-group mb-3">
          <label for="formInputSurname">Cognome</label>
          <span class="isRequired">*</span>
          <input
            type="text"
            class="form-control"
            id="formInputSurname"
            name="surname"
            placeholder="Inserisci il tuo cognome"
            bind:value={$formDataStore.surname}
          />
        </div>

        <!-- Professione -->

        <div class="form-group mb-3">
          <label for="formInputProfession">Professione</label>
          <span class="isRequired">*</span>
          <input
            type="text"
            class="form-control"
            id="formInputProfession"
            name="profession"
            placeholder="Inserisci la tua professione"
            bind:value={$formDataStore.profession}
          />
        </div>

        <!-- Indirizzo di Residenza -->

        <div class="form-group mb-3">
          <label for="formInputAddress">Indirizzo di residenza</label>
          <span class="isRequired">*</span>
          <input
            type="text"
            class="form-control"
            id="formInputAddress"
            name="address"
            placeholder="Es: Via Roma 123, 00100 Roma"
            bind:value={$formDataStore.address}
          />
        </div>

        <!-- Cellulare -->

        <div>
          <label for="formSelectPhone">Cellulare</label>
          <span class="isRequired">*</span>
        </div>

        <div class="input-group mb-3">
          <select
            class="form-select"
            id="formSelectPhonePrefix"
            name="phonePrefix"
            bind:value={$formDataStore.phonePrefix}
>
            <option value="" disabled selected>Prefisso</option>
            {#each phonePrefixes as phonePrefixe}
              <option value={phonePrefixe.value}> {phonePrefixe.label}</option>
            {/each}
          </select>
          <input
            type="tel"
            class="form-control"
            id="formSelectPhone"
            name="phone"
            placeholder="Numero di cellulare"
            bind:value={$formDataStore.phone}
          />
        </div>

        <!---- Email ---->

        <div class="mb-3">
          <label for="formInputEmail">Email</label>
          <span class="isRequired">*</span>
          <input
            type="email"
            class="form-control"
            id="formInputEmail"
            name="email"
            placeholder="Inserisci la tua email"
            bind:value={$formDataStore.email}
          />
        </div>

        <!---- Profilo Personale ---->

        <div class="mb-3 position-relative">
          <label for="formInputProfileSummary">Profilo personale</label>
          <span class="isRequired">*</span>
          <textarea
            bind:value={$formDataStore.profileSummary}
            class="form-control"
            id="formInputProfileSummary"
            name="profileSummary"
            rows="4"
            maxlength={maxTextAreaLength}
            placeholder="Descriviti in poche righe..."
          ></textarea>
          <span
            class="maxChars"
            class:text-danger={$formDataStore.profileSummary.length ===
              maxTextAreaLength}
          >
            {$formDataStore.profileSummary.length} / {maxTextAreaLength}
          </span>
        </div>

        <!-- Successi Professionali -->

        <div class="mb-3 position-relative">
          <label for="formInputCareerGoals">Obietti professionali</label>
          <span class="isRequired">*</span>
          <textarea
            bind:value={$formDataStore.careerGoals}
            class="form-control"
            id="formInputCareerGoals"
            name="careerGoals"
            rows="4"
            maxLength={maxTextAreaLength}
            placeholder="Raccontaci i tuoi successi professionali..."
          ></textarea>
          <span
            class="maxChars"
            class:text-danger={$formDataStore.careerGoals.length ===
              maxTextAreaLength}
          >
            {$formDataStore.careerGoals.length} / {maxTextAreaLength}
          </span>
        </div>

         <!-- Lingue -->

         <div class="d-flex">
          <label for="formLabelLanguages">Lingue</label>
          <span class="isRequired">*</span>
        </div>

        {#each $formDataStore.languagesSkills as selectedLanguage, languageIndex}
          <div class="input-group mb-3">
            <select

              class="form-select"
              id="formSelectLanguages{languageIndex}"
              name="languages"
              bind:value={selectedLanguage.lang}>

              <option value="" disabled selected>Lingue</option>

              {#each optionsLanguages as optionsLanguage (optionsLanguage.value)}
                <option value={ optionsLanguage.value }> { optionsLanguage.label }</option>
              {/each}

            </select>

            <select
              class="form-select"
              id="formSelectLanguageLevels{languageIndex}"
              name="languageLevels"
              bind:value={selectedLanguage.level}>
              <option value="" disabled selected>Livello</option>

              {#each optionslanguageLevels as optionslanguageLevel (optionslanguageLevel.value)}
                <option value={optionslanguageLevel.value}
                  >{optionslanguageLevel.label}</option
                >
              {/each}
            </select>
          </div>

          {#if languageIndex > 0}
            <div class="flex-center-utility mb-3">
              <button type="button" class="btn-remove-style" on:click={() => removeLanguage(languageIndex)}><i class="fa-solid fa-trash"></i></button>
            </div>
          {/if}
        {/each}

        <div class="flex-center-utility">
          <button type="button" class="btn-add-style" on:click={() => addLanguage()} disabled={disableAddLanguageButton}><i class="fa-solid fa-plus"></i></button>
        </div>

         <!-- Dettagli Carriera -->

         <div class="flex-center-utility p-5">
            <h4>Dettagli Carriera</h4>
        </div>

        {#each $formDataStore.jobs as job, jobIndex}

            <div class="form-group mb-3">
                <label for="formInputRole">Ruolo</label>
                <span class="isRequired">*</span>
                <input type="text" 
                       class="form-control" 
                       id="formInputRole{jobIndex}" 
                       name="jobRole" 
                       placeholder="Inserisci la posizione lavorativa che hai ricoperto" 
                       bind:value={ job.role }
                />
            </div>

            <div class="form-group mb-3">
                <label for="formInputCompany">Azienda</label>
                <span class="isRequired">*</span>
                <input type="text" 
                       class="form-control" 
                       id="formInputCompany{jobIndex}" 
                       name="company" 
                       placeholder="Inserisci il nome dell'azienda" 
                       bind:value={ job.company }
                />
            </div>

            <div class="form-group mb-3 position-relative">
                <label for="formInputWorkExperienceResults">Risultati professionali ottenuti</label>
                <span class="isRequired">*</span>
                <textarea
                    class="form-control"
                    id="formInputWorkExperienceResults{jobIndex}"
                    name="workExperienceResults"
                    rows="4"
                    maxlength={maxTextAreaLength}
                    placeholder="Parlaci dei risultati professionali che hai conseguito..."
                    bind:value={ job.workExperienceResults }
                ></textarea>
                <span class="maxChars" class:text-danger={job.workExperienceResults.length === maxTextAreaLength}>{job.workExperienceResults.length} / {maxTextAreaLength}</span>
            </div>

            <div class="form-group mb-3 flex-center-utility justify-content-around">
                <div>
                    <label for="formInputStartDateWorkExperience" class="custom-date-input">Data di inizio</label>
                        <span class="isRequired">*</span>
                        <input type="month" class="form-control"
                            id="formInputStartDateWorkExperience{jobIndex}"
                            name="startDateWorkExperience"
                            bind:value={ job.startDateWorkExperience }
                        />
                </div>

                <div>
                    <label for="formInputEndDateWorkExperience" class="custom-date-input">Data di fine</label>
                        <span class="isRequired">*</span>
                        <input type="month" class="form-control" 
                            id="formInputEndDateWorkExperience{jobIndex}"
                            name="endDateWorkExperience"
                            bind:value={ job.endDateWorkExperience }
                        />
                </div>
            </div>

            {#if jobIndex > 0}
              <div class="flex-center-utility mb-3">
                <button type="button" class="btn-remove-style" on:click={() => removeWorkExperience(jobIndex)}><i class="fa-solid fa-trash"></i></button>
              </div> 
            {/if}

        {/each}

        <div class="flex-center-utility">
          <button type="button" class="btn-add-style" on:click={() => addWorkExperience()}><i class="fa-solid fa-plus"></i></button>
        </div>

        <!-- Dettagli Formazione -->

        <div class="flex-center-utility p-5">
          <h4>Dettagli Formazione</h4>
        </div>

        {#each $formDataStore.educations as education, educationIndex}

          <div>

            <label for="formInputQualification">Titolo di studio</label>
            <span class="isRequired">*</span>

          </div>
        
          <div class="input-group mb-3">

            <select

              class="form-select"
              id="formSelectQualification{educationIndex}"
              name="qualification"
              bind:value={education.qualification}>

              <option value="" disabled selected>Titolo di Studio</option>

              {#each educationLevels as educationLevel(educationLevel.value)}
              <option value={educationLevel.value}>{educationLevel.value}</option>
              {/each}

            </select>


            <input type="text"
                  class="form-control"
                  id="formInputFieldOfStudy{educationIndex}"
                  name="FieldOfStudy"
                  placeholder="Inserisci il campo di studio"
                  bind:value={education.fieldOfStudy} 
            >

          </div>

          <div class="mb-3">
            <label for="formInputEducationType">Università/Ente di formazione/Scuola</label>
            <span class="isRequired">*</span>
            <input type="text" 
                  class="form-control" 
                  id="formInputEducationType{educationIndex}" 
                  name="educationType" 
                  placeholder="Inserisci la tipologia di formazione"
                  bind:value={education.educationType}
            />
          </div>

            <div class="mb-3 position-relative">
              <label for="formInputEducationGoals">Risultati accademici raggiunti</label>
              <span class="isRequired">*</span>
              <textarea
                  class="form-control"
                  id="formInputEducationGoals{educationIndex}"
                  rows="4"
                  maxlength={minextAreaLength}
                  placeholder="Parlaci degli obiettivi accademici che hai raggiunto..."
                  bind:value={education.educationGoals}
              ></textarea>
              <span class="maxChars" class:text-danger={education.educationGoals.length === minextAreaLength}>
                  {education.educationGoals.length} / {minextAreaLength}
              </span>
            </div>

            <div class="mb-3 flex-center-utility justify-content-around">
              <div>
                <label for="formInputStartDate" class="custom-date-input">Data di inizio</label>
                <span class="isRequired">*</span>
                  <input type="month"
                    class="form-control" 
                    id="formInputStartDate{educationIndex}" 
                    name="startDateAcademicEducation"
                    bind:value={education.startDateAcademicEducation}
                  />
              </div>

              <div>
                <label for="formInputEndDate" class="custom-date-input">Data di fine</label>
                  <span class="isRequired">*</span>
                  <input type="month"
                        class="form-control"
                        id="formInputEndDate{educationIndex}"
                        name="endDateAcademicEducation"
                        bind:value={education.endDateAcademicEducation}
                  />
              </div>
            </div>

            {#if educationIndex > 0}
              <div class="flex-center-utility mb-3">
                <button type="button" class="btn-remove-style" on:click={() => removeAcademicEducation(educationIndex)}><i class="fa-solid fa-trash"></i></button>
              </div>    
            {/if}

        {/each}

        <div class="flex-center-utility">
          <button type="button" class="btn-add-style" on:click={() => addAcademicEducation()}><i class="fa-solid fa-plus"></i></button>
        </div>

      </div>

    </div>
    
  </form>

</div>

<style>
  #sidebar {
    flex-shrink: 0;
    overflow-y: auto;
    flex-basis: 40%;
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

  ::-webkit-scrollbar {
  display: none;
  }

  .file-picture-container {
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid #ccc;
  }

  .file-picture {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url("/background-profile-picture.png");
    background-position: center;
    background-size: cover;
  }

  input[type="file"] {
    display: none;
  }

  .custom-file-input {
    border-radius: 8px;
    border: 1px solid black;
    font-size: 14px;
    font-style: normal;
    padding: 0.5rem;
  }

  label {
    font-style: italic;
    font-size: 13px;
  }

  .isRequired {
    color: red;
    font-size: 13px;
  }
  input::placeholder,
  textarea::placeholder {
    opacity: 0.5;
  }

  .maxChars {
    position: absolute;
    font-size: 10px;
    bottom: 5px;
    right: 20px;
    color: grey;
  }

  .btn-add-style {
    width: 120px;
    margin-top: 1rem;
    border: none;
    font-size: 14px;
    border-radius: 8px;
    padding: 0.5rem;
    background-color: #007bff; 
    color: white; 
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .btn-add-style:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  }

  .btn-remove-style {
    background-color: #e74c3c;
    font-size: 0.8rem;
    color: white;
    width: 110px;
    padding: 0.5rem;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .btn-remove-style:hover {

    background-color: #c0392b;
    transform: translateY(-2px);
  }
</style>
