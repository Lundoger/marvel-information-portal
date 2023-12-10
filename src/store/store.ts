import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { marvelApi } from "../api/marvel.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from './reducers/marvelSlice'

const rootReducer = combineReducers({
	[marvelApi.reducerPath]: marvelApi.reducer,
	userReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marvelApi.middleware) 
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch