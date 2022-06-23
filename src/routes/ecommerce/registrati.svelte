<script lang="ts">
  const ENDPOINT = "http://localhost:3001/adduser";
  import { dialogs } from "svelte-dialogs";
  import md5 from "md5";
  import emailjs from "@emailjs/browser";
  import { onMount } from "svelte";
  var user: string,
    pass: string,
    passcheck: string,
    nascita: string,
    cf: string,
    telefono: string;
  function registrati() {
    let regDate = new Date();
    let isodate = regDate.toISOString().split('T')[0];
    if (pass == passcheck) {
      fetch(ENDPOINT, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user,
          password: md5(pass),
          telefono: telefono,
          cf: cf,
          nascita: nascita,
          timestamp: isodate
        }),
      })
        .then((response) => response.json())
        .then(async (data) => {
          if (data.status == "1") {
            await emailjs.send("service_s11ial4", "template_4x1knko", {
              email: user,
            });
            await sessionStorage.clear();
            location.href = "/ecommerce/login";
          } else {
            dialogs.alert("Account esistente");
          }
        })
        .catch((error) => {
          dialogs.alert(
            "Errore durante la connessione al server API, contattare l'assistenza"
          );
        });
    } else {
      dialogs.alert("Le password non corrispondono");
    }
  }
  onMount(() => {
    emailjs.init("tfSXJVz0VLhWR2I_5");
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/login.css" />
</svelte:head>
<br />
<div align="center">
  <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m forma">
    <fieldset class="uk-fieldset">
      <div align="center">
        <legend class="uk-legend"
          >Registra un account su Sasy's Cake Away</legend
        >
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
<br />
