<script lang="ts">

import CvPreview from "$lib/cvPreview.svelte";
import Sidebar from "$lib/sidebar.svelte";
import "../app.css";

</script>


    <div id="main-container">

        <Sidebar></Sidebar>

        <CvPreview></CvPreview>
        
    </div>


<style>
    #main-container {
        display: flex;
        flex-direction: row;
        height: 100vh;
        overflow: hidden;
    }

</style>