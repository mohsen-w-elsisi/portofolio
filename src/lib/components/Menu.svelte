<script lang="ts">
  import { fade } from "svelte/transition";
  import { menuIsOpen, closeMenu } from "$lib/state/menu";
</script>

{#if $menuIsOpen}
  <nav on:click={closeMenu} transition:fade>

  </nav>
{/if}

<style>
  nav {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background-color: hsla(0, 0%, 0%, 80%);
  }
</style>
