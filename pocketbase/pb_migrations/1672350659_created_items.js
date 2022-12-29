migrate((db) => {
  const collection = new Collection({
    "id": "tnhhi7l8pwi1v24",
    "created": "2022-12-29 21:50:59.148Z",
    "updated": "2022-12-29 21:50:59.148Z",
    "name": "items",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xpgfa1et",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 1,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tnhhi7l8pwi1v24");

  return dao.deleteCollection(collection);
})
