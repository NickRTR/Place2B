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
					<p>{building.title}</p>
				{/each}
			</div>
		</div>

		<div class="rooms">
			<h3 class="headline" id="rooms">Rooms</h3>
			<div class="elements">
				{#each data.rooms as room}
					<p>{room.title}</p>
				{/each}
			</div>
		</div>

		<div class="positions">
			<h3 class="headline" id="positions">Positions</h3>
			<div class="elements">
				{#each data.positions as position}
					<p>{position.title}</p>
				{/each}
			</div>
		</div>

		<!-- <div class="items">
			<p>
				<strong>Items:</strong>
				{#each data.items as item}
					<span>{item.title}, </span>
				{/each}
			</p>
		</div> -->
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
		border: 3px dotted var(--accent);
	}

	.elements {
		border-left: 3px solid var(--accent);
		padding-left: 0.5rem;
	}
</style>
