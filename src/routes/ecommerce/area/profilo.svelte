<script lang="ts">
    import { onMount } from 'svelte';
    import { dialogs } from 'svelte-dialogs';
    let email: String | null, cf: String, nascita: String, telefono: String;
    onMount(async()=>{
       email = sessionStorage.getItem("user");
       let dettagli = JSON.parse(sessionStorage.getItem("dettagliCliente"));
        cf = dettagli.cf;
        nascita = dettagli.nascita;
        telefono = dettagli.telefono;
    });
   
</script>


<div class="container">
    <fieldset class="uk-fieldset field">
        <center>
            <br/>
            <legend class="uk-legend">Il mio profilo</legend>
        </center>
        <div class="uk-margin">
            <p>E-Mail</p>
            <input class="uk-input" type="text" placeholder="E-mail" readonly bind:value={email}>
        </div>

        <div class="uk-margin">
            <p>Numero di telefono</p>
            <input class="uk-input" type="text" placeholder="Numero di telefono" readonly bind:value={telefono}>
        </div>

        <div class="uk-margin">
            <p>Codice Fiscale</p>
            <input class="uk-input" type="text" placeholder="Codice Fiscale" readonly bind:value={cf}>
        </div>

        <div class="uk-margin">
            <p>Data di nascita</p>
            <input class="uk-input" type="text" placeholder="Data di nascita" readonly bind:value={nascita}>
        </div>

    </fieldset>
</div>
<style>
    .container{
        margin: 20px;
        background-color: white;
        border-radius: 8px;
    }
    .field{
        margin: 20px;
    }
</style>