<script>
  import { initpage, pezzi } from "../../../static/js/pasticceria.js";
  initpage();
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Muffin</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/Muffin.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det" style="color:black;">
          In principio il muffin era un dolcetto mignon, così piccolo da poter
          essere mangiato in un solo boccone. Attraversando l'oceano sono
          cresciuti e hanno assunto la forma che tutti conoscono e si è diffusa
          a tal punto che tre stati ne hanno uno ufficiale: il Minnesota quello
          ai mirtilli, il Massachusetts al mais, New York alle mele. Noi a
          Torino lo amiamo con pepite di cioccolato.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <button
    class="uk-button uk-button-primary carbut"
    id="Muffin"
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
