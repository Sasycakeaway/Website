<script>
  import { onMount } from "svelte";
  import md5 from "md5";
  var user;
  var pass;
  onMount(async () => {
    user = sessionStorage.getItem("username");
    pass = sessionStorage.getItem("password");
    if (user != null && pass != null) login();
  });

  const endpoint =
    "https://lot4n3buq1.execute-api.eu-south-1.amazonaws.com/default/pydb";

  function login() {
    console.log(user);
    console.log(pass);
    fetch(endpoint, {
      method: "POST", // or 'PUT'
      /*headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    'Access-Control-Allow-Headers': 'Content-Type'
  },*/
      //mode: 'no-cors',
      body: JSON.stringify({
        type: "read",
        username: md5(user),
        password: md5(pass),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.Item);
        if (data.Item == null) {
          alert("Account non esistente");
        } else {
          location.href = "/ecommerce/area";
          sessionStorage.setItem("logged", "true");
          sessionStorage.setItem("username", user);
          sessionStorage.setItem("password", pass);
          sessionStorage.setItem("telefono", data.Item.telefono);
          sessionStorage.setItem("cf", data.Item.cf);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
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
        type="text"
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
          ><button class="uk-button uk-button-primary" href="/registrati"
            >Registrati</button
          ></a
        >
      </div>
    </div>
  </fieldset>
</div>
<h1>&nbsp;</h1>
