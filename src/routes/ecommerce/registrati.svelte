<script>
  const endpoint =
    "https://lot4n3buq1.execute-api.eu-south-1.amazonaws.com/default/pydb";
  var user, pass, passcheck, tel, nascita, cf, indirizzo;
  import md5 from "md5";
  console.log(md5("Ciao"));
  function registrati() {
    if (pass == passcheck) {
      fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
          type: "write",
          username: md5(user),
          password: md5(pass),
          telefono: tel,
          nascita: nascita,
          cf: cf,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          location.href = "/ecommerce/login";
        })
        .catch((error) => {
          alert("Errore del server, contattare Sasy's");
        });
    } else {
      alert("Le password non corrispondono");
    }
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="css/login.css" />
</svelte:head>
<div class="uk-card uk-card-default uk-card-body uk-width-1-2@m forma">
  <fieldset class="uk-fieldset">
    <div align="center">
      <legend class="uk-legend">Sasy's Cake Away login</legend>
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
        id="password2"
        class="uk-input"
        type="text"
        placeholder="Numero di telefono"
        bind:value={tel}
      />
    </div>
    <div class="uk-margin">
      <input
        id="password2"
        class="uk-input"
        type="date"
        placeholder="Data di nascita"
        bind:value={nascita}
      />
    </div>
    <div class="uk-margin">
      <input
        id="password2"
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
