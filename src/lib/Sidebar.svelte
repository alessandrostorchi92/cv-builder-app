<script lang="ts">

  import { formDataStore, selectedFilePicture } from '../stores/form_store';
  import * as validators from '../validators/form_validation';
  import * as storages from '../storages/data_stored';
  import { onMount, tick } from 'svelte';
  
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


  onMount(() => {

    const savedNameValue = localStorage.getItem('name');
    if (savedNameValue) {
      $formDataStore.name = JSON.parse(savedNameValue);
    }

    const savedSurnameValue = localStorage.getItem("surname");
    if (savedSurnameValue) {
      $formDataStore.surname = JSON.parse(savedSurnameValue);
    }

    const savedProfessionValue = localStorage.getItem("profession");
    if (savedProfessionValue) {
      $formDataStore.profession = JSON.parse(savedProfessionValue);
    }

    const savedBirthPlaceValue = localStorage.getItem("birthPlace");
    if (savedBirthPlaceValue) {
      $formDataStore.birthPlace = JSON.parse(savedBirthPlaceValue);
    }

    const savedBirthDateValue = localStorage.getItem("birthDate");
    if (savedBirthDateValue) {
      $formDataStore.birthDate = JSON.parse(savedBirthDateValue);
    }

    const savedAddressValue = localStorage.getItem("address");
    if (savedAddressValue) {
      $formDataStore.address = JSON.parse(savedAddressValue);
    }

    const savedPhonePrefixValue = localStorage.getItem("phonePrefix");
    if (savedPhonePrefixValue) {
      $formDataStore.phonePrefix = JSON.parse(savedPhonePrefixValue);
    }

    const savedPhoneValue = localStorage.getItem("phone");
    if (savedPhoneValue) {
      $formDataStore.phone = JSON.parse(savedPhoneValue);
    }

    const savedEmailValue = localStorage.getItem("email");
    if (savedEmailValue) {
      $formDataStore.email = JSON.parse(savedEmailValue);
    }

    const savedProfileSummaryValue = localStorage.getItem("profileSummary");
    if (savedProfileSummaryValue) {
      $formDataStore.profileSummary = JSON.parse(savedProfileSummaryValue);
    }

    const savedProtectedCategoryValue = localStorage.getItem("protectedCategory");
    if (savedProtectedCategoryValue) {
      $formDataStore.isProtectedCategory = JSON.parse(savedProtectedCategoryValue);
    }

    const savedDigitalSkillsValue = localStorage.getItem("digitalSkills");
    if (savedDigitalSkillsValue) {
      $formDataStore.digitalSkills = JSON.parse(savedDigitalSkillsValue);
    }

    const savedCurrentLanguagesSkills = localStorage.getItem("languagesSkills");
    if(savedCurrentLanguagesSkills) {
      $formDataStore.languagesSkills = JSON.parse(savedCurrentLanguagesSkills);
    } 
        
    const savedDrivingLicenceValues = localStorage.getItem("drivingLicences");
    if (savedDrivingLicenceValues) {
      $formDataStore.drivingLicences = JSON.parse(savedDrivingLicenceValues);
    }

    const savedIsHasOwnCarValue = localStorage.getItem("isHasOwnCarRadio");
    if (savedIsHasOwnCarValue) {
      $formDataStore.hasOwnCar = JSON.parse(savedIsHasOwnCarValue);
    }

    localStorage.clear();

  });
  
</script>

<div id="sidebar" class="flex-column-utility">

  <h1 class="text-center py-3">CREA IL TUO CURRICULUM VITAE</h1>
  <h3 class="text-center py-3">Fai il tuo primo passo verso il tuo lavoro ideale: crea il tuo curriculum e fai decollare la tua carriera</h3>

  <!-- Informazioni di contatto -->

  <div class="flex-center-utility p-4">
    <h4>Informazioni di Contatto</h4>
  </div>

  <form>
  
    <div class="container py-4">

      <div class="row">

        <!-- Immagine di profilo -->

        <div class="flex-center-utility">
          <div class="file-picture-container">
            <label for="file-picture-input">
              <div class="file-picture"></div>
            </label>
          </div>
        </div>

        <div class="text-center py-4">

          <label for="file-picture-input" class="custom-file-input">Scegli foto</label>

          <input
            type="file"
            id="file-picture-input"
            name="filePicture"
            bind:files={$formDataStore.filePicture}
            on:change={() => validators.isProfilePictureUploaded() }
            accept="image/*"
          />

          <div style="width: 50%; margin: 0 auto;">
            <div class="success-user-data success-file-picture-message"></div>
            <div class="error-user-data error-file-picture-message"></div>
          </div>
          
        </div>

        <!-- Name -->

        <div class="form-group mb-3">

          <label for="textInputName">Nome</label>
          <span class="isRequired">*</span>

          <input
              type="text"
              class="form-control"
              id="textInputName"
              autocomplete="off"
              name="name"
              placeholder="Inserisci il tuo nome"
              bind:value={$formDataStore.name}
              on:input={() => { validators.checkNameInput(); storages.storeUserData('name', 'name'); }}
          />
          
          <div class="success-user-data success-name-message"></div>
          <div class="error-user-data error-name-messages"></div>
        
        </div>

        <!-- Cognome -->

        <div class="form-group mb-3">
          <label for="textInputSurname">Cognome</label>
          <span class="isRequired">*</span>

          <input
            type="text"
            class="form-control"
            id="textInputSurname"
            autocomplete="off"
            name="surname"
            placeholder="Inserisci il tuo cognome"
            bind:value={$formDataStore.surname}
            on:input={() => { validators.checkSurnameInput(); storages.storeUserData('surname', 'surname'); }}
          />

          <div class="success-user-data success-surname-message"></div>
          <div class="error-user-data error-surname-messages"></div>
          
        </div>

        <!-- Professione -->

        <div class="form-group mb-3">
          <label for="textInputProfession">Professione</label>
          <span class="isRequired">*</span>

          <input
            type="text"
            class="form-control"
            id="textInputProfession"
            autocomplete="off"
            name="profession"
            placeholder="Inserisci la tua professione"
            bind:value={$formDataStore.profession}
            on:input={() => { validators.checkProfessionInput(); storages.storeUserData('profession', 'profession'); }}
          />

          <div class="success-user-data success-profession-message"></div>
          <div class="error-user-data error-profession-messages"></div>
          
        </div>
        
        <!---- Luogo di Nascita ---->

        <div class="form-group mb-3">
          <label for="textInputBirthDate">Luogo di nascita</label>
          <span class="isRequired">*</span>

          <input type="text"
                 class="form-control"
                 id="textInputBirthDate" 
                 autocomplete="off"
                 name="birthPlace"
                 placeholder="Inserisci il tuo luogo di nascita"
                 bind:value={$formDataStore.birthPlace}
                 on:input={() => { validators.checkBirthPlaceInput(); storages.storeUserData('birthPlace', 'birthPlace'); }}
          />
          
          <div class="success-birthplace-message"></div>
          <div class="error-birthplace-message"></div>

        </div>

        <!---- Data di Nascita ---->

        <div class="form-group mb-3">
          <label for="formInputBirthDate">Data di nascita</label>
          <span class="isRequired">*</span>

          <input type="date"
                 class="form-control"
                 id="formInputBirthDate"
                 autocomplete="off"
                 name="birthDate" 
                 bind:value={$formDataStore.birthDate}
                 on:blur={() => { validators.checkBirthDateInput(); storages.storeUserData('birthDate', 'birthDate'); }}
          />

          <div class="success-birthdate-message"></div>
          <div class="error-birthdate-message"></div>
        </div>

        <!-- Residenza/Domicilio -->

        <div class="form-group mb-3">
          <label for="formInputAddress">Residenza/Domicilio</label>
          <span class="isRequired">*</span>
          <input
            type="text"
            class="form-control"
            id="formInputAddress"
            autocomplete="off"
            name="address"
            placeholder="Via Roma 123, 00100 Roma"
            bind:value={$formDataStore.address}
            on:input={() => { validators.checkAddressInput(); storages.storeUserData('address', 'address'); }}
          />

          <div class="success-address-message"></div>
          <div class="error-address-messages"></div>
        </div>

        <!-- Cellulare -->

        <div>
          <label for="formSelectPhone">Cellulare</label>
          <span class="isRequired">*</span>
        </div>

        <div class="input-group mb-3">

          <select
              class="form-select"
              style="width: 50%;"
              id="formSelectPhonePrefix"
              aria-label="PhonePrefixSelect"
              autocomplete="off"
              name="phonePrefix"
              bind:value={$formDataStore.phonePrefix}
              on:blur={() => { validators.checkPhonePrefixSelect(); storages.storeUserData('phonePrefix', 'phonePrefix');}}>

              <option value="" disabled class="prefix-option" id="defaultOption"><span>Prefisso</span></option>
              {#each phonePrefixes as phonePrefix}
                <option value={phonePrefix.value}> {phonePrefix.label}</option>
              {/each}
          </select>

          <input
              type="tel"
              class="form-control"
              style="width: 50%;"
              id="formSelectPhone"
              autocomplete="off"
              name="phone"
              placeholder="Cellulare"
              bind:value={$formDataStore.phone}
              on:input={() => { validators.checkPhoneInput(); storages.storeUserData('phone', 'phone'); }}
          />

          <div class="visual-feedback-group-container">
              
              <div class="left-visual-feedback-position">
                <div class="success-user-data success-phoneprefix-message"></div>
                <div class="error-user-data error-phoneprefix-message"></div>
              </div>
    
              <div class="right-visual-feedback-position">
                <div class="success-user-data success-phone-message"></div>
                <div class="error-user-data error-phone-messages"></div>
              </div>
  
          </div>

        </div>
    
        <!---- Email ---->

        <div class="mb-3 position-relative">
          <label for="formInputEmail">Email</label>
          <span class="isRequired">*</span>
          <input
            type="email"
            class="form-control"
            id="formInputEmail"
            autocomplete="off"
            name="email"
            placeholder="mario.rossi@gmail.com"
            bind:value={$formDataStore.email}
            on:input={() => { validators.checkEmailInput(); storages.storeUserData('email', 'email'); }}
          />

          <div class="success-email-message"></div>
          <div class="error-email-messages"></div>

        </div>

        <!---- Profilo Personale ---->

        <div class="mb-1">
          <label for="formInputProfileSummary">Profilo personale</label>
          <span class="isRequired">*</span>
          <textarea
          class="form-control"
          id="formInputProfileSummary"
          rows="4"
          maxlength="500"
          name="profileSummary"
          placeholder="Descriviti in poche righe..."
          bind:value={$formDataStore.profileSummary}
          on:input={() => { validators.checkProfileSummaryTextArea(); storages.storeUserData('profileSummary', 'profileSummary'); }}
          ></textarea>

          <div class="success-profile-summary-message"></div>
          <div class="error-profile-summary-messages"></div>
        </div>

        <!-- Categorie protette -->

        <div class="py-2">

          <span class="me-1">
            <label for="formLabelSelfDriven">Appartenente alle categorie protette:</label>
            <span class="isRequired">*</span>
          </span>

          <div class="form-check">
            <input class="form-check-input" 
                type="radio" 
                id="protectedCategoryRadioYes" 
                name="protectedCategory" 
                value="Si"
                bind:group={$formDataStore.isProtectedCategory}
                on:change={() => { validators.isProtectedCategoryRadiosSelected(); storages.storeUserData('protectedCategory', 'isProtectedCategory'); }}
            >
            <label class="form-check-label" for="radio1">Sì</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" 
                type="radio" 
                id="protectedCategoryRightRadioNo"  
                name="protectedCategory" 
                value="No"
                bind:group={$formDataStore.isProtectedCategory}
                on:change={() => { validators.isProtectedCategoryRadiosSelected(); storages.storeUserData('protectedCategory', 'isProtectedCategory'); }}
            >
            <label class="form-check-label" for="radio2">No</label>
          </div>

          <div class="success-protected-category-message"></div>
          <div class="error-protected-category-message"></div>

        </div>

        <!-- Competenze digitali -->

        <div class="mb-3">
          <label for="formInputCareerGoals">Competenze Digitali</label>
          <span class="isRequired">*</span>
          <textarea
          class="form-control"
          id="formInputDigitalSkills"
          rows="4"
          maxlength="500"
          name="digitalSkills"
          placeholder="Illustraci le tue competenze digitali..."
          bind:value={$formDataStore.digitalSkills}
          on:input={() => { validators.checkDigitalSkillsTextArea(); storages.storeUserData('digitalSkills', 'digitalSkills');  }}
          ></textarea>

          <div class="success-digital-skills-message"></div>
          <div class="error-digital-skills-messages"></div>
        </div>

         <!-- Lingue -->

         <div>
          <label for="formLabelLanguages">Lingue</label>
          <span class="isRequired">*</span>
         </div>

         {#each $formDataStore.languagesSkills as selectedLanguage, languageIndex}
         <div class="input-group mb-3">
             <select
                 class="form-select"
                 id="formSelectLanguages{languageIndex}"
                 name="languages"
                 bind:value={selectedLanguage.lang}
                 on:blur={() => { validators.checkLanguageSelect(languageIndex); storages.storeUserData('languagesSkills', 'languagesSkills'); }}>
                 <option value="" disabled>Lingue</option>
                 {#each optionsLanguages as optionsLanguage (optionsLanguage.value)}
                     <option value={optionsLanguage.value}>{optionsLanguage.label}</option>
                 {/each}
             </select>
             <select
                 class="form-select"
                 id="formSelectLanguageLevels{languageIndex}"
                 name="languageLevels"
                 bind:value={selectedLanguage.level}
                 on:blur={() => { validators.checkLanguageLevelSelect(languageIndex); storages.storeUserData('languagesSkills', 'languagesSkills'); }}>
                 <option value="" disabled>Livello</option>
                 {#each optionslanguageLevels as optionslanguageLevel (optionslanguageLevel.value)}
                     <option value={optionslanguageLevel.value}>{optionslanguageLevel.label}</option>
                 {/each}
             </select>

             {#if languageIndex > 0}
                 <div class="input-group-append px-2"
                      style="width: 20%;">
                     <button type="button" class="btn-remove-style" on:click={() => { removeLanguage(languageIndex); storages.storeUserData('languagesSkills', 'languagesSkills'); }}><i class="fa-solid fa-trash"></i></button>
                 </div>
                 <div class="visual-feedback-group-container"
                      style="width: 80%;">
                  <div class="left-visual-feedback-position"
                       style="width: 40%;">
                      <div class="success-user-data" id="success-language-message{languageIndex}"></div>
                      <div class="error-user-data" id="error-language-message{languageIndex}"></div>
                  </div>
                  <div class="right-visual-feedback-position"
                       style="width: 40%;">
                      <div class="success-user-data" id="success-language-level-message{languageIndex}"></div>
                      <div class="error-user-data" id="error-language-level-message{languageIndex}"></div>
                  </div>
              </div>
             {/if}

             <div class="visual-feedback-group-container">
                 <div class="left-visual-feedback-position">
                     <div class="success-user-data" id="success-language-message{languageIndex}"></div>
                     <div class="error-user-data" id="error-language-message{languageIndex}"></div>
                 </div>
                 <div class="right-visual-feedback-position">
                     <div class="success-user-data" id="success-language-level-message{languageIndex}"></div>
                     <div class="error-user-data" id="error-language-level-message{languageIndex}"></div>
                 </div>
             </div>
         </div>
         {/each}

        <div class="flex-center-utility">
          <button type="button" class="btn-add-style" on:click={() => addLanguage()} disabled={disableAddLanguageButton}><i class="fa-solid fa-plus"></i></button>
        </div>

         <!-- Patente -->

        <div>
          <label for="formLabelDrivingLicence">Patente</label>
          <span class="isRequired">*</span>
        </div>
        
        <div class="py-2">
          {#each drivingLicenceCheckBoxs as drivingLicenceCheckBox}
            <div class="form-check">
              <input 
                class="form-check-input" 
                type="checkbox"
                name="drivingLicenceCheckBoxOptions" 
                id={"formCheckBoxDrivingLicence" + drivingLicenceCheckBox.value}
                value={drivingLicenceCheckBox.label}  
                bind:group={$formDataStore.drivingLicences}
                on:change={() => { validators.checkDrivingLicenceCheckboxesInput(); storages.storeUserData('drivingLicences', 'drivingLicences'); }}
              >
              <label class="form-check-label" for={"formCheckBoxDrivingLicence" + drivingLicenceCheckBox.value}>
                {drivingLicenceCheckBox.label}
              </label>
            </div>
          {/each}

          <div class="success-driving-licence-message"></div>
          <div class="error-driving-licence-message"></div>

        </div>
        
         <!-- Automunito -->

        <span>
          <label for="formLabelSelfDriven">Sei automunito?</label>
          <span class="isRequired">*</span>
        </span>

        <div class="py-2">
          <div class="form-check">
            <input class="form-check-input" 
                   type="radio" 
                   name="isHasOwnCarRadio" 
                   id="drivingLicenceUpRadioYes" 
                   value="Si"
                   bind:group={$formDataStore.hasOwnCar} 
                   on:change={() => { validators.isHasOwnCarRadiosSelected(); storages. storeUserData('isHasOwnCarRadio', 'hasOwnCar'); }}
              >
            <label class="form-check-label" for="drivingLicenceUpRadioYes">Sì</label>
          </div>
  
          <div class="form-check">
            <input class="form-check-input" 
                   type="radio" 
                   name="isHasOwnCarRadio" 
                   id="drivingLicenceDownRadioNo"  
                   value="No"
                   bind:group={$formDataStore.hasOwnCar}
                   on:change={() => { validators.isHasOwnCarRadiosSelected(); storages. storeUserData('isHasOwnCarRadio', 'hasOwnCar'); }} 
              >
            <label class="form-check-label" for="drivingLicenceDownRadioNo">No</label>
          </div>

          <div class="success-has-own-car-message"></div>
          <div class="error-has-own-car-message"></div>        
        
        </div>
      
         <!-- Dettagli Carriera -->

         <div class="flex-center-utility p-5">
            <h4>Dettagli Carriera</h4>
        </div>

        {#each $formDataStore.jobs as job, jobIndex}

            <div class="form-group mb-3">
                <label for="textInputJobRole{jobIndex}">Ruolo</label>
                <span class="isRequired">*</span>
                <input type="text" 
                       class="form-control" 
                       id="textInputJobRole{jobIndex}" 
                       name="jobRole"
                       autocomplete="off"
                       placeholder="Inserisci la posizione lavorativa che hai ricoperto"
                       bind:value={ job.role }
                       on:input={() => validators.checkJobRoleTextInput(jobIndex)}
                />

                <div id="success-job-role-message{jobIndex}"></div>
                <div id="error-job-role-messages{jobIndex}"></div>

            </div>

            <div class="form-group mb-3">
                <label for="textInputCompany{jobIndex}">Azienda</label>
                <span class="isRequired">*</span>
                <input type="text" 
                       class="form-control" 
                       id="textInputCompany{jobIndex}" 
                       name="company"
                       autocomplete="off" 
                       placeholder="Inserisci il nome dell'azienda"
                       bind:value={ job.company }
                       on:input={() => validators.checkCompanyTextInput(jobIndex)}
                />

                <div id="success-company-message{jobIndex}"></div>
                <div id="error-company-messages{jobIndex}"></div>
                
            </div>

            <div class="form-group mb-3">
                <label for="textAreaInputWorkExperienceResults{jobIndex}">Risultati professionali ottenuti</label>
                <span class="isRequired">*</span>
                <textarea
                    class="form-control"
                    id="textAreaInputWorkExperienceResults{jobIndex}"
                    name="workExperienceResults"
                    rows="4"
                    placeholder="Parlaci dei risultati professionali che hai conseguito..."
                    bind:value={ job.workExperienceResults }
                    on:input={() => validators.checkWorkExperienceResults(jobIndex)}
                ></textarea>

                <div id="success-work-experience-results-message{jobIndex}"></div>
                <div id="error-work-experience-results-messages{jobIndex}"></div>
            </div>

            <div class="form-group mb-3 flex-center-utility justify-content-around">

              <div>

                <label for="startDateInputWorkExperience{jobIndex}" class="custom-date-input">Data di inizio</label>
                 <span class="isRequired">*</span>
                <input type="month" class="form-control"
                  id="startDateInputWorkExperience{jobIndex}"
                  name="startDateWorkExperience"
                  max={job.endDateWorkExperience}
                  bind:value={ job.startDateWorkExperience }
                  on:blur={() => validators.checkStartAndEndWorkExperienceDateInput(jobIndex)}
                >

                <div id="success-startDateWorkExperience-message{jobIndex}"></div>
                <div id="error-startDateWorkExperience-messages{jobIndex}"></div>

              </div>

              <div>

                <label for="endDateInputWorkExperience{jobIndex}" class="custom-date-input">Data di fine</label>
                <span class="isRequired">*</span>
                <input type="month" class="form-control" 
                  id="endDateInputWorkExperience{jobIndex}"
                  name="endDateWorkExperience"
                  min={job.startDateWorkExperience}
                  bind:value={ job.endDateWorkExperience }
                  on:blur={() => validators.checkStartAndEndWorkExperienceDateInput(jobIndex)}
                />

                <div id="success-endDateWorkExperience-message{jobIndex}"></div>
                <div id="error-endDateWorkExperience-messages{jobIndex}"></div>

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

            <label for="selectQualification{educationIndex}">Titolo di studio</label>
            <span class="isRequired">*</span>

          </div>
        
          <div class="input-group mb-3">

            <select

              class="form-select"
              id="selectQualification{educationIndex}"
              style="width: 50%;"
              aria-label="QualificationSelect"
              name="qualification"
              bind:value={education.qualification}
              on:blur={() => validators.checkQualificationsSelect(educationIndex)}>

              <option value="" disabled>Titolo di Studio</option>

              {#each educationLevels as educationLevel(educationLevel.value)}
              <option value={educationLevel.value}>{educationLevel.value}</option>
              {/each}

            </select>


            <input type="text"
                  class="form-control"
                  id="textInputFieldOfStudy{educationIndex}"
                  style="width: 50%;"
                  name="fieldOfStudy"
                  autocomplete="off"
                  placeholder="Inserisci il campo di studio"
                  bind:value={education.fieldOfStudy}
                  on:input={() => validators.checkFieldOfStudyTextInput(educationIndex)}
            >
            
            <div class="visual-feedback-group-container">
              <div class="left-visual-feedback-position">
                  <div class="success-user-data" id="success-qualification-message{educationIndex}"></div>
                  <div class="error-user-data" id="error-qualification-message{educationIndex}"></div>
              </div>
              <div class="right-visual-feedback-position">
                  <div class="success-user-data" id="success-field-study-message{educationIndex}"></div>
                  <div class="error-user-data" id="error-field-study-message{educationIndex}"></div>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="textInputEducationType{educationIndex}">Università/Ente di formazione/Scuola</label>
            <span class="isRequired">*</span>
            <input type="text" 
                  class="form-control" 
                  id="textInputEducationType{educationIndex}" 
                  name="educationType"
                  autocomplete="off" 
                  placeholder="Inserisci la tipologia di formazione"
                  bind:value={education.educationType}
                  on:input={() => validators.checkEducationTypeTextInput(educationIndex)}
            />

            <div id="success-education-type-message{educationIndex}"></div>
            <div id="error-education-type-messages{educationIndex}"></div>
        
          </div>

            <div class="mb-3">
              <label for="formInputEducationGoals{educationIndex}">Risultati accademici raggiunti</label>
              <span class="isRequired">*</span>
              <textarea
                  class="form-control"
                  id="formInputEducationGoals{educationIndex}"
                  rows="4"
                  placeholder="Parlaci degli obiettivi accademici che hai raggiunto..."
                  bind:value={education.educationGoals}
                  on:input={() => validators.checkEducationGoals(educationIndex)}
              ></textarea>

              <div id="success-education-goals-message{educationIndex}"></div>
              <div id="error-education-goals-messages{educationIndex}"></div>
            </div>

            <div class="mb-3 flex-center-utility justify-content-around">
              <div>
                <label for="startDateInputAcademicEducation{educationIndex}" class="custom-date-input">Data di inizio</label>
                <span class="isRequired">*</span>
                  <input type="month"
                    class="form-control" 
                    id="startDateInputAcademicEducation{educationIndex}" 
                    name="startDateAcademicEducation"
                    max={education.endDateAcademicEducation}
                    bind:value={education.startDateAcademicEducation}
                    on:blur={() => validators.checkStartAndEndAcademicEducationDateInput(educationIndex)}
                  />

                  <div id="success-startDateAcademicEducation-message{educationIndex}"></div>
                  <div id="error-startDateAcademicEducation-messages{educationIndex}"></div>

              </div>

              <div>
                <label for="endDateInputAcademicEducation{educationIndex}" class="custom-date-input">Data di fine</label>
                  <span class="isRequired">*</span>
                  <input type="month"
                         class="form-control"
                         id="endDateInputAcademicEducation{educationIndex}"
                         name="endDateAcademicEducation"
                         min={education.startDateAcademicEducation}
                         bind:value={education.endDateAcademicEducation}
                         on:blur={() => validators.checkStartAndEndAcademicEducationDateInput(educationIndex)}
                  />

                  <div id="success-endDateAcademicEducation-message{educationIndex}"></div>
                  <div id="error-endDateAcademicEducation-messages{educationIndex}"></div>
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

  .custom-file-input {
    border-radius: 8px;
    border: 1px solid black;
    font-size: 14px;
    font-style: normal;
    padding: 0.8rem;
    cursor: pointer;
  }

  label {
    font-size: 14px;
    font-weight: 500;
    color: #293133;
  }

  .isRequired {
    color: red;
    font-size: 14px;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 0.5;
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

  .success-user-data {
    background-color: #d4edda;
    color: #155724;
  }

  .error-user-data {
    background-color: #f8d7da; 
    color: #721c24;
  }

  .visual-feedback-group-container {
    display: flex;
    width: 100%;
  }

  .left-visual-feedback-position, .right-visual-feedback-position {
    flex-basis: 50%;
  }

</style>