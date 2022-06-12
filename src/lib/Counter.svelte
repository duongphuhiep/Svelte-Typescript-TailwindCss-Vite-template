<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment} class="bg-green-500 border-solid p-3 shadow-md hover:bg-green-700 text-white focus:ring-2 focus:outline-none focus:ring-opacity-30">
  Clicks: {count}
</button>
