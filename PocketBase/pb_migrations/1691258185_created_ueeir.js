migrate(
	(db) => {
		const collection = new Collection({
			id: '9t1jbn5e56xi5rq',
			created: '2023-08-05 17:56:25.149Z',
			updated: '2023-08-05 17:56:25.149Z',
			name: 'ueeir',
			type: 'base',
			system: false,
			schema: [
				{
					system: false,
					id: 'qlzf3uei',
					name: 'nummer',
					type: 'text',
					required: false,
					unique: false,
					options: {
						min: null,
						max: null,
						pattern: ''
					}
				},
				{
					system: false,
					id: 'nvjrobyc',
					name: 'field',
					type: 'file',
					required: false,
					unique: false,
					options: {
						maxSelect: 1,
						maxSize: 5242880,
						mimeTypes: [],
						thumbs: ['500x500'],
						protected: false
					}
				},
				{
					system: false,
					id: 'tkvnq9wd',
					name: 'field1',
					type: 'relation',
					required: false,
					unique: false,
					options: {
						collectionId: 'vnyqiavy669irzu',
						cascadeDelete: false,
						minSelect: null,
						maxSelect: 1,
						displayFields: []
					}
				}
			],
			indexes: [],
			listRule: '',
			viewRule: '',
			createRule: null,
			updateRule: null,
			deleteRule: null,
			options: {}
		});

		return Dao(db).saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('9t1jbn5e56xi5rq');

		return dao.deleteCollection(collection);
	}
);
