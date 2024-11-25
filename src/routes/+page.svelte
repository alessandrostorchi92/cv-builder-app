<script lang="ts">
  import CvPreview from "$lib/cvPreview.svelte";
  import Sidebar from "$lib/sidebar.svelte";
  import { onMount } from "svelte";
  import "../app.css";
  import { getCopyrightPolicy, getTenant, getTenantColor } from "../stores/cvForm_data";
  import { currentDomain } from "../stores/domainStore";

  export let tenant: any;
  export let color: any;
  export let footer: any;

  onMount(async () => {
    $currentDomain = window.location.hostname;
    tenant = getTenant($currentDomain);
    if (tenant != "" && tenant != null && tenant != undefined) {
        color = getTenantColor(tenant);
        footer = getCopyrightPolicy(tenant);
    }
  });
</script>

<div id="main-container">
  <Sidebar bind:tenant bind:color></Sidebar>
  <CvPreview bind:tenant bind:color bind:footer></CvPreview>
</div>

<style>
  #main-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow: hidden;
  }
</style>
