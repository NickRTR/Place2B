import pb from "$lib/pocketbase";

export async function load({ params }) {
	try {
		const item = await pb.collection("items").getOne(params.id);
		const building = await pb.collection("buildings").getOne(item.building);
		const room = await pb.collection("rooms").getOne(item.room);
		const position = await pb.collection("positions").getOne(item.position);
		const image = await pb.getFileUrl(item, item.image);

		return {
			item,
			building,
			room,
			position,
			image
		};
	} catch (e) {
		return {
			error: e
		};
	}
}
