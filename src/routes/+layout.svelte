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
	:global(:root) {
		--background: black;
		--text: white;
		--accent: red;
	}

	:global(*) {
		font-family: monospace;
	}

	:global(body) {
		font-size: 16px;
		color: var(--text);
		background-color: var(--background);
		margin: 0;
		padding-inline: 0.5rem;
		max-width: 800px;
		margin-inline: auto;
	}

	:global(h1) {
		color: var(--accent);
	}

	:global(a) {
		color: var(--text);
	}

	:global(a:hover) {
		font-weight: bold;
	}

	:global(.error) {
		color: tomato;
	}

	:global(.success) {
		color: greenyellow;
	}
</style>
