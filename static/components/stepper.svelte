<script>
    export let qty;
    export let prod
    import { initcart } from '../../static/js/cart.js';
    import {onMount} from 'svelte';
    let cart = [];
    onMount(()=>{
        cart = initcart()
    })
    
    function plus(e){
        cart.forEach((value,i)=>{
            console.log(i)
            if(value.id == prod){
                    cart[i].qty++;
                    qty++;
                    console.log("OK")
            }
        })
       localStorage.setItem("cart",JSON.stringify(cart));
    }
    let itemSize = 300;
</script>
<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/grids-responsive-min.css" />
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossorigin="anonymous">
</svelte:head>


<div class="pure-g">
    <div class="pure-u-1-3">
        <button class="uk-button uk-button-default" on:click={plus}>+</button>
    </div>
    <div class="pure-u-1-3" align="center">
        <p class="qtyprod">{qty}</p>
    </div>
    <div class="pure-u-1-3">
        <button class="uk-button uk-button-default">-</button>
    </div>
</div>
<style>
    .qtyprod{
        margin-top: 15px;
    }
</style>