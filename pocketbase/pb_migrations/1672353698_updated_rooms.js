migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("mzqart8dwdtscl3");

		collection.listRule = "";

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("mzqart8dwdtscl3");

		collection.listRule = null;

		return dao.saveCollection(collection);
	}
);
