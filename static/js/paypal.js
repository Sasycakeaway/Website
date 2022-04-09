import { loadScript } from "@paypal/paypal-js";
import { onMount } from "svelte";
let totale;
export async function init(){
    onMount(()=>totale = localStorage.getItem("totale"))
    let paypal;

    try {
        paypal = await loadScript({ "client-id": "AXG9tYzRz10-7z2Hhro6tScAENTIHDtqWdFL9gqCx2hcH8-VqKG6gs1n3yMZzge6UvLVECsfdtezoLTk" });
    } catch (error) {
        console.error("failed to load the PayPal JS SDK script", error);
    }

    if (paypal) {
        try {
            await paypal.Buttons({
               
                  createOrder: function (data, actions) {
                    // Set up the transaction
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
                    // Capture order after payment approved
                    return actions.order.capture().then(function (details) {
                      alert("Payment successful!");
                    });
                  },
                  onError: function (err) {
                    // Log error if something goes wrong during approval
                    alert("Something went wrong");
                    console.log("Something went wrong", err);
                  },
                }).render("#paypal");
        } catch (error) {
            console.error("failed to render the PayPal Buttons", error);
        }
    }
}
init()