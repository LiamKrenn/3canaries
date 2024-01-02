migrate(
	(db) => {
		const collection = new Collection({
			id: 'oyd076nmkseiws9',
			created: '2023-07-22 22:52:50.926Z',
			updated: '2023-07-22 22:52:50.926Z',
			name: 'times',
			type: 'base',
			system: false,
			schema: [
				{
					system: false,
					id: 'cdl9qibf',
					name: 'from',
					type: 'date',
					required: true,
					unique: false,
					options: {
						min: '',
						max: ''
					}
				},
				{
					system: false,
					id: 'uastlfu3',
					name: 'to',
					type: 'date',
					required: true,
					unique: false,
					options: {
						min: '',
						max: ''
					}
				}
			],
			indexes: [],
			listRule: null,
			viewRule: null,
			createRule: null,
			updateRule: null,
			deleteRule: null,
			options: {}
		});

		return Dao(db).saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('oyd076nmkseiws9');

		return dao.deleteCollection(collection);
	}
);
