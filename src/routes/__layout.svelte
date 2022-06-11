<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getPerformance } from "firebase/performance";
  import {onMount} from 'svelte';
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
  onMount(()=>{
    analytics = getAnalytics(app);
    perf = getPerformance(app);
  });

</script>

<svelte:head>
  <link rel="stylesheet" href="/css/footer.css" />
  <script src="/js/footer.js"></script>
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
      <a href="https://www.instagram.com/sasy_cakeaway/" target="_blank"
        ><img
          src="https://img.icons8.com/material-outlined/48/000000/instagram-new--v1.png"
        /></a
      >
    </div>
    <div>
      <a href="https://www.facebook.com/sasy.cakeaway" target="_blank"
        ><img src="https://img.icons8.com/ios/48/000000/facebook--v1.png" /></a
      >
    </div>
  </div>
  <p class="social">&copy; Sasy's Cake Away</p>
  <p class="src">
    Codice sorgente del sito su <a
      href="https://github.com/Sasycakeaway/Website"
      target="_blank">Github</a
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
