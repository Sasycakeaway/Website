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
<h1 class="tit">Paste di Meliga - Paste 'd melia</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default " id="card">
    <br />
    <img src="/images/meliga.jpeg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          Secondi gli storici le origini di questo biscotto sono antichissime,
          anche se difficilmente databili, e risalenti alla cultura contadina
          della zona di Mondovì in provincia di Cuneo. I fornai, per far fronte
          all’aumento eccessivo del costo della farina, iniziarono a mescolarla
          con lo scarto della farina usata per fare la polenta. Nascono così dei
          frollini unici che sono prodotti nel mio laboratorio con Farina
          Fioretto ricavata dalle spighe delle migliori melie (mais) del nostro
          territorio per dar loro un sapore rotondo, genuino e sano.
          Semplicemente irresistibili!
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <p class="tit" style="color:rgb(195, 0, 255)">
    "Inzuppati in un buon bicchiere di vino passito o di moscato, difficilmente
    riuscirai più a farne a meno!"
  </p>
</div>

<style>
  .uk-card {
    width: 80%;
  }
</style>
