import { fail, redirect } from "@sveltejs/kit";
import pb from "$lib/pocketbase";

export const actions = {
	editItemImage: async ({ request }) => {
		const data = await request.formData();
		const id = data.get("id");
		try {
			await pb.collection("items").update(id, data);
		} catch (error) {
			return fail(400, { error: error });
		}
		return { success: true };
	},

	deleteItem: async ({ request }) => {
		const data = await request.formData();
		const id = data.get("id");
		try {
			await pb.collection("items").delete(id);
		} catch (error) {
			return fail(400, { error: error });
		}
		throw redirect(303, "/");
	}
};