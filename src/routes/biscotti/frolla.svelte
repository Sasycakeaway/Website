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
<h1 class="tit">Biscotti di frolla con gli aromi dell' orto</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/frolla.jpeg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          Con curiosità mi sono messa a sperimentare con i gusti dell'orto dopo
          una masterclass tenuta dal maestro Mario Bacilieri. Rosamarino, timo,
          basilico, salvia possono esaltare i sapori tradizionali trasformando
          un frollino tradizionale in un biscotto completamente nuovo. Un
          trionfo di gusto. Il mio preferito? Timo e Limone con una spruzzata di
          cristalli di zucchero. Travolgente!
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <p class="tit" style="color:rgb(195, 0, 255)">
    "Timo, limone con una spruzzata di cristalli di zucchero, un gusto
    travolgente!"
  </p>
</div>

<style>
  .uk-card {
    width: 80%;
  }
</style>
