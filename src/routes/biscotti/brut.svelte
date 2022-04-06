
<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Brüt ma bon</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="https://sasyimg.imgix.net/brut.jpeg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          Alla fine dell'800 a Borgomanero venne sfornato un dolce davvero
          brutto da vedere (brüt) ma buonissimo nel gusto (bon). Ecco nascere i
          brüt ma bon piemontesi, che al contrario di quelli lombardi e toscani,
          han solo la nocciola come ingrediente base, anziche la mandorla. La
          vita è proprio un po’ così, alle volte ti riserva qualche brutta
          sorpresa ma poi arriva il buono dei miei dolcetti, e la giornata
          assume tutto un altro sapore!
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <p class="tit" style="color:rgb(195, 0, 255)">
    "A chi non è mai capitato di se​ntirsi almeno una volta un brutto
    anatroccolo? Ma spesso l'apparenza inganna!"
  </p>
</div>
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