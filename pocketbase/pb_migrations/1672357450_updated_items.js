migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tnhhi7l8pwi1v24")

  // remove
  collection.schema.removeField("tqnsuswl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8k69lbmm",
    "name": "quantity",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tnhhi7l8pwi1v24")

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

  // remove
  collection.schema.removeField("8k69lbmm")

  return dao.saveCollection(collection)
})
