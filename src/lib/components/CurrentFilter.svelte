<script>
  import * as Icons from 'lucide-svelte';
  import { FileQuestion, X } from 'lucide-svelte';
  import { onMount, createEventDispatcher } from 'svelte';
  import { tags } from '$lib/tags.js';
  import _ from 'lodash';

  export let filter;

  let tag_data = _.find(tags, { name: filter })

  let Icon;

  onMount(() => {
    Icon = Icons[tag_data.icon.charAt(0).toUpperCase() + tag_data.icon.slice(1)]

    if (!Icon) {
      Icon = FileQuestion
    }
  })

  const dispatch = createEventDispatcher();
  function remove() {
    dispatch('remove', {
      tag: filter
    })
  }
</script>

<div class="selected-filter">
  <svelte:component this={Icon} size="16"/>
  <span>
    {tag_data.name}
  </span>
  <button on:click={remove}>
    <X size="14"/>
  </button>
</div>