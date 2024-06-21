<script lang="ts">


function handleSubmit() {
    console.log("Form submitted");
}



</script>


<div id="sidebar" class="flex-column-utility">

    <!-- Informazioni di contatto -->

    <div class="flex-center-utility p-4">
        <h4>Informazioni di Contatto</h4>
    </div>

    <form on:submit|preventDefault={handleSubmit}>

        <div class="flex-center-utility">

            <div class="file-picture-container">

                <div class="file-picture"></div>

            </div>

        </div>

        <div class="flex-center-utility mt-3">

            <label for="file-input" class="custom-file-input">
                Scegli file
            </label>
            
            <input type="file" id="file-input" accept="image/*" />
            
        </div>



    </form>



</div>

<style>

#sidebar {
    flex-shrink: 0;
    overflow: auto;
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
    background-image: url('/background-profile-picture.png');
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





</style>