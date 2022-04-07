<svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/uikit@3.13.7/dist/js/components/slideshow.min.js"></script>
</svelte:head>
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="autoplay: true" align="center">
  <ul class="uk-slideshow-items">
    <li>
      <img src="/images/mamy.jpg"  alt="..." width="512"/>
    </li>
    <li>
  
      <img src="/images/libro.jpg"  alt="..." width="512"/>
    </li>
    <li>
      <img src="/images/panettone.jpg"  alt="..." width="512"/>
    </li>
    <li>

      <img src="/images/panettonefronte.jpg"  alt="..." width="512"/>
    </li>
  </ul>
    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
  <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
</div>
