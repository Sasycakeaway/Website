<script lang="ts">
  import { dialogs } from "svelte-dialogs";
  var user:string, pass:string, passcheck:string, nascita:string, cf:string,telefono:string;
  function registrati() {
    console.log({
        "email": user,
        "password": pass,
        "telefono": telefono,
        "cf": cf,
        "nascita": nascita
      });
    sessionStorage.clear();
    if(pass == passcheck){
      fetch('http://localhost:8000/db.php?type=adduser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": user,
        "password": pass,
        "telefono": telefono,
        "cf": cf,
        "nascita": nascita
      }),
    })
    .then(async(data) => {
      if(await data.text() == "1"){
        dialogs.alert("Account registrato correttamente").then(()=>{
          location.href="/ecommerce/login";
        });
      }else{
        dialogs.alert("Impossibile completare la registrazione, errore nel server API, segnalare il problema alla email di supporto");
      }
      
    })
    .catch((error) => {
      console.log(error);
      dialogs.alert("Impossibile completare la registrazione, errore nel server API, segnalare il problema alla email di supporto");
    });
    }else{
      dialogs.alert("Le password non corrispondono, riprovare");
    }

  }
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/login.css" />
</svelte:head>
<br>
<div align="center">
<div class="uk-card uk-card-default uk-card-body uk-width-1-2@m forma">
  <fieldset class="uk-fieldset">
    <div align="center">
      <legend class="uk-legend">Registra un account su Sasy's Cake Away</legend>
    </div>
    <div class="uk-margin">
      <input
        id="username"
        class="uk-input"
        type="text"
        placeholder="E-mail"
        bind:value={user}
      />
    </div>
    <div class="uk-margin">
      <input
        id="password"
        class="uk-input"
        type="password"
        placeholder="Password"
        bind:value={pass}
      />
    </div>
    <div class="uk-margin">
      <input
        id="password2"
        class="uk-input"
        type="password"
        placeholder="Conferma la Password"
        bind:value={passcheck}
      />
    </div>
    <div class="uk-margin">
      <input
        id="telefono"
        class="uk-input"
        type="text"
        placeholder="Numbero di telefono"
        bind:value={telefono}
      />
    </div>
    <div class="uk-margin">
      <input
        id="nascita"
        class="uk-input"
        type="date"
        placeholder="Data di nascita"
        bind:value={nascita}
      />
    </div>
    <div class="uk-margin">
      <input
        id="cf"
        class="uk-input"
        type="text"
        placeholder="Codice fiscale"
        bind:value={cf}
      />
    </div>
    <!-- <div class="uk-margin">
            <input id="password2" class="uk-input" type="text" placeholder="Indirizzo di residenza" bind:value={indirizzo}>
        </div> -->
    <div align="center">
      <div>
        <button
          class="uk-button uk-button-primary"
          type="button"
          on:click={registrati}>Registrati</button
        >
      </div>
    </div>
  </fieldset>
</div>
</div>
<br>




