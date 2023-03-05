<script>
	export let data;

	console.log(data);
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
</main>

<style>
	img {
		font-style: italic;
	}
</style>
