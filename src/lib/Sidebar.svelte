<script lang="ts">
  let formData: {
    filePicture: FileList | null;
    name: string;
    surname: string;
    profession: string;
    address: string;
    phonePrefix: string;
    phone: string;
    email: string;
    profileSummary: string;
    careerGoals: string;
    languagesSkills: { lang: string; level: string }[];
    jobs: WorkHistory[];
  } = {
    filePicture: null,
    name: "",
    surname: "",
    profession: "",
    address: "",
    phonePrefix: "",
    phone: "",
    email: "",
    profileSummary: "",
    careerGoals: "",
    languagesSkills: [],
    jobs: [],
  };

  const phonePrefixes = [
    { value: "39", label: "Italia (+39)" },
    { value: "1", label: "Stati Uniti (+1)" },
    { value: "44", label: "Regno Unito (+44)" },
    { value: "49", label: "Germania (+49)" },
    { value: "33", label: "Francia (+33)" },
    { value: "34", label: "Spagna (+34)" },
    { value: "351", label: "Portogallo (+351)" },
    { value: "353", label: "Irlanda (+353)" },
    { value: "31", label: "Olanda (+31)" },
  ];

  let selectedPhonePrefix = "";

  const optionsLanguages = [
    { value: "🇮🇹", label: "Italiano" },
    { value: "🇬🇧", label: "Inglese" },
    { value: "🇩🇪", label: "Tedesco" },
    { value: "🇫🇷", label: "Francese" },
    { value: "🇪🇸", label: "Spagnolo" },
    { value: "🇯🇵", label: "Giapponese" },
    { value: "🇷🇺", label: "Russo" },
    { value: "🇨🇳", label: "Cinese" },
    { value: "🇸🇦", label: "Arabo" },
  ];

  let optionslanguageLevels = [
    { value: "A1", label: "Elementare" },
    { value: "B1", label: "Intermedio" },
    { value: "B2", label: "Avanzato" },
    { value: "C2", label: "Madrelingua" },
  ];

  let selectedLanguages: [{ lang: string, level: string }] = [
    { lang: "", level: "" },
  ];

  type WorkHistory = {
        role: string,
        company: string,
        workExperienceResults: string,
        startDateWorkExperience: string,
        endDateWorkExperience: string,
   };

   let workHistory: WorkHistory[] = [{
        role: "",
        company: "",
        workExperienceResults: "",
        startDateWorkExperience: "",
        endDateWorkExperience: ""
    }];

  const maxTextAreaLength: number = 500;
  const mediumTextAreaLength: number = 400;

  function addLanguage(): void {
    if (selectedLanguages.length < 3) {
      selectedLanguages.push({lang: "", level: ""});
      selectedLanguages = selectedLanguages;
    }
    
    
    if(selectedLanguages.length >= 3) {
        disableButton = true;
    }
  };

  function removeLanguage(index: number): void {
    selectedLanguages.splice(index, 1);
    selectedLanguages = selectedLanguages;
    disableButton = false; 
  };

  function addWorkExperience(): void {
    if(workHistory.length < 2) {
        workHistory.push({role: "", company: "", workExperienceResults: "", startDateWorkExperience: "", endDateWorkExperience: ""});
        workHistory = workHistory;
    }

    if(workHistory.length > 1) {
        disableButton = true;
    }

  }

  function removeWorkExperience(index:number): void {
    workHistory.splice(index, 1);
    workHistory = workHistory;
    disableButton = false; 
  }

  let disableButton: boolean = false;

  function handleSubmit() {
    formData.languagesSkills = selectedLanguages;
    formData.jobs = workHistory;  
  };

</script>

<div id="sidebar" class="flex-column-utility">
  <!-- Informazioni di contatto -->

  <div class="flex-center-utility p-4">
    <h4>Informazioni di Contatto</h4>
  </div>

  <form on:submit|preventDefault={handleSubmit}>
    <!------------------------------------->

    <div class="container p-3">

      <div class="row">
        <!-- Immagine di profilo -->

        <div class="flex-center-utility">
          <div class="file-picture-container">
            <div class="file-picture"></div>
          </div>
        </div>

        <div class="flex-center-utility mt-3">
          <label for="file-input" class="custom-file-input">
            Scegli file
          </label>

          <input
            type="file"
            id="file-input"
            name="filePicture"
            bind:files={formData.filePicture}
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
            bind:value={formData.name}
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
            bind:value={formData.surname}
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
            bind:value={formData.profession}
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
            bind:value={formData.address}
          />
        </div>

        <!-- Cellulare -->

        <div class="d-flex">
          <label for="formInputPhone">Cellulare</label>
          <span class="isRequired">*</span>
        </div>

        <div class="input-group mb-3">
          <select
            class="form-select"
            id="formInputPhonePrefix"
            name="phonePrefix"
            bind:value={selectedPhonePrefix}
            on:change={() => (formData.phonePrefix = selectedPhonePrefix)}
          >
            <option value="" disabled selected>Prefisso</option>
            {#each phonePrefixes as phonePrefixe}
              <option value={phonePrefixe.value}> {phonePrefixe.label}</option>
            {/each}
          </select>
          <input
            type="tel"
            class="form-control"
            id="formInputPhone"
            name="phone"
            placeholder="Numero di cellulare"
            bind:value={formData.phone}
          />
        </div>

        <!---- Email ---->

        <div class="form-group mb-3">
          <label for="formInputEmail">Email</label>
          <span class="isRequired">*</span>
          <input
            type="email"
            class="form-control"
            id="formInputEmail"
            name="email"
            placeholder="Inserisci la tua email"
            bind:value={formData.email}
          />
        </div>

        <!---- Profilo Personale ---->

        <div class="form-group mb-3 position-relative">
          <label for="formInputProfileSummary">Profilo personale</label>
          <span class="isRequired">*</span>
          <textarea
            bind:value={formData.profileSummary}
            class="form-control"
            id="formInputProfileSummary"
            name="profileSummary"
            rows="4"
            maxlength={maxTextAreaLength}
            placeholder="Descriviti in poche righe..."
          ></textarea>
          <span
            class="maxChars"
            class:text-danger={formData.profileSummary.length ===
              maxTextAreaLength}
          >
            {formData.profileSummary.length} / {maxTextAreaLength}
          </span>
        </div>

        <!-- Successi Professionali -->

        <div class="form-group mb-3 position-relative">
          <label for="formInputCareerGoals">Obietti professionali</label>
          <span class="isRequired">*</span>
          <textarea
            bind:value={formData.careerGoals}
            class="form-control"
            id="formInputCareerGoals"
            name="careerGoals"
            rows="4"
            maxLength={maxTextAreaLength}
            placeholder="Raccontaci i tuoi successi professionali..."
          ></textarea>
          <span
            class="maxChars"
            class:text-danger={formData.careerGoals.length ===
              maxTextAreaLength}
          >
            {formData.careerGoals.length} / {maxTextAreaLength}
          </span>
        </div>

        <!-- Lingue -->

        <div class="d-flex">
          <label for="formLabelLanguages">Lingue</label>
          <span class="isRequired">*</span>
        </div>

        {#each selectedLanguages as selectedLanguage, languageIndex}
          <div class="input-group mb-3">
            <select
              class="form-select"
              id="formSelectLanguage{languageIndex}"
              name="languages"
              bind:value={selectedLanguage.lang}
            >
              <option value="" disabled selected>Lingue</option>

              {#each optionsLanguages as optionsLanguage (optionsLanguage)}
                <option value={optionsLanguage.value}
                  >{optionsLanguage.label}</option
                >
              {/each}
            </select>

            <select
              class="form-select"
              id="formSelectLanguageLevels{languageIndex}"
              name="languageLevels"
              bind:value={selectedLanguage.level}
            >
              <option value="" disabled selected>Livello</option>

              {#each optionslanguageLevels as optionslanguageLevel (optionslanguageLevel)}
                <option value={optionslanguageLevel.value}
                  >{optionslanguageLevel.label}</option
                >
              {/each}
            </select>
          </div>

          {#if languageIndex > 0}
            <div class="flex-center-utility mb-3">
              <button type="button" class="btn-remove-style" on:click={() => removeLanguage(languageIndex)}>Rimuovi Lingua</button>
            </div>
          {/if}
        {/each}

        <div class="flex-center-utility">
          <button type="button" class="btn-add-style" on:click={() => addLanguage()} disabled={disableButton}>Aggiungi Lingua</button>
        </div>

         <!-- Dettagli Carriera -->

         <div class="flex-center-utility p-5">
            <h4>Dettagli Carriera</h4>
        </div>

        {#each workHistory as job, jobIndex}

            <div class="form-group mb-3">
                <label for="formInputRole">Ruolo</label>
                <span class="isRequired">*</span>
                <input type="text" class="form-control" id="formInputRole{jobIndex}" name="jobRole" placeholder="Inserisci la posizione lavorativa che hai ricoperto" bind:value={job.role}/>
            </div>

            <div class="form-group mb-3">
                <label for="formInputCompany">Azienda</label>
                <span class="isRequired">*</span>
                <input type="text" class="form-control" id="formInputCompany{jobIndex}" name="company" placeholder="Inserisci il nome dell'azienda" bind:value={job.company}/>
            </div>

            <div class="form-group mb-3 position-relative">
                <label for="formInputWorkExperienceResults">Risultati professionali ottenuti</label>
                <span class="isRequired">*</span>
                <textarea
                    class="form-control"
                    id="formInputWorkExperienceResults{jobIndex}"
                    name="workExperienceResults"
                    rows="4"
                    maxlength={mediumTextAreaLength}
                    placeholder="Parlaci dei risultati professionali che hai conseguito..."
                    bind:value={job.workExperienceResults}
                ></textarea>
                <span class="maxChars" class:text-danger={job.workExperienceResults.length === mediumTextAreaLength}>{job.workExperienceResults.length} / {mediumTextAreaLength}</span>
            </div>

            <div class="form-group mb-3 flex-center-utility justify-content-around">
                <div>
                    <label for="formInputStartDateWorkExperience" class="custom-date-input">Data di inizio</label>
                        <span class="isRequired">*</span>
                        <input type="month" class="form-control"
                            id="formInputStartDateWorkExperience{jobIndex}"
                            name="startDateWorkExperience"
                            bind:value={job.startDateWorkExperience}
                        />
                </div>

                <div>
                    <label for="formInputEndDateWorkExperience" class="custom-date-input">Data di fine</label>
                        <span class="isRequired">*</span>
                        <input type="month" class="form-control" 
                            id="formInputEndDateWorkExperience{jobIndex}"
                            name="endDateWorkExperience"
                            bind:value={job.endDateWorkExperience}
                        />
                </div>
            </div>

            {#if jobIndex > 0}

            <div class="flex-center-utility mb-3">
              <button type="button" class="btn-remove-style" on:click={() => removeWorkExperience(jobIndex)}>Rimuovi Lingua</button>
            </div>
              
            {/if}

        {/each}

        <div class="flex-center-utility">
          <button type="button" class="btn-add-style" on:click={addWorkExperience} disabled={disableButton}>Aggiungi Lavoro</button>
        </div>










        <div class="flex-center-utility py-5">
            <button type="submit" class="btn btn-secondary">Invia</button>
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
    border: 2px solid orange;
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

  .file-picture-container {
    position: relative;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #ccc;
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
    width: 160px;
    margin-top: 1rem;
    border: none;
    font-size: 14px;
    border-radius: 8px;
    padding: 0.5rem;
  }

  .btn-remove-style {
    background-color: red;
    color: white;
    font-size: 11px;
    width: 90px;
    padding: 0.3rem;
    border: none;
    border-radius: 8px;
  }
</style>
