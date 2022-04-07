<style>
  .uk-card{
    width: 80%;
  }
</style>
<script>
  import {onMount} from 'svelte';
  onMount(() => {
    if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {

}else{
  document.getElementById("card").style.width="60%"
}
	});

</script>
<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Cream Tart</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/creamtart.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          E' un dolce moderno che si può personalizzare in base ai propri gusti.
          Adatta a tutte le occasioni e ad ogni età. Un doppio strato di frolla
          con creme a scelta, a forma di numero per un compleanno speciale, di
          cuore per il proprio innamorato, di fiore per la mamma, o
          semplicemente tonda o quadrata per qualsiasi occasione. Ricopriamo il
          tutto di meringhette, dolcetti, ovetti, frutta fresca o fiori eduli
          e... il gioco è fatto. La fantasia non ha limiti.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <p class="tit" style="color:rgb(195, 0, 255)">
    "Una torta tanto semplice quanto d'effetto. La cream tart ti conquista per
    la sua originalità."
  </p>
</div>
