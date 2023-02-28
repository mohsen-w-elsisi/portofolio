<script>
  import { scale } from "svelte/transition";
  import { menuIsOpen, openMenu } from "$lib/state/menu";
  import { menuSpeed } from "$lib/globalVariables";
  import MenuIcon from "./icons/MenuIcon.svelte";
</script>

{#if !$menuIsOpen}
  <button on:click={openMenu} transition:scale={{ duration: menuSpeed }}>
    <MenuIcon />
  </button>
{/if}

<style>
  button {
    background-color: var(--primary-color);
    border: none;
    box-shadow: var(--shadow);

    position: fixed;
    bottom: 1rem;
    left: 1rem;

    padding: 0.5rem;

    /* to circle */
    aspect-ratio: 1 / 1;
    border-radius: 100%;
  }
</style>
