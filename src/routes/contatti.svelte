<script>
  import Form from "/static/components/form.svelte";
  import Carousel from "/static/components/carousel.svelte";
  import Head from "/static/components/head.svelte";
  import Prod from "/static/components/prod.svelte";
  import Info from "/static/components/info.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/why.css" />
</svelte:head>
<h1>&nbsp;</h1>
<div class="container">
  <div class="row">
    <div class="col">
      <div>
        <Form />
      </div>
    </div>
    <div class="col">
      <Info />
    </div>
  </div>
</div>
