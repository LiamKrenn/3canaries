export interface Partner {
	collectionId: string;
	collectionName: string;
	created: string;
	description: string;
	id: string;
	link: string;
	logo: string;
	name: string;
	updated: string;
}

export interface Times {
	collectionId: string;
	collectionName: string;
	id: string;
	created: string;
	updated: string;
	from: string;
	to: string;
	event: string;
	event_description: string;
}

export interface News {
	collectionId: string;
	collectionName: string;
	id: string;
	created: string;
	updated: string;
	title: string;
	description: string;
	image: string;
	display_date: string;
}
