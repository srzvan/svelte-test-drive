<script>
  import Hero from './Hero.svelte'
  import Sidebar from './Sidebar.svelte'
  import WallpaperGrid from './WallpaperGrid.svelte'
</script>

<Hero />
<section class="section has-background-dark">
  <div class="tile is-ancestor">
    <div class="tile is-2 is-vertical is-parent">
      <div class="tile is-child">
        <Sidebar />
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child">
        <WallpaperGrid />
      </div>
    </div>
  </div>
</section>
