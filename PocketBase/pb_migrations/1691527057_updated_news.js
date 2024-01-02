migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxjeo5txqab6f7y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v0sy0lkn",
    "name": "display_date",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxjeo5txqab6f7y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v0sy0lkn",
    "name": "display_date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
