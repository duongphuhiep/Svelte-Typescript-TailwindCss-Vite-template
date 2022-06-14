<script lang="ts">
  import transat from "../assets/transat.jpg";
  let menuItems = ["Home", "News", "Tutorials", "Videos"];
  let selected = "Tutorials";
</script>

<div class="container mx-auto">
  <header
    class="sticky flex items-center justify-between py-4 space-x-4 bg-indigo-500 z-0"
  >
    <div>
      <i class="text-indigo-300 fas fa-wind fa-2x" />
      <span class="text-3xl font-semibold text-indigo-300 drop-shadow-xl">
        Tailwind
      </span>
    </div>
    <ul class="flex mr-10 overflow-x-hidden">
      {#each menuItems as menuItem}
        <li
          id={menuItem}
          class="p-1 mr-6"
          class:border-b-2={selected == menuItem}
          class:border-indigo-300={selected == menuItem}
        >
          <a class="text-indigo-200 cursor-default" href="/#">{menuItem}</a>
        </li>
      {/each}
    </ul>
  </header>

  <section class="box-decoration-slice">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At cupiditate aspernatur, doloribus ad, corrupti ab earum a saepe corporis illum, obcaecati veritatis repellat tempora molestias. Fugiat soluta dolores voluptatibus perspiciatis.  
    <div class="w-9 h-9 bg-orange-500 m-10"></div>
    <div class="w-9 h-9 bg-orange-500 m-10"></div>
  </section>
  
  <section>
    <div
      id="alert"
      class="flex flex-col p-3 bg-blue-100 border border-l-8 border-blue-500 md:m-6"
    >
      <div class="font-bold text-blue-800">info</div>
      <div class="leading-tight text-blue-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe
        beatae inventore, veniam ab officia quia.
      </div>
    </div>
  </section>

  <section>
    <div class="m-6 alert alert-info">
      <div class="alert-title alert-info-title">Info</div>
      <div class="alert-content alert-info-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
    <div class="w-1/3 m-6 alert alert-warning">
      <div class="alert-title alert-warning-title">Warning</div>
      <div class="alert-content alert-warning-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  </section>

  <section>
    <div class="columns-2">
      <p>1 Well, let me tell you something, ...</p>
      <p class="break-after-all">2 Sure, go ahead, laugh...</p>
      <p>3 Maybe we can live without...</p>
      <p>4 Look. If you think this is...</p>
    </div>
  </section>

  <section>
    <div class="flex flex-col overflow-hidden rounded shadow-md md:w-80 md:mx-auto">
      <img alt="transat" src={transat} />
      <div class="p-2 text-gray-700">
        <h1 class="text-lg font-bold leading-snug tracking-wide">Do cillum adipisicing Do cillum adipisicing Do cillum adipisicing</h1>
        <p class="pt-2 mb-2 text-xs leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro expedita
            quibusdam fugiat quia? Ad consectetur dolores nam. Accusamus mollitia
        </p>
        <div class="flex flex-row pt-3 text-center border-t divide-x-2">
            <div class="flex flex-col flex-1 p-3">
                <i class="fas fa-wind fa-2x" />
                <span class="pt-2 text-sm">Serving</span>
            </div>
            <div class="flex flex-col flex-1 p-3">
                <i class="fas fa-wind fa-2x" />
                <span class="pt-2 text-sm">Serving</span>
            </div>
            <div class="flex flex-col flex-1 p-3">
                <i class="fas fa-wind fa-2x" />
                <span class="pt-2 text-sm">Serving</span>
            </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .alert {
    @apply flex flex-col p-4 pt-2 border-l-8;
  }

  .alert-title {
    @apply font-semibold italic text-lg;
  }

  .alert-content {
    @apply leading-tight text-sm;
  }

  .alert-info {
    @apply bg-blue-100 border-blue-500;
  }

  .alert-info-title {
    @apply text-blue-500;
  }

  .alert-info-content {
    @apply text-blue-800;
  }

  .alert-warning {
    @apply bg-red-100 border-red-500;
  }

  .alert-warning-title {
    @apply text-red-500;
  }

  .alert-warning-content {
    @apply text-red-800;
  }
</style>
