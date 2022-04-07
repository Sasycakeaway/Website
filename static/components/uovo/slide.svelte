<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/uikit@3.13.7/dist/js/components/slideshow.min.js"></script>
  <link rel="stylesheet" href="/css/decorati.css" />
</svelte:head>

<div class="uk-position-relative " tabindex="-1" uk-slideshow="autoplay: true">
  <ul class="uk-slideshow-items">
    <li>
      <img src="/images/uova/intear.jpg" alt="..." width="1024" />
    </li>

    <li>
      <img src="/images/uova/coniglio.jpg" alt="..." width="1024" />
    </li>
    <li>
      <img src="/images/uova/insieme.jpg" alt="..." width="1024" />
    </li>
  </ul>
  <a
    class="uk-position-center-left uk-position-small uk-hidden-hover"
    href="#"
    uk-slidenav-previous
    uk-slideshow-item="previous"
  />
  <a
    class="uk-position-center-right uk-position-small uk-hidden-hover"
    href="#"
    uk-slidenav-next
    uk-slideshow-item="next"
  />
</div>
