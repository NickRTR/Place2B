migrate((db) => {
  const collection = new Collection({
    "id": "mzqart8dwdtscl3",
    "created": "2022-12-29 21:53:55.011Z",
    "updated": "2022-12-29 21:53:55.011Z",
    "name": "rooms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "d3lpula9",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kuqresbt",
        "name": "building",
        "type": "relation",
        "required": true,
        "unique": true,
        "options": {
          "maxSelect": 1,
          "collectionId": "5d5hygy2m9zny4l",
          "cascadeDelete": false
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
  const collection = dao.findCollectionByNameOrId("mzqart8dwdtscl3");

  return dao.deleteCollection(collection);
})
