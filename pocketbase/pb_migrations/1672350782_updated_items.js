migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("tnhhi7l8pwi1v24");

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: "gwixibqy",
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
		const collection = dao.findCollectionByNameOrId("tnhhi7l8pwi1v24");

		// remove
		collection.schema.removeField("gwixibqy");

		return dao.saveCollection(collection);
	}
);
