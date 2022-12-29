import pb from "$lib/pocketbase";

export const actions = {
	addBuilding: async ({ request }) => {
		const data = await request.formData();
		const title = data.get("title");
		// create building database entry
		await pb.collection("buildings").create({ title });
	}
};
