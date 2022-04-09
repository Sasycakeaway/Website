<script>
  import {initpage,biscotti} from '../../../static/js/pasticceria.js'
  initpage()
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Cupcake</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/Cupcake.jpg"  alt="" class="imgcenter"> 
    <div>
      <div class="uk-card-body">
        <p class="det" style="color:black;">
          Questo dolcetto usato per accompagnare il The delle cinque, è
          diventato una vera icona culinaria USA. Cucinato fin dai primi dell'
          800 in tazzine che ne davano la forma, in tempi moderni i pirottini
          han sostituito le tazzine e i cupcake hanno acquisito una glassatura
          colorata e attraente che li rende uno diverso dall'altro. Buon
          Appetito!
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <button class="uk-button uk-button-primary carbut" id="Cupcake" on:click={(event) => biscotti(event)}>Aggiungi al carrello</button>
  <h1>&nbsp;</h1>
  <!-- <p class="tit" style="color:rgb(195, 0, 255)">"Preparare dolci è molto più che saper eseguire ricette: è un vero e proprio gesto d’amore"</p> -->
</div>

<style>
  .uk-card {
    width: 80%;
  }
  .imgcenter{
    width: 400px;
  }
</style>
