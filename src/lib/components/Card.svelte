<script>
  export let data = null;
  export let index;

  const positions = [
    {
      size: 2,
      startX: 1,
      startY: 2
    },
    {
      size: 3,
      startX: 4,
      startY: 1
    },
    {
      size: 2,
      startX: 9,
      startY: 3
    },
    {
      size: 3,
      startX: 2,
      startY: 5
    },
    {
      size: 4,
      startX: 6,
      startY: 6
    },
  ]

  let n = Math.floor(index/positions.length)
  let item = positions[index - n*positions.length]
  let style = `grid-column: ${item.startX} / span ${item.size}; grid-row: ${item.startY + n*7} / span ${item.size};`

  import { ExternalLink } from 'lucide-svelte'
</script>

<div class="card" style={style}>
  <img src={data.image} alt={`${data.name} screenshot`}/>

  <div class="info">
    <h3>{data.name}</h3>
    <a href={data.url} target="_blank">
      <ExternalLink size="16"/>
    </a>
  </div>
</div>