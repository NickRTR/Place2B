migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("80ro4lered5pyre");

		collection.viewRule = null;
		collection.createRule = "";

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("80ro4lered5pyre");

		collection.viewRule = "";
		collection.createRule = null;

		return dao.saveCollection(collection);
	}
);
