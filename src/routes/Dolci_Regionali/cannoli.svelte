<script>
    import {initpage,biscotti} from '../../../static/js/pasticceria.js'
    initpage()
  </script>
  
  <svelte:head>
    <title>Home</title>
    <link rel="stylesheet" href="/css/why.css" />
  </svelte:head>
  <h1>&nbsp;</h1>
  <h1 class="tit">Cannoli Siciliani</h1>
  <h1>&nbsp;</h1>
  <div class="" align="center">
    <div class="uk-card uk-card-default" id="card">
      <hr />
      <img src="/images/Cannoli Siciliani.jpg"  alt="" class="imgcenter"> 
      <div>
        <div class="uk-card-body">
          <p class="det" style="color:black;">
            Principe indiscusso della pasticceria siciliana, il cannolo è
            entrato a pieno titolo nella lista dei prodotti agroalimentari
            tradizionali italiani del Ministero delle politiche agricole
            alimentari e forestali. L’ipotesi sull’origine del sublime
            cilindro di ricotta sarebbe da attribuirisi alle abili mani delle
            suore di clausura di un convento nei pressi di Caltanissetta che
            per il carnevale avevano sfornato un dolce sfarzoso e sublime.

            </p>
        </div>
      </div>
    </div>
  
    <h1>&nbsp;</h1>
    <button class="uk-button uk-button-primary carbut" id="Cannoli Siciliani" on:click={(event) => biscotti(event)}>Aggiungi al carrello</button>
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
  