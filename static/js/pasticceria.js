import { onMount } from "svelte";
import {pusha,initcart} from '/static/js/cart.js';
import { dialogs } from "svelte-dialogs";
export function initpage(){
  onMount(() => {
  initcart();
  if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {

  } else {
    document.getElementById("card").style.width = "60%";
  }
});
}

export function biscotti(e) {
  dialogs.prompt("Quanti sacchetti da 250G vuoi?").then(output=>{
    try {
      pusha(e.path[0].id, output[0],5)
    } catch (error) {
      
    }
       
      
  }
     
      
  )
  
  
}