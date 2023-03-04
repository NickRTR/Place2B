<script>
	import { enhance } from "$app/forms";

	export let data;
	const backupRooms = data.rooms;
	const backupPositions = data.positions;

	let selectedBuilding;
	let selectedRoom;

	$: {
		data.rooms = backupRooms.filter((r) => {
			return selectedBuilding == r.building;
		});

		data.positions = backupPositions.filter((p) => {
			return selectedRoom == p.room;
		});
	}
</script>

<main>
	<form method="POST" action="?/addBuilding" class="buildings" use:enhance>
		<h2>Buildings</h2>
		<input type="text" placeholder="title" name="title" id="title" required />
		<button type="submit">Add building</button>
	</form>

	<form method="POST" action="?/addRoom" class="rooms" use:enhance>
		<h2>Rooms</h2>
		<input type="text" placeholder="title" name="title" id="title" required />
		<select name="building" id="building" bind:value={selectedBuilding} required>
			{#each data.buildings as building}
				<option value={building.id}>{building.title}</option>
			{/each}
		</select>
		<button type="submit">Add room</button>
	</form>

	<form method="POST" action="?/addPosition" class="positions" use:enhance>
		<h2>Positions</h2>
		<input type="text" placeholder="title" name="title" id="title" required />
		<select name="building" id="building" bind:value={selectedBuilding} required>
			{#each data.buildings as building}
				<option value={building.id}>{building.title}</option>
			{/each}
		</select>
		<select name="room" id="room" required>
			{#each data.rooms as room}
				<option value={room.id}>{room.title}</option>
			{/each}
		</select>
		<button type="submit">Add position</button>
	</form>

	<form method="POST" action="?/addItem" class="items" use:enhance>
		<h2>Items</h2>
		<input type="text" placeholder="title" name="title" id="title" required />
		<select name="building" id="building" bind:value={selectedBuilding} required>
			{#each data.buildings as building}
				<option value={building.id}>{building.title}</option>
			{/each}
		</select>
		<select name="room" id="room" bind:value={selectedRoom} required>
			{#each data.rooms as room}
				<option value={room.id}>{room.title}</option>
			{/each}
		</select>
		<select name="position" id="position" required>
			{#each data.positions as position}
				<option value={position.id}>{position.title}</option>
			{/each}
		</select>
		<button type="submit">Add item</button>
	</form>
</main>

<style>
	h2 {
		color: var(--accent);
	}
</style>
