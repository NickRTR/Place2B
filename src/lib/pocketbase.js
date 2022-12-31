import { dev } from "$app/environment";
import PocketBase from "pocketbase";

let pb;

if (dev) {
	pb = new PocketBase("http://127.0.0.1:8090");
} else {
	pb = new PocketBase("http://192.168.200.216:80");
}

export default pb;
