<script>
  import '$lib/styles.scss';
  import { TableProperties, SquareLibrary, Mail, Info, SlidersHorizontal, ChevronUp, Search, Component, Waypoints, Layers, MonitorSmartphone } from 'lucide-svelte';

  import Card from '$lib/components/Card.svelte';
  import TagChip from '$lib/components/TagChip.svelte';
  import Metatags from '$lib/components/Metatags.svelte';
  import CurrentFilter from '$lib/components/CurrentFilter.svelte';
  import PotentialFilter from '$lib/components/PotentialFilter.svelte';

  import { sites } from '$lib/sites.js';
  import { tags } from '$lib/tags.js';
  import { filter } from '$lib/filter.js';

  import _ from 'lodash';

  let filters = [];
  
  let results = sites;

  let not_found_text = "";
  let not_found_rotation = 5;
  const not_found_options = [
    "// TODO: Add more sites",
    "More sites coming soon!",
    "Whoops! No matches found.",
    "No luck! Try different filters.",
    "Results on vacation?",
    "Oops! Nothing here.",
    "Back to the drawing board!",
    "Looks empty here.",
    "We'll have more soon!",
    "Keep exploring!",
    "Filters came up dry.",
    "No matches found."
  ];

  function updateResults() {
    results = filter(filters)

    not_found_text = not_found_options[Math.floor(Math.random() * not_found_options.length)]
    not_found_rotation = 5 - Math.random() * 10
  }

  function toggleFilter(event) {
    if (filters.includes(event.detail.tag)) {
      filters.splice(filters.indexOf(event.detail.tag), 1);
    } else {
      filters.push(event.detail.tag);
    }

    filters = filters; // Make svelte update anything that uses filters
    updateResults()
  }

  let filter_popup = false;

  let filter_category = "Features";
  $: filter_results = _.filter(tags, { category: filter_category });
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
      Find exactly what you're looking for.
    </h1>
    <div class="header-buttons">
      <div class="filters">
        <div class="filter-wrapper">
          <button class={filter_popup ? "header-button filter active" : "header-button filter"} on:click={() => {filter_popup = !filter_popup}}>
            <SlidersHorizontal size="16"/>
            Filter
            <span class="badge">{filters.length}</span>
          </button>
          <div class={filter_popup ? "filter-popup" : "filter-popup hidden"}>
            <div class="popup-top">
              <!-- Coming soon
              <div class="filter-search">
                <Search size="16"/>
              </div>
              -->
              {#if filters.length}
                <div class="selected-filters">
                  {#each filters as filter_item}
                    <CurrentFilter filter={filter_item} on:remove={toggleFilter}/>
                  {/each}
                </div>
              {/if}
            </div>
            <div class="popup-bottom">
              <div class="filter-categories">
                <label>
                  <TableProperties size="16"/>
                  Features
                  <input type="radio" name="category" value="Features" bind:group={filter_category}/>
                </label>
                <label>
                  <Component size="16"/>
                  Elements
                  <input type="radio" name="category" value="Elements" bind:group={filter_category}/>
                </label>
                <label>
                  <Waypoints size="16"/>
                  Industries
                  <input type="radio" name="category" value="Industries" bind:group={filter_category}/>
                </label>
                <label>
                  <Layers size="16"/>
                  Types
                  <input type="radio" name="category" value="Types" bind:group={filter_category}/>
                </label>
                <label>
                  <MonitorSmartphone size="16"/>
                  Platforms
                  <input type="radio" name="category" value="Platforms" bind:group={filter_category}/>
                </label>
              </div>
              <div class="filter-results">
                {#each filter_results as result}
                  <PotentialFilter filter={result} filters={filters} on:add={toggleFilter}/>
                {/each}
              </div>
            </div>
          </div>
        </div>
        <TagChip tag="Websites" on:toggle={toggleFilter} selected={filters.includes("Websites")}/>
        <TagChip tag="Effects & Animations" on:toggle={toggleFilter} selected={filters.includes("Effects & Animations")}/>
        <TagChip tag="AI" on:toggle={toggleFilter} selected={filters.includes("AI")}/>
        <TagChip tag="Portfolios" on:toggle={toggleFilter} selected={filters.includes("Portfolios")}/>
      </div>
      <!-- Coming soon
      <button class="dropdown-controls">
        <ChevronUp size="20"/>
      </button>
      -->
    </div>
  </header>
</div>

<div class="grid">
  {#each results as card, i}
    <Card data={card}/>
  {/each}
  {#if !results.length}
    <div class="none-found" style={`--rotation: ${not_found_rotation}deg;`}>
      <h3>{not_found_text}</h3>
      <a href="mailto:ideas@tome.design" target="_blank">Suggest a site?</a>
    </div>
  {/if}
</div>
