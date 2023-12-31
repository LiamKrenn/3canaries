migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vnyqiavy669irzu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fgwfqrxz",
    "name": "logo",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vnyqiavy669irzu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fgwfqrxz",
    "name": "logo",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
