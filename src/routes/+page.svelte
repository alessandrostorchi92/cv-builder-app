<script lang="ts">

import CvPreview from "$lib/cvPreview.svelte";
import Sidebar from "$lib/sidebar.svelte";
import "../app.css";

</script>


<main>

    <div id="main-container">

        <Sidebar></Sidebar>

        <CvPreview></CvPreview>
        
    </div>

</main>


<style>

    #main-container {
        display: flex;
        height: 100vh;
        overflow: hidden;
    }

</style>