<script>
    export let qty;
    export let prod
    import { initcart } from '../../static/js/cart.js';
    import {onMount} from 'svelte';
    import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

    let cart = [];
    let totale;
    export let ida;
    onMount(()=>{
        cart = initcart();
        totale = parseInt(localStorage.getItem('totale'));
        
    })
    function minus(e){
        dispatch('minus', {
        text: ida
        });
        cart.forEach((value,i)=>{
           
            if(value.id == prod){
                if(value.qty>1){
                    cart[i].qty--;
                    qty--;
                    totale -= 5
                }else{
                    alert("Vuoi cancellare il prodotto?")
                    cart = cart.filter(prodnf =>{
                    prodnf != prod
                })
                localStorage.setItem("cart",JSON.stringify(cart))
                document.getElementById(e.path[0].id+"item")
                location.reload()
                }
            }
        })
        localStorage.setItem("cart",JSON.stringify(cart));
        localStorage.setItem("totale", totale);
    }

    function plus(e){
        dispatch('plus', {
        text: ida
        });
        cart.forEach((value,i)=>{
            if(value.id == prod){
                    cart[i].qty++;
                    qty++;
                    totale += 5
                    localStorage.setItem("cart",JSON.stringify(cart));
            }
        })
       localStorage.setItem("cart",JSON.stringify(cart));
       localStorage.setItem("totale", totale)
    }
    let itemSize = 300;
</script>
<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/grids-responsive-min.css" />
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossorigin="anonymous">
</svelte:head>


<div class="pure-g">
    <div class="pure-u-1-3"  align="center">
        <button class="uk-button uk-button-default" on:click={plus}>+</button>
    </div>
    <div class="pure-u-1-3" align="center" >
        <p class="qty">{qty}</p>
    </div>
    <div class="pure-u-1-3"  align="center">
        <button class="uk-button uk-button-default" on:click={minus}>-</button>
    </div>
</div>
<style>
    .qty{
        text-align: center;
        position: relative;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
</style>