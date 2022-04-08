<svelte:head>
  <link rel="stylesheet" href="/css/head.css" />
</svelte:head>
<div class="header">
  <header>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="firma"><a href="/">Sasy's Cake Away</a></li>

          <li><a href="/about">Chi sono</a></li>
          <li><a href="/why">Perchè Sasy's</a></li>
          <li>
            <a href="#">I miei prodotti</a>
            <div class="uk-navbar-dropdown but">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li><a href="/fresca">Pasticceria fresca</a></li>
                <!-- <li><a href="#">Pasticceria salata</a></li> -->
                <li><a href="/biscotti">Biscotti</a></li>
                <li><a href="/torte">Torte</a></li>
                <li><a href="/torte/american/">American cakes</a></li>
                <li><a href="/Dolci_Regionali">Dolci tradizionali</a></li>
                <li><a href="/lievitati">Panettoni e colombe</a></li>
                <li><a href="/decorati">Biscotti decorati</a></li>
                <!-- <li><a href="#">Dolci artistici</a></li> -->
                <li><a href="/apebox">Apebox</a></li>
                <li><a href="/sacco_di_natale">Sacco di natale</a></li>
                <li><a href="/praline">Praline d'autore</a></li>
                <li><a href="/uovo">Uovo di pasqua</a></li>
              </ul>
            </div>
          </li>
          <li><a href="/gallery">Galleria fotografica</a></li>
          <li><a href="/contatti">Contatti</a></li>
          <li><a href="/ingredienti">Elenco ingredienti</a></li>
          
        </ul>
      </div>

    <div class="uk-navbar-right">

      <ul class="uk-navbar-nav">
        <li ><a href="#">Login</a></li>
        <li><a href="/ecommerce/registrati/">Registrati</a></li>
        <li><a href="/ecommerce/carrello/"><img class="cart" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/256/000000/external-cart-supermarket-flatart-icons-lineal-color-flatarticons.png"/></a>
        </li>
      </ul>

  </div>
    </nav>
  </header>
</div>

<style>
  .header {
    width: 100%;
    padding: 0;
    margin: 0;
    margin: 2px solid green;
  }
  .cart{
	width: 64px;
}
</style>
