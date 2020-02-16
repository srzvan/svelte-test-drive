<script>
  let keywords = []

  function handleSubmit() {
    console.log("You've just submitted the keywords form 🐱‍🏍!")
  }
</script>

<style type="scss">
  .menu {
    padding-right: 0.75em;
    .menu-item > a {
      color: inherit;
      border-bottom: 1px solid transparent;

      &.is-tab:not(.has-text-danger):hover {
        color: hsl(48, 100%, 67%);
        border-color: currentColor;
      }

      &.is-tab.has-text-danger:hover {
        border-color: currentColor;
      }
    }
  }

  .input {
    border-style: dashed;
    width: 50%;
    color: white;
  }
</style>

<aside class="menu">
  <ul class="menu-items has-text-white-ter">
    <p class="menu-label">Get wallpapers</p>
    <li class="menu-item">
      <a class="is-tab">Random</a>
    </li>
    <li class="menu-item">
      <a class="is-tab">Keyword based</a>
    </li>
    <p class="menu-label">Keywords</p>
    <li class="menu-item">
      <form on:submit|preventDefault={handleSubmit} />
      <div class="field">
        <div class="control">
          <input
            class="input is-small has-background-dark"
            type="text"
            placeholder="Keyword" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button" type="submit">Add keyword</button>
        </div>
      </div>
    </li>

    {#each keywords as keyword}
      <li class="menu-item">
        <a class="is-tab">{keyword}</a>
      </li>
    {/each}

    <p class="menu-label">Danger zone</p>
    <li class="menu-item">
      <a class="is-tab has-text-danger">Delete all wallpapers</a>
    </li>
  </ul>
</aside>
