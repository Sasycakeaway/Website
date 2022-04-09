<script>
    import { initcart } from '../../../static/js/cart.js';
    import {onMount} from 'svelte';
    import VirtualList from 'svelte-tiny-virtual-list';
    let cart = [];
    let start;
	let end;
    let check;
    onMount(()=>{
        cart = initcart()
        
    })
    
    function bin(e){
        cart.forEach((value,i)=>{
            console.log(i)
            if(value.id == e.path[0].id){
                if(value.qty>1){
                    cart[i].qty=cart[i].qty-1;
                }else{
                    console.log(i)
                    delete cart[i];
                    document.getElementById(e.path[0].id+ "card").innerHTML="";
                }
            }
        })
       localStorage.setItem("cart",JSON.stringify(cart));
    }
    let itemSize = 300;
    </script>
<svelte:head>
    <link rel="stylesheet" href="/css/cart.css">
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/grids-responsive-min.css" />
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossorigin="anonymous">

</svelte:head>
<h1>&nbsp;</h1>
<div class="list">

 
        
    
	<VirtualList
		height={2000}
		width="auto"
		itemCount={cart.length}
		{itemSize}>
		<div slot="item" let:index let:style {style} class="row" id={cart[index].id + "card"}>
            <div class="pure-g">
                <div class="pure-u-1-6">
		<img src={"/images/" + cart[index].id + ".jpg"} alt="Foto del prodotto"  class="imgcart"/>
    </div>
   
    <div class="pure-u-1-6 info">
        <p class="nomeprod">{cart[index].id}</p>
        <p class="qtyprod">Quantità:{cart[index].qty}</p>
        <img src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-bin-cleaning-kosonicon-solid-kosonicon.png" id={cart[index].id} on:click={bin}/>
    </div>
    <div class="pure-u-1-6"></div>
    <div class="pure-u-1-6"></div>
    </div>
		</div>
	</VirtualList>

</div>



    <div align="center">
     <a href="/pagamenti"><button class="uk-button uk-button-primary">Completa l'ordine</button></a>
     </div>
     <h1>&nbsp;</h1>
