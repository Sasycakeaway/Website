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
<h1 class="tit">Red Velvet Cake</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/redvelvet.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          Tradotto in italiano torta di velluto rosso. Questa torta è realizzata
          a strati di morbido pan di spagna rosso e guarnita con crema alla
          vaniglia, al burro, frosting al formaggio o panna. Un candido vestito
          che nasconde il rosso focoso della passione.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <!-- <p class="tit" style="color:rgb(195, 0, 255)">"Preparare dolci è molto più che saper eseguire ricette: è un vero e proprio gesto d’amore"</p> -->
</div>
