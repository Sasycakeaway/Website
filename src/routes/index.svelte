<script>
  import Head from "/static/components/head.svelte";
  import Prod from "/static/components/prod.svelte";
 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getPerformance} from "firebase/performance"
const firebaseConfig = {
  apiKey: "AIzaSyAE_uqiqEDqQkaaIzZ-6L2pTQ_6uU6-anM",
  authDomain: "sasy-s-cake-away-bc051.firebaseapp.com",
  projectId: "sasy-s-cake-away-bc051",
  storageBucket: "sasy-s-cake-away-bc051.appspot.com",
  messagingSenderId: "650417814398",
  appId: "1:650417814398:web:78791de6ca784c5b24d12f",
  measurementId: "G-VNSBH37Q9R"
};


  import { onMount } from "svelte";

 
  onMount(async () => {
  
    if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) 
      document.getElementById("ifname").style.width="300px"

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);
  });
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/index.css" />
  <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/grids-min.css">
  <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/grids-responsive-min.css" />
</svelte:head>

<Head />
<h5>&nbsp;</h5>
<div class="prodi">
  <Prod />
</div>
<div align="center">
  <h1>&nbsp;</h1>
  <button class="uk-button uk-button-primary uk-button-large but"
    >Scopri i nostri prodotti</button
  >
  <h1>&nbsp;</h1>
  <p class="info">
    Per prenotazioni ed ordini chiama il 333/9273367 oppure scrivi a
    Sasy.vitrani@gmail.com
  </p>
  <h1>&nbsp;</h1>
  <iframe
    width="611"
    height="311"
    src="https://www.youtube.com/embed/"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    id="ifname"
  />
  
  <h1>&nbsp;</h1>
  <h4>Sasy's su LIVE SOCIAL</h4>
  <h4>&nbsp;</h4>
  <p>
    La mia storia di imprenditrice appassionata, raccontata a Francesca Corso ai
    microfoni di Radio Veronica One
  </p>
  <a> www.radioveronicaone.it</a> - <a>www.radiolivesocial.it</a>
</div>
<h5>&nbsp;</h5>
