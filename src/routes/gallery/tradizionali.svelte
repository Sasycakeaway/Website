<script>
    import item from "/static/images/slide/Dolci_Tradizionali/list.json";
    import Gallery from "/static/components/gallery.svelte";
    import { dialogs } from "svelte-dialogs";

</script>
<h1>&nbsp;</h1>
<Gallery
  on:click={(event) =>
    dialogs.alert(
      "<img src=" + event.detail.src + ' alt="Placeholder Image" width="512px" height="600px"/>'
    )}
>
{#each item as prod}
    <img src={"https://sasyimg.imgix.net/slide/Dolci_Tradizionali/" + prod}>
{/each}
</Gallery>
<h1>&nbsp;</h1>