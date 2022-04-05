<script>
  import Head from "/static/components/head.svelte";
  import Prod from "/static/components/prod.svelte";
  import { onMount } from "svelte";

  let carousel; // for calling methods of the carousel instance
  onMount(async () => {
    const module = await import("svelte-carousel");
    Carousel = module.default;
  });

  const handleNextClick = () => {
    carousel.goToNext();
  };
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/index.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
 

  <script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
    import { getPerformance } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-performance.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAE_uqiqEDqQkaaIzZ-6L2pTQ_6uU6-anM",
      authDomain: "sasy-s-cake-away-bc051.firebaseapp.com",
      projectId: "sasy-s-cake-away-bc051",
      storageBucket: "sasy-s-cake-away-bc051.appspot.com",
      messagingSenderId: "650417814398",
      appId: "1:650417814398:web:78791de6ca784c5b24d12f",
      measurementId: "G-VNSBH37Q9R",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // Initialize Performance Monitoring and get a reference to the service
    const perf = getPerformance(app);
  </script>
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
    width="622"
    height="311"
    src="https://www.youtube.com/embed/jF6h8jJJuhc"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
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
