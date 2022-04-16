<script>
  import { initpage, biscotti } from "../../../static/js/pasticceria.js";
  initpage();
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Bonet piemontese</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/Bonet piemontese.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det" style="color:black;">
          Il tipico budino della tradizione piemontese fatto con uova, zucchero,
          cacao, latte, liquore (nella ricetta originale veniva usato il fernet)
          e amaretti secchi. Il bonet, il cui nome significa “cappello”, era
          appunto l’ultima pietanza che veniva alla fine, come il cappello,
          uscendo da una casa o da un ristorante, era l’ultima cosa ad essere
          indossata. Insomma un bonet a fine pranzo… quando si dice chiudere in
          bellezza!.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <button
    class="uk-button uk-button-primary carbut"
    id="Bonet piemontese"
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
    width: 400px;
  }
</style>
