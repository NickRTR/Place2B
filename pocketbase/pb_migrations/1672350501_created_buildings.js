migrate(
	(db) => {
		const collection = new Collection({
			id: "5d5hygy2m9zny4l",
			created: "2022-12-29 21:48:21.276Z",
			updated: "2022-12-29 21:48:21.276Z",
			name: "buildings",
			type: "base",
			system: false,
			schema: [
				{
					system: false,
					id: "lmgax6pr",
					name: "title",
					type: "text",
					required: true,
					unique: true,
					options: {
						min: 1,
						max: null,
						pattern: ""
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
		const collection = dao.findCollectionByNameOrId("5d5hygy2m9zny4l");

		return dao.deleteCollection(collection);
	}
);
