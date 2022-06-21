<script lang="ts">
  import {dialogs} from 'svelte-dialogs';
  var user:string;
  var pass:string;
  function login() {
    fetch("http://127.0.0.1:8000/db.php?type=login&email=" + user + "&password=" + pass)
      .then(response => response.json())
      .then(data => {
        if(data == 1){
          fetch("http://localhost:8000/db.php?type=getuserbypass&email=" + user + "&password=" + pass)
          .then(response => response.json())
          .then(jsondata => {
            console.log(jsondata);
            sessionStorage.setItem("dettagliCliente", JSON.stringify(jsondata));
            fetch("http://localhost:8000/db.php?type=getorder&email=" + user + "&password=" + pass)
            .then(response => response.json())
            .then(async(parsed) =>{
                sessionStorage.setItem("ordini", JSON.stringify(parsed));
                console.log(parsed);
                await sessionStorage.setItem("user", user);
                location.href = "/ecommerce/area";
                
            });

          })

        }else{
          dialogs.alert("Login fallito, controllare la password oppure creare un account");
        }
      }).catch(err => {
        console.error(err);
        dialogs.alert("Login fallito, controllare la password oppure creare un account");
      })
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
