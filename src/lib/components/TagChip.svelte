<script>
  import * as Icons from 'lucide-svelte';
  import { FileQuestion } from 'lucide-svelte';
  import { onMount, createEventDispatcher } from 'svelte';
  import { tags } from '$lib/tags.js';
  import _ from 'lodash';

  export let tag;
  export let selected = false;

  let tag_data = _.find(tags, { name: tag })

  let Icon;

  onMount(() => {
    Icon = Icons[tag_data.icon.charAt(0).toUpperCase() + tag_data.icon.slice(1)]
  })

  const dispatch = createEventDispatcher();
  function toggle() {
    selected = !selected;

    dispatch('toggle', {
      tag,
      selected
    })
  }
</script>

<button class={selected ? 'toggle header-button selected' : 'toggle header-button'} on:click={toggle}>
  {#if Icon}
    <svelte:component this={Icon} size="18" />
  {:else}
    <FileQuestion size="16" />
  {/if}
  {tag_data.name}
</button>