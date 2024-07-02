<script>
  import '$lib/styles.scss';
  import { Dock, SquareLibrary, Mail, Info, SlidersHorizontal, ChevronUp } from 'lucide-svelte'

  import Card from '$lib/components/Card.svelte'

  const results = [
    {
      name: "browsingmode.com",
      url: "https://browsingmode.com/",
      image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fbrowsingmode-1.png?alt=media"
    },
    {
      name: "Navbar Gallery",
      url: "https://www.navbar.gallery/",
      image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fnavbar_gallery-1.png?alt=media"
    },
    {
      name: "browsingmode.com",
      url: "https://browsingmode.com/",
      image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fbrowsingmode-1.png?alt=media"
    },
    {
      name: "Navbar Gallery",
      url: "https://www.navbar.gallery/",
      image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fnavbar_gallery-1.png?alt=media"
    },
    {
      name: "browsingmode.com",
      url: "https://browsingmode.com/",
      image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fbrowsingmode-1.png?alt=media"
    },
    {
      name: "Navbar Gallery",
      url: "https://www.navbar.gallery/",
      image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fnavbar_gallery-1.png?alt=media"
    },
    {
      name: "browsingmode.com",
      url: "https://browsingmode.com/",
      image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fbrowsingmode-1.png?alt=media"
    },
    {
      name: "Navbar Gallery",
      url: "https://www.navbar.gallery/",
      image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fnavbar_gallery-1.png?alt=media"
    },
    {
      name: "browsingmode.com",
      url: "https://browsingmode.com/",
      image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fbrowsingmode-1.png?alt=media"
    },
    {
      name: "Navbar Gallery",
      url: "https://www.navbar.gallery/",
      image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fnavbar_gallery-1.png?alt=media"
    },
  ]
</script>

<div class="app-top">
  <nav class="app-nav">
    <div class="logo">
      <SquareLibrary size="24"/>
      <h2>Tome</h2>
    </div>
    <div class="nav-right">
      <button data-title="Contact">
        <Mail size="16"/>
      </button>
      <button data-title="About">
        <Info size="16"/>
      </button>
    </div>
  </nav>
  <header class="app-header">
    <h1>
      Hyper-specific design inspiration.<br/>
      Find exactly what you're looking for.
    </h1>
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
      </div>
      <button class="dropdown-controls">
        <ChevronUp size="20"/>
      </button>
    </div>
  </header>
</div>

<div class="grid">
  {#each results as card, i}
    <Card data={card}/>
  {/each}
</div>
