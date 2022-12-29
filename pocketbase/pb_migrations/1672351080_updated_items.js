migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tnhhi7l8pwi1v24")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jcwhrek9",
    "name": "room",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "mzqart8dwdtscl3",
      "cascadeDelete": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pm62d40n",
    "name": "position",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "80ro4lered5pyre",
      "cascadeDelete": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqnsuswl",
    "name": "quantity",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tnhhi7l8pwi1v24")

  // remove
  collection.schema.removeField("jcwhrek9")

  // remove
  collection.schema.removeField("pm62d40n")

  // remove
  collection.schema.removeField("tqnsuswl")

  return dao.saveCollection(collection)
})
