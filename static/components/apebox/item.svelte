<script>
  import { apebox } from '../../js/pasticceria.js';
  import  Checkbox  from '../../components/apebox/check.svelte';
  import { dialogs } from 'svelte-dialogs';
</script>
<link rel="stylesheet" href="/css/apebox.css" />
<div class="tot">
  <div
    class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center"
    uk-grid
  >
    <div>
      <div>
        <div
          class="uk-card uk-card-default"
          uk-height-viewport="expand: true;min-height: 1200"
        >
          <div class="uk-card-body">
            <img src="/images/Benvenuti al nord.jpg" class="cardimg" alt="" />
            <h4>&nbsp;</h4>
            <h3 class="uk-card-title nomi">APEBOX "BENVENUTI AL NORD"</h3>
            <h4>&nbsp;</h4>
            <ul class="uk-list uk-list-disc">
              <li style="opacity:0" />
              <li>SELEZIONE DI FORMAGGI E AFFETTATI DEL NORD ITALIA</li>
              <li>BOTTONCINI DI PANE CON LARDO</li>
              <li>FOCACCIA GENOVESE CON PATE' DI OLIVE TAGGIASCHE</li>
              <li>MINIPIADA AL CRUDO DI PARMA</li>
              <li>TOCCHETTI DI FRICO SU PANE NERO</li>
            </ul>
            <p class="testisp">12 &euro;</p>
            <button class="uk-button uk-button-primary carbut" id="Benvenuti al nord" on:click={(event) => apebox(event)}>Aggiungi al carrello</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div
          class="uk-card uk-card-default"
          uk-height-viewport="expand: true;min-height: 1200"
        >
          <div class="uk-card-body">
            <img src="/images/Benvenuti al sud.jpg" class="cardimg" alt="" />
            <h4>&nbsp;</h4>
            <p />
            <h3 class="uk-card-title">APEBOX "BENVENUTI AL SUD"</h3>

            <ul class="uk-list uk-list-disc sud">
              <li>SELEZIONE DI FORMAGGI E AFFETTATI DEL SUD ITALIA</li>
              <li>CASSATINE SICILIANE SALATE</li>
              <li>BABA' ALLA CREMA DI PECORINO</li>
              <li>ZEPPOLE SALATE AL FORNO</li>
              <li>BISCOTTINI SALATI DELLA CASA</li>
              <li>TETTE DELLE MONACHE SALATE</li>
            </ul>
            <p class="testisp">15 &euro;</p>
            <button class="uk-button uk-button-primary carbut" id="Benvenuti al sud" on:click={(event) => apebox(event)}>Aggiungi al carrello</button>

          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div
          class="uk-card uk-card-default"
          uk-height-viewport="expand: true;min-height: 1200"
        >
          <div class="uk-card-body">
            <img src="/images/La grande abbuffata.jpg" class="abimg" alt="" />
            <h4>&nbsp;</h4>
            <p />
            <h3 class="uk-card-title">APEBOX "LA GRANDE ABBUFFATA"</h3>

            <ul class="uk-list uk-list-disc sud">
              <li>SELEZIONE DI FORMAGGI E AFFETTATI MISTI</li>
              <li>FLAN DI ZUCCHINE CON SALSA DI TOMA</li>
              <li>BISCOTTINI SALATI DELLA CASA</li>
              <li>TARTELLETTE ALLA CREMA DI PISELLI E BACON CROCCANTE</li>
              <li>INSALATA DI RISO ALLA CANTONESE</li>
              <li>QUICHE LORREIN</li>
            </ul>
            <p class="testisp">15 &euro;</p>
            <button class="uk-button uk-button-primary carbut" id="La grande abbuffata" on:click={(event) => apebox(event)}>Aggiungi al carrello</button>

          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div
          class="uk-card uk-card-default"
          uk-height-viewport="expand: true;min-height: 1110"
        >
          <div class="uk-card-body">
            <img src="/images/Il vegetariano.jpg" alt="" />
            <h4>&nbsp;</h4>
            <p />
            <h3 class="uk-card-title">APEBOX "IL VEGETARIANO"</h3>

            <ul class="uk-list uk-list-disc sud">
              <li>SELEZIONE DI FORMAGGI MISTI</li>
              <li>FLAN DI ZUCCHINE CON SALSA DI TOMA</li>
              <li>BABA' ALLA CREMA DI PECORINO</li>
              <li>
                TARTELLETTE ALLA CREMA DI PARMIGIANO E VERDURA DI STAGIONE
              </li>
              <li>BRUTTI E BUONI SALATI</li>
            </ul>
            <p class="testisp">12 &euro;</p>
            <button class="uk-button uk-button-primary carbut" id="Il vegetariano" on:click={(event) => apebox(event)}>Aggiungi al carrello</button>

          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div
          class="uk-card uk-card-default"
          uk-height-viewport="expand: true;min-height: 1110"
        >
          <div class="uk-card-body">
            <img src="/images/Il trasformista.png" alt="" />
            <h4>&nbsp;</h4>
            <p />
            <h3 class="uk-card-title trasf">APEBOX "IL TRASFORMISTA"</h3>
            <h4>&nbsp;</h4>

            <p>
              Il box lo trasformi tu come vuoi con gli ingredienti degli altri
              box a scelta!
            </p>
            <button class="uk-button uk-button-primary carbut" id="Il trasformista"  on:click={() => dialogs.modal(Checkbox)}>Aggiungi al carrello</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div
          class="uk-card uk-card-default"
          uk-height-viewport="expand: true;min-height: 1110"
        >
          <div class="uk-card-body">
            <h1>&nbsp;</h1>

            
            <h3 class=" testisp">Si possono accompagnare i box con:</h3>
            <h6>&nbsp;</h6>
            <ul class="uk-list uk-list-disc sud">
              <li>PROSECCO cantine Maschio 20 cl - &euro;2.50</li>
              <li>BOLLICINE cantine Maschio Ros&egrave; 20cl - &euro;2.50</li>
              <li>APEROL SPRITZ 17.5cl - &euro;2.00</li>
              <li>CRODINO o SANBITTER 10cl - &euro;1.20</li>
              <li>
                NEBBIOLO &quot;Vatep&egrave;&quot; superiorie Cantine Bordone
                750 cl - &euro; 8.00
              </li>
              <li>BARBERA cantine Bordone 750 cl - &euro; 6.00</li>
            </ul>
            <h4>&nbsp;</h4>
            <h3 class="testisp">
              Puoi regalarti anche i dolcini di Sasy&lsquo;s
            </h3>
            <h4>&nbsp;</h4>
            <ul class="uk-list uk-list-disc sud">
              <li>TIRAMIS&Uacute;</li>
              <li>PANNA COTTA</li>
              <li>BUNET</li>
              <li>CHEESECAKE</li>
              <li>BAVARESE AI 3 CIOCCOLATI</li>
            </ul>

            <p class="testisp prezzi">3.50 &euro;</p>

            <div class="uk-card-media-bottom" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<h1>&nbsp;</h1>
