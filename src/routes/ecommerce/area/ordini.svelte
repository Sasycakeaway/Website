<script lang="ts">
    import { Circle3 } from 'svelte-loading-spinners'
    import VirtualList from 'svelte-tiny-virtual-list';
    import { doc, getDoc, getFirestore } from "firebase/firestore";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from 'svelte';
    import { dialogs } from 'svelte-dialogs';
    let ordini: Array<Object> = [], loading: boolean = true;
    const auth = getAuth();
    const db = getFirestore();
    onMount(async()=>{
        onAuthStateChanged(auth, async(user) => {
        if (user) {
            let email = user.email;
            const docRef = doc(db, "users", `${email}`);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                let data = docSnap.data();
                console.log(data);
                ordini = data.ordini;
                console.log(ordini)
                loading = false;
            } else {
                dialogs.alert("Account non trovato");
            }

        } else {
            dialogs.alert("Devi eseguire l'accesso per accedere a questa pagina");
        }
        });
        
        console.log(ordini)

    });
</script>

<br/>
{#if loading == false}
<div class="container">
<VirtualList
    width="100%"
    height={400}
    itemCount={ordini.length}
    itemSize={50}>
  <ul uk-accordion slot="item" let:index let:style {style}>
        <li class="uk-open order">
            <a class="uk-accordion-title" href="#">Ordine numero: {JSON.parse(ordini[index]).id}</a>
            <hr/>
            <div class="uk-accordion-content">
                <p>Nome: {JSON.parse(ordini[index]).nome}</p>
                <p>Cognome: {JSON.parse(ordini[index]).cognome}</p>
                <p>Indirizzo: {JSON.parse(ordini[index]).indirizzo}</p>
                <p>CAP: {JSON.parse(ordini[index]).cap}</p>
                <p>Consegna a domicilio: {JSON.parse(ordini[index]).domicilio}</p>
                <p>Totale: {JSON.parse(ordini[index]).totale}</p>
            </div>
        </li>

    </ul>
</VirtualList>
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