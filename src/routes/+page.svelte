<script>
	export let data;
</script>

<body>
	<h1>Place2B</h1>

	{#if data.error}
		<p class="error">Error: {data.error.message}</p>
	{:else}
		<div class="buildings">
			<h3 class="headline" id="buildings">Buildings</h3>
			<div class="elements">
				{#each data.buildings as building}
					<p class="element">{building.title}</p>
				{/each}
			</div>
		</div>

		<div class="rooms">
			<h3 class="headline" id="rooms">Rooms</h3>
			<div class="elements">
				{#each data.rooms as room}
					<p class="element">{room.title}</p>
				{/each}
			</div>
		</div>

		<div class="positions">
			<h3 class="headline" id="positions">Positions</h3>
			<div class="elements">
				{#each data.positions as position}
					<p class="element">{position.title}</p>
				{/each}
			</div>
		</div>

		<div class="items">
			<!-- <h3 class="headline" id="items">Items</h3> -->
			<div class="elements">
				{#each data.items as item}
					<p class="element">{item.title}</p>
				{/each}
			</div>
		</div>
	{/if}
</body>

<style>
	.error {
		color: red;
	}

	.headline {
		display: inline;
		padding: 0.25rem 0.5rem;
	}

	#buildings {
		border-radius: 0.5rem;
		border: 3px solid var(--accent);
	}

	#rooms {
		border-radius: 2rem;
		border: 3px solid var(--accent);
	}

	#positions {
		border-radius: 2rem;
		border: 3px dashed var(--accent);
	}

	/* #items {
		margin-top: 2rem;
		border: 3px solid var(--light-accent);
	} */

	.items {
		border-top: 3px solid var(--accent);
		/* padding-top: 1.5rem; */
	}

	.items .elements {
		border: none;
		padding-left: 0;
	}

	.elements {
		border-left: 3px solid var(--accent);
		padding-left: 0.5rem;
		display: flex;
		max-width: 300px;
		flex-wrap: wrap;
		margin-block: 1rem;
	}

	.element {
		border: 2px solid white;
		border-radius: 0.5rem;
		padding: 0.2rem;
		margin: 0.25rem;
	}
</style>
