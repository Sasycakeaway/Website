<script lang="ts">
  import { dialogs } from "svelte-dialogs";
  import { init } from "../../../static/js/paypal";
  import { onMount } from 'svelte';
  let nome:string,cognome:string,indirizzo:string,cap:string,domicilio:boolean;
  onMount(()=>{
    init(localStorage.getItem("totale"),nome,cognome,indirizzo,cap,domicilio);
  })
  
</script>

<svelte:head>
  <!-- <script src="https://staging.online.satispay.com/web-button.js"></script> -->
  <script
    src="https://www.paypal.com/sdk/js?client-id=ASqKz4snBp2uAUFrxFtMgQXITDtdpDKBaVrXmQj9C547HeLMwPApIpK2eeLBI2USqG_QrpWRK9Ay3rAI"></script>
    <link rel="stylesheet" href="/css/pagamenti.css">
</svelte:head>
<br />
<br />
<div align="center" class="form">
<fieldset class="uk-fieldset">
  <legend class="uk-legend">Modulo di pagamento</legend>

  <div class="uk-margin">
    <input class="uk-input" type="text" placeholder="Nome" bind:value={nome} />
    <br />
    <br />

    <input class="uk-input" type="text" placeholder="Cognome" bind:value={cognome}/>
    <br />
    <br />

    <input class="uk-input" type="text" placeholder="Indirizzo di consegna" bind:value={indirizzo} />
    <br />
    <br />
    <input class="uk-input" type="text" placeholder="CAP" bind:value={cap}/>
    <br />
    <br />
    <input type="checkbox" id="domicilio" name="domicilio" bind:checked={domicilio}/>
    <label for="domicilio">Consegna a domicilio</label>

    <br />
    <br />
  </div>
  <div align="center" />
</fieldset>
</div>
<div id="paypal" align="center" />
<h1>&nbsp;</h1>

