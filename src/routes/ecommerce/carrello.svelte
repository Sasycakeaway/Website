<script>
    import { initcart } from '../../../static/js/cart.js';
    import {onMount} from 'svelte';
    let cart = [];
    onMount(()=>{
        cart = initcart()
    })
    
    function bin(e){
        document.getElementById(e.path[0].id+ "card").innerHTML=""
        localStorage.setItem("cart",JSON.stringify(cart))
    }
    </script>

        {#each cart as prod}
    
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" id={prod.id + "card"} uk-grid>
            <div class="uk-flex-last@s uk-card-media-right uk-cover-container"  >
                <img src={"/images/"+prod.id + ".jpg"} alt="" >
                <!--<canvas width="200" height="200"></canvas>-->
            </div>
            <div>
                <div class="uk-card-body" >
                    <h3 class="uk-card-title">{prod.id}</h3>
                    <p>Quantit&agrave;: {prod.qty}</p>
                    <img src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-bin-cleaning-kosonicon-solid-kosonicon.png" id={prod.id} on:click={bin}/>
                </div>
        
            </div>
        </div>
        
        {/each}

    <div align="center">
     <a href="/pagamenti"><button class="uk-button uk-button-primary">Completa l'ordine</button></a>
     </div>
     <h1>&nbsp;</h1>