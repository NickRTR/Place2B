import pb from "$lib/pocketbase";

export async function load() {
	try {
		const buildings = await pb.collection("buildings").getFullList(200 /* batch size */, {
			sort: "title"
		});

		const rooms = await pb.collection("rooms").getFullList(200 /* batch size */, {
			sort: "title"
		});

		const positions = await pb.collection("positions").getFullList(200 /* batch size */, {
			sort: "title"
		});

		const items = await pb.collection("items").getFullList(200 /* batch size */, {
			sort: "title"
		});

		return {
			buildings,
			rooms,
			positions,
			items
		};
	} catch (e) {
		return {
			error: e
		};
	}
}
