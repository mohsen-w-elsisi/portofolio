<script>
  import Text from "./Text.svelte";
  import { scale } from "svelte/transition";
  import { menuIsOpen, openMenu } from "$lib/state/menu";
</script>

{#if !$menuIsOpen}
  <button on:click={openMenu} transition:scale>
    <Text>hello</Text>
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

    /* to circle */
    aspect-ratio: 1 / 1;
    border-radius: 100%;
  }
</style>
