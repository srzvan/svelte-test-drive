<script>
  import Hero from './Hero.svelte'
  import Sidebar from './Sidebar.svelte'
  import WallpaperGrid from './WallpaperGrid.svelte'
  import Footer from './Footer.svelte'
</script>

<style type="scss">
  @use "../scss/_color-palette" as palette;
  :global(body) {
    display: grid;
    grid-template-rows: 20% 1fr auto;
    background-color: palette.$light;
    color: palette.$dark;
  }

  main {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: 100px auto repeat(2, 1fr) 100px;
  }

  header {
    background-color: palette.$primary;
    color: palette.$light;
  }
</style>

<header>
  <Hero />
</header>
<main>
  <Sidebar />
  <WallpaperGrid />
</main>
<Footer />
