<script>
  const ENDPOINT = "http://localhost:3001/deleterequest";
  import { dialogs } from "svelte-dialogs";
  let id;
  function requestRestore() {
    fetch(ENDPOINT, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status == "1") {
          dialogs.alert("Richiesta rimossa correttamente");
        } else {
          dialogs.alert("La richiesta non esiste");
        }
      })
      .catch((error) => {
        dialogs.alert("Errore durante la rimozione della richiesta");
      });
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/login.css" />
</svelte:head>
<div class="uk-card uk-card-default uk-card-body uk-width-1-2@m forma">
  <fieldset class="uk-fieldset">
    <div align="center">
      <legend class="uk-legend">Sasy's Cake Away login</legend>
    </div>
    <div class="uk-margin">
      <center>
        <p>Inserire il codice identificativo della richiesta da eliminare</p>
      </center>
      <input
        class="uk-input"
        type="text"
        placeholder="Codice identificativo"
        bind:value={id}
      />
    </div>
    <div class="uk-margin">
      <center>
        <button class="uk-button uk-button-primary" on:click={requestRestore}
          >Cancella la richiesta</button
        >
      </center>
    </div>
  </fieldset>
</div>
<h1>&nbsp;</h1>
