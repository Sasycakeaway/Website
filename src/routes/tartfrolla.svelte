

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Tartellette di frolla con crema e frutta</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <br />
    <img class="imgcenter" src="https://sasyimg.imgix.net/frollacrema.jpg" alt="" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          Freschi, gustosi, coloratissimi e di grande effetto scenico, questi
          dolcetti di origine francese si sono imposti anche nella pasticceria
          tradizionale nostrana. Per realizzare questi piccoli bocconcini
          deliziosi serve un cestino di frolla friabile, l’immancabile crema
          pasticcera e tanta creatività, per inventare i migliori accostamenti
          tra la frutta e per curare la presentazione della guarnizione. Un
          tripudio di colori e di sapori che sicuramente vi permetteranno di
          fare un ottima figura con tutti gli ospiti della casa.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <p class="tit" style="color:rgb(195, 0, 255)">
    "E qui si scatena la mia fantasia negli accostamenti tra creme e frutta per
    creare delle piccole opere d'arte"
  </p>
</div>
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