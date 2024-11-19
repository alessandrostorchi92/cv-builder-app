<script lang="ts">
  import {formDataStore, isAllowed, isPrivacyPolicyApproved, currentTenant, tenantColor, getPdfCv} from "../stores/CvUser_data";
  import * as validators from "../validators/form_validation";
  import { onMount } from "svelte";

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
    { value: "+263", label: "Zimbabwe (+263)" },
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
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
  ];

  const educationLevels = [
    { value: "Diploma" },
    { value: "Certificato di Specializzazione" },
    { value: "Laurea Triennale" },
    { value: "Laurea Magistrale" },
    { value: "Laurea a Ciclo Unico" },
    { value: "Master" },
    { value: "Dottorato di Ricerca" },
  ];

  const optionsSkillLevels = [
    { level: "Principiante" },
    { level: "Intermedio" },
    { level: "Esperto" },
  ];

  function handleFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        formDataStore.update((store) => {
          return { ...store, filePicture: reader.result as string };
        });

      };

      reader.onerror = () => {
        reader.abort();
        console.log("Lettura del file interrotta");
      };

      reader.readAsDataURL(file);
    }
  }

  function addDigitalSkills(): void {
    if ($formDataStore.digitalSkills.length > 0) {
      $formDataStore.digitalSkills.push({ skill: "", level: "" });
      $formDataStore.digitalSkills = $formDataStore.digitalSkills;
    }
  }

  function removeDigitalSkill(index: number): void {
    $formDataStore.digitalSkills = $formDataStore.digitalSkills.filter(
      (digitalSkill, i) => i !== index
    );
    $formDataStore.digitalSkills = $formDataStore.digitalSkills;
  }

  function addLanguage(): void {
    if ($formDataStore.languagesSkills.length > 0) {
      $formDataStore.languagesSkills.push({ lang: "", level: "" });
      $formDataStore.languagesSkills = $formDataStore.languagesSkills;
    }
  }

  function removeLanguage(index: number): void {
    $formDataStore.languagesSkills = $formDataStore.languagesSkills.filter(
      (selectedLanguage, i) => i !== index
    );
    $formDataStore.languagesSkills = $formDataStore.languagesSkills;
  }

  function addWorkExperience(): void {
    if ($formDataStore.jobs.length > 0) {
      $formDataStore.jobs.push({
        role: "",
        company: "",
        location: "",
        workExperienceResults: "",
        startDateWorkExperience: "",
        endDateWorkExperience: "",
        isEmployed: false,
      });
      $formDataStore.jobs = $formDataStore.jobs;
    }
  }

  function removeWorkExperience(index: number): void {
    $formDataStore.jobs = $formDataStore.jobs.filter((job, i) => i !== index);
    $formDataStore.jobs = $formDataStore.jobs;
  }

  function addAcademicEducation(): void {
    if ($formDataStore.educations.length > 0) {
      $formDataStore.educations.push({
        qualification: "",
        fieldOfStudy: "",
        trainingCenter: "",
        educationGoals: "",
        endDateAcademicEducation: "",
      });
      $formDataStore.educations = $formDataStore.educations;
    }
  }

  function removeAcademicEducation(index: number): void {
    $formDataStore.educations = $formDataStore.educations.filter(
      (education, i) => i !== index
    );
    $formDataStore.educations = $formDataStore.educations;
  }

  let canvas: HTMLCanvasElement;
  let isDrawing: boolean = false;
  let points: string[] = [];
  let isSigned: boolean = false;
  let ctx: CanvasRenderingContext2D | null = null;

  function getCanvasRenderingContext2D(): void {
    ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#000";
    } else {
      console.error(
        "Impossibile ottenere il contesto di disegno 2D dal canvas."
      );
    }
  }

  function updateCanvasJs(): void {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function getPointerPosition(event: PointerEvent): {
    positionX: number;
    positionY: number;
  } {
    const rect = canvas.getBoundingClientRect();

    const positionX = event.clientX - rect.left;
    const positionY = event.clientY - rect.top;

    return { positionX, positionY };
  }

  function handlePointerDown(event: PointerEvent): void {
    isDrawing = true;

    const { positionX, positionY } = getPointerPosition(event);

    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(positionX, positionY);
    }

    points.push(`M${positionX},${positionY}`);
  }

  function handlePointerMove(event: PointerEvent): void {
    if (!isDrawing || !ctx) return;

    const { positionX, positionY } = getPointerPosition(event);
    ctx?.lineTo(positionX, positionY);
    ctx?.stroke();

    points.push(`L${positionX},${positionY}`);

    isSigned = true;
  }

  function handlePointerUp(event: PointerEvent): void {
    isDrawing = false;

    if (points.length === 0) return;

    const pathData = points.join(" ");

    const scaleFactor = 0.2;

    const originalWidth = canvas.width;
    const originalHeight = canvas.height;

    const newWidth = originalWidth * scaleFactor;
    const newHeight = originalHeight * scaleFactor;

    let svgSignature = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${newWidth}" height="${newHeight}" viewBox="0 0 ${originalWidth} ${originalHeight}">
    <path d="${pathData}" stroke="black" fill="none" stroke-width="4"/></svg>`;

    $formDataStore.userSignature = svgSignature;

    convertSvgToBase64(svgSignature);
  }

  function convertSvgToBase64(svg: string): void {
    const svgBlob = new Blob([svg], { type: "image/svg+xml" });
    const reader = new FileReader();

    reader.onloadend = () => {
      formDataStore.update((store) => {
        return { ...store, userSignature: reader.result as string };
      });
    };

    reader.onerror = () => {
      reader.abort();
      console.log("Errore durante la lettura del file SVG");
    };

    reader.readAsDataURL(svgBlob);
  }

  function clearSignatureDrawing(): void {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      points = [];
      isSigned = false;
      isAllowed.set(false);
      validators.checkClickCancBtn();
    }
  }

  function handleSignatureAuthorization() {
    isSigned = true;
    isAllowed.set(true);
    validators.checkClickAuthBtn();
  }

  onMount(() => {
    const savedStoreData = localStorage.getItem("formData");

    if (savedStoreData) {
      formDataStore.set(JSON.parse(savedStoreData));
    }

    if (canvas) {
      updateCanvasJs();
      getCanvasRenderingContext2D();
    } else {
      console.warn("Il canvas non è definito");
    }
  });

</script>

<div id="sidebar">

  <div class="company-logo" style="background-image:url(https://{currentTenant}.blob.core.windows.net/cdn/cv/extended-logo.png);"></div>

  <div class="text-center">
    <h1 class="title-app-style {tenantColor}" style="color: var(--primary-color);">CREA IL TUO CURRICULUM VITAE</h1>
    <h3 class="description-title-app-style py-2">Fai il tuo primo passo verso il tuo lavoro ideale: crea il tuo curriculum e fai decollare la tua carriera</h3>
  </div>

  <!-- Informazioni di contatto -->

  <div class="flex-center-utility py-4">
    <h2 class="title-section-style {tenantColor}" style="color: var(--primary-color);">INFORMAZIONI DI CONTATTO</h2>
  </div>

  <form>
    <div class="container">

      <div class="row">

        <!-- Immagine di profilo -->
        <div class="flex-center-utility py-3">
          <div class="file-picture-container">
            <label for="file-picture-input">
              <div class="file-picture" style="background-image: url({$formDataStore.filePicture || '/background-profile-picture.png'})"></div>
            </label>
          </div>
        </div>

        <div class="text-center py-3 {tenantColor}">
          <label for="inputFilePicture" style="color: white; background-color: var(--primary-color);" class="custom-file-input">SCEGLI FOTO</label>

          <input
            type="file"
            id="inputFilePicture"
            accept="image/*"
            name="filePicture"
            on:change={(event) => {
              validators.isProfilePictureUploaded();
              handleFileChange(event);
            }}
          />

          <div style="width: 50%; margin: 0 auto;">
            <div class="success-user-data success-file-picture-message"></div>
            <div class="error-user-data error-file-picture-message"></div>
          </div>
          
        </div>

        <!-- Name -->
        <div class="py-3">
          <label for="inputName">Nome</label>
          <span class="isRequired">*</span>

          <input
            type="text"
            class="form-control"
            id="inputName"
            autocomplete="off"
            name="name"
            placeholder="Nome"
            bind:value={$formDataStore.name}
            on:input={() => validators.checkNameInput()}
          />

          <div class="success-user-data success-name-message form-text"></div>
          <div class="error-user-data error-name-message form-text"></div>
        </div>

        <!-- Cognome -->
        <div class="py-3">
          <label for="inputSurname">Cognome</label>
          <span class="isRequired">*</span>

          <input
            type="text"
            class="form-control"
            id="inputSurname"
            autocomplete="off"
            name="surname"
            placeholder="Cognome"
            bind:value={$formDataStore.surname}
            on:input={() => validators.checkSurnameInput()}
          />

          <div
            class="success-user-data success-surname-message form-text"
          ></div>
          <div class="error-user-data error-surname-message form-text"></div>
        </div>

        <!-- Professione -->
        <div class="py-3">
          <label for="inputProfession">Professione</label>
          <span class="isRequired">*</span>

          <input
            type="text"
            class="form-control"
            id="inputProfession"
            autocomplete="off"
            name="profession"
            placeholder="Professione"
            bind:value={$formDataStore.profession}
            on:input={() => validators.checkProfessionInput()}
          />

          <div
            class="success-user-data success-profession-message form-text"
          ></div>
          <div class="error-user-data error-profession-message form-text"></div>
        </div>

        <!-- Nazionalità -->
        <div class="py-3">
          <label for="inputNationality">Stato di nascita</label>
          <span class="isRequired">*</span>

          <input
            type="text"
            class="form-control"
            id="inputNationality"
            autocomplete="off"
            name="nationality"
            placeholder="Nazione"
            bind:value={$formDataStore.nationality}
            on:input={() => validators.checkNationalityInput()}
          />

          <div class="success-nationality-message form-text"></div>
          <div class="error-nationality-message form-text"></div>
        </div>

        <!---- Luogo di Nascita ---->
        <div class="py-3">
          <label for="inputBirthPlace">Luogo di nascita</label>
          <span class="isRequired">*</span>

          <input
            type="text"
            class="form-control"
            id="inputBirthPlace"
            autocomplete="off"
            name="birthPlace"
            placeholder="Città"
            bind:value={$formDataStore.birthPlace}
            on:input={() => validators.checkBirthPlaceInput()}
          />

          <div class="success-birthplace-message form-text"></div>
          <div class="error-birthplace-message form-text"></div>
        </div>

        <!---- Data di Nascita ---->
        <div class="py-3">
          <label for="inputBirthDate">Data di nascita</label>
          <span class="isRequired">*</span>

          <input
            type="date"
            class="form-control"
            id="inputBirthDate"
            autocomplete="off"
            name="birthDate"
            min="1954-01-01"
            max="2006-12-31"
            bind:value={$formDataStore.birthDate}
            on:change={() => validators.checkBirthDateInput()}
          />

          <div class="success-birthdate-message form-text"></div>
          <div class="error-birthdate-message form-text"></div>
        </div>

        <!-- Residenza/Domicilio -->
        <div class="py-3">
          <label for="formInputStreetAddress">Indirizzo di Residenza</label>
          <span class="isRequired">*</span>
          <div class="flex-center-utility justify-content-around gap-2 mb-3">
            <!-- Indirizzo di Residenza -->
            <div style="width: 70%;">

              <input
                type="text"
                class="form-control"
                id="formInputStreetAddress"
                autocomplete="off"
                name="streetAddress"
                placeholder="Via Roma, 25"
                bind:value={$formDataStore.address.streetAddress}
                on:input={() => validators.checkStreetAddressInput()}
              />

              <div class="success-street-address-message form-text"></div>
              <div class="error-street-address-message form-text"></div>
            </div>

            <!-- Codice Postale -->
            <div style="width: 30%;">

              <input
                type="text"
                class="form-control"
                id="inputPostalCode"
                autocomplete="off"
                name="postalCode"
                placeholder="41100"
                bind:value={$formDataStore.address.postalCode}
                on:input={() => validators.checkPostalCodeInput()}
              />

              <div class="success-street-number-message form-text"></div>
              <div class="error-street-number-messages form-text"></div>
            </div>
          </div>

          <div class="flex-center-utility justify-content-around gap-2">
            <!-- Città -->
            <div style="width: 50%;">
              <label for="formInputCity">Città</label>
              <span class="isRequired">*</span>

              <input
                type="text"
                class="form-control"
                id="formInputCity"
                autocomplete="off"
                name="city"
                placeholder="Città"
                bind:value={$formDataStore.address.city}
                on:input={() => validators.checkCityInput()}
              />

              <div class="success-city-message form-text"></div>
              <div class="error-city-message form-text"></div>
            </div>

            <!-- Regione -->
            <div style="width: 50%;">
              <label for="formInputRegion">Regione</label>
              <span class="isRequired">*</span>

              <input
                type="text"
                class="form-control"
                id="formInputRegion"
                autocomplete="off"
                name="region"
                placeholder="Regione"
                bind:value={$formDataStore.address.region}
                on:input={() => validators.checkRegionInput()}
              />

              <div class="success-region-message form-text"></div>
              <div class="error-region-message form-text"></div>
            </div>
          </div>
        </div>

        <!-- Cellulare -->
        <div class="py-3">
          <label for="selectPhone">Cellulare</label>
          <span class="isRequired">*</span>

          <div class="input-group mb-3">
            <select
              class="form-select"
              style="width: 50%;"
              id="inputSelectPhonePrefix"
              aria-label="PhonePrefixSelect"
              autocomplete="off"
              name="phonePrefix"
              bind:value={$formDataStore.phonePrefix}
              on:change={() => validators.checkPhonePrefixSelect()}
            >
              <option value="" disabled class="prefix-option" id="defaultOption"
                ><span>Prefisso</span></option
              >
              {#each phonePrefixes as phonePrefix}
                <option value={phonePrefix.value}> {phonePrefix.label}</option>
              {/each}
            </select>

            <input
              type="tel"
              class="form-control"
              style="width: 50%;"
              id="inputSelectPhone"
              autocomplete="off"
              name="phone"
              placeholder="Cellulare"
              bind:value={$formDataStore.phone}
              on:input={() => validators.checkPhoneInput()}
            />

            <div class="visual-feedback-group-container" style="width: 100%;">
              <div class="left-visual-feedback-position" style="width: 50%;">
                <div
                  class="success-user-data success-phoneprefix-message form-text"
                ></div>
                <div
                  class="error-user-data error-phoneprefix-message form-text"
                ></div>
              </div>

              <div class="right-visual-feedback-position" style="width: 50%;">
                <div
                  class="success-user-data success-phone-message form-text"
                ></div>
                <div
                  class="error-user-data error-phone-messages form-text"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!---- Email ---->
        <div class="py-3">
          <label for="inputEmail">Email</label>
          <span class="isRequired">*</span>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            autocomplete="off"
            name="email"
            placeholder="cognome.nome_90@example.com"
            bind:value={$formDataStore.email}
            on:change={() => validators.checkEmailInput()}
          />

          <div class="success-email-message form-text"></div>
          <div class="error-email-messages form-text"></div>
        </div>

        <!---- Profilo Personale ---->
        <div class="py-3">
          <label for="inputProfileSummary">Profilo personale</label>

          <textarea
            class="form-control h-auto"
            id="inputProfileSummary"
            rows="6"
            maxlength="500"
            name="profileSummary"
            placeholder="Descriviti in poche righe..."
            bind:value={$formDataStore.profileSummary}
            on:input={() => validators.checkProfileSummaryInput()}
          ></textarea>

          <div class="success-profile-summary-message form-text"></div>
          <div class="error-profile-summary-message form-text"></div>
        </div>

        <!-- Categorie protette -->
        <div class="py-3">
          <span class="me-1">
            <label for="formLabelSelfDriven"
              >Appartenente alle categorie protette:</label
            >
            <span class="isRequired">*</span>
          </span>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="protectedCategoryRadioYes"
              name="protectedCategory"
              value="Si"
              bind:group={$formDataStore.isProtectedCategory}
              on:change={() => validators.isProtectedCategoryRadiosSelected()}
            />
            <label class="form-check-label" for="radio1">Sì</label>
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="protectedCategoryRightRadioNo"
              name="protectedCategory"
              value="No"
              bind:group={$formDataStore.isProtectedCategory}
              on:change={() => validators.isProtectedCategoryRadiosSelected()}
            />
            <label class="form-check-label" for="radio2">No</label>
          </div>

          <div class="success-protected-category-message"></div>
          <div class="error-protected-category-message"></div>
        </div>

        <!-- Competenze digitali -->
        <div class="py-3">

          {#each $formDataStore.digitalSkills as digitalSkill, digitalSkillIndex}

            <label for="inputDigitalSkills{digitalSkillIndex}">Competenza digitale</label>

            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                style="width: {digitalSkillIndex > 0 ? '40%' : '50%'};"
                id="inputDigitalSkills{digitalSkillIndex}"
                autocomplete="off"
                name="digitalSkill{digitalSkillIndex}"
                placeholder="Competenza"
                bind:value={digitalSkill.skill}
                on:input={() => validators.checkDigitalSkillsTextInput(digitalSkillIndex)}
              />

              <select
                class="form-select"
                style="width: {digitalSkillIndex > 0 ? '40%' : '50%'};"
                id="skillLevelSelect{digitalSkillIndex}"
                name="skillLevel{digitalSkillIndex}"
                bind:value={digitalSkill.level}
                on:change={() =>
                  validators.checkLevelSkillSelect(digitalSkillIndex)}
              >
                <option value="" disabled>Livello</option>

                {#each optionsSkillLevels as optionSkillLevel (optionSkillLevel)}
                  <option>{optionSkillLevel.level}</option>
                {/each}
              </select>

              {#if digitalSkillIndex > 0}
                <div class="input-group-append px-1" style="width: 20%;">
                  <button
                    type="button"
                    class="btn-remove-style"
                    on:click={() => {
                      removeDigitalSkill(digitalSkillIndex);
                    }}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              {/if}

              <div class="visual-feedback-group-container" style="width: 100%;">
                <div class="left-visual-feedback-position" style="width: {digitalSkillIndex > 0 ? '40%' : '50%'};">
                  <div class="success-user-data form-text" id="success-digital-skill-message{digitalSkillIndex}"></div>
                  <div class="error-user-data form-text" id="error-digital-skill-message{digitalSkillIndex}"></div>
                </div>

                <div class="right-visual-feedback-position" style="width: {digitalSkillIndex > 0 ? '40%' : '50%'};">
                  <div class="success-user-data form-text" id="success-level-skill-message{digitalSkillIndex}"></div>
                  <div class="error-user-data form-text" id="error-level-skill-message{digitalSkillIndex}"></div>
                </div>

              </div>
            </div>

          {/each}

        </div>

        <div class="flex-center-utility">
          <button
            type="button"
            class="btn-add-style {tenantColor}"
            style="background-color: var(--primary-color);"
            aria-label="Aggiungi competenza"
            on:click={() => addDigitalSkills()}> 
            <span>Aggiungi Competenza</span><i class="fa-solid fa-plus ms-2"></i>
          </button>
        </div>

        <!-- Lingue -->
        <div class="py-3">
          <label for="inputLanguages">Lingua</label>

          {#each $formDataStore.languagesSkills as selectedLanguage, languageIndex}

            <div class="input-group mb-3">

              <select
                class="form-select"
                style="width: {languageIndex > 0 ? '40%' : '50%'};"
                id="selectLanguages{languageIndex}"
                name="languages{languageIndex}"
                bind:value={selectedLanguage.lang}
                on:change={() => validators.checkLanguageSelect(languageIndex)}
              >
                <option value="" disabled>Lingua</option>
                {#each optionsLanguages as optionsLanguage (optionsLanguage.value)}
                  <option value={optionsLanguage.value}
                    >{optionsLanguage.label}</option
                  >
                {/each}
              </select>

              <select
                class="form-select"
                style="width: {languageIndex > 0 ? '40%' : '50%'};"
                id="selectLanguageLevels{languageIndex}"
                name="languageLevels{languageIndex}"
                bind:value={selectedLanguage.level}
                on:change={() =>
                  validators.checkLanguageLevelSelect(languageIndex)}
              >
                <option value="" disabled>Livello</option>
                {#each optionslanguageLevels as optionslanguageLevel (optionslanguageLevel.value)}
                  <option value={optionslanguageLevel.value}
                    >{optionslanguageLevel.label}</option
                  >
                {/each}
              </select>

              {#if languageIndex > 0}
                <div class="input-group-append px-1" style="width: 20%;">
                  <button
                    type="button"
                    class="btn-remove-style"
                    on:click={() => removeLanguage(languageIndex)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>

                <div
                  class="visual-feedback-group-container"
                  style="width: 100%;"
                >
                  <div
                    class="left-visual-feedback-position"
                    style="width: {languageIndex > 0 ? '40%' : '50%'};"
                  >
                    <div
                      class="success-user-data"
                      id="success-language-message{languageIndex}"
                    ></div>
                    <div
                      class="error-user-data"
                      id="error-language-message{languageIndex}"
                    ></div>
                  </div>
                  <div
                    class="right-visual-feedback-position"
                    style="width: {languageIndex > 0 ? '40%' : '50%'};"
                  >
                    <div
                      class="success-user-data"
                      id="success-language-level-message{languageIndex}"
                    ></div>
                    <div
                      class="error-user-data"
                      id="error-language-level-message{languageIndex}"
                    ></div>
                  </div>
                </div>
              {/if}

              <div class="visual-feedback-group-container" style="width: 100%;">
                <div class="left-visual-feedback-position" style="width: 50%;">
                  <div
                    class="success-user-data form-text"
                    id="success-language-message{languageIndex}"
                  ></div>
                  <div
                    class="error-user-data form-text"
                    id="error-language-message{languageIndex}"
                  ></div>
                </div>

                <div class="right-visual-feedback-position" style="width: 50%;">
                  <div
                    class="success-user-data form-text"
                    id="success-language-level-message{languageIndex}"
                  ></div>
                  <div
                    class="error-user-data form-text"
                    id="error-language-level-message{languageIndex}"
                  ></div>
                </div>
              </div>
            </div>
          {/each}

          <div class="flex-center-utility">
            <button
              type="button"
              class="btn-add-style {tenantColor}"
              style="background-color: var(--primary-color);"
              aria-label="Aggiungi lingua"
              on:click={() => addLanguage()}
            >
              <span>Aggiungi Lingua</span>
              <i class="fa-solid fa-plus ms-2"></i>
            </button>
          </div>
        </div>

        <!-- Automunito -->
        <div class="py-3">
          <label for="formLabelSelfDriven">Sei automunito?</label>
          <span class="isRequired">*</span>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="isHasOwnCarRadio"
              id="drivingLicenceUpRadioYes"
              value="Si"
              bind:group={$formDataStore.hasOwnCar}
              on:change={() => validators.isHasOwnCarRadiosSelected()}
            />
            <label class="form-check-label" for="drivingLicenceUpRadioYes"
              >Sì</label
            >
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="isHasOwnCarRadio"
              id="drivingLicenceDownRadioNo"
              value="No"
              bind:group={$formDataStore.hasOwnCar}
              on:change={() => validators.isHasOwnCarRadiosSelected()}
            />
            <label class="form-check-label" for="drivingLicenceDownRadioNo"
              >No</label
            >
          </div>

          <div class="success-has-own-car-message"></div>
          <div class="error-has-own-car-message"></div>
        </div>

        <!-- Patente -->
        <div class="py-3">

          <label for="formLabelDrivingLicence">Patente</label>

          {#each drivingLicenceCheckBoxs as drivingLicenceCheckBox}

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="drivingLicenceCheckBoxOptions"
                  id={"formCheckBoxDrivingLicence" +
                    drivingLicenceCheckBox.value}
                  value={drivingLicenceCheckBox.label}
                  bind:group={$formDataStore.drivingLicences}
                  on:change={() => validators.checkDrivingLicenceCheckboxesInput()}
                />
                <label class="form-check-label" for={"formCheckBoxDrivingLicence" + drivingLicenceCheckBox.value}>{drivingLicenceCheckBox.label}</label>

              </div>

          {/each}

          <div class="success-driving-licence-message"></div>
          <div class="error-driving-licence-message"></div>

        </div>

        <!-- Dettagli Carriera -->
        <div class="flex-center-utility py-4">
          <h2 class="title-section-style {tenantColor}" style="color: var(--primary-color);">DETTAGLI CARRIERA</h2>
        </div>

        {#each $formDataStore.jobs as job, jobIndex}
          <div class="py-3">
            <label for="inputJobRole{jobIndex}">Ruolo</label>

            <input
              type="text"
              class="form-control"
              id="inputJobRole{jobIndex}"
              name="jobRole"
              autocomplete="off"
              placeholder="Posizione lavorativa"
              bind:value={job.role}
              on:input={() => validators.checkJobRoleInput(jobIndex)}
            />

            <div
              id="success-job-role-message{jobIndex}"
              class="form-text"
            ></div>
            <div id="error-job-role-messages{jobIndex}" class="form-text"></div>
          </div>

          <div class="py-3">
            <label for="inputCompanyName{jobIndex}">Azienda</label>

            <input
              type="text"
              class="form-control"
              id="inputCompanyName{jobIndex}"
              name="companyName"
              autocomplete="off"
              placeholder="Azienda"
              bind:value={job.company}
              on:input={() => validators.checkCompanyNameInput(jobIndex)}
            />

            <div
              id="success-company-name-message{jobIndex}"
              class="form-text"
            ></div>
            <div
              id="error-company-name-messages{jobIndex}"
              class="form-text"
            ></div>
          </div>

          <div class="py-3">

            <label for="inputJobLocation{jobIndex}">Luogo di lavoro</label>

            <input
              type="text"
              class="form-control"
              id="inputJobLocation{jobIndex}"
              name="jobLocation"
              autocomplete="off"
              placeholder="Luogo di lavoro"
              bind:value={job.location}
              on:input={() => validators.checkJobLocationInput(jobIndex)}
            />

            <div
              id="success-job-location-message{jobIndex}"
              class="form-text"
            ></div>
            <div
              id="error-job-location-messages{jobIndex}"
              class="form-text"
            ></div>
          </div>

          <div class="py-3">
            <label for="inputJobResults{jobIndex}"
              >Risultati professionali ottenuti</label
            >

            <textarea

              class="form-control h-auto"
              id="inputJobResults{jobIndex}"
              name="jobResults"
              rows="6"
              maxlength="500"
              placeholder="Parlaci dei risultati professionali che hai conseguito..."
              bind:value={job.workExperienceResults}
              on:input={() => validators.checkJobResultsInput(jobIndex)}

            ></textarea>

            <div id="success-job-results-message{jobIndex}" class="form-text"></div>
            <div id="error-job-results-messages{jobIndex}" class="form-text"></div>

          </div>

          <div class="py-3 work-experience-date-style">

            <div class="start-date-job">

              <label for="inputStartJob{jobIndex}">Data di inizio</label>

              <input
                type="month"
                class="form-control"
                id="inputStartJob{jobIndex}"
                name="startJob"
                max={job.endDateWorkExperience}
                bind:value={job.startDateWorkExperience}
                on:change={() => validators.checkStartJobInput(jobIndex)}
              />

              <div id="success-start-job-message{jobIndex}" class="form-text"></div>
              <div id="error-start-job-messages{jobIndex}" class="form-text"></div>

            </div>

            <div class="end-date-job">

              <label for="inputEndJob{jobIndex}">Data di fine</label>

              <input
                type="month"
                class="form-control"
                id={`inputEndJob${jobIndex}`}
                name="endJob"
                min={job.startDateWorkExperience}
                bind:value={job.endDateWorkExperience}
                on:change={() => validators.checkEndJobInput(jobIndex)}
                disabled={job.isEmployed}
              />

              <div id="success-end-job-message{jobIndex}" class="form-text"></div>
              <div id="error-end-job-messages{jobIndex}" class="form-text"></div>

            </div>

          </div>

          {#if jobIndex === 0}

            <div class="d-flex justify-content-center py-1">

              <input
                class="form-check-input me-1 custom-checkbox"
                type="checkbox"
                id="currentJobCheckbox"
                aria-label="Indica se stai attualmente ricoprendo questo ruolo"
                bind:checked={job.isEmployed}
                on:change={() => {
                  job.endDateWorkExperience = "";
                  validators.checkCurrentJob(jobIndex);
                }}
              />

              <label class="currentlyJob" for="checkBoxCurrentlyJob">Attualmente ricopro questo ruolo</label>
            </div>

          {/if}

          {#if jobIndex > 0}

            <div class="flex-center-utility mb-3">

              <button
                type="button"
                class="btn-remove-style"
                on:click={() => removeWorkExperience(jobIndex)}
                ><i class="fa-solid fa-trash"></i>
              </button>

            </div>

          {/if}

        {/each}

        <div class="flex-center-utility py-3">

          <button

            type="button"
            class="btn-add-style {tenantColor}"
            style="background-color: var(--primary-color);"
            aria-label="Aggiungi lavoro"
            on:click={() => addWorkExperience()}
            ><span>Aggiungi Lavoro</span><i class="fa-solid fa-plus ms-2"></i>

          </button>

        </div>

        <!-- Dettagli Formazione -->
        <div class="flex-center-utility py-4">
          <h2 class="title-section-style {tenantColor}" style="color: var(--primary-color);">DETTAGLI FORMAZIONE</h2>
        </div>

        {#each $formDataStore.educations as education, educationIndex}
          <div class="py-3">
            <label for="inputEducationTitle{educationIndex}"
              >Titolo di studio</label
            >

            <select
              class="form-select"
              id="inputEducationTitle{educationIndex}"
              name="educationTitle"
              bind:value={education.qualification}
              on:change={() =>
                validators.checkEducationTitleSelect(educationIndex)}
            >
              <option value="" disabled>Titolo di Studio</option>

              {#each educationLevels as educationLevel (educationLevel.value)}
                <option value={educationLevel.value}
                  >{educationLevel.value}</option
                >
              {/each}
            </select>

            <div class="success-user-data form-text" id="success-education-title-message{educationIndex}"></div>
            <div class="error-user-data form-text" id="error-education-title-message{educationIndex}"></div>

          </div>

          <div class="py-3">
            <label for="inputStudyField{educationIndex}">Campo di studio</label>

            <input
              type="text"
              class="form-control"
              id="inputStudyField{educationIndex}"
              name="studyField"
              autocomplete="off"
              placeholder="Campo di studio"
              bind:value={education.fieldOfStudy}
              on:input={() => validators.checkFieldStudyInput(educationIndex)}
            />

            <div class="success-user-data form-text" id="success-study-field-message{educationIndex}"></div>
            <div class="error-user-data form-text" id="error-study-field-message{educationIndex}"></div>
          </div>

          <div class="py-3">

            <label for="inputTrainingCenter{educationIndex}">Ente di formazione</label>

            <input
              type="text"
              class="form-control"
              id="inputTrainingCenter{educationIndex}"
              name="trainingCenter"
              autocomplete="off"
              placeholder="Ente di formazione"
              bind:value={education.trainingCenter}
              on:input={() =>
                validators.checkEducationTypeInput(educationIndex)}
            />

            <div id="success-training-center-message{educationIndex}" class="form-text"></div>
            <div id="error-training-center-messages{educationIndex}" class="form-text"></div>

          </div>

          <div class="py-3">
            <label for="inputEducationGoals{educationIndex}"
              >Risultati accademici raggiunti</label
            >

            <textarea
              class="form-control h-auto"
              id="inputEducationGoals{educationIndex}"
              rows="6"
              maxlength="500"
              placeholder="Parlaci degli obiettivi accademici che hai raggiunto..."
              bind:value={education.educationGoals}
              on:input={() =>
                validators.checkEducationGoalsInput(educationIndex)}
            ></textarea>

            <div
              id="success-education-goals-message{educationIndex}"
              class="form-text"
            ></div>
            <div
              id="error-education-goals-messages{educationIndex}"
              class="form-text"
            ></div>
          </div>

          <div class="flex-center-utility flex-column">
            <div class="w-50">
              <label for="inputEndEducation{educationIndex}">Data di fine</label
              >

              <input
                type="month"
                class="form-control"
                id="inputEndEducation{educationIndex}"
                name="endEducation"
                bind:value={education.endDateAcademicEducation}
                on:change={() =>
                  validators.checkEndAcademicEducationDateInput(educationIndex)}
              />

              <div
                id="success-end-education-message{educationIndex}"
                class="form-text"
              ></div>
              <div
                id="error-end-education-messages{educationIndex}"
                class="form-text"
              ></div>
            </div>
          </div>

          {#if educationIndex > 0}
            <div class="flex-center-utility">
              <button
                type="button"
                class="btn-remove-style mt-2"
                on:click={() => removeAcademicEducation(educationIndex)}
                ><i class="fa-solid fa-trash"></i></button
              >
            </div>
          {/if}

        {/each}

        <div class="flex-center-utility py-3">

          <button
            type="button"
            class="btn-add-style {tenantColor}"
            style="background-color: var(--primary-color);"
            aria-label="Aggiungi Formazione"
            on:click={() => addAcademicEducation()}
            ><span>Aggiungi Formazione</span><i class="fa-solid fa-plus ms-2"></i>
          </button>

        </div>

      </div>

    </div>

  </form>

  <!---- Privacy Policy ---->
  <div class="py-4">

    <div class="flex-center-utility form-check form-switch privacy-label">

      <input
        class="form-check-input me-2"
        type="checkbox"
        role="switch"
        id="privacyPolicySwitch"
        name="privacyPolicy"
        bind:checked={$isPrivacyPolicyApproved}
        on:change={() => validators.checkPolicyPrivacySwitchInput()}
      />

      <label for="flexSwitchCheckChecked">Accetto la privacy policy</label>
      <span class="isRequired ms-1">*</span>

    </div>

    <div class="flex-center-utility">
      <div class="success-user-data success-policy-privacy-message"></div>
      <div class="error-user-data error-policy-privacy-message"></div>
    </div>

  </div>

  <!---- User Signature ---->

  <div class="signature-wrapper">

    <div class="label-signature">
      <label for="userSignature">Firma</label>
      <span class="isRequired">*</span>
    </div>
  
    <div class="signature-container">
  
        <canvas
          id="userSignature"
          class="signature-pad-style"
          bind:this={canvas}
          on:pointerdown={handlePointerDown}
          on:pointermove={handlePointerMove}
          on:pointerup={handlePointerUp}>
        </canvas>
  
    </div>

  </div>

  <div class="flex-center-utility gap-4 py-2">

      <button class="btn-add-style btn-signature {tenantColor}" style="color: var(--primary-color); background-color: white;" name="cancBtn" aria-label="Cancella Firma" on:click={clearSignatureDrawing}>CANCELLA</button>
      <button class="btn-add-style btn-signature {isSigned && $isPrivacyPolicyApproved ? tenantColor : ""}" style="background-color: {isSigned && $isPrivacyPolicyApproved ? 'var(--primary-color)' : '#f0f0f0'}" name="authBtn" aria-label="Autorizza Firma" disabled={!isSigned || !$isPrivacyPolicyApproved} on:click={handleSignatureAuthorization}>AUTORIZZA</button>

  </div>

  <div class="text-center px-5">
      <div class="success-user-data success-auth-sign-message"></div>
      <div class="error-user-data error-canc-sign-message"></div>
  </div>

  <!---- Download Button ---->
  <div class="download-container">
    <button class="download-btn {tenantColor}" style="background-color: var(--primary-color); color: white;" aria-label="Scarica Curriculum Vitae" on:click={getPdfCv} disabled={!$isAllowed || !$isPrivacyPolicyApproved}>SCARICA CV <i class="fa-solid fa-download"></i></button>
  </div>
 
</div>

<style>

  #sidebar {
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    flex-basis: 35%;
    max-width: 100%;
    flex-shrink: 0;
    padding: 2rem 2rem 160px 2rem;
    background-color: #3C3C3C;
    font-family: "Montserrat", sans-serif;
  }

  #sidebar::-webkit-scrollbar {
    width: 0.3rem;
  }

  textarea::-webkit-scrollbar {
    width: 0.2rem;
  }

  textarea::-webkit-scrollbar-track {
    border-radius: 100vw;
  }

  textarea::-webkit-scrollbar-thumb {
    background: #686868;
    border-radius: 100vw;
  }

  textarea::-webkit-scrollbar-track-piece {
    background: hsl(187, 100%, 98%);
  }

  textarea {
    resize: none;
    font-size: 0.9rem;
  }

  #sidebar::-webkit-scrollbar-track {
    border-radius: 100vw;
  }

  #sidebar::-webkit-scrollbar-thumb {
    background: #686868;
    border-radius: 100vw;
  }

  #sidebar::-webkit-scrollbar-track-piece {
    background: hsl(187, 100%, 98%);
  }

  .flex-center-utility {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .company-logo {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 3 / 1;
    background-size: 70%;
  }

  .title-app-style {
    font-size: 2rem;
    font-weight: 800;
    padding: 0.8rem 0;
  }

  .description-title-app-style {
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
  }

  .title-section-style {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .file-picture-container {
    position: relative;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  .file-picture {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    cursor: pointer;
  }

  select, input[type="text"], input[type="email"], input[type="tel"], input[type="radio"], input[type="checkbox"], input[type="month"], input[type="date"] {
    font-size: 0.9rem;
  }

  [id^="success-"], [id^="error-"], [class^="success-"], [class^="error-"] { 
    font-size: 0.6rem !important;
  }

  .form-control,
  .form-select {
    height: 2.5rem;
  }

  input[type="file"] {
    display: none;
  }

  .custom-file-input {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 1rem;
    font-weight: 700;
    padding: 0.8rem;
    cursor: pointer;
  }

  .custom-checkbox {
    appearance: none;
    border: 1px solid black;
  }

  label {
    font-size: 1rem;
    vertical-align: top;
    font-weight: 600;
    color: white;
  }

  .isRequired {
    color: red;
    font-size: 14px;
  }

  .btn-add-style {
    width: 220px;
    margin-top: 0.2rem;
    border: none;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 8px;
    padding: 0.5rem;
    color: white;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
    width: 4rem;
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
    background-color: #c3e6cb;
    color: #155724;
  }

  .error-user-data {
    background-color: #f5c6cb;
    color: #721c24;
  }

  .visual-feedback-group-container {
    display: flex;
  }

  .work-experience-date-style {
    display: flex;
    gap: 0.5rem;
    width: calc(100% - 0.5rem);
  }

  .start-date-job, .end-date-job {
    width: 50%;
  }

  .privacy-label {
    font-size: 0.8rem;
    font-style: oblique;
    font-weight: 600;
  }

  .signature-container {
    width: 100%;
    height: 200px;
    margin: 0 auto; 
  }

  .signature-pad-style {
    background-color: white;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    width: 100%; 
    height: 100%; 
  }

  .btn-signature {
    width: 7rem;
    padding: 0.8rem;
    font-weight: 600;
  }

  .download-btn {
      width: 12rem;
      display: block;
      margin: 0 auto;
      padding: 1rem;
      font-size: 1rem;
      text-decoration: none;
      font-weight: bold;
      color: #fff;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition:
        background-color 0.3s ease,
        transform 0.3s ease;
  }

  /*-------------------------------------

  <!---- Media Queries ---->

  ------------------------------------- */

  @media screen and (max-width: 1200px) {

    #sidebar {
      padding: 1rem;
    }

    .company-logo {
      background-size: 60%;
    }

    .title-app-style {
      font-size: 1.8rem;
    }

    .description-title-app-style {
      font-size: 1.1rem;
    }

    .title-section-style {
      font-size: 1.3rem;
    }

    .file-picture-container {
      width: 200px;
      height: 200px;
    }

    .custom-file-input {
      font-size: 0.75rem;
    }

    label {
      font-size: 0.9rem;
    }

    select, input[type="text"], textarea, input[type="email"], input[type="tel"], input[type="radio"], input[type="checkbox"], input[type="month"], input[type="date"] {
      font-size: 0.75rem;
    }

    .btn-add-style {
      width: 200px;
      font-size: 0.7rem;
    }

    .btn-remove-style {
      width: 3rem;
    }

    .currentlyJob {
      font-size: 0.8rem;
    }

    .signature-container {
      width: 100%;
      height: 180px;
    }

    .btn-signature {
      width: 7rem;
    }

    .privacy-label {
      font-size: 0.7rem;
    }

  }

  @media screen and (max-width: 992px) {

    #sidebar {
      padding: 0.5rem;
    }

    .company-logo {
      background-size: 55%;
    }

    .title-app-style {
      font-size: 1.6rem;
    }

    .description-title-app-style {
      font-size: 0.9rem;
    }

    .title-section-style {
      font-size: 1.2rem;
    }

    .file-picture-container {
      width: 180px;
      height: 180px;
    }

    .custom-file-input {
      font-size: 0.65rem;
    }

    label {
      font-size: .8rem;
    }

    .btn-add-style {
      width: 170px;
      font-size: 0.65rem;
    }

    .signature-wrapper {
      padding: 0 1rem;
    }

    .signature-container {
      height: 160px;
    }

    .btn-signature {
      width: 6rem;
    }


  }

  @media screen and (max-width: 768px) {

    #sidebar {
      flex-basis: 100vh;
      padding: 4px 4px 260px 4px;
    } 

    .download-container {
      width: 100%;
      text-align: center;
      padding-top: 2rem;
    }

    .download-btn {
      width: 80%;
      font-size: 0.8rem;
      padding: 0.6rem 0;
    }
        

  }

  @media screen and (max-width: 576px) {

    #sidebar {
      width: 100%;
    } 
  }

</style>