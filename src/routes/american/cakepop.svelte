<style>
  .uk-card{
    width: 80%;
  }
</style>
<script>
  import {onMount} from 'svelte';
  onMount(() => {
    if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {

}else{
  document.getElementById("card").style.width="60%"
}
	});

</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Cakepop</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="https://sasyimg.imgix.net/cakepop.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          Avete mai pensato di mangiare una torta a forma di gelato o di lecca
          lecca? Allora non avete mai visto un cake pop. Dolcetto sfizioso e
          divertente glassato di cioccolato e decorato con perline, zuccherini,
          granelle, ghiaccia reale, semplicemente magnifico.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <!-- <p class="tit" style="color:rgb(195, 0, 255)">"Preparare dolci è molto più che saper eseguire ricette: è un vero e proprio gesto d’amore"</p> -->
</div>
