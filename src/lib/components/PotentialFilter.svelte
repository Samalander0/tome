<script>
  import * as Icons from 'lucide-svelte';
  import { FileQuestion } from 'lucide-svelte';
  import { onMount, createEventDispatcher } from 'svelte';

  export let filter;
  export let filters;

  $: selected = filters.includes(filter.name)

  let Icon;

  onMount(() => {
    Icon = Icons[filter.icon.charAt(0).toUpperCase() + filter.icon.slice(1)]

    if (!Icon) {
      Icon = FileQuestion
    }
  })

  const dispatch = createEventDispatcher();
  function add() {
    dispatch('add', {
      tag: filter.name
    })
  }
</script>

<button class={selected ? "potential-filter selected" : "potential-filter"} on:click={add}>
  <div class="icon">
    <svelte:component this={Icon} size="14"/>
  </div>
  {filter.name}
</button>