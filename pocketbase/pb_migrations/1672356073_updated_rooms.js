migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mzqart8dwdtscl3")

  collection.viewRule = null
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mzqart8dwdtscl3")

  collection.viewRule = ""
  collection.createRule = null

  return dao.saveCollection(collection)
})
