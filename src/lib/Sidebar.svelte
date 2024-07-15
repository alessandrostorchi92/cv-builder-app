<script lang="ts">

  import { formDataStore, selectedFilePicture } from '../stores/form_store';
  
  const phonePrefixes = [

  { value: "+93", label: "Afghanistan (+93)" },
    { value: "+355", label: "Albania (+355)" },
    { value: "+213", label: "Algeria (+213)" },
    { value: "+376", label: "Andorra (+376)" },
    { value: "+244", label: "Angola (+244)" },
    { value: "+54", label: "Argentina (+54)" },
    { value: "+374", label: "Armenia (+374)" },
    { value: "+297", label: "Aruba (+297)" },
    { value: "+61", label: "Australia (+61)" },
    { value: "+43", label: "Austria (+43)" },
    { value: "+994", label: "Azerbaijan (+994)" },
    { value: "+973", label: "Bahrain (+973)" },
    { value: "+880", label: "Bangladesh (+880)" },
    { value: "+32", label: "Belgio (+32)" },
    { value: "+501", label: "Belize (+501)" },
    { value: "+975", label: "Bhutan (+975)" },
    { value: "+591", label: "Bolivia (+591)" },
    { value: "+267", label: "Botswana (+267)" },
    { value: "+55", label: "Brasile (+55)" },
    { value: "+673", label: "Brunei Darussalam (+673)" },
    { value: "+359", label: "Bulgaria (+359)" },
    { value: "+226", label: "Burkina Faso (+226)" },
    { value: "+257", label: "Burundi (+257)" },
    { value: "+855", label: "Cambogia (+855)" },
    { value: "+237", label: "Camerun (+237)" },
    { value: "+1", label: "Canada (+1)" },
    { value: "+238", label: "Capo Verde (+238)" },
    { value: "+56", label: "Cile (+56)" },
    { value: "+86", label: "Cina (RPC) (+86)" },
    { value: "+57", label: "Colombia (+57)" },
    { value: "+506", label: "Costa Rica (+506)" },
    { value: "+385", label: "Croazia (+385)" },
    { value: "+53", label: "Cuba (+53)" },
    { value: "+357", label: "Cipro (+357)" },
    { value: "+420", label: "Repubblica Ceca (+420)" },
    { value: "+45", label: "Danimarca (+45)" },
    { value: "+253", label: "Gibuti (+253)" },
    { value: "+593", label: "Ecuador (+593)" },
    { value: "+20", label: "Egitto (+20)" },
    { value: "+503", label: "El Salvador (+503)" },
    { value: "+251", label: "Etiopia (+251)" },
    { value: "+679", label: "Figi (+679)" },
    { value: "+358", label: "Finlandia (+358)" },
    { value: "+33", label: "Francia (+33)" },
    { value: "+995", label: "Georgia (+995)" },
    { value: "+49", label: "Germania (+49)" },
    { value: "+233", label: "Ghana (+233)" },
    { value: "+30", label: "Grecia (+30)" },
    { value: "+502", label: "Guatemala (+502)" },
    { value: "+224", label: "Guinea (+224)" },
    { value: "+592", label: "Guyana (+592)" },
    { value: "+509", label: "Haiti (+509)" },
    { value: "+504", label: "Honduras (+504)" },
    { value: "+852", label: "Hong Kong (+852)" },
    { value: "+36", label: "Ungheria (+36)" },
    { value: "+354", label: "Islanda (+354)" },
    { value: "+91", label: "India (+91)" },
    { value: "+62", label: "Indonesia (+62)" },
    { value: "+98", label: "Iran (+98)" },
    { value: "+964", label: "Iraq (+964)" },
    { value: "+353", label: "Irlanda (+353)" },
    { value: "+972", label: "Israele (+972)" },
    { value: "+39", label: "Italia (+39)" },
    { value: "+81", label: "Giappone (+81)" },
    { value: "+962", label: "Giordania (+962)" },
    { value: "+254", label: "Kenya (+254)" },
    { value: "+850", label: "Corea del Nord (+850)" },
    { value: "+82", label: "Corea del Sud (+82)" },
    { value: "+965", label: "Kuwait (+965)" },
    { value: "+856", label: "Laos (+856)" },
    { value: "+371", label: "Lettonia (+371)" },
    { value: "+961", label: "Libano (+961)" },
    { value: "+231", label: "Liberia (+231)" },
    { value: "+218", label: "Libia (+218)" },
    { value: "+423", label: "Liechtenstein (+423)" },
    { value: "+370", label: "Lituania (+370)" },
    { value: "+352", label: "Lussemburgo (+352)" },
    { value: "+389", label: "Macedonia (+389)" },
    { value: "+261", label: "Madagascar (+261)" },
    { value: "+265", label: "Malawi (+265)" },
    { value: "+60", label: "Malesia (+60)" },
    { value: "+960", label: "Maldive (+960)" },
    { value: "+223", label: "Mali (+223)" },
    { value: "+356", label: "Malta (+356)" },
    { value: "+692", label: "Isole Marshall (+692)" },
    { value: "+222", label: "Mauritania (+222)" },
    { value: "+230", label: "Mauritius (+230)" },
    { value: "+52", label: "Messico (+52)" },
    { value: "+373", label: "Moldavia (+373)" },
    { value: "+377", label: "Monaco (+377)" },
    { value: "+976", label: "Mongolia (+976)" },
    { value: "+212", label: "Marocco (+212)" },
    { value: "+258", label: "Mozambico (+258)" },
    { value: "+264", label: "Namibia (+264)" },
    { value: "+977", label: "Nepal (+977)" },
    { value: "+31", label: "Paesi Bassi (+31)" },
    { value: "+64", label: "Nuova Zelanda (+64)" },
    { value: "+505", label: "Nicaragua (+505)" },
    { value: "+227", label: "Niger (+227)" },
    { value: "+234", label: "Nigeria (+234)" },
    { value: "+47", label: "Norvegia (+47)" },
    { value: "+968", label: "Oman (+968)" },
    { value: "+92", label: "Pakistan (+92)" },
    { value: "+507", label: "Panama (+507)" },
    { value: "+675", label: "Papua Nuova Guinea (+675)" },
    { value: "+51", label: "Perù (+51)" },
    { value: "+63", label: "Filippine (+63)" },
    { value: "+48", label: "Polonia (+48)" },
    { value: "+351", label: "Portogallo (+351)" },
    { value: "+974", label: "Qatar (+974)" },
    { value: "+40", label: "Romania (+40)" },
    { value: "+7", label: "Russia (+7)" },
    { value: "+250", label: "Ruanda (+250)" },
    { value: "+966", label: "Arabia Saudita (+966)" },
    { value: "+221", label: "Senegal (+221)" },
    { value: "+381", label: "Serbia (+381)" },
    { value: "+248", label: "Seychelles (+248)" },
    { value: "+232", label: "Sierra Leone (+232)" },
    { value: "+65", label: "Singapore (+65)" },
    { value: "+421", label: "Slovacchia (+421)" },
    { value: "+386", label: "Slovenia (+386)" },
    { value: "+252", label: "Somalia (+252)" },
    { value: "+27", label: "Sud Africa (+27)" },
    { value: "+34", label: "Spagna (+34)" },
    { value: "+94", label: "Sri Lanka (+94)" },
    { value: "+249", label: "Sudan (+249)" },
    { value: "+597", label: "Suriname (+597)" },
    { value: "+268", label: "Swaziland (+268)" },
    { value: "+46", label: "Svezia (+46)" },
    { value: "+41", label: "Svizzera (+41)" },
    { value: "+963", label: "Siria (+963)" },
    { value: "+886", label: "Taiwan (+886)" },
    { value: "+992", label: "Tagikistan (+992)" },
    { value: "+255", label: "Tanzania (+255)" },
    { value: "+66", label: "Thailandia (+66)" },
    { value: "+228", label: "Togo (+228)" },
    { value: "+676", label: "Tonga (+676)" },
    { value: "+216", label: "Tunisia (+216)" },
    { value: "+90", label: "Turchia (+90)" },
    { value: "+993", label: "Turkmenistan (+993)" },
    { value: "+256", label: "Uganda (+256)" },
    { value: "+380", label: "Ucraina (+380)" },
    { value: "+971", label: "Emirati Arabi Uniti (+971)" },
    { value: "+44", label: "Regno Unito (+44)" },
    { value: "+1", label: "Stati Uniti (+1)" },
    { value: "+598", label: "Uruguay (+598)" },
    { value: "+998", label: "Uzbekistan (+998)" },
    { value: "+678", label: "Vanuatu (+678)" },
    { value: "+58", label: "Venezuela (+58)" },
    { value: "+84", label: "Vietnam (+84)" },
    { value: "+967", label: "Yemen (+967)" },
    { value: "+260", label: "Zambia (+260)" },
    { value: "+263", label: "Zimbabwe (+263)" }
    
    

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

  const drivingLicenceCheckBoxs = [
    { value: 'A', label: 'Patente A' },
    { value: 'B', label: 'Patente B' },
    { value: 'C', label: 'Patente C' },
    { value: 'D', label: 'Patente D' },
    { value: 'E', label: 'Patente E' }
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

  let disableAddLanguageButton: boolean = false;
  
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
  };

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
            <label for="img-input">
              <div class="file-picture"></div>
            </label>
          </div>
        </div>

        <div class="flex-center-utility py-4">
          <label for="img-input" class="custom-file-input">
            Scegli foto
          </label>

          <input
            type="file"
            id="img-input"
            name="filePicture"
            bind:files={$formDataStore.filePicture}
            on:change={() => getUrlImg()}
            accept="image/*"
          />
        </div>

        <!-- Name -->

        <div class="form-group mb-3 position-relative">
          <label for="formInputName">Nome</label>
          <span class="isRequired">*</span>
          <input
            type="text"
            class="form-control"
            id="formInputName"
            name="name"
            autocomplete="off"
            placeholder="Inserisci il tuo nome"
            maxlength="30"
            bind:value={$formDataStore.name}
          />
          <span
            class="maxChars"
            class:text-danger={$formDataStore.name.length ===
              30}
          >
            {$formDataStore.name.length} / 30
          </span>
        </div>

        <!-- Cognome -->

        <div class="form-group mb-3 position-relative">
          <label for="formInputSurname">Cognome</label>
          <span class="isRequired">*</span>
          <input
            type="text"
            class="form-control"
            id="formInputSurname"
            name="surname"
            autocomplete="off"
            placeholder="Inserisci il tuo cognome"
            maxlength="20"
            bind:value={$formDataStore.surname}
          />
          <span
            class="maxChars"
            class:text-danger={$formDataStore.surname.length ===
              20}
          >
            {$formDataStore.surname.length} / 20
          </span>
        </div>

        <!-- Professione -->

        <div class="form-group mb-3 position-relative">
          <label for="formInputProfession">Professione</label>
          <span class="isRequired">*</span>
          <input
            type="text"
            class="form-control"
            id="formInputProfession"
            name="profession"
            autocomplete="off"
            placeholder="Inserisci la tua professione"
            maxlength="30"
            bind:value={$formDataStore.profession}
          />
          <span
            class="maxChars"
            class:text-danger={$formDataStore.profession.length ===
              30}
          >
            {$formDataStore.profession.length} / 30
          </span>
        </div>
        
        <!---- Luogo di Nascita ---->

        <div class="form-group mb-3 position-relative">
          <label for="formInputBirthDate">Luogo di nascita</label>
          <span class="isRequired">*</span>

          <input type="text"
                 class="form-control"
                 id="formInputPlaceDate" 
                 name="birthDate"
                 autocomplete="off"
                 placeholder="Inserisci il tuo luogo di nascita"
                 maxlength="30"
                 bind:value={$formDataStore.birthPlace}
          />
          <span
          class="maxChars"
          class:text-danger={$formDataStore.birthPlace.length ===
            30}
          >
          {$formDataStore.birthPlace.length} / 30
          </span>
        </div>

        <!---- Data di Nascita ---->

        <div class="form-group mb-3">
          <label for="formInputBirthDate">Data di nascita</label>
          <span class="isRequired">*</span>

          <input type="date"
                 class="form-control"
                 id="formInputBirthDate"
                 name="birthDate" 
                 bind:value={$formDataStore.birthDate}
          />
        </div>

        <!-- Residenza/Domicilio -->

        <div class="form-group mb-3 position-relative">
          <label for="formInputAddress">Residenza/Domicilio</label>
          <span class="isRequired">*</span>
          <input
            type="text"
            class="form-control"
            id="formInputAddress"
            name="address"
            autocomplete="off"
            placeholder="Es: Via Roma 123, 00100 Roma"
            maxlength="80"
            bind:value={$formDataStore.address}
          />
          <span
          class="maxChars"
          class:text-danger={$formDataStore.address.length ===
            80}
          >
          {$formDataStore.address.length} / 80
        </div>

        <!-- Cellulare -->

        <div>
          <label for="formSelectPhone">Cellulare</label>
          <span class="isRequired">*</span>
        </div>

        <div class="input-group mb-3 position-relative">
          <select
            class="form-select"
            id="formSelectPhonePrefix"
            aria-label="phonePrefix select"
            name="phonePrefix"
            bind:value={$formDataStore.phonePrefix}
          >
            <option value="" disabled selected class="prefix-option">Prefisso</option>
            {#each phonePrefixes as phonePrefix}
              <option value={phonePrefix.value}> {phonePrefix.label}</option>
            {/each}
          </select>
          <input
            type="tel"
            class="form-control"
            id="formSelectPhone"
            name="phone"
            autocomplete="off"
            placeholder="Numero di cellulare"
            maxlength="10"
            bind:value={$formDataStore.phone}
          />
          <span class="maxChars" class:text-danger={($formDataStore.phone.length === 10)}>
            {$formDataStore.phone.length} / 10
          </span>
        </div>

        <!---- Email ---->

        <div class="mb-3 position-relative">
          <label for="formInputEmail">Email</label>
          <span class="isRequired">*</span>
          <input
            type="email"
            class="form-control"
            id="formInputEmail"
            name="email"
            autocomplete="off"
            placeholder="Inserisci la tua email"
            maxlength="50"
            bind:value={$formDataStore.email}
          />
          <span
          class="maxChars"
          class:text-danger={$formDataStore.email.length ===
            50}
          >
          {$formDataStore.email.length} / 50
        </div>

        <!---- Profilo Personale ---->

        <div class="mb-1 position-relative">
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

        <!-- Categorie protette -->

        <div class="mb-3">

          <span class="me-1">
            <label for="formLabelSelfDriven">Appartenente alle categorie protette:</label>
            <span class="isRequired">*</span>
          </span>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineProtectedCategoryRadioOptions" id="inlineProtectedCategoryLeftRadio" bind:group={$formDataStore.isProtectedCategory} value="Si">
            <label class="form-check-label" for="inlineRadio1">Sì</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineProtectedCategoryRadioOptions" id="inlineProtectedCategoryRightRadio"  bind:group={$formDataStore.isProtectedCategory} value="No">
            <label class="form-check-label" for="inlineRadio2">No</label>
          </div>

        </div>

        <!-- Competenze digitali -->

        <div class="mb-3 position-relative">
          <label for="formInputCareerGoals">Competenze Digitali</label>
          <span class="isRequired">*</span>
          <textarea
            bind:value={$formDataStore.digitalSkills}
            class="form-control"
            id="formInputDigitalSkills"
            name="DigitalSkills"
            rows="4"
            maxLength={maxTextAreaLength}
            placeholder="Illustraci le tue competenze digitali..."
          ></textarea>
          <span
            class="maxChars"
            class:text-danger={$formDataStore.digitalSkills.length ===
              maxTextAreaLength}
          >
            {$formDataStore.digitalSkills.length} / {maxTextAreaLength}
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
              aria-label="Language select"
              name="languages"
              bind:value={selectedLanguage.lang}>

              <option value="" disabled selected>Lingue</option>

              {#each optionsLanguages as optionsLanguage (optionsLanguage.value)}
                <option value={ optionsLanguage.value }> { optionsLanguage.label }</option>
              {/each}

            </select>

            <select
              class="form-select me-1"
              id="formSelectLanguageLevels{languageIndex}"
              aria-label="Language level select"
              name="languageLevels"
              bind:value={selectedLanguage.level}>
              <option value="" disabled selected>Livello</option>

              {#each optionslanguageLevels as optionslanguageLevel (optionslanguageLevel.value)}
                <option value={optionslanguageLevel.value}
                  >{optionslanguageLevel.label}</option
                >
              {/each}
            </select>

            {#if languageIndex > 0}
              <div class="input-group-append">
                <button type="button" class="btn-remove-style" on:click={() => removeLanguage(languageIndex)}><i class="fa-solid fa-trash"></i></button>
              </div>
            {/if}
  
          </div>

        {/each}

        <div class="flex-center-utility">
          <button type="button" class="btn-add-style" on:click={() => addLanguage()} disabled={disableAddLanguageButton}><i class="fa-solid fa-plus"></i></button>
        </div>

         <!-- Patente -->

         <div class="d-flex align-items-center">

          <div class="mt-5 me-3">
            <label for="formLabelDrivingLicence">Patente</label>
            <span class="isRequired">*</span>
          </div>
        
          <div class="mt-5 d-flex">
            {#each drivingLicenceCheckBoxs as drivingLicenceCheckBox}
              <div class="form-check form-check-inline me-2">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  id={"formCheckBoxDrivingLicence" + drivingLicenceCheckBox.value}
                  bind:group={$formDataStore.drivingLicences}
                  value={drivingLicenceCheckBox.label}>
                <label 
                  class="form-check-label" 
                  for={"formCheckBoxDrivingLicence" + drivingLicenceCheckBox.value}>
                  {drivingLicenceCheckBox.label}
                </label>
              </div>
            {/each}
          </div>
        
        </div>

         <!-- Automunito -->

         <div class="py-2">

          <span class="me-1">
            <label for="formLabelSelfDriven">Sei automunito?</label>
            <span class="isRequired">*</span>
          </span>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineDrivingLicenceRadioOptions" id="inlineDrivingLicenceLeftRadioYes" bind:group={$formDataStore.hasOwnCar} value="Si">
            <label class="form-check-label" for="inlineDrivingLicenceLeftRadioYes">Sì</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineDrivingLicenceRadioOptions" id="inlineDrivingLicenceRightRadioNo"  bind:group={$formDataStore.hasOwnCar} value="No">
            <label class="form-check-label" for="inlineDrivingLicenceRightRadioNo">No</label>
          </div>

         </div>

         <!-- Dettagli Carriera -->

         <div class="flex-center-utility p-5">
            <h4>Dettagli Carriera</h4>
        </div>

        {#each $formDataStore.jobs as job, jobIndex}

            <div class="form-group mb-3 position-relative">
                <label for="formInputRole">Ruolo</label>
                <span class="isRequired">*</span>
                <input type="text" 
                       class="form-control" 
                       id="formInputRole{jobIndex}" 
                       name="jobRole"
                       autocomplete="off"
                       placeholder="Inserisci la posizione lavorativa che hai ricoperto"
                       maxlength="30"
                       bind:value={ job.role }
                />
                <span class="maxChars" class:text-danger={job.role.length ===
                30}>
                  {job.role.length} / 30
                </span>
            </div>

            <div class="form-group mb-3 position-relative">
                <label for="formInputCompany">Azienda</label>
                <span class="isRequired">*</span>
                <input type="text" 
                       class="form-control" 
                       id="formInputCompany{jobIndex}" 
                       name="company"
                       autocomplete="off" 
                       placeholder="Inserisci il nome dell'azienda"
                       maxlength="30"
                       bind:value={ job.company }
                />
                <span class="maxChars" class:text-danger={ job.company.length ===
                  30 }>
                  { job.company.length } / 30
                </span>
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
        
          <div class="input-group mb-3 position-relative">

            <select

              class="form-select"
              id="formSelectQualification{educationIndex}"
              aria-label="Qualification select"
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
                  autocomplete="off"
                  placeholder="Inserisci il campo di studio"
                  maxlength="30"
                  bind:value={education.fieldOfStudy} 
            >
            <span class="maxChars" class:text-danger={ education.fieldOfStudy.length ===
              30 }>
              { education.fieldOfStudy.length } / 30
            </span>

          </div>

          <div class="mb-3 position-relative">
            <label for="formInputEducationType">Università/Ente di formazione/Scuola</label>
            <span class="isRequired">*</span>
            <input type="text" 
                  class="form-control" 
                  id="formInputEducationType{educationIndex}" 
                  name="educationType"
                  autocomplete="off" 
                  placeholder="Inserisci la tipologia di formazione"
                  maxlength="30"
                  bind:value={education.educationType}
            />
            <span class="maxChars" class:text-danger={ education.educationType.length ===
              30 }>
              { education.educationType.length } / 30
            </span>
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
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid #ccc;
  }

  .file-picture {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: url("/background-profile-picture.png");
    background-size: cover;
    cursor: pointer;
  }

  input[type="file"] {
    display: none;
  }

  input[type="date"] {
    color: #9e9e9e;
  }

  .custom-file-input {
    border-radius: 8px;
    border: 1px solid black;
    font-size: 14px;
    font-style: normal;
    padding: 0.8rem;
    cursor: pointer;
  }

  select {
    color: #9e9e9e; 
  }

  option:not(:first-of-type) {
    color: black;
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
  option.prefix-option {
  color: #999;
  }

  .maxChars {
    position: absolute;
    z-index: 5;
    font-size: 10px;
    bottom: 5px;
    right: 20px;
    color: grey;
  }

  .btn-add-style {
    width: 80px;
    margin-top: 0.2rem;
    border: none;
    font-size: 1rem;
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

  .btn-add-style:disabled {
    color: #999;
    background-color: #f0f0f0; 
    cursor: not-allowed; 
  }

  .btn-remove-style {
    background-color: #e74c3c;
    font-size: 1rem;
    color: white;
    width: 50px;
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
