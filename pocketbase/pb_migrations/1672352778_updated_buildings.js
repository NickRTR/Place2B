migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("5d5hygy2m9zny4l");

		collection.createRule = "";

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("5d5hygy2m9zny4l");

		collection.createRule = null;

		return dao.saveCollection(collection);
	}
);
