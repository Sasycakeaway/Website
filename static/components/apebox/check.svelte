<script>
    import { onMount } from 'svelte';
    import { initcart } from "../../../static/js/cart.js";
    let cart;
    let totale;
    onMount(() => {
      cart = initcart();
      totale = localStorage.getItem("totale");
    });
    import { DialogContent } from "svelte-dialogs";
    let trasformista = [];
    let prodotti = ["Selezione di formaggi misti dal Nord Italia","Selezione di affettati misti dal Nord Italia",
    "Selezione di formaggi misti del Sud Italia","Selezione di affettati misti del Sud Italia","Bottoncini di pane con lardo",
    "Focaccia genovese con patè di olive taggiasche","Minipiada di crudo di parma","Tocchetti di frico su pane nero",
    "Cassatine siciliane salate", "Babà alla crema di pecorino", "Biscottini salati della casa", "Tette delle monache salate",
    "Flan di zucchine con salsa di toma", "Tartellette alla crema di piselli e bacon", "Insalata di riso alla cantonese", 
    "Quiche lorrein", "Tartellette alla crema di parmigiano", "Brutti e buoni salati"];
    function checktra() {
      trasformista = []
      prodotti.forEach(prod =>{
        if(document.getElementById(prod).checked)
          trasformista.push(prod)
      })
      if(trasformista.length == 0){
        alert("Non hai selezionato nessun ingrediente, il trasformista non è stato aggiunto al carrello.");
      }else if(trasformista.length > 6){
        alert("Sono stati selezionati più di 6 ingredienti, rimuovere quelli in eccesso.");
        trasformista = [];
      }else{
        cart.push({
          id:"Il trasformista",
          ingredienti:trasformista,
          prezzo: 18
        });
        totale += 18;
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("totale", totale);
      };
      console.log(cart)
    }
</script>
  <svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </svelte:head>
  <DialogContent>
    <svelte:fragment slot="body">   
      <p class="uk-text-meta uk-text-default">Puoi selezionare solo 6 ingredienti</p>
      {#each prodotti as ingredienti}
      <input class="form-check-input" type="checkbox" id={ingredienti} name={ingredienti}>
      <label class="form-check-label" for={ingredienti}>{ingredienti}</label><br>  
      {/each}
      <br>
      <button class="uk-button uk-button-primary" on:click={checktra}>Aggiungi al carrello</button>
    </svelte:fragment>
  </DialogContent>