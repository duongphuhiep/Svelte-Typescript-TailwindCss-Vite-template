<script lang="ts">
  import { _, locale, locales, isLoading } from "svelte-i18n";
  import Nav3Stage from "./exo/Nav3Stage.svelte";
</script>

{#if $isLoading}
  Loading language, please wait..
{:else}
  <Nav3Stage>
    <section>
      <select bind:value={$locale}>
        {#each $locales as locale}
          <option value={locale}>{locale}</option>
        {/each}
      </select>
      <p class="mb-2 text-lg">{$_("home")}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates
        id eum cupiditate quas recusandae doloribus eveniet ipsa, in et ea
        fugiat. Ex, impedit quae quod delectus quaerat labore recusandae?
      </p>
    </section>
  </Nav3Stage>
{/if}
