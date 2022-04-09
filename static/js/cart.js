import { writable } from "svelte/store";
export let cart = []
export let totale = 0;
export const cartstore = writable('cart');
export const totstore = writable('totale');
export function initcart() {
    if (localStorage.getItem('cart') == null) {

        let cart = []
    } else {
        let cart = JSON.parse(localStorage.getItem('cart'))
    }
}
export function pusha(ida, qty, prezzo) {
    let count=0
        for (var i = 0; i < cart.length; i++) {
                if (cart[i].id == ida) {
                    count++;
                    console.log("trovato")
                    cart[i].qty = cart[i].qty+ parseInt(qty)
             
            }
    }
    if (count == 0) {
        cart.push({id:ida,qty:parseInt(qty)})
    }
    console.log(prezzo)
    totale += prezzo*parseInt(qty);
    console.log(totale)
    totstore.set(totale);
    totstore.subscribe(value =>{
        localStorage.setItem("totale", value)
    })
    cartstore.set(JSON.stringify(cart))
    cartstore.subscribe(value => {
        localStorage.setItem("cart", value);
    });
}
