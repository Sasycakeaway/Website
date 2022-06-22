import { loadScript } from "@paypal/paypal-js";
import { dialogs } from 'svelte-dialogs';
let totale: number;
let user:string,pass:string,newordini:Array<object>;
function putorder(nome: string, cognome: string, indirizzo: string, cap: string, domicilio: boolean, email: string){
  fetch("http://localhost:8000/db.php?type=putorder", {
    method: "POST", 
    body: JSON.stringify({
      id: new Date().getTime(),
      nome: nome,
      cognome: cognome,
      indirizzo: indirizzo,
      cap: cap,
      domicilio: domicilio,
      email: email,
      totale: totale
    }),
  }).then(async(response) => console.log(await response.text()))
  .catch(err => console.error(err));
}
export async function init(totale:string,nome:string,cognome:string,indirizzo:string,cap:string,domicilio:boolean, email: string) {
  
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
              alert("Payment successful!");
              
              putorder(nome,cognome, indirizzo, cap, domicilio,email);
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
