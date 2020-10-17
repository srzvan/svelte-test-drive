<script>
  let keywords = []

  function handleSubmit() {
    console.log("You've just submitted the keywords form 🐱‍🏍!")
  }
</script>

<style>
  .sidemenu {
    grid-column: 2 / span 1;
  }
</style>

<aside class="sidemenu">
  <ul class="sidemenu-items">
    <p class="menu-label">Get wallpapers</p>
    <li class="menu-item"><button class="button">Random</button></li>
    <li class="menu-item"><button class="button">Keyword based</button></li>
    <p class="menu-label">Keywords</p>
    <li class="menu-item">
      <form on:submit|preventDefault={handleSubmit} />
      <div class="field"><input type="text" placeholder="Keyword" /></div>
      <div class="field">
        <button class="button" type="submit">Add keyword</button>
      </div>
    </li>

    {#each keywords as keyword}
      <li class="menu-item"><span class="keyword">{keyword}</span></li>
    {/each}

    <p class="menu-label">Danger zone</p>
    <li class="menu-item">
      <button class="button button--danger">Delete all wallpapers</button>
    </li>
  </ul>
</aside>
