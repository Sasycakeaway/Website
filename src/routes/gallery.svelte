<script>
  import Gallery from "/static/components/gallery.svelte";
  import { dialogs } from "svelte-dialogs";
  function open(e) {
    window.open(e.detail.src);
  }
</script>
<svelte:head>
  <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
</svelte:head>
<link rel="stylesheet" href="/css/card.css" />
<h1>&nbsp;</h1>
<div class="divvone">
<div class="row">
  <div class="col">
    <a href="/gallery/biscotti/">
    <div>
      <div>
        
        <div
          class="uk-card uk-card-default but cardc"
          uk-height-viewport="expand: true;min-height:500"
        >
          <div class="uk-card-media-top" align="center">
         <hr>
            <h3 class=" testow uk-card-title ">Biscotti</h3>
            <hr>
            <img src="https://sasyimg.imgix.net/slide/Biscotti/Sasy_Macaron1.jpeg" width="384"/>
          </div>
          <div class="uk-card-body" align="center">
            
          </div>
        </div>
      </div>
    </div>
  </a>
  </div>
  
  <div class="col">
    <a href="/gallery/tradizionali">
    <div>
      <div>
        <div
          class="uk-card uk-card-default but cardc"
          uk-height-viewport="expand: true;min-height: 500"
        >
          <div class="uk-card-media-top" align="center">
            <hr>
            <h3 class="uk-card-title">Dolci tradizionali</h3>
          </div>
          <div class="uk-card-body" align="center">
            
            <img src="https://sasyimg.imgix.net/slide/Dolci_Tradizionali/Sasy_brioches4.jpeg" width="384"/>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </a>
  </div>


  <div class="col">
    <a href="/gallery/torte">
    <div>
      <div>
        <div
          class="uk-card uk-card-default but cardc"
          uk-height-viewport="expand: true;min-height: 500"
        >
          <div class="uk-card-media-top" align="center">
            <hr>
            <h3 class="uk-card-title testo">Torte</h3>
          </div>
          <div class="uk-card-body " align="center">
            <img src="https://sasyimg.imgix.net/slide/Torte/Sasy_creamtart01.jpeg" width="434"/>
           
          </div>
        </div>
      </div>
    </div>
  </a>
  </div>
  <!-- <div class="col">
    <a href="/gallery/lievitati">
    <div>
      <div
        class="uk-card uk-card-default but cardc"
        uk-height-viewport="expand: true;min-height: 500"
      >
        <div class="uk-card-media-top" align="center">
          <h6>&nbsp;</h6>
          <img
            src="https://img.icons8.com/external-icongeek26-outline-icongeek26/128/000000/external-panettone-italian-food-icongeek26-outline-icongeek26.png"
          />
        </div>
        <div class="uk-card-body" align="center">
          <h3 class="uk-card-title">Lievitati</h3>
          
        </div>
      </div>
    </div>
  </a>
  </div> -->
</div>



<!--Other row-->
<h1>&nbsp;</h1>



<div class="row">
  <div class="col">
    <a href="/gallery/pasta_di_zucchero">
    <div>
      <div>
        <div
          class="uk-card uk-card-default but cardc"
          uk-height-viewport="expand: true;min-height:580"
        >
          <div class="uk-card-media-top" align="center">
            <hr>
            <h3 class=" testow uk-card-title ">Pasta di zucchero
            </h3>
          </div>
          <div class="uk-card-body" align="center">
            <img src="https://sasyimg.imgix.net/slide/Pasta di zucchero/IMG-20200614-WA0020.jpg" width="434"/>
            
          </div>
        </div>
      </div>
    </div>
  </a>
  </div>
  <div class="col">
    <a href="/gallery/salata">
    <div>
      <div>
        <div
          class="uk-card uk-card-default but cardc"
          uk-height-viewport="expand: true;min-height: 580"
        >
          <div class="uk-card-media-top" align="center">
            <hr>
            <h3 class="uk-card-title">Pasticceria salata</h3>
          </div>
          <div class="uk-card-body" align="center">
            <img src="https://sasyimg.imgix.net/slide/Salata/WhatsApp Image 2021-03-21 at 03.32.25 (4).jpeg" width="512"/>
          
          </div>
        </div>
      </div>
    </div>
  </a>
  </div>
  <div class="col">
    <a href="/gallery/uova">
    <div>
      <div>
        <div
          class="uk-card uk-card-default but cardc"
          uk-height-viewport="expand: true;min-height: 580"
        >
          <div class="uk-card-media-top" align="center">
            <hr>
            <h3 class="uk-card-title testo">Uova di pasqua</h3>
          </div>
          <div class="uk-card-body " align="center">
            <img src="https://sasyimg.imgix.net/slide/Uova/WhatsApp Image 2021-03-26 at 01.18.52.jpeg" width="512"/>
           
          </div>
        </div>
      </div>
    </div>
  </a>
  </div>
    </div>
  </div>
<h1>&nbsp;</h1>

<style>
</style>
