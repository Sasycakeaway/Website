import { loadScript } from "@paypal/paypal-js";
import { dialogs } from "svelte-dialogs";
import { v4 as uuidv4 } from "uuid";
import emailjs from "@emailjs/browser";
let totale;
let user, pass, newordini;
function putorder(
  nome,
  cognome,
  indirizzo,
  cap,
  domicilio,
  email,
  pass,
  cart
) {
  let regDate = new Date();
  let isodate = regDate.toISOString().split('T')[0];
  let id = uuidv4() + new Date().getTime().toString();
  fetch("http://149.102.141.16/addorder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
      cart: cart,
      timestamp: isodate
    }),
  })
    .then(async (response) => {
      console.log(await response.text());
      try {
        emailjs.send("service_ccwtjlr", "template_cavi0no", {
          id: id,
          nome: nome,
          cognome: cognome,
          indirizzo: indirizzo,
          email: email,
        });
      } catch (error) {
        console.log(error);
      }

      sessionStorage.clear();
    })
    .catch((err) => {
      dialogs.alert(
        "Errore durante la registrazione dell'ordine, contattarci, fornendo i dettagli del pagamento per richiedere il rimborso"
      );
      console.error(err);
    });
}
export async function init(
  totale,
  nome,
  cognome,
  indirizzo,
  cap,
  domicilio,
  email,
  pass,
  cart
) {
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
                    value: totale,
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            console.log("approve");
            return actions.order.capture().then(async function (details) {
              alert("Payment successful!");

              putorder(
                nome,
                cognome,
                indirizzo,
                cap,
                domicilio,
                email,
                pass,
                cart
              );
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
      location.href= "/ecommerce/pagamenti.html";
    }
  }
}
export function getorder(user, pass) {}

export function getvariable(
  username,
  password,
  ordinipass,
  ordineora
) {
  user = username;
  password = pass;
  newordini = ordinipass;
  newordini.push(ordineora);
}
