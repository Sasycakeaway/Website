<script>
    import {initpage,biscotti} from '../../../static/js/pasticceria.js'
    initpage()
  </script>
  
  <svelte:head>
    <title>Home</title>
    <link rel="stylesheet" href="/css/why.css" />
  </svelte:head>
  <h1>&nbsp;</h1>
  <h1 class="tit">Canestrelli</h1>
  <h1>&nbsp;</h1>
  <div class="" align="center">
    <div class="uk-card uk-card-default" id="card">
      <hr />
      <img src="/images/Canestrelli.jpg" alt="" class="imgcenter" />
      <div>
        <div class="uk-card-body">
          <p class="det">
            La storia di questi dolci secchi alle mandorle è antichissima: già i soldati romani mangiavano una specie di pane dolce, aromatizzato all’anice o al finocchio cotto al forno, tagliato in maniera obliqua a metà cottura e rimesso in forno a biscottare (cioè a cuocere due volte per mantenere una conservazione più lunga). Così oggi possiamo gustare una vera e propria delizia da annegare nel Vin Santo.
          </p>
        </div>
      </div>
    </div>
  
    <h1>&nbsp;</h1>
    <button class="uk-button uk-button-primary carbut" id="Canestrelli" on:click={(event) => biscotti(event)}>Aggiungi al carrello</button>
    <h1>&nbsp;</h1>
    <div class="testo">

  </div>
  <h1>&nbsp;</h1>
  </div>
  
  <style>
    .uk-card {
      width: 80%;
    }
    .imgcenter{
      width: 320px;
    }
  </style>
  