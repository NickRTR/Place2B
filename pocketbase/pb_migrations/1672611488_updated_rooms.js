migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("mzqart8dwdtscl3");

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: "kuqresbt",
				name: "building",
				type: "relation",
				required: true,
				unique: false,
				options: {
					maxSelect: 1,
					collectionId: "5d5hygy2m9zny4l",
					cascadeDelete: false
				}
			})
		);

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("mzqart8dwdtscl3");

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: "kuqresbt",
				name: "building",
				type: "relation",
				required: true,
				unique: true,
				options: {
					maxSelect: 1,
					collectionId: "5d5hygy2m9zny4l",
					cascadeDelete: false
				}
			})
		);

		return dao.saveCollection(collection);
	}
);
