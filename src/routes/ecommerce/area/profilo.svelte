<script lang="ts">
    import { onMount } from 'svelte';
    import { dialogs } from 'svelte-dialogs';
    let email: String | null, cf: String, nascita: String, telefono: String, pass: String, newemail: String;
    onMount(async()=>{
        if(sessionStorage.getItem("user") == undefined){
            location.href="/ecommerce/login";
        }
       email = sessionStorage.getItem("user");
       newemail = email;
       let dettagli = JSON.parse(sessionStorage.getItem("dettagliCliente"));
       console.log(dettagli);
        cf = dettagli.cf;
        nascita = dettagli.nascita;
        telefono = dettagli.telefono;
        console.log(dettagli.cf);
    });

    function update() {
        console.log('http://localhost:8000/db.php?type=updateuser&email=' + email + "&password=" + pass);
        fetch('http://localhost:8000/db.php?type=updateuser&email=' + email + "&password=" + pass, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "user": newemail,
            "telefono": telefono,
            "cf": cf,
            "nascita": nascita
        }),
        })
        .then(response => response.text())
        .then(data => {
        console.log('Success:', data);
        dialogs.alert("Dati aggiornati");
        })
        .catch((error) => {
        console.error('Error:', error);
        dialogs.alert("Errore nell'aggiornamento dei dati");
        });

    }
   
</script>


<div class="container">
    <fieldset class="uk-fieldset field">
        <center>
            <br/>
            <legend class="uk-legend">Il mio profilo</legend>
        </center>
        <div class="uk-margin">
            <p>E-Mail</p>
            <input class="uk-input" type="text" placeholder="E-mail" readonly    bind:value={newemail}>
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
            <input class="uk-input" type="date" placeholder="Data di nascita" readonly bind:value={nascita}>
        </div>
        <!-- <div class="uk-margin">
            <p>Scrivi la password per confermare le modifiche</p>
            <input class="uk-input" type="text" placeholder="Password" readonly bind:value={pass}>
        </div> -->
        <!-- <center>
            <button class="uk-button uk-button-primary" on:click={update}>Aggiorna i dati</button>
            <hr/>
        </center> -->
    </fieldset>
</div>
<style>
    .container{
        margin: 20px;
        background-color: white;
        border-radius: 8px;
    }
    hr{
        opacity: 0;
    }
    .field{
        margin: 20px;
    }
</style>