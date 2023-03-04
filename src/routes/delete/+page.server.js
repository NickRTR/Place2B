import pb from "$lib/pocketbase";

export const actions = {
	deleteBuilding: async ({ request }) => {
		const data = await request.formData();
		const id = data.get("building");
		// delete building database entry
		await pb.collection("buildings").delete(id);
	},

	deleteRoom: async ({ request }) => {
		const data = await request.formData();
		const id = data.get("room");
		// delete room database entry
		await pb.collection("rooms").delete(id);
	},

	deletePosition: async ({ request }) => {
		const data = await request.formData();
		const id = data.get("position");
		// delete position database entry
		await pb.collection("positions").delete(id);
	},

	deletePosition: async ({ request }) => {
		const data = await request.formData();
		const id = data.get("position");
		// delete position database entry
		await pb.collection("positions").delete(id);
	}
};
