<script>
  import { initpage, biscotti } from "../../lib/js/pasticceria";
  initpage();
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Biscotti di frolla con gli aromi dell' orto</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/Krumiri.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          Nati nel 1878, quando l’Italia era ormai unita, sono ispirati ai
          famosi mustacchi di re Vittorio Emanuele II e nel tempo sono diventati
          sempre più noti e apprezzati. Dolce tipico di Casale Monferrato,
          inventati da Domenico Rossi sono un prodotto d'eccellenza piemontese.
          Mi sono cimentata anche io in questa ricetta golosa. Il risultato è
          interessante.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <button
    class="uk-button uk-button-primary carbut"
    id="Krumiri"
    on:click={(event) => biscotti(event)}>Aggiungi al carrello</button
  >
  <h1>&nbsp;</h1>
  <div class="testo" />
  <h1>&nbsp;</h1>
</div>

<style>
  .uk-card {
    width: 80%;
  }
  .imgcenter {
    width: 500px;
  }
</style>
