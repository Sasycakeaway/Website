<script>
  import { initpage, biscotti } from "../../static/js/pasticceria";
  initpage();
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<h1 class="tit">Macarons</h1>
<h1>&nbsp;</h1>
<div class="" align="center">
  <div class="uk-card uk-card-default" id="card">
    <br />
    <img class="imgcenter" src="/images/Macarons.jpg" alt="" />
    <div>
      <div class="uk-card-body">
        <p class="det">
          In origine macaron era il nome attribuito a un dolcetto alla mandorla
          formato da un solo dischetto senza ganache. E pare siano un'
          invenzione tutta italiana. Sarebbe stata Caterina de' Medici, sposa di
          Enrico II, a portarli in Francia nel 1533. Il macaron si presentava in
          tutto simile ad un amaretto. Ma poichè i francesi facevano fatica a
          pronunciare il termine amaretto, ben presto per tutti fu il Macaron (i
          francesi chiamavano noi italiani "Macaronì" con grande simpatia). Nel
          sapore e nella forma ecco rivelata la stretta parentela tra l’italiano
          amaretto e il francese macaron. Ma per come li conosciamo oggi, tutti
          colorati e con la ganache in mezzo, il merito è tutto francese. Sono
          una vera delizia per gli occhi e soprattutto per il palato.
        </p>
      </div>
    </div>
  </div>

  <h1>&nbsp;</h1>
  <button
    class="uk-button uk-button-primary carbut"
    id="Macarons"
    on:click={(event) => biscotti(event)}>Aggiungi al carrello</button
  >
  <h1>&nbsp;</h1>
  <div class="testo">
    <p class="tit" style="color:rgb(195, 0, 255)">
      "Il vero segreto per ottenere un ottimo macaron è fare in modo che non si
      riconosca il confine tra la farcitura e il guscio."
    </p>
  </div>
</div>

<style>
  .uk-card {
    width: 80%;
  }
  .imgcenter {
    width: 400px;
  }
</style>
