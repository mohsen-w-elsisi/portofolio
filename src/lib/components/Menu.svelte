<script lang="ts">
  import { fade } from "svelte/transition";
  import { menuIsOpen, closeMenu } from "$lib/state/menu";
  import { menuSpeed } from "$lib/globalVariables";
  import MenuItem from "./MenuItem.svelte";

  function sayHI() {
    console.log("hi");
  }
</script>

{#if $menuIsOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <nav on:click={closeMenu} transition:fade={{ duration: menuSpeed }}>
    <MenuItem onClick={sayHI} index={1}>hello world</MenuItem>
    <MenuItem onClick={sayHI} index={2}>hello world</MenuItem>
    <MenuItem onClick={sayHI} index={3}>hello world</MenuItem>
    <MenuItem onClick={sayHI} index={4}>hello world</MenuItem>
  </nav>
{/if}

<style>
  nav {
    --number-of-colums: 1;

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background-color: hsla(0, 0%, 0%, 80%);

    display: grid;
    grid-template-columns: repeat(var(--number-of-colums), 1fr);
    row-gap: 1rem;
    place-items: center;
    overflow-y: scroll;
  }

  @media screen and (min-width: 300px) {
    nav {
      --number-of-colums: 2;
    }
  }

  @media screen and (min-width: 750px) {
    nav {
      --number-of-colums: 3;
    }
  }
</style>
