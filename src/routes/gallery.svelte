<script>
  import Gallery from "/static/components/gallery.svelte";
  import item from "/static/images/slide/list.json";
  import { dialogs } from "svelte-dialogs";
  function open(e) {
    window.open(e.detail.src);
  }
</script>


<!--<Gallery on:click={open}>
<img src={"/images/slide/" + image } />
</Gallery>-->
<Gallery
  on:click={(event) =>
    dialogs.alert(
      "<img src=" + event.detail.src + ' alt="Placeholder Image" />'
    )}
>
  {#each item as image}
    <img src={"https://sasyimg.imgix.net/slide/" + image} alt="" />
  {/each}
</Gallery>

<style>
</style>
