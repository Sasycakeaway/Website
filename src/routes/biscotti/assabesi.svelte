<script>
  import { initpage, biscotti } from "../../../static/js/pasticceria.js";
  initpage();
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Assabesi</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/Assabesi.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          Non ero a conoscenza di questo biscotto, e con curiosità mi sono
          cimentata nella sua realizzazione. Un altro successo, a detta di chi
          lo ha provato. Andando a spulciare qua e là ho scoperto che il dolcino
          prende nome dalla popolazione africana della città di Assab presente a
          Torino nel lontano 1884, durante l'Esposizione Generale Italiana.
          Vissero in un villaggio costruito in stile africano nel parco del
          Valentino ed ebbero un successo di pubblico travolgente, tanto che il
          nome assabese divenne presto sinonimo di “moretto” o africano. Il
          biscotto non ebbe subito la diffusione che avrebbe meritato, "battuto"
          sul tempo dai Krumiri di Casale Monferrato, che grazie anche ad una
          produzione industriale su larga scala, sono stati diffusi in tutta
          Italia. Gli Assabesi sono rimasti un prodotto artigianale e un po' di
          nicchia, insomma per veri intenditori.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <button
    class="uk-button uk-button-primary carbut"
    id="Assabesi"
    on:click={(event) => biscotti(event)}>Aggiungi al carrello</button
  >
  <h1>&nbsp;</h1>
  <div class="testo">
    <p class="tit" style="color:rgb(195, 0, 255)">
      "Gli Assabesi, un frollino dal nome esotico, dal cuore di panna e
      cioccolato."
    </p>
  </div>
  <h1>&nbsp;</h1>
</div>

<style>
  .uk-card {
    width: 80%;
  }
  .imgcenter {
    width: 512px;
  }
</style>
