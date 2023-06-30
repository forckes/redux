import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
	key: "clicks",
	storage
};

export const myValueSlice = createSlice({
	name: "myValue",
	initialState: 10,
	reducers: {
		increment(state, action) {
			return state + action.payload;
		},
		decrement(state, action) {
			return state - action.payload;
		}
	}
});

//Selectors
export const getCounterValue = state => state.myValue;

export const persistedMyValueReducer = persistReducer(
	persistConfig,
	myValueSlice.reducer
);

export const { increment, decrement } = myValueSlice.actions;
