import { loadScript } from "@paypal/paypal-js";
import { dialogs } from 'svelte-dialogs';
import { v4 as uuidv4 } from 'uuid';
import emailjs from '@emailjs/browser';
let totale: number = 1;
let user:string,pass:string,newordini:Array<object>;
function putorder(nome: string, cognome: string, indirizzo: string, cap: string, domicilio: boolean, email: string, pass: string, cart:any){
  let id = uuidv4() + (new Date().getTime()).toString();
  fetch("http://localhost:3001/addorder", {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      nome: nome,
      cognome: cognome,
      indirizzo: indirizzo,
      cap: cap,
      domicilio: domicilio,
      email: email,
      totale: totale,
      password: pass,
      cart: cart
    }),
  }).then(async(response) => {
    console.log(await response.text());
    try {
      emailjs.send("service_ccwtjlr","template_cavi0no",{
        id: id,
        nome: nome,
        cognome: cognome,
        indirizzo: indirizzo,
        email: email
        });
    } catch (error) {
      console.log(error);
    }

    sessionStorage.clear();
  })
  .catch(err => {
    dialogs.alert("Errore durante la registrazione dell'ordine, contattarci, fornendo i dettagli del pagamento per richiedere il rimborso")
    console.error(err)
  });
}
export async function init(totale:string,nome:string,cognome:string,indirizzo:string,cap:string,domicilio:boolean, email: string, pass: string, cart: any) {
  emailjs.init("XI3aGphpOi4C1--qr");

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
                    value: 0.01,
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            console.log("approve")
            return actions.order.capture().then(async function (details) {
              alert("Payment successful!");
              
              putorder(nome,cognome, indirizzo, cap, domicilio,email, pass, cart);
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
