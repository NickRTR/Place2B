migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("80ro4lered5pyre");

		collection.listRule = "";

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("80ro4lered5pyre");

		collection.listRule = null;

		return dao.saveCollection(collection);
	}
);
