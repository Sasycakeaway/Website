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
<h1 class="tit">Torta meringata</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default">
    <hr />
    <img src="/images/meringata.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          La torta meringata è un ottimo dessert semifreddo. Scenografico e
          delizioso. Croccante ma al tempo stesso capace di sciogliersi in
          bocca, saprà incantare ogni palato nelle sue varianti con gocce di
          cioccolato, marron glacès, o frutta di bosco. Personalmente adoro
          quella alle fragole: candide e leggere nuvole di meringa si sposano
          con il rosso acceso delle fragole primaverili. Un dolce elegante e
          raffinato, quasi fiabesco, perfetto per ogni occasione.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <p class="tit" style="color:rgb(195, 0, 255)">
    "Chi ha detto che un matrimonio a tre non possa funzionare? Panna, fragola e
    meringhe si sposano benissimo, e senza alcuna gelosia!"
  </p>
</div>
