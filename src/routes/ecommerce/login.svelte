<script lang="ts">
  import {dialogs} from 'svelte-dialogs';
  import { onMount } from "svelte";
  import md5 from "md5";
  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
  const auth = getAuth();
  var user:string;
  var pass:string;
  onMount(async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        location.href = "/ecommerce/area";
      }
    });
  });

  function login() {
    signInWithEmailAndPassword(auth, user, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential.user);
    sessionStorage.setItem("user", userCredential.user.email);
    location.href="/ecommerce/area";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    dialogs.alert("Login fallito");
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
