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
		--background: #000000;
		--text: white;
		--accent: red;
		--light-accent: #a8dadc;
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
	}

	:global(h1) {
		color: var(--accent);
	}

	:global(a) {
		color: var(--text);
	}

	:global(a:hover) {
		color: var(--light-accent);
	}

	body {
		max-width: 800px;
		margin-inline: auto;
	}
</style>
