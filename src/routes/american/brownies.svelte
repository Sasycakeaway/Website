<script>
  import { initpage, pezzi } from "../../lib/js/pasticceria";
  initpage();
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Brownies</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/Brownie.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det" style="color:black;">
          Sono ricchi e golosi quadratini di cioccolato, una via di mezzo tra un
          biscotto e una torta dal cuore morbido. Devono il loro nome al colore
          scuro e si differenziano dai loro "fratelli", i blondie, dove non
          viene usato cacao ma solo cioccolato bianco.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <button
    class="uk-button uk-button-primary carbut"
    id="Brownie"
    on:click={(event) => pezzi(event)}>Aggiungi al carrello</button
  >
  <h1>&nbsp;</h1>
  <!-- <p class="tit" style="color:rgb(195, 0, 255)">"Preparare dolci è molto più che saper eseguire ricette: è un vero e proprio gesto d’amore"</p> -->
</div>

<style>
  .uk-card {
    width: 80%;
  }
  .imgcenter {
    width: 400px;
  }
</style>
