import { loadScript } from "@paypal/paypal-js";

let totale;
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
            return actions.order.capture().then(function (details) {
              alert("Payment successful!");
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

