<script>
  import Gallery from '/static/components/gallery.svelte'
  import item from '/static/images/slide/list.json'
  function open(e) {
		window.open(e.detail.src)
	}

</script>
<svelte:head>
<link href="/dist/css/lightbox.css" rel="stylesheet" />
<script src="/dist/js/lightbox.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.js"></script>
<script>
UIkit.lightbox(element).show(0);

</script>
</svelte:head>

<!--<Gallery on:click={open}>
<img src={"/images/slide/" + image } />
</Gallery>-->

<Gallery>
{#each item as image}

          <img src={"/images/slide/" + image }  alt="" >  
 
	
{/each}
</Gallery>

<style>

</style>