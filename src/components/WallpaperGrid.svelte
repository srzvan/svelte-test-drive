<script>
  const imgPaths = [
    './luis-quintero-TYlR9NGFrPs-unsplash.jpg',
    './pawel-czerwinski-hNrd99q5peI-unsplash.jpg',
  ]
</script>

<style>
  .image {
    max-width: 512px;
    max-height: 512px;
  }
</style>

<section class="section">
  <div class="container has-text-centered">
    <h1 class="title has-text-white-ter">Your wallpapers</h1>
  </div>
  <section class="section">
    <div class="container">
      <div class="tile is-ancestor">
        {#each imgPaths as path}
          <div class="tile is-parent is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src={path} alt="Unsplash picture" />
                </figure>
              </div>
              <footer class="card-footer">
                <a class="card-footer-item">Set as wallpaper</a>
                <a class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</section>
