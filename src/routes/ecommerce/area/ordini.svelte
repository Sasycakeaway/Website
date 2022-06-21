<script lang="ts">
    import { Circle3 } from 'svelte-loading-spinners'
    import VirtualList from 'svelte-tiny-virtual-list';
    import { onMount } from 'svelte';
    import { dialogs } from 'svelte-dialogs';
    let ordini: Array<Object> = [], loading: boolean = true;
    onMount(async()=>{
        ordini = await JSON.parse(sessionStorage.getItem("ordini"));
        console.log(ordini);
        loading = false;
    });
</script>
<svelte:head>
    <!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/css/uikit.min.css" />

<!-- UIkit JS -->
<script src="https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/js/uikit-icons.min.js"></script>
</svelte:head>
<br/>
{#if loading == false}
<div class="container">
  <ul uk-accordion >
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
            </div>
        </li>
        {/each}
    </ul>
</div>
{:else}
<center>
<Circle3 size="128" unit="px" duration="2s"></Circle3>
</center>
{/if}

<style>
    .order{
        /* background-color: white; */
    }
    .container{
        margin: 20px;
    }
</style>