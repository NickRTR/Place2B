<script>
	import pb from "$lib/pocketbase";

	export let data;
	const backupPositions = data.positions;

	let searchInput = "";

	async function search() {
		if (searchInput != "") {
			data.items = await pb.collection("items").getFullList(200 /* batch size */, {
				sort: "title",
				filter: `title~${JSON.stringify(searchInput)}`
			});
		} else {
			data.items = await pb.collection("items").getFullList(200 /* batch size */, {
				sort: "title"
			});
		}
	}

	let selectedFilters = {
		building: "",
		room: "",
		position: ""
	};

	function setFilter(type, id) {
		if (selectedFilters[type] == id) {
			selectedFilters[type] = "";
		} else {
			selectedFilters[type] = id;
		}
		filter();
	}

	async function filter() {
		let filterString = "";
		let filters = [];

		if (selectedFilters.building.length > 0) {
			filters.push(`building = ${JSON.stringify(selectedFilters.building)}`);
			data.rooms = await pb.collection("rooms").getFullList(200 /* batch size */, {
				sort: "title",
				filter: `building = ${JSON.stringify(selectedFilters.building)}`
			});
		} else {
			data.rooms = await pb.collection("rooms").getFullList(200 /* batch size */, {
				sort: "title"
			});
		}
		if (selectedFilters.room.length > 0) {
			filters.push(`room = ${JSON.stringify(selectedFilters.room)}`);
		}
		if (selectedFilters.position.length > 0) {
			filters.push(`position = ${JSON.stringify(selectedFilters.position)}`);
		}

		if (selectedFilters.room != "") {
			data.positions = backupPositions.filter((p) => p.room == selectedFilters.room);
		} else {
			data.positions = backupPositions.filter((p) => {
				return data.rooms.some((r) => r.id == p.room);
			});
		}

		if (filters.length == 1) {
			filterString = filters[0];
		} else if (filters.length > 1) {
			filterString = "(";
			for (let i = 0; i < filters.length; i++) {
				if (i == 0) {
					filterString += filters[0];
				} else {
					filterString += " && " + filters[i];
				}
			}
			filterString += ")";
		}

		const itemsRes = await pb.collection("items").getFullList(200 /* batch size */, {
			sort: "title",
			filter: filterString
		});

		data.items = itemsRes;
	}
</script>

<main>
	<h1>Place2B</h1>

	<h2># Search</h2>
	<input type="text" bind:value={searchInput} on:input={search} placeholder="Search" />

	<h2># Filter</h2>

	{#if data.error}
		<p class="error">Error: {data.error.message}</p>
	{:else}
		<div class="buildings">
			<h3 class="headline">Buildings</h3>
			<div class="elements">
				{#each data.buildings as building}
					<button
						on:click={() => {
							setFilter("building", building.id);
						}}
						class:active={selectedFilters.building == building.id}
						class="element">{building.title}</button
					>
				{:else}
					<p>No buildings available; <a href="/add">add new building</a></p>
				{/each}
			</div>
		</div>

		<div class="rooms">
			<h3 class="headline">Rooms</h3>
			<div class="elements">
				{#each data.rooms as room}
					<button
						on:click={() => {
							setFilter("room", room.id);
						}}
						class:active={selectedFilters.room == room.id}
						class="element">{room.title}</button
					>
				{:else}
					<p>No rooms available; <a href="/add">add new room</a></p>
				{/each}
			</div>
		</div>

		<div class="positions">
			<h3 class="headline">Positions</h3>
			<div class="elements">
				{#each data.positions as position}
					<button
						on:click={() => {
							setFilter("position", position.id);
						}}
						class:active={selectedFilters.position == position.id}
						class="element">{position.title}</button
					>
				{:else}
					<p>No positions available; <a href="/add">add new position</a></p>
				{/each}
			</div>
		</div>

		<h2># Items / Result</h2>

		<div class="items">
			<div class="elements">
				{#each data.items as item}
					<a class="element" href="/item/{item.id}">{item.title}</a>
				{:else}
					<p>No matching items available; <a href="/add">add new item</a></p>
				{/each}
			</div>
		</div>
	{/if}
</main>

<style>
	.headline {
		display: inline;
		padding: 0.25rem 0.5rem;
		border-radius: 0.5rem;
		border: 3px solid var(--accent);
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

	.active {
		background-color: var(--text);
		color: var(--background);
	}

	button {
		cursor: pointer;
		background-color: var(--background);
		color: var(--text);
		font-size: 16px;
	}
</style>
