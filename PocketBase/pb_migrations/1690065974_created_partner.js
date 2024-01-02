migrate(
	(db) => {
		const collection = new Collection({
			id: 'vnyqiavy669irzu',
			created: '2023-07-22 22:46:14.969Z',
			updated: '2023-07-22 22:46:14.969Z',
			name: 'partner',
			type: 'base',
			system: false,
			schema: [
				{
					system: false,
					id: 'h7tpiar2',
					name: 'name',
					type: 'editor',
					required: false,
					unique: false,
					options: {}
				},
				{
					system: false,
					id: 'msfqs9wr',
					name: 'description',
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
					id: 'fgwfqrxz',
					name: 'logo',
					type: 'file',
					required: false,
					unique: false,
					options: {
						maxSelect: 1,
						maxSize: 5242880,
						mimeTypes: [],
						thumbs: [],
						protected: false
					}
				},
				{
					system: false,
					id: 'l06ocrjx',
					name: 'link',
					type: 'url',
					required: false,
					unique: false,
					options: {
						exceptDomains: null,
						onlyDomains: null
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
		const collection = dao.findCollectionByNameOrId('vnyqiavy669irzu');

		return dao.deleteCollection(collection);
	}
);
