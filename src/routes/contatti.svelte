<script>
  import {onMount} from 'svelte'
  import emailjs from '@emailjs/browser';
  let nome="",email="",text="",cognome="",ntel="";
  function invia() {
    
  }
  onMount(async () => {
  
  if( !/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById("map").style.width="600px"
    document.getElementById("map").style.height="400px"
  }
});
function manda(){
      emailjs.send("service_ccwtjlr","template_7gaqbjl",{
      nome: nome,
     cognome: cognome,
     email:email,
     ntel:ntel,
     testo:text
      },"XI3aGphpOi4C1--qr");
     
    }
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
  <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossorigin="anonymous">
  <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/grids-responsive-min.css" />

</svelte:head>
<h1>&nbsp;</h1>
<h1>Contattaci per avere informazioni sui nostri prodotti o per fare ordini</h1>
<h1>&nbsp;</h1>
<div class="pure-g" align="center">
<div  class="pure-u-1-2 contatti">
  <fieldset class="contatti">



      <div class="uk-margin">
        {#if nome == ""}
          <p>Inserire il proprio nome</p>
        {/if}
          <input class="uk-input" type="text" placeholder="Nome" bind:value={nome}>
          
      </div>

      <div class="uk-margin">
        {#if cognome == ""}
        <p>Inserire il proprio cognome</p>
      {/if}
        <input class="uk-input" type="text" placeholder="Cognome" bind:value={cognome}>
    
      </div>
      <div class="uk-margin">
        {#if email == ""}
        <p>Inserire una email</p>
      {/if}
        <input class="uk-input" type="email" placeholder="E-mail" bind:value={email}>
       
      </div>
      <div class="uk-margin">
        {#if ntel == ""}
        <p>Inserire un numero di telefono</p>
      {/if}
        <input class="uk-input" type="tel" placeholder="Numero di telefono" bind:value={ntel}>
       
      </div>
      <div class="uk-margin">
        {#if text == ""}
            <p>Inserire un messaggio</p>
          {/if}
          <textarea class="uk-textarea" rows="5" placeholder="Messaggio" bind:value={text}></textarea>
          
      </div>

     

  </fieldset>
  <button class="uk-button uk-button-primary" on:click={manda}>Invia</button>
</div>

<div class="pure-u-1-2">
  <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11259.999086265521!2d7.7086123!3d45.1263404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a57226dc53caa17!2sSasy&#39;s%20cake%20away!5e0!3m2!1sit!2sit!4v1649366843756!5m2!1sit!2sit" width="200" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
<!-- <section>
  <input type="text" >

 
</section> -->
<h1>&nbsp;</h1>

