<script>
  import { initcart } from "../../../static/js/cart";
  import { onMount } from "svelte";
  import Stepper from "../../../static/components/stepper.svelte";
  let cart = [];
  let verifica;
  let totale;
  function removeall() {
    cart = [];
    totale = 0;
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totale", totale);
    verifica = check();
  }
  function check() {
    if (JSON.stringify(cart) == "[]") {
      return "{}";
    } else {
      return JSON.stringify(cart);
    }
  }
  onMount(() => {
    cart = initcart();
    totale = parseInt(localStorage.getItem("totale"));
    verifica = check();
  });
  function min(e) {
    cart[e.detail.text].qty--;
    if(cart[e.detail.text].id != "Il trasformista" && cart[e.detail.text].id != "Benvenuti al nord")
            cart[e.detail.text].prezzo -= 5
          else{
            switch (cart[e.detail.text].id) {
              case "Benvenuti al nord":
                totale -= 12;
                break;
              case "Il vegetariano":
                totale -= 12;
                break;
              case "Il trasformista":
                totale -= 18;
                break;
              default:
                totale -= 15;
                break;
            }
            location.reload()
          }
  }
  function plu(e) {
    cart[e.detail.text].qty++;
    totale += 5;
  }
  function bin(e) {
    cart.forEach(prod =>{
      if(prod.id != "Il trasformista" && prod.id != "Benvenuti al nord")
            totale -= 5;
          else{
            switch (prod.id) {
              case "Benvenuti al nord":
                totale -= 12;
                break;
              case "Il vegetariano":
                totale -= 12;
                break;
              case "Il trasformista":
                totale -= 18;
                break;
              default:
                totale -= 15;
                break;
            }
            
          }
    })
    cart = cart.filter((prod) => prod.id != e.path[0].id);
   

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totale", totale);
    document.getElementById(e.path[0].id + "item");
    location.reload();
  }
  let itemSize = 300;
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/cart.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
</svelte:head>
<h1>&nbsp;</h1>
{#if verifica == "{}"}
  <p align="center">
    Carrello vuoto, aggiungi prodotti al carrello visitando le pagine del sito
  </p>
{:else}
  <div class="list">
    <ul class="list-group">
      <li class="list-group-item" align="center">
        <button class="uk-button uk-button-danger" on:click={removeall}
          >Cancella tutti i prodotti nel carrello</button
        >
      </li>
      {#each cart as prod, i}
        <li class="list-group-item" id={prod.id + "item"}>
          <div class="container">
            <div class="row">
              <div class="col">
                {#if prod.id != "Il trasformista"}
                <img
                  src={"/images/" + prod.id + ".jpg"}
                  alt="Foto del prodotto"
                  class="imgcart"
                />
                {:else}
                <img
                src={"/images/Il trasformista.png"}
                alt="Foto del prodotto"
                class="imgcart"
                width="256px"
              />
                {/if}
              </div>
              <div class="col">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <p />
                      <p>{prod.id}</p>
                      {#if prod.id != "Cupcake" && prod.id != "Muffin" && prod.id != "Cakepop" && prod.id != "Zeppole di San Giovanni" && prod.id == "Il Trasformista"}
                        <p>Peso: {cart[i].qty * 250}g</p>
                      {:else if prod.id == "Il trasformista"}
                        <p>{JSON.stringify(prod.ingredienti).replace("[","").replace("]","").replace('"','')}</p>
                      {:else}
                        <p>Quantità: {cart[i].qty}</p>
                      {/if}
                    </div>
                    <div class="col">
                      <p />
                    </div>

                    <div class="col center">
                      <img
                        src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-bin-cleaning-kosonicon-solid-kosonicon.png"
                        class="cestino"
                        id={prod.id}
                        on:click={bin}
                      />
                    </div>
                  </div>
                </div>
                {#if prod.id != "Il trasformista"}
                <Stepper
                  qty={prod.qty}
                  ida={i}
                  prod={prod.id}
                  on:minus={min}
                  on:plus={plu}
                />
                {/if}
              </div>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
{/if}
<br />
<div align="center">
  <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
    <h3>Prezzo totale:</h3>
    <br>
    <div class="container">
      <div class="row">
        <div class="col">
          {#each cart as prod}
            <p>{prod.id}</p>
          {/each}
        </div>
        <div class="col">
          {#each cart as prod}
            <p>{prod.prezzo}&euro;</p>
          {/each}
        </div>
      </div>
    </div>
    <br />
    {#if totale == null}
      <h4>Totale: 0&euro;</h4>
    {:else}
      <h4>Totale: {totale}&euro;</h4>
    {/if}
  </div>
</div>
<br />
{#if verifica != "{}"}
  <div align="center">
    <a href="/pagamenti"
      ><button class="uk-button uk-button-primary">Completa l'ordine</button></a
    >
  </div>
{/if}
<h1>&nbsp;</h1>
