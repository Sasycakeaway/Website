<script>
  import { onMount } from "svelte";
  onMount(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
    ) {
    } else {
      document.getElementById("card").style.width = "60%";
    }
  });
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Crostata creativa</h1>
<h1>&nbsp;</h1>
<div class="s" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/creative.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          Avete mai pensato ad una torta colorata come una torta di cake design
          ma senza quella dolcezza alle volte eccessiva della pasta di zucchero?
          Con le crostate creative la frolla prende vita e diventa qualcosa di
          più: un contenitore per le più svariate creme, frutti e decorazioni
          colorate per una torta unica. Originalità e fantasia porteranno ad un
          risultato che lascerà a bocca aperta voi e i vostri ospiti: il
          figurone è assicurato!
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <p class="tit" style="color:rgb(195, 0, 255)">
    "Con le crostate creative libero la fantasia senza rinunciare ai sapori
    tradizionali di frolla, frutti o creme. Per chi non ama la sugar paste è una
    ottima soluzione!"
  </p>
</div>

<style>
  .uk-card {
    width: 80%;
  }
</style>
