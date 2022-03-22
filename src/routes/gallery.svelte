<script>
  import Gallery from '/static/components/gallery.svelte'
  import item from '/static/images/slide/list.json'
  import { dialogs } from "svelte-dialogs";
  function open(e) {
		window.open(e.detail.src)
	}

</script>
<svelte:head>
<link href="/dist/css/lightbox.css" rel="stylesheet" />
<script src="/dist/js/lightbox.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.js"></script>
</svelte:head>

<!--<Gallery on:click={open}>
<img src={"/images/slide/" + image } />
</Gallery>-->
<Gallery on:click={(event) => dialogs.alert('<img src=' + event.detail.src +  ' alt="Placeholder Image" />')}>
{#each item as image}
          <img src={"/images/slide/" + image }  alt="" />  
 

{/each}
</Gallery>
<style>

</style>