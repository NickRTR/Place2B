<script>
	import { onMount } from "svelte";
	import { default as QrCode } from "qrious";

	export let value;

	let image = "";

	onMount(() => {
		const QRcode = new QrCode();

		QRcode.set({
			padding: 12,
			size: 200,
			value
		});

		image = QRcode.toDataURL("image/jpg");
	});
</script>

<img src={image} alt={value} />
