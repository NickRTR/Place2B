<script>
	import { enhance } from "$app/forms";

	export let data;
</script>

<body>
	<form method="POST" action="?/addBuilding" class="buildings" use:enhance>
		<h2>Buildings</h2>
		<input type="text" name="title" id="title" required />
		<button type="submit">Add building</button>
	</form>

	<form method="POST" action="?/addRoom" class="rooms" use:enhance>
		<h2>Rooms</h2>
		<input type="text" name="title" id="title" required />
		<select name="building" id="building">
			{#each data.buildings as building}
				<option value={building.id}>{building.title}</option>
			{/each}
		</select>
		<button type="submit">Add room</button>
	</form>

	<form method="POST" action="?/addPosition" class="positions" use:enhance>
		<h2>Positions</h2>
		<input type="text" name="title" id="title" required />
		<select name="room" id="room">
			{#each data.rooms as room}
				<option value={room.id}>{room.title}</option>
			{/each}
		</select>
		<button type="submit">Add position</button>
	</form>
</body>
