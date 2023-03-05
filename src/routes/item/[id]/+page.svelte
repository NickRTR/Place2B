<script>
	export let data;
</script>

<main>
	<h1>{data.item.title}</h1>

	{#if data.error}
		<p style="color: tomato">Error: Failed to retrieve data!</p>
	{/if}

	<img src={data.image} width="50%" alt="not available" />

	<p>Building: {data.building.title}</p>
	<p>Room: {data.room.title}</p>
	<p>Position: {data.position.title}</p>
</main>

<style></style>
