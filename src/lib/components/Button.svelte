<script lang="ts">
  import Text from "./Text.svelte";

  type MouseEventHandler = (event: MouseEvent) => any;
  export let onClick: MouseEventHandler | undefined;
  
  export let shadow: boolean;
</script>

<button on:click={onClick} class:shadow>
  <Text>
    <slot />
  </Text>
</button>

<style>
  button {
    background-color: var(--primary-color);
    border: none;

    /* to circle */
    aspect-ratio: 1 / 1;
    border-radius: 100%;
  }

  .shadow {
    box-shadow: var(--shadow);
  }
</style>
