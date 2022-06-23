<script lang="ts">
  const ENDPOINT = "http://localhost:3001/getordersbypass";
  const LOGINENDPOINT = "http://localhost:3001/login";
  import { Circle3 } from "svelte-loading-spinners";
  import { onMount } from "svelte";
  import { dialogs } from "svelte-dialogs";
  let ordini: Array<Object> = [],
    loading: boolean = true;
  onMount(async () => {
    let user = sessionStorage.getItem("email");
    let pass = sessionStorage.getItem("password");
    fetch(LOGINENDPOINT, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user,
        password: pass,
      }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        if (data.status != "1") {
          location.href = "/ecommerce/login";
        } else {
          fetch(ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user,
              password: pass,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              ordini = data;
              console.log(ordini);
              loading = false;
            })
            .catch((error) => {
              dialogs.alert(
                "Errore di connessione al server API, contattare l'assistenza"
              );
              console.error("Error:", error);
            });
        }
      })
      .catch((error) => {
        dialogs.alert(
          "Errore di connessione al server API, contattare l'assistenza"
        );
      });
  });
</script>

<br />
{#if loading == false}
  <div class="container">
    <ul uk-accordion>
      {#each ordini as order}
        <li class="order">
          <a class="uk-accordion-title" href="#">Ordine numero: {order.id}</a>
          <div class="uk-accordion-content">
            <p>Nome: {order.nome}</p>
            <p>Cognome: {order.cognome}</p>
            <p>Indirizzo: {order.indirizzo}</p>
            <p>CAP: {order.cap}</p>
            <p>Consegna a domicilio: {order.domicilio}</p>
            <p>Totale: {order.totale}</p>
            <p>Data dell'ordine: {order.timestamp.split('T')[0]}</p>
            <p>Prodotti acquistati</p>
            <ul>
              {#each JSON.parse(order.cart) as cart}
                <li>{cart.id} - Quantità {cart.qty}</li>
              {/each}
            </ul>
          </div>
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <center>
    <Circle3 size="128" unit="px" duration="2s" />
  </center>
{/if}

<style>
  .order {
    /* background-color: white; */
  }
  .container {
    margin: 20px;
  }
</style>
