import { fail } from "@sveltejs/kit";
import pb from "$lib/pocketbase";

export const actions = {
	addBuilding: async ({ request }) => {
		const data = await request.formData();
		try {
			await pb.collection("buildings").create(data);
		} catch (error) {
			return fail(400, { error: true });
		}
		return { success: true };
	},

	addRoom: async ({ request }) => {
		const data = await request.formData();
		try {
			await pb.collection("rooms").create(data);
		} catch (error) {
			return fail(400, { error: true });
		}
		return { success: true };
	},

	addPosition: async ({ request }) => {
		const data = await request.formData();
		try {
			await pb.collection("positions").create(data);
		} catch (error) {
			return fail(400, { error: true });
		}
		return { success: true };
	},

	addItem: async ({ request }) => {
		const data = await request.formData();
		const title = data.get("title");
		const building = data.get("building");
		const room = data.get("room");
		const position = data.get("position");
		const image = data.get("image");
		try {
			if (image.size == 0) {
				await pb.collection("items").create({ title, building, room, position });
			} else {
				await pb.collection("items").create({ title, image, building, room, position });
			}
		} catch (error) {
			return fail(400, { error: true });
		}
		return { success: true };
	}
};
