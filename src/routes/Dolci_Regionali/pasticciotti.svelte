<script>
  import { initpage, biscotti } from "../../../static/js/pasticceria.js";
  initpage();
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Pasticciotti Leccesi</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/Pasticciotti Leccesi.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det" style="color:black;">
          Da oltre duecento anni Salento fa rima con pasticciotto, dolce in
          pasta frolla farcito di crema pasticcera e cotto in forno che sarebbe
          nato a Galatina nel 1745. Ad inventare la ricetta del pasticciotto
          pare sia stato Andrea Ascalone che, mescolando impasto e crema
          avanzati tentò di fare una piccola torta. Il risultato però fu un vero
          pasticcio. Ascalone lo avrebbe quindi subito regalato ancora caldo ad
          un passante il quale, invece, non smise più di fare complimenti. Se
          non smetterai di farmi i complimenti, sarò stata all'altezza di
          Ascalone anche io.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <button
    class="uk-button uk-button-primary carbut"
    id="Pasticciotti Leccesi"
    on:click={(event) => biscotti(event)}>Aggiungi al carrello</button
  >
  <h1>&nbsp;</h1>
  <!-- <p class="tit" style="color:rgb(195, 0, 255)">"Preparare dolci è molto più che saper eseguire ricette: è un vero e proprio gesto d’amore"</p> -->
</div>

<style>
  .uk-card {
    width: 80%;
  }
  .imgcenter {
    width: 350px;
  }
</style>
