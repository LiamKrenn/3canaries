migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vnyqiavy669irzu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h7tpiar2",
    "name": "name",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vnyqiavy669irzu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h7tpiar2",
    "name": "name",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
