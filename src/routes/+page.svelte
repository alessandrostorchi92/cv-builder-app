<script lang="ts">

import Sidebar from "$lib/Sidebar.svelte";
import "../app.css";

</script>


<main>

    <div id="main-container">

        <Sidebar></Sidebar>


        <div id="curriculum-content"></div>

    </div>


</main>


<style>

    #main-container {
        display: flex;
        height: 100%;
    }

    #curriculum-content {
        flex-grow: 1;
        border: 2px solid lightblue;
    }


</style>