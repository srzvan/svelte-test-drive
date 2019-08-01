<style type="scss">
  .menu-item,
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
</style>

<aside class="menu">
  <p class="menu-label">Actions</p>
  <ul class="menu-items has-text-white-ter">
    <li class="menu-item">
      <a class="is-tab">Download new wallpapers</a>
    </li>
    <li class="menu-item">
      <a class="is-tab">Tags of the day</a>
    </li>
    <li class="menu-item">
      <a class="is-tab has-text-danger">Delete all wallpapers</a>
    </li>
  </ul>
</aside>
