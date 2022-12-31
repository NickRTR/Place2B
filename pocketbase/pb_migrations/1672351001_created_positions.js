migrate(
	(db) => {
		const collection = new Collection({
			id: "80ro4lered5pyre",
			created: "2022-12-29 21:56:41.607Z",
			updated: "2022-12-29 21:56:41.607Z",
			name: "positions",
			type: "base",
			system: false,
			schema: [
				{
					system: false,
					id: "pz8k0ipp",
					name: "title",
					type: "text",
					required: true,
					unique: true,
					options: {
						min: 1,
						max: null,
						pattern: ""
					}
				},
				{
					system: false,
					id: "40o5nejk",
					name: "room",
					type: "relation",
					required: true,
					unique: false,
					options: {
						maxSelect: 1,
						collectionId: "mzqart8dwdtscl3",
						cascadeDelete: false
					}
				}
			],
			listRule: null,
			viewRule: null,
			createRule: null,
			updateRule: null,
			deleteRule: null,
			options: {}
		});

		return Dao(db).saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId("80ro4lered5pyre");

		return dao.deleteCollection(collection);
	}
);
