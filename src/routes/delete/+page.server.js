import { fail } from "@sveltejs/kit";
import pb from "$lib/pocketbase";

export const actions = {
	deleteBuilding: async ({ request }) => {
		const data = await request.formData();
		const id = data.get("building");
		// delete building database entry
		try {
			await pb.collection("buildings").delete(id);
		} catch (error) {
			return fail(400, { error: true });
		}
		return { success: true };
	},

	deleteRoom: async ({ request }) => {
		const data = await request.formData();
		const id = data.get("room");
		// delete room database entry
		try {
			await pb.collection("rooms").delete(id);
		} catch (error) {
			return fail(400, { error: true });
		}
		return { success: true };
	},

	deletePosition: async ({ request }) => {
		const data = await request.formData();
		const id = data.get("position");
		// delete position database entry
		try {
			await pb.collection("positions").delete(id);
		} catch (error) {
			return fail(400, { error: true });
		}
		return { success: true };
	},

	deleteItem: async ({ request }) => {
		const data = await request.formData();
		const id = data.get("item");
		// delete position database entry
		try {
			await pb.collection("items").delete(id);
		} catch (error) {
			return fail(400, { error: true });
		}
		return { success: true };
	}
};
