<script>
	export let data;
</script>

<body>
	<h1>Place2B</h1>

	<div class="buildings">
		<p>
			<strong>Buildings:</strong>
			{#each data.buildings as building}
				<span>{building.title}, </span>
			{/each}
		</p>
	</div>

	<div class="rooms">
		<p>
			<strong>Rooms:</strong>
			{#each data.rooms as room}
				<span>{room.title}, </span>
			{/each}
		</p>
	</div>

	<div class="positions">
		<p>
			<strong>Positions:</strong>
			{#each data.positions as position}
				<span>{room.title}, </span>
			{/each}
		</p>
	</div>
</body>
