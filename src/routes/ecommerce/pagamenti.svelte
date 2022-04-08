<script>
    import { dialogs } from "svelte-dialogs";
    import {init} from '../../../static/js/paypal'
    // function pag(){
    //   dialogs.modal(htmlString)
    //   var satispay = SatispayWebButton.configure({
    //   paymentId: '8f27fbbc-ff4b-45eb-98d0-1cadb3a0afaa',
    //   completed: function() {
    //     // executed on payment success or failure
    //   }
    // })
    
    // document.getElementById('pay-with-satispay').addEventListener('click', function(e) {
    //   e.preventDefault()
    //   satispay.open()
    // })
    // }
        init()
    const htmlString =
      ` 
      <div>
    <img src="/images/paypal.png" />
    <img src="/images/satispay.png" alt="Pay with Satispay" id="pay-with-satispay"  />
      </div>
      `;
    </script>
    <svelte:head>
      <!-- <script src="https://staging.online.satispay.com/web-button.js"></script> -->
    
      <script src="https://www.paypal.com/sdk/js?client-id=ASqKz4snBp2uAUFrxFtMgQXITDtdpDKBaVrXmQj9C547HeLMwPApIpK2eeLBI2USqG_QrpWRK9Ay3rAI"></script>
    <!-- <script type="module">
        paypal.Buttons().render('#paypal');
    </script> -->

     
    </svelte:head>
    <br>
    <br>
        <fieldset class="uk-fieldset">
         
            <legend class="uk-legend">Modulo di pagamento</legend>
    
            <div class="uk-margin">
                <input class="uk-input" type="text" placeholder="Nome">
                <br>
                <br>
    
                  <input class="uk-input" type="text" placeholder="Cognome">
                  <br>
                  <br>
    
                    <input class="uk-input" type="text" placeholder="Indirizzo di consegna">
                    <br>
                    <br>
                    <input class="uk-input" type="text" placeholder="CAP">
                    <br>
                    <br>
                    <input type="checkbox" id="domicilio" name="domicilio">
             <label for="domicilio">Consegna a domicilio</label>

             <br>
             <br>
            </div>
            <div align="center">
                

    </div>
    
        </fieldset>
        <div id="paypal" align="center"/>
    <h1>&nbsp;</h1>