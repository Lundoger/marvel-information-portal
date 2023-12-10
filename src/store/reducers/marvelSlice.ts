import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ICharacter } from "../../models/characters"
import { IComic } from "../../models/comics"

interface marvelState {
	charList: ICharacter[],
	comicsList: IComic[],
	selectedChar: number | null,
	charOffset: number,
	comicsOffset: number,
	charEnded: boolean,
	comicsEnded: boolean,
}

const initialState: marvelState = {
	charList: [],
	comicsList: [],
	selectedChar: null,
	charOffset: 341,
	comicsOffset: 376,
	charEnded: false,
	comicsEnded: false,
}	

export const marvelSlice = createSlice({
	name: 'marvel',
	initialState,
	reducers: {
		selectCharacter(state, action: PayloadAction<number>) {
			state.selectedChar = action.payload
		},
		changeCharOffset(state) {
			state.charOffset += 9
		},
		changeComicsOffset(state) {
			state.comicsOffset += 8
		},
		addCharToList(state, action: PayloadAction<ICharacter[]>) {
			state.charList = state.charList.concat(action.payload)
		},
		addComicToList(state, action: PayloadAction<IComic[]>) {
			state.comicsList = state.comicsList.concat(action.payload)
		},
		setCharEnded(state, action: PayloadAction<boolean>) {
			state.charEnded = action.payload
		},
		setComicsEnded(state, action: PayloadAction<boolean>) {
			state.comicsEnded = action.payload
		},
	}
})

export default marvelSlice.reducer