<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<link rel="stylesheet" href="/css/about.css">
</svelte:head>
<div class="container">
<div class="timeline">
		<div class="timeline-row">
			<div class="timeline-time">
				<p>Io, alby & the great family</p>
			</div>
			<div class="timeline-content">
				<img src="images/profilo.jpg" class="img"/>
				<h1>&nbsp;</h1>
				<p>Eccomi qui, sono Sabrina ma da sempre, per tutti, sono Sasy. Mamma di tre splendidi ragazzi: Matteo, Francesca e Andrea, e moglie innamoratissima di Alby che mi ha sostenuto in questo mio progetto. Sono appassionata di cucina e in particolar modo di dolci con cui amo rallegrare amici e parenti. Ora che i figli sono cresciuti e autonomi, ho molto tempo libero da dedicare alla mia passione. </p>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				<p>Cosi'e' nata un'idea...</p>
			</div>
			<div class="timeline-content">
				<p>
					Perchè non provare a trasformare questa mia passione in un lavoro, senza vendersi un rene? Per contenere i costi, è nata l'idea della IAD o Impresa Alimentare Domestica. Ma da subito si sono presentate insormontabili difficoltà, perchè all'epoca la normativa europea non era stata recepita dalla Regione Piemonte, che richiedeva l'utilizzo di una doppia cucina nella propria abitazione. Oltre ad essere tecnicamente complicato, la soluzione appariva decisamente onerosa.
				</p>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				<p>Pionieri della IAD</p>
			</div>
			<div class="timeline-content">
				<img src="images/iad.png" class="img"/>
				<h1>&nbsp;</h1>
				<p>Ma i sogni alle volte si avverano. All'inizio del 2019, finalmente si possono aprire le IAD utilizzando la sola cucina di casa. Sono pochissime queste realtà in Piemonte, e noi ci buttiamo a capofitto! Iniziamo i lavori di messa a norma smantellando completamente la vecchia cucina e attrezzando quella nuova in modo conforme alle richieste legislative. Finalmente all'inizio del 2020 siamo opertivi, e con mia grande soddisfazione ho conservato il mio rene e sono in ottima salute!</p>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				<p>I miei corsi di formazione</p>
			</div>
			<div class="timeline-content">
				<img src="images/corsi.jpg" class="img"/>
				<h1>&nbsp;</h1>
				<p>Per affrontare questo percorso mi sono preparata cercando di unire i doni di natura agli insegnamenti di mia mamma. Ma soprattutto ho acquisito una formazione di base, a cui si sono aggiunte letture tecniche e corsi tematici: corso base di pasticceria Mary Cake Decorating, Modeling con Margherita Ferrara e Silvia Mancini, Sugar Paste PME Scuola Italian Cake Design, frolla 3D con Paola Azzolina, Pasticceria Mignon con Roberto Cantolaqua, Colomba e dolci pasquali con Oscar Pagani, e molto altro ancora.</p>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				<p>Manchi solo tu!</p>
			</div>
			<div class="timeline-content">
				<img src="images/tu.jpg" class="img"/>
				<h1>&nbsp;</h1>
				<p>Vieni a trovarmi nel mio laboratorio in Viale Falchera 69, ti farò entrare nel mio mondo e ti farò gustare qualcuna delle mie prelibatezze. Prenota una torta da Sasy's chiamando o scrivendo una mail. Insieme progetteremo il tuo dolce unico e irripetibile. Un compleanno, un evento, una festa, con le mie creazioni diventeranno un momento indimenticabile!</p>
			</div>
		</div>

	</div>
</div>