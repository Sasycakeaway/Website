<script>
    import { initcart } from '../../../static/js/cart.js';
    import {onMount} from 'svelte';
    import Stepper from '../../../static/components/stepper.svelte'
    let cart = [];
    let verifica;
    let totale;
    function removeall() {
        cart = []
        totale = 0
        localStorage.setItem("cart", JSON.stringify(cart))
        localStorage.setItem("totale",totale)
        verifica = check()
    }
    function check() {
        if(JSON.stringify(cart) == "[]"){
            return "{}"
        }else{
            return JSON.stringify(cart)
        }
        
    }
    onMount(()=>{
        cart = initcart();
        totale = localStorage.getItem('totale')
        verifica = check()
    })
    function min(e) {
        cart[e.detail.text].qty--;
    }
    function plu(e) {
        cart[e.detail.text].qty++;
    }
    function bin(e) {
        cart = cart.filter(prod => prod.id != e.path[0].id)
        totale -= 5
        localStorage.setItem("cart",JSON.stringify(cart))
        document.getElementById(e.path[0].id+"item")
    }
    let itemSize = 300;
    </script>
<svelte:head>
    <link rel="stylesheet" href="/css/cart.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</svelte:head>
<h1>&nbsp;</h1>
{#if verifica == "{}"}
<p align="center" >Carrello vuoto, aggiungi prodotti al carrello visitando le pagine del sito</p>
{:else}
<div class="list">
    
 
    <ul class="list-group">
        <li class="list-group-item" align="center">
            <button class="uk-button uk-button-danger" on:click={removeall}>Cancella tutti i prodotti nel carrello</button>
        </li>
    {#each cart as prod,i}
        
        <li class="list-group-item" id={prod.id + "item"}>
            <div class="container">
                <div class="row">
                  <div class="col" >
                    <img src={"/images/" + prod.id + ".jpg"} alt="Foto del prodotto"  class="imgcart"/>
                  </div>
                  <div class="col" > 
                  
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <p></p>
                                <p>{prod.id}</p>
                                {#if prod.id != "Cupcake" && prod.id != "Muffin" && prod.id != "Cakepop"}
                                <p>Peso: {cart[i].qty*250}g</p>
                                {:else}
                                    <p>Quantità: {cart[i].qty}</p>
                                {/if}

                            </div>
                            <div class="col">
                                <p></p>
                            </div>
                        
                            <div class="col center">
                
                                        <img src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-bin-cleaning-kosonicon-solid-kosonicon.png"  class="cestino" id={prod.id} on:click={bin}/>

                                 
                            </div>
                        </div>
                    </div>
        
                    <Stepper qty={prod.qty} ida={i} prod={prod.id} on:minus={min} on:plus={plu}></Stepper>
             
                </div>
                </div>
            </div>
        </li>

       
      
    {/each}
</ul>
</div>
{/if}





    <div align="center">
     <a href="/pagamenti"><button class="uk-button uk-button-primary">Completa l'ordine</button></a>
     </div>
     <h1>&nbsp;</h1>
