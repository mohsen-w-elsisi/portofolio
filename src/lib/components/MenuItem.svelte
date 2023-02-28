<script lang="ts">
  import { menuSpeed } from "$lib/globalVariables";
  import { fly } from "svelte/transition";
  import Text from "./Text.svelte";

  type MouseEventHandler = (event: MouseEvent) => any;
  export let onClick: MouseEventHandler | undefined;

  export let index: number;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li
  on:click|stopPropagation={onClick}
  in:fly={{ delay: index * menuSpeed, duration: menuSpeed, y: -innerHeight }}
  class:nudge-up={index % 2 != 0}
  class:nudge-down={index % 2 == 0}
>
  <Text>
    <slot />
  </Text>
</li>

<style>
  li {
    --nudge-distance: 10vh;

    background-color: var(--primary-color);
    border: none;
    box-shadow: var(--shadow);

    width: clamp(125px, 20vw, 200px);

    display: flex;
    justify-content: center;
    align-items: center;

    /* to circle */
    aspect-ratio: 1 / 1;
    border-radius: 100%;
  }

  .nudge-down {
    translate: 0 var(--nudge-distance);
  }

  .nudge-up {
    translate: 0 calc(var(--nudge-distance) * -1);
  }
</style>
