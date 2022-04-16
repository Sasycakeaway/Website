<script>
  import { initpage, biscotti } from "../../../static/js/pasticceria.js";
  initpage();
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Diamantini al cacao</h1>
<h1>&nbsp;</h1>
<div class="divv" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/Diamantini.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det" style="color:black;">
          Se è vero che un diamante è per sempre, queste delizie sapranno
          conquistare il tuo cuore. Non sarà proprio come regalarne uno da 18
          carati, ma di sicuro farai felici i tuoi ospiti con una cascata di
          deliziose dolcezze. Cacao selezionato, burro e zucchero grezzo di
          canna rendono questo frollino irresistibile.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <button
    class="uk-button uk-button-primary carbut"
    id="Diamantini"
    on:click={(event) => biscotti(event)}>Aggiungi al carrello</button
  >
  <h1>&nbsp;</h1>
  <!-- <p class="tit" style="color:rgb(195, 0, 255)">"Preparare dolci è molto più che saper eseguire ricette: è un vero e proprio gesto d’amore"</p> -->
</div>
