<script lang="ts">
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { doc, setDoc, getFirestore, collection, addDoc } from "firebase/firestore"; 
  import { dialogs } from "svelte-dialogs";
  const auth = getAuth();
  const db = getFirestore();
  var user:string, pass:string, passcheck:string, tel, nascita:string, cf:string,telefono:string;
  import md5 from "md5";
  function registrati() {
    createUserWithEmailAndPassword(auth, user, pass)
  .then(async(userCredential) => {
    // Signed in 
    const user_raw = userCredential.user;
    try {
      await setDoc(doc(db, "users", user), {
      "telefono": telefono,
      "nascita": nascita,
      "cf": cf
    });
    dialogs.alert("Account creato con successo").then(()=>{
      //location.href="/ecommerce/area";
    });
    } catch (error) {
      console.log(error);
      dialogs.alert("Errore durante la creazione dell'account");
    }


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    dialogs.alert("Account già esistente");
  });
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="css/login.css" />
</svelte:head>
<br>
<div align="center">
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