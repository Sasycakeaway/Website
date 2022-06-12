<script lang="ts">
    import { onMount } from 'svelte';
    import { doc, getDoc, getFirestore } from "firebase/firestore";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { dialogs } from 'svelte-dialogs';
    let email: String | null, cf: String, nascita: String, telefono: String;
    const db = getFirestore();
    onMount(async()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, async(user) => {
        if (user) {
            email = user.email;
            const docRef = doc(db, "users", `${email}`);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let data = docSnap.data();
                cf = data.cf;
                nascita = data.nascita;
                telefono = data.telefono;
            } else {
                dialogs.alert("Account non trovato");
            }

        } else {
            dialogs.alert("Devi eseguire l'accesso per accedere a questa pagina");
        }
        });
  
    });
   
</script>


<div class="container">
    <fieldset class="uk-fieldset">
        <center>
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
    }
</style>