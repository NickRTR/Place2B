migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("80ro4lered5pyre")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("80ro4lered5pyre")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
