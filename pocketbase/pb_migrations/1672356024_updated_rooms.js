migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("mzqart8dwdtscl3");

		collection.viewRule = "";

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("mzqart8dwdtscl3");

		collection.viewRule = null;

		return dao.saveCollection(collection);
	}
);
