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
<h1 class="tit">Cookies</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/cookies.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          Croccanti e dorati all’esterno, morbidi all’interno, con gocce di
          cioccolato fondente. E’ difficile resistere ai “Chocolate Chips
          Cookies” americani. Crispy, chewy, delicious! Nelle varianti
          classiche, al doppio cioccolato o al caffè, sono una vera delizia per
          il palato.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <!-- <p class="tit" style="color:rgb(195, 0, 255)">"Preparare dolci è molto più che saper eseguire ricette: è un vero e proprio gesto d’amore"</p> -->
</div>

<style>
  .uk-card {
    width: 80%;
  }
</style>
