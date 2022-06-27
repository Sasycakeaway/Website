<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getPerformance } from "firebase/performance";
  import { onMount } from "svelte";
  import { dialogs } from "svelte-dialogs";
  var analytics, perf;
  const firebaseConfig = {
    apiKey: "AIzaSyAE_uqiqEDqQkaaIzZ-6L2pTQ_6uU6-anM",
    authDomain: "sasy-s-cake-away-bc051.firebaseapp.com",
    projectId: "sasy-s-cake-away-bc051",
    storageBucket: "sasy-s-cake-away-bc051.appspot.com",
    messagingSenderId: "650417814398",
    appId: "1:650417814398:web:78791de6ca784c5b24d12f",
    measurementId: "G-VNSBH37Q9R",
  };
  const app = initializeApp(firebaseConfig);
  onMount(() => {
    analytics = getAnalytics(app);
    perf = getPerformance(app);
    dialogs.config({
      global: {
        closeButtonText: "close me",
        resetButton: false,
        cancelButtonText: "Annulla",
        submitButtonText: "Aggiungi al carrello",
      },
    });
  });
  function facebook(){
    window.open("https://www.facebook.com/sasy.cakeaway");
  }
  function instagram(){
    window.open("https://www.instagram.com/sasy_cakeaway/");
  }
  function github(){
    window.open("https://github.com/Sasycakeaway/Website");
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/footer.css" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/uikit@3.13.7/dist/css/uikit.min.css"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/uikit@3.13.7/dist/js/uikit-core.min.js"></script>
</svelte:head>

<Header />

<main>
  <slot />
</main>

<footer>
  <p class="titindirizzo">Mi trovi in Viale falchera 69</p>
  <p style="color: white;">Seguici su Instagram e Facebook</p>
  <div uk-grid>
    <div>
      <a href="#0" on:click={instagram}
        ><img alt="instagram"
          src="https://img.icons8.com/material-outlined/48/000000/instagram-new--v1.png"
        /></a
      >
    </div>
    <div>
      <a href="#0" on:click={facebook} alt="facebook"
        ><img src="https://img.icons8.com/ios/48/000000/facebook--v1.png" /></a
      >
    </div>
  </div>
  <p class="social" style="margin-bottom:40px">&copy; Sasy's Cake Away</p>
  <p class="src" style="margin-top:150px">
    Codice sorgente del sito su <a
      href="#0" on:click={github}>Github</a
    >
  </p>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #ffffff;
  }

  footer a {
    font-weight: bold;
  }
</style>
