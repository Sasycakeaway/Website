<script>
  //   import {onMount} from 'svelte';
  //   onMount(() => {
  //     if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {

  // }else{
  //   document.getElementById("card").style.width="60%"
  // }
  // 	});
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Cheesecake</h1>
<h1>&nbsp;</h1>
<div class="divv" align="center">
  <div class="uk-card uk-card-default" id="card">
    <hr />
    <img src="/images/cheesecake.jpg" alt="" class="imgcenter" />
    <div>
      <div class="uk-card-body">
        <p class="det" style="color:black;">
          Nel 1872 un lattaio americano, mr J. L. Kraft, nel tentativo di
          ricreare il formaggio francese Neufchatel, incidentalmente inventò il
          Philadelphia. Questo ingrediente è alla base della cheescake, anche
          nella versione newyorkese cotta e guarnita di frutta e salse.
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
