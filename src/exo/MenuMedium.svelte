<script>
  let menuIndexes = [1, 2, 3, 4];
</script>

<div class="flex flex-col md:flex-row">
  <nav class="flex flex-col px-6 text-blue-200 bg-blue-600">
    <button class="text-left">
      <div class="md:hidden">
        <span class="fa-solid fa-bars" />
      </div>
      <div class="hidden md:block">
        <span class="fa-solid fa-arrow-left" />
      </div>
    </button>
    <div class="md:hidden">
      {#each menuIndexes as i}
        <div class="menuitem">
          <span class="fa fa-address-book" /><span class="ml-3">Item {i}</span>
        </div>
      {/each}
    </div>
    <div class="hidden md:block lg:hidden">
      {#each menuIndexes as i}
        <div class="tooltip menuitem">
          <span class="fa fa-address-book" /><span class="tooltiptext"
            >Item {i}</span
          >
        </div>
      {/each}
    </div>
    <div class="hidden lg:block">
      {#each menuIndexes as i}
        <div class="menuitem">
          <span class="fa fa-address-book" /><span class="ml-3">Item {i}</span>
        </div>
      {/each}
    </div>
  </nav>

  <section class="px-6">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sit quaerat
    magnam laborum sint consequatur! Obcaecati optio blanditiis accusantium
    ipsum eum, cupiditate a accusamus repellat perferendis voluptatem culpa
    aliquam nobis?
  </section>
</div>

<style lang="scss">
  .menuitem {
    @apply whitespace-nowrap;
    &:hover {
      @apply text-white cursor-pointer;
    }
  }
  .tooltip {
    @apply relative;
    $arrow_size: 6px;

    .tooltiptext {
      @apply bg-blue-600 text-white p-3 absolute -top-1/2 ml-9 z-0 
        drop-shadow-md opacity-0
        invisible;
      transition: opacity 200ms;

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
      @apply visible opacity-100;
    }
  }
</style>
