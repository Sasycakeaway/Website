<script>
    import { initcart } from '../../../static/js/cart.js';
    import {onMount} from 'svelte';
    import VirtualList from 'svelte-tiny-virtual-list';
    import Stepper from '../../../static/components/stepper.svelte'
    let cart = [];
    let start;
	let end;
    let totale;
    let verifica;
    function check() {
        console.log("Entro")
        console.log(JSON.stringify(cart) )
        if(JSON.stringify(cart) == "[]"){
            console.log("OK")
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
    function bin(e) {
        console.log(e)
        cart.forEach((value,i)=>{
            if(value.id == e.path[0].id){
                delete cart[i]
                localStorage.setItem("cart",JSON.stringify(cart))
            }
        })
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
<p>Ciao</p>
{:else}
<div class="list">
    
 
    <ul class="list-group">
        <li class="list-group-item" align="center">
            <button class="uk-button uk-button-danger">Cancella tutti i prodotti nel carrello</button>
        </li>
    {#each cart as prod}
        
        <li class="list-group-item">
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
                                <p>Peso: {prod.qty*250}g</p>
                               

                            </div>
                            <div class="col">
                                <p></p>
                            </div>
                        
                            <div class="col center">
                
                                        <img src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-bin-cleaning-kosonicon-solid-kosonicon.png"  class="cestino" id={prod.id} on:click={bin}/>

                                 
                            </div>
                        </div>
                    </div>
        
                    <Stepper qty={prod.qty} prod={prod.id}></Stepper>
             
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
