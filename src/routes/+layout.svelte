<script>
	import Nav from "$lib/components/Nav.svelte";
</script>

<body>
	<Nav />

	<main>
		<slot />
	</main>
</body>

<style>
	:global(body) {
		margin: 0;
		font-family: monospace;
		font-size: 16px;
	}

	body {
		max-width: 800px;
		margin-inline: auto;
	}
</style>
