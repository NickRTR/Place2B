import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");

export async function addBuilding(title) {
	let r;
	try {
		r = await pb.collection("buildings").create({ title: "Garage" });
	} catch (error) {
		r = error.message;
	}
	console.log(r);
}
