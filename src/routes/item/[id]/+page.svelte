<script>
	import QrCode from "svelte-qrcode";
	import { page } from "$app/stores";

	export let data;
</script>

<main>
	<h1>{data.item.title}</h1>

	{#if data.error}
		<p class="error">Error: Failed to retrieve data!</p>
	{/if}

	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img src={data.image} width="50%" alt="(No image available)" />

	<p><strong>Building</strong>: {data.building.title}</p>
	<p><strong>Room</strong>: {data.room.title}</p>
	<p><strong>Position</strong>: {data.position.title}</p>

	<hr />

	<p>
		<strong>QR-Code to this page:</strong><br /><br />
		<QrCode value={$page.url.href} /><br /><br />
		<i>Right click -> Open in new tab -> print</i>
	</p>
</main>

<style>
	img {
		font-style: italic;
	}
</style>
