<div class="flex flex-col">
  <!-- lg -->
  <!-- <nav class="flex flex-col px-6 text-blue-200 bg-blue-600 md:hidden">
    <button class="w-5"><span class="fa-solid fa-arrow-left" /></button>
    {#each [1, 2, 3, 4, 5] as i}
      <div class="whitespace-nowrap hover:text-white hover:cursor-pointer">
        <span class="fa fa-address-book" /><span class="ml-3">Item {i}</span>
      </div>
    {/each}
  </nav> -->

  <!-- md -->
  <!--  <nav class="flex flex-col px-6 text-blue-200 bg-blue-600">
    <button class="w-5"><span class="fa-solid fa-arrow-left" /></button>
    {#each [1, 2, 3, 4, 5] as i}
      <div
        class="tooltip whitespace-nowrap hover:text-white hover:cursor-pointer"
      >
        <span class="fa fa-address-book" /><span class="tooltiptext"
          >Item {i}</span
        >
      </div>
    {/each}
  </nav> -->

  <!-- sm -->
  <nav class="flex flex-col px-6 text-blue-200 bg-blue-600">
    <button class="w-5"><span class="fa-solid fa-bars"/></button>
    {#each [1, 2, 3, 4, 5] as i}
      <div class="whitespace-nowrap hover:text-white hover:cursor-pointer">
        <span class="fa fa-address-book" /><span class="ml-3">Item {i}</span>
      </div>
    {/each}
  </nav>

  <section class="px-6">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sit quaerat
    magnam laborum sint consequatur! Obcaecati optio blanditiis accusantium
    ipsum eum, cupiditate a accusamus repellat perferendis voluptatem culpa
    aliquam nobis?
  </section>
</div>

<style lang="scss">
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
