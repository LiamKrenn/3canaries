migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('zxjeo5txqab6f7y');

		collection.listRule = '';
		collection.viewRule = '';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('zxjeo5txqab6f7y');

		collection.listRule = null;
		collection.viewRule = null;

		return dao.saveCollection(collection);
	}
);
