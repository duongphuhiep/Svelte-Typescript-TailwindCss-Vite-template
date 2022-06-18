<script lang="ts">
  interface MenuContent {
    icon: string;
    text: string;
  }
  const menuContent: MenuContent[] = [
    { icon: "fa fa-gauge", text: "Dashboard" },
    { icon: "fa fa-user", text: "User" },
    { icon: "fa fa-message", text: "Message" },
    { icon: "fa fa-chart-line", text: "Analytics" },
    { icon: "fa fa-folder-open", text: "File manager" },
    { icon: "fa fa-cart-shopping", text: "Order" },
    { icon: "fa fa-heart", text: "Saved" },
    { icon: "fa fa-gear", text: "Setting" },
  ];
</script>

<div class="flex flex-col md:flex-row md:absolute md:top-0 md:bottom-0">
  <nav class="flex flex-col px-6 text-blue-200 bg-blue-600">
    <button class="text-left">
      <div class="md:hidden">
        <span class="fa-solid fa-bars" />
      </div>
      <div class="hidden md:block">
        <span class="fa-solid fa-arrow-left" />
      </div>
    </button>
    <div class="md:hidden lg:block">
      {#each menuContent as menuItem}
        <div class="menuitem">
          <span class={menuItem.icon} />
          <span class="ml-3">{menuItem.text}</span>
        </div>
      {/each}
    </div>
    <div class="hidden md:block lg:hidden">
      {#each menuContent as menuItem}
        <div class="menuitem tooltip">
          <span class={menuItem.icon} />
          <span class="ml-6 tooltiptext">{menuItem.text}</span>
        </div>
      {/each}
    </div>
  </nav>

  <slot></slot>
</div>

<style lang="scss">
  .menuitem {
    @apply whitespace-nowrap my-6;
    &:hover {
      @apply text-white cursor-pointer;
    }
  }
  .tooltip {
    @apply relative;
    $arrow_size: 6px;

    .tooltiptext {
      @apply bg-blue-600 text-white p-3 absolute -top-1/2 ml-9 z-0
        drop-shadow-md
        invisible;
      transition: opacity 1s;

      //left arrow
      &:after {
        @apply top-1/2 right-full absolute border-transparent;
        content: " ";
        margin-top: -$arrow_size;
        border-width: $arrow_size;
        @apply border-r-blue-600;
      }
    }

    &:hover .tooltiptext {
      @apply visible opacity-90;
    }
  }
</style>
