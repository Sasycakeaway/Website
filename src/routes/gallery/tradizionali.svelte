<script>
  import item from "$lib/images/slide/Dolci_Tradizionali/list.json";
  import Gallery from "$lib/components/gallery.svelte";
  import { dialogs } from "svelte-dialogs";
</script>

<h1>&nbsp;</h1>
<div class="gallo">
  <Gallery
    on:click={(event) =>
      dialogs.alert(
        "<img src=" +
          event.detail.src +
          ' alt="Placeholder Image" width="512px" height="600px"/>'
      )}
  >
    {#each item as prod}
    {#if prod != "list.json"}
      <img src={"/images/slide/Dolci_Tradizionali/" + prod} />
      {/if}
    {/each}
  </Gallery>
  <h1>&nbsp;</h1>
</div>

<style>
  .gallo {
    margin-left: 50px;
    margin-right: 50px;
  }
</style>
