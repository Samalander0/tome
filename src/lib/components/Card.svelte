<script>
  export let data = null;

  import { ExternalLink } from 'lucide-svelte'

  let card, open;

  function moveButton(e) {
    const rect = card.getBoundingClientRect();

    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    open.style.left = `${offsetX - open.offsetWidth / 2}px`
    open.style.top = `${offsetY - open.offsetHeight / 2}px`
  }
</script>

<a bind:this={card} class="card" on:mousemove={moveButton} href={data.url} target="_blank">
  <img src={data.image} alt={`${data.name} screenshot`}/>

  <div bind:this={open} class="open">
    <h3>{data.name}</h3>
    <div class="out">
      <ExternalLink size="16"/>
    </div>
  </div>
</a>