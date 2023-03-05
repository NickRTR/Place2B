<script>
	import { enhance } from "$app/forms";
	import pb from "$lib/pocketbase";

	export let form;

	export let data;

	async function filterRooms(building) {
		data.rooms = await pb.collection("rooms").getFullList(200 /* batch size */, {
			sort: "-created"
		});
		data.rooms = data.rooms.filter((r) => {
			return building == r.building;
		});
	}

	async function filterPositions(room) {
		data.positions = await pb.collection("positions").getFullList(200 /* batch size */, {
			sort: "-created"
		});
		data.positions = data.positions.filter((p) => {
			return room == p.room;
		});
	}
</script>

<main>
	<h1>Place2B - Add</h1>

	{#if form?.error}
		<p class="error">Error: Failed to add data!</p>
	{:else if form?.success}
		<p class="success">Success!</p>
	{/if}

	<form method="POST" action="?/addBuilding" class="buildings" use:enhance>
		<h2>Buildings</h2>
		<input type="text" placeholder="title" name="title" id="title" required />
		<button type="submit">Add building</button>
	</form>

	<form method="POST" action="?/addRoom" class="rooms" use:enhance>
		<h2>Rooms</h2>
		<input type="text" placeholder="title" name="title" id="title" required />
		<select name="building" id="building" required>
			<option value="" selected>-select-</option>
			{#each data.buildings as building}
				<option value={building.id}>{building.title}</option>
			{/each}
		</select>
		<button type="submit">Add room</button>
	</form>

	<form method="POST" action="?/addPosition" class="positions" use:enhance>
		<h2>Positions</h2>
		<input type="text" placeholder="title" name="title" id="title" required />
		<select name="building" id="building" required>
			<option value="" selected>-select-</option>
			{#each data.buildings as building}
				<option
					on:click={async () => {
						await filterRooms(building.id);
					}}
					value={building.id}>{building.title}</option
				>
			{/each}
		</select>
		<select name="room" id="room" required>
			<option value="" selected>-select-</option>
			{#each data.rooms as room}
				<option value={room.id}>{room.title}</option>
			{/each}
		</select>
		<button type="submit">Add position</button>
	</form>

	<form method="POST" action="?/addItem" class="items" use:enhance>
		<h2>Items</h2>
		<input type="text" placeholder="title" name="title" id="title" required />
		<select name="building" id="building" required>
			<option value="" selected>-select-</option>
			{#each data.buildings as building}
				<option
					on:click={async () => {
						await filterRooms(building.id);
					}}
					value={building.id}>{building.title}</option
				>
			{/each}
		</select>
		<select name="room" id="room" on:change={filterPositions} required>
			<option value="" selected>-select-</option>
			{#each data.rooms as room}
				<option
					on:click={async () => {
						await filterPositions(room.id);
					}}
					value={room.id}>{room.title}</option
				>
			{/each}
		</select>
		<select name="position" id="position" required>
			<option value="" selected>-select-</option>
			{#each data.positions as position}
				<option value={position.id}>{position.title}</option>
			{/each}
		</select>
		<br />
		<input
			type="file"
			placeholder="image"
			name="image"
			id="image"
			accept=".jpg, .png, .webp, .gif, .svg"
		/>
		<button type="submit">Add item</button>
	</form>
</main>
