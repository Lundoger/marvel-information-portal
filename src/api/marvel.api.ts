import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICharacter, ServerCharResponse } from '../models/characters'
import { IComic, ServerComicResponse } from '../models/comics'

const _apiBase = 'https://gateway.marvel.com:443/v1/public/'
const _apiKey = '6a79f22f13a159b45177d5f50448339e'
// const _baseOffset = 462

export const marvelApi = createApi({
	reducerPath: 'marvel/api',
	baseQuery: fetchBaseQuery({
		baseUrl: _apiBase
	}),
	endpoints: build => ({
		fetchAllCharacters: build.query<ICharacter[], number>({
			query: (offset:number, limit:number = 9) => ({
				url: `characters`,
				params: {
					limit: limit,
					offset: offset,
					apikey: _apiKey
				}
			}),
			transformResponse: (response: ServerCharResponse) =>  response.data.results
		}),
		fetchCharacter: build.query<ICharacter, number>({
			query: (id: number) => ({
				url: `characters/${id}`,
				params: {
					apikey: _apiKey
				}
			}),
			transformResponse: (response: ServerCharResponse) =>  response.data.results[0]
		}),
		fetchAllComics: build.query<IComic[], number>({
			query: (offset:number, limit:number = 8) => ({
				url: `comics`,
				params: {
					limit: limit,
					offset: offset,
					apikey: _apiKey
				}
			}),
			transformResponse: (response: ServerComicResponse) =>  response.data.results
		}),
		fetchComic: build.query<IComic, number | string>({
			query: (id: number) => ({
				url: `comics/${id}`,
				params: {
					apikey: _apiKey
				}
			}),
			transformResponse: (response: ServerComicResponse) =>  response.data.results[0]
		}),
	})
})

export const {useLazyFetchAllCharactersQuery, useLazyFetchCharacterQuery, useLazyFetchAllComicsQuery, useLazyFetchComicQuery} = marvelApi