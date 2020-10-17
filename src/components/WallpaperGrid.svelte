<script>
  const imgPaths = [
    'https://www.liveenhanced.com/wp-content/uploads/2018/03/australian-landscape-photography-4.jpg',
    'https://i2.wp.com/www.brianmerry.ca/wp-content/uploads/2016/10/Rundle-Fire-4x6.jpg?ssl=1',
  ]
</script>

<style type="scss">
  @use "../scss/_color-palette.scss" as palette;
  .wallpapers {
    padding: 0 2rem;
    grid-column: 3 / -2;
  }

  .wallpapers-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
  }

  h2 {
    margin-bottom: 2rem;
    text-align: center;
  }

  .card {
    border-radius: 0.25rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.02);
    background-color: palette.$white;
    .card-image {
      display: block;

      img {
        width: 100%;
        height: auto;
      }
    }

    .card-content {
      padding: 0.75rem;
    }

    .card-footer {
      display: flex;
      align-items: stretch;

      .card-footer-item {
        padding: 0.75rem;
        flex: 1 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>

<section class="wallpapers">
  <h2>Your wallpapers</h2>
  <section class="wallpapers-grid">
    {#each imgPaths as path}
      <div class="wallpaper card">
        <div class="card-image">
          <figure class="image"><img src={path} alt="Unsplash" /></figure>
        </div>
        <div class="card-footer">
          <div class="card-footer-item">
            <button class="button">Set as wallpaper</button>
          </div>
          <div class="card-footer-item">
            <button class="button">Delete</button>
          </div>
        </div>
      </div>
    {/each}
  </section>
</section>
