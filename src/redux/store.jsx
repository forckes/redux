import { configureStore } from "@reduxjs/toolkit";
//persist----------------!
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from "redux-persist";
//persist----------------!
import { myValueSlice, persistedMyValueReducer } from "./myValue/slice";
import { persistedUserReducer } from "./userSlice";
import { pokemonApi } from "services/pokemon";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: {
		myValue: myValueSlice.reducer,
		user: persistedUserReducer,
		[pokemonApi.reducerPath]: pokemonApi.reducer
	},
	middleware: getDefaultMiddleware => [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}),
		pokemonApi.middleware
	]
});

//persist----------------!
export let persistor = persistStore(store);
//persist----------------!

setupListeners(store.dispatch);
