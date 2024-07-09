<script>
  import * as Icons from 'lucide-svelte';
  import { FileQuestion } from 'lucide-svelte';
  import { onMount } from 'svelte'

  export let icon;
  export let name;

  let Icon;

  onMount(() => {
    Icon = Icons[icon.charAt(0).toUpperCase() + icon.slice(1)]
  })
</script>

<button>
  {#if Icon}
    <svelte:component this={Icon} size="16" />
  {:else}
    <FileQuestion size="16" />
  {/if}
  {name}
</button>