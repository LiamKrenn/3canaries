migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxjeo5txqab6f7y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "amrttouo",
    "name": "title",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vszs9ovg",
    "name": "content",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxjeo5txqab6f7y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "amrttouo",
    "name": "title",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vszs9ovg",
    "name": "content",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
