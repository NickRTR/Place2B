<script>
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
	import QRCode from "$lib/components/QRCode.svelte";

	export let data;
</script>

<main>
	<h1>{data.item.title}</h1>

	{#if data.error}
		<p class="error">Error: Failed to retrieve data!</p>
	{/if}

	<!-- svelte-ignore a11y-img-redundant-alt -->
	<form class="image" method="POST" action="?/editItemImage" use:enhance>
		<img src={data.image} width="50%" alt="(No image available)" />
		<br />

		<input type="hidden" name="id" value={data.item.id} />
		<input type="hidden" name="title" value={data.item.title} />
		<input type="hidden" name="room" value={data.room.id} />
		<input type="hidden" name="building" value={data.building.id} />
		<input type="hidden" name="position" value={data.position.id} />
		<input
			type="file"
			placeholder="Add or edit image"
			name="image"
			id="image"
			accept=".jpg, .png, .webp, .gif, .svg"
		/>

		<button type="submit">Add/Edit image</button>
	</form>

	<p><strong>Building</strong>: {data.building.title}</p>
	<p><strong>Room</strong>: {data.room.title}</p>
	<p><strong>Position</strong>: {data.position.title}</p>

	<hr />

	<p>
		<strong>QR-Code to this page:</strong><br /><br />
		<QRCode value={$page.url.href} /><br /><br />
		<i>Right click -> Open in new tab -> print</i>
	</p>
</main>

<style>
	img {
		font-style: italic;
	}
</style>
