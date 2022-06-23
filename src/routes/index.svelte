<script>
  import Head from "../../static/components/head.svelte";
  import Prod from "../../static/components/prod.svelte";
  import SvelteSeo from "svelte-seo";
  import { onMount } from "svelte";

  onMount(async () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
    ) {
      document.getElementById("ifname").style.width = "300px";
      document.getElementById("ifname").style.height = "200px";
    }
  });
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/index.css" />
  <link
    rel="stylesheet"
    href="https://unpkg.com/purecss@2.1.0/build/grids-min.css"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/purecss@2.1.0/build/grids-responsive-min.css"
  />
</svelte:head>
<SvelteSeo
  jsonLd={{
    "@context": "https://schema.org",
    "@type": "Restaurant",
    image: [
      "https://www.sasycakeaway.com/images/slide/Biscotti/Sasy_Macaron1.jpeg",
      "https://www.sasycakeaway.com/images/slide/Torte/Sasy_creamtart01.jpeg",
      "https://www.sasycakeaway.com/images/slide/Uova/WhatsApp%20Image%202021-03-26%20at%2001.18.52.jpeg",
      "https://www.sasycakeaway.com/images/slide/Pasta%20di%20zucchero/IMG-20200614-WA0020.jpg",
    ],
    name: "Sasy's Cake Away",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Viale falchera 69",
      addressLocality: "Torino",
      addressRegion: "IT",
      postalCode: "10156",
      addressCountry: "IT",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sabrina Vitrani",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.1263404,
      longitude: -7.7086123,
    },
    url: "https://www.sasycakeaway.com/",
    telephone: "+3339273367",
    servesCuisine: "Pasticceria",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "12:00",
      },
    ],
    menu: "https://www.sasycakeaway.com/gallery",
    acceptsReservations: "True",
  }}
/>
<Head />
<br />
<div class="prodi">
  <Prod />
</div>
<br />
<div align="center">
  <button class="uk-button uk-button-primary uk-button-large but"
    >Scopri i nostri prodotti</button
  >
  <p class="info">
    Per prenotazioni ed ordini chiama il 333/9273367 oppure scrivi a
    Sasy.vitrani@gmail.com
  </p>
  <br />
  <iframe
    width="1280"
    height="720"
    src="https://www.youtube.com/embed/jF6h8jJJuhc"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    id="ifname"
  />
  <br />
  <h4>Sasy's su LIVE SOCIAL</h4>
  <p>
    La mia storia di imprenditrice appassionata, raccontata a Francesca Corso ai
    microfoni di Radio Veronica One
  </p>
  <a> www.radioveronicaone.it</a> - <a>www.radiolivesocial.it</a>
</div>
<br />
