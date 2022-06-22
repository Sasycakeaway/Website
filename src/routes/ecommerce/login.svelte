<script lang="ts">
  import { onMount } from 'svelte';
  import md5 from 'md5';
  const ENDPOINT = "http://localhost:3001/login";
  import {dialogs} from 'svelte-dialogs';
  var user:string;
  var pass:string;

  onMount(()=>{
    user = sessionStorage.getItem("email");
    pass = sessionStorage.getItem("password");
    console.log(user);
    console.log(pass);
    if(user != null && pass != null){
      fetch(ENDPOINT, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": user,
        "password": pass
      }),
    })
    .then(response => response.json())
    .then(async(data) => {
      console.log(data.status);
      if(data.status == "1"){
        location.href = "/ecommerce/area";
      }else{
        dialogs.alert("Login fallito, riprovare o creare un account");
      }
    })
    .catch((error) => {
      dialogs.alert("Errore di connessione al server API, contattare l'assistenza");
    });

    }
  });
  function login() {
    fetch(ENDPOINT, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": user,
        "password": md5(pass)
      }),
    })
    .then(response => response.json())
    .then(async(data) => {
      if(data.status == "1"){
        await sessionStorage.setItem("email", user);
        await sessionStorage.setItem("password", md5(pass));
        location.href = "/ecommerce/area";
      }else{
        dialogs.alert("Login fallito, riprovare o creare un account");
      }
    })
    .catch((error) => {
      dialogs.alert("Errore di connessione al server API, contattare l'assistenza");
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
      <input
        class="uk-input"
        type="text"
        placeholder="Username"
        bind:value={user}
      />
    </div>
    <div class="uk-margin">
      <input
        class="uk-input"
        type="password"
        placeholder="Password"
        bind:value={pass}
      />
    </div>
    <div class="uk-child-width-expand@s uk-text-center" uk-grid>
      <div>
        <button class="uk-button uk-button-primary" on:click={login}
          >Accedi</button
        >
      </div>
      <div>
        <a href="/ecommerce/registrati"
          ><button class="uk-button uk-button-primary" href="/ecommerce/registrati"
            >Registrati</button
          ></a
        >
      </div>
    </div>
  </fieldset>
</div>
<h1>&nbsp;</h1>
