<script>
	import { enhance } from "$app/forms";

	export let data;
	export let form;
</script>

<main>
	<h1>Place2B - Delete</h1>

	{#if form?.error}
		<p class="error">Error: Failed to add data!</p>
	{:else if form?.success}
		<p class="success">Success!</p>
	{/if}

	<form method="POST" action="?/deleteBuilding" class="buildings" use:enhance>
		<h2>Buildings</h2>
		<select name="building" id="building" required>
			{#each data.buildings as building}
				<option value={building.id}>{building.title}</option>
			{/each}
		</select>
		<button type="submit">Delete building</button>
	</form>

	<form method="POST" action="?/deleteRoom" class="rooms" use:enhance>
		<h2>Rooms</h2>
		<select name="room" id="room" required>
			{#each data.rooms as room}
				<option value={room.id}>{room.title}</option>
			{/each}
		</select>
		<button type="submit">Delete room</button>
	</form>

	<form method="POST" action="?/deletePosition" class="positions" use:enhance>
		<h2>Positions</h2>
		<select name="position" id="position" required>
			{#each data.positions as position}
				<option value={position.id}>{position.title}</option>
			{/each}
		</select>
		<button type="submit">Delete position</button>
	</form>

	<form method="POST" action="?/deleteItem" class="items" use:enhance>
		<h2>Items</h2>
		<select name="item" id="item" required>
			{#each data.items as item}
				<option value={item.id}>{item.title}</option>
			{/each}
		</select>
		<button type="submit">Delete item</button>
	</form>

	<br />
	<hr />

	<p class="error">
		Be careful, deleting a building deletes all its rooms, positions and items. Deleting a room
		deletes all its corresponding positions and items and deleting a position deletes all its items. <u
			><strong>No confirmation needed</strong></u
		>.
	</p>
</main>
