import { loadScript } from "@paypal/paypal-js";
import {  collection, getFirestore, updateDoc, arrayRemove, arrayUnion, doc } from "firebase/firestore"; 
import { dialogs } from 'svelte-dialogs';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const endpoint:string = "https://lot4n3buq1.execute-api.eu-south-1.amazonaws.com/default/pydb";
let totale;
let user:string,pass:string,newordini:Array<object>;
function putorder(){
  fetch(endpoint, {
    method: "POST", 
    body: JSON.stringify({
      type: "create",
      username: user,
      password: pass,
      ordini: newordini
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data.Item);
      if (data.Item == null) {
        alert("Account non esistente");
      } else {
        console.log(data.Item.ordini)
        return data.Item.ordini
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
export async function init(totale:string,nome:string,cognome:string,indirizzo:string,cap:string,domicilio:boolean) {
  
  let paypal;

  try {
    paypal = await loadScript({
      "client-id":
        "AXG9tYzRz10-7z2Hhro6tScAENTIHDtqWdFL9gqCx2hcH8-VqKG6gs1n3yMZzge6UvLVECsfdtezoLTk",
    });
  } catch (error) {
    console.error("failed to load the PayPal JS SDK script", error);
  }

  if (paypal) {
    try {
      
      await paypal
      .Buttons({
          
          createOrder: function (data, actions) {
            
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totale,
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            console.log("approve")
            return actions.order.capture().then(async function (details) {
              const db = getFirestore();
              const auth = getAuth();
              alert("Payment successful!");
              
              onAuthStateChanged(auth, async(user) => {
                if (user) {
                    let email = user.email;
                    const ordinidb = doc(db, "users", `${email}`);
                    await updateDoc(ordinidb, {
                     ordini: arrayUnion(JSON.stringify( {
                      "nome": nome,
                      "cognome": cognome,
                      "indirizzo": indirizzo,
                      "cap": cap,
                      "domicilio": domicilio,
                      "totale": totale,
                      "id": Math.floor(Date.now() / 1000)
                    }))
                    });
                } else {
                    dialogs.alert("Devi eseguire l'accesso per accedere a questa pagina");
                }
                });
            });
          },
          onError: function (err) {
            alert("Something went wrong");
            console.log("Something went wrong", err);
          },
        })
        .render("#paypal");
    } catch (error) {
      console.error("failed to render the PayPal Buttons", error);
    }
  }
}
export function getorder(user:string,pass:string) {
 
  }

export function getvariable(username:string,password:string,ordinipass,ordineora:object){
  user = username;
  password = pass;
  newordini = ordinipass;
  newordini.push(ordineora);
}
