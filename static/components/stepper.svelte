<script lang="ts">
  export let qty:number;
  export let prod:string;
  import { initcart } from "../../static/js/cart";
  import { dialogs } from "svelte-dialogs";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let cart:Array<Object> = [];
  let totale: number;
  export let ida:string;
  onMount(() => {
    cart = initcart();
    totale = localStorage.getItem("totale");
  });
  function minus(e) {
    cart.forEach(async (value, i) => {
      if (value.id == prod) {
        if (value.qty > 1) {
          cart[i].qty--;
          if(prod != "Il trasformista" && prod != "Benvenuti al nord" && prod != "Benvenuti al sud" && prod != "Il vegetariano" && prod != "La grande abbuffata"){
            cart[i].prezzo -= 5
            totale -= 5;
          }else{
            switch (cart[i].id) {
              case "Benvenuti al nord":
                cart[i].prezzo -= 12;
                totale -= 12;
                break;
              case "Il vegetariano":
                cart[i].prezzo -= 12;
                totale -= 12;
                break;
              case "Il trasformista":
                cart[i].prezzo -= 18;
                totale -= 18;
                break;
              default:
                totale -= 15;
                cart[i].prezzo -= 15;
                break;
            }
          }
            
          qty--;
          
          localStorage.setItem("cart", JSON.stringify(cart));
          localStorage.setItem("totale", totale);
          dispatch("minus", {
            text: ida,
          });
        } else {
          let resp = await dialogs.confirm("Vuoi eliminare il prodotto?");
          if (resp) {
            console.log(prod);
            
            console.log(cart);
            document.getElementById(e.path[0].id + "item");
            console.log(prod)
            if(prod != "Il trasformista" && prod != "Benvenuti al nord" && prod != "Benvenuti al sud" && prod != "Il vegetariano" && prod != "La grande abbuffata"){
            cart[i].prezzo -= 5
            totale -= 5;
          }else{
            switch (cart[i].id) {
              case "Benvenuti al nord":
                cart[i].prezzo -= 12;
                totale -= 12;
                break;
              case "Il vegetariano":
                cart[i].prezzo -= 12;
                totale -= 12;
                break;
              case "Il trasformista":
                cart[i].prezzo -= 18;
                totale -= 18;
                break;
              default:
                totale -= 15;
                cart[i].prezzo -= 15;
                break;
            }
          }
          cart.splice(i, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem("totale", totale);
            dispatch("minus", {
              text: ida,
            });
          }
          location.reload();
        }
      }
    });
  }

  function plus(e) {
    cart.forEach((value, i) => {
      if (value.id == prod) {
        cart[i].qty++;
        qty++;
        totale += 5;
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("totale", totale);
        dispatch("plus", {
          text: ida,
        });
      }
    });
  }
  let itemSize = 300;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/purecss@2.1.0/build/grids-responsive-min.css"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/purecss@2.1.0/build/pure-min.css"
    integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH"
    crossorigin="anonymous"
  />
</svelte:head>

<div class="pure-g">
  <div class="pure-u-1-3" align="center">
    <button class="uk-button uk-button-default" on:click={plus}>+</button>
  </div>
  <div class="pure-u-1-3" align="center">
    <p class="qty">{qty}</p>
  </div>
  <div class="pure-u-1-3" align="center">
    <button class="uk-button uk-button-default" on:click={minus}>-</button>
  </div>
</div>

<style>
  .qty {
    text-align: center;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
</style>
