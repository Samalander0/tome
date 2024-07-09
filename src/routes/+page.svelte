<script>
  import '$lib/styles.scss';
  import { Dock, SquareLibrary, Mail, Info, SlidersHorizontal, ChevronUp } from 'lucide-svelte';

  import Card from '$lib/components/Card.svelte';
  import TagChip from '$lib/components/TagChip.svelte';
  import Metatags from '$lib/components/Metatags.svelte';

  import { sites } from '$lib/sites.js';
  
  let results = sites;
</script>

<Metatags/>

<div class="app-top">
  <nav class="app-nav">
    <div class="logo">
      <SquareLibrary size="24"/>
      <h2>Tome</h2>
    </div>
    <div class="nav-right">
      <a href="mailto:sam@samcheng.co" data-title="Contact">
        <Mail size="16"/>
      </a>
      <button data-title="(Coming Soon)">
        <Info size="16"/>
      </button>
    </div>
  </nav>
  <header class="app-header">
    <h1>
      Hyper-specific design inspiration.<br/>
      More coming soon.
    </h1>
    <!--
      <div class="header-buttons">
        <div class="filters">
          <button>
            <SlidersHorizontal size="16"/>
            Filter
            <span class="badge">0</span>
          </button>
          <button>
            <Dock size="16"/>
            Landing Page
          </button>
          <TagChip name="Website" icon="laptop"/>
        </div>
        <button class="dropdown-controls">
          <ChevronUp size="20"/>
        </button>
      </div>
    -->
  </header>
</div>

<div class="grid">
  {#each results as card, i}
    <Card data={card}/>
  {/each}
</div>
