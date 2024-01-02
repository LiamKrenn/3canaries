migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('oyd076nmkseiws9');

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: '5jaws8nj',
				name: 'event_description',
				type: 'text',
				required: false,
				unique: false,
				options: {
					min: null,
					max: null,
					pattern: ''
				}
			})
		);

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('oyd076nmkseiws9');

		// remove
		collection.schema.removeField('5jaws8nj');

		return dao.saveCollection(collection);
	}
);
