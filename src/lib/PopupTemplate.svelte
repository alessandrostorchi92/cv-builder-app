<script lang="ts">

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function hideCvTemplates() {
        dispatch('hideCvTemplates')
    }

</script>

<div class="popup-overlay">
    <div class="popup-content">
        <button class="close-btn" on:click={hideCvTemplates}><i class="fa-solid fa-xmark"></i></button>
    </div>
</div>

<style>
    .popup-overlay {
        display: flex;
        justify-content: flex-end;
        flex-basis: 22%;
        flex-shrink: 0;
        height: 100%;
        background-color: #0056B3;
        padding: 1rem;
    }

    .close-btn {
        background-color: #C0392B;
        border: none;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    i {
        color: white;
        font-size: 1.5rem;
    }

</style>