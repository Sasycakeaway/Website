<script>
  import { onMount } from "svelte";
  import {pusha,init} from '/static/js/cart.js';
import { Row, Col, Grid, Item } from 'svelte-layouts';
import { dialogs } from "svelte-dialogs";
  onMount(() => {
    init();
    if (
      /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
    ) {
    } else {
      document.getElementById("card").style.width = "60%";
    }
  });

  function biscotti(e) {
    dialogs.prompt("Quanti sacchetti da 250G vuoi?").then(output=>
        pusha(e.path[0].id, output[0])
    )
    
    
  }

</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Bignole e Chantilly artigianali con creme a scelta</h1>
<h1>&nbsp;</h1>
<div align="center">
  <div class="uk-card uk-card-default " id="card">
    <br />
    <img class="imgcenter" src="/images/Bignole.jpg" alt="" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          La bignola è uno dei dolci tipici della pasticceria torinese e
          piemontese, diffusi a corte durante il regno sabaudo. Questi piccoli
          gusci di pasta rigonfia, dalla forma tondeggiante e ripieni di c​rema
          pasticcera sono un grande classico delle merende torinesi, dei pranzi
          della domenica, delle feste e delle ricorrenze. Io le propongo ripiene
          di creme a scelta, dalla classica crema pasticcera, crema zabaglione o
          crema alla nocciola, alle più moderne creme al pistacchio, al caffè o
          al cioccolato. Con glassa o senza, sono un modo gustoso per
          festeggiare insieme!
        </p>
      </div>
    </div>
  </div>
  <button class="uk-button uk-button-primary carbut" id="Bignole" on:click={(event) => biscotti(event)}>Aggiungi al carrello</button>
  <h1>&nbsp;</h1>
  <p class="tit" style="color:rgb(195, 0, 255)">
    "Preparare dolci è molto più che saper eseguire ricette: è un vero e proprio
    gesto d’amore"
  </p>
</div>

<style>
  .uk-card {
    width: 80%;
  }
</style>
