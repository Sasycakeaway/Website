<!--
Svelte Simple Modal - Demos
https://github.com/flekschas/svelte-simple-modal
-->

<script>
	import ContentOutside from './ContentOutside.svelte';
	import Content from './Content.svelte';
  import Modal from './Modal.svelte';
	import Popup from './Popup.svelte';
	import { modal } from './stores.js';
</script>

<Modal show={$modal}>
	<Content />
</Modal>

<ContentOutside />