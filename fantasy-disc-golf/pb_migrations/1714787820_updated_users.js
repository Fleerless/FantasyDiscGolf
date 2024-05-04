/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("88hww2eudchr6xo")

  collection.name = "userDetails"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("88hww2eudchr6xo")

  collection.name = "users"

  return dao.saveCollection(collection)
})
