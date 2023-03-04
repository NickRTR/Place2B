import pb from "$lib/pocketbase";

export const actions = {
	addBuilding: async ({ request }) => {
		const data = await request.formData();
		const title = data.get("title");
		// create building database entry
		await pb.collection("buildings").create({ title });
	},

	addRoom: async ({ request }) => {
		const data = await request.formData();
		const title = data.get("title");
		const building = data.get("building");
		// create building database entry
		await pb.collection("rooms").create({ title, building });
	},

	addPosition: async ({ request }) => {
		const data = await request.formData();
		const title = data.get("title");
		const room = data.get("room");
		// create room database entry
		await pb.collection("positions").create({ title, room });
	},

	addItem: async ({ request }) => {
		const data = await request.formData();
		const title = data.get("title");
		const building = data.get("building");
		const room = data.get("room");
		const position = data.get("position");
		// create position database entry
		await pb.collection("items").create({ title, building, room, position });
	}
};
