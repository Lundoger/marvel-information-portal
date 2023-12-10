export interface ServerCharResponse {
	code: number
	status: string
	copyright: string
	attributionText: string
	attributionHTML: string
	etag: string
	data: Data
}

export interface Data {
	offset: number
	limit: number
	total: number
	count: number
	results: ICharacter[]
}

export interface ICharacter {
	id: number
	name: string
	description: string
	modified: string
	thumbnail: Thumbnail
	resourceURI: string
	comics: Comics
	series: Series
	stories: Stories
	events: Events
	urls: Url[]
}

export interface Thumbnail {
	path: string
	extension: string
}

export interface Comics {
	available: number
	collectionURI: string
	items: Item[]
	returned: number
}

export interface Item {
	resourceURI: string
	name: string
}

export interface Series {
	available: number
	collectionURI: string
	items: Item2[]
	returned: number
}

export interface Item2 {
	resourceURI: string
	name: string
}

export interface Stories {
	available: number
	collectionURI: string
	items: Item3[]
	returned: number
}

export interface Item3 {
	resourceURI: string
	name: string
	type: string
}

export interface Events {
	available: number
	collectionURI: string
	items: Item4[]
	returned: number
}

export interface Item4 {
	resourceURI: string
	name: string
}

export interface Url {
	type: string
	url: string
}