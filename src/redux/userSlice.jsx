import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
	key: "user",
	storage,
	whitelist: ["login", "isLoggedIn", "token"] //that also have \\blacklist\\
};

export const userSlice = createSlice({
	name: "user",
	initialState: {
		login: "",
		token: null,
		isLoggedIn: false,
		a: 1,
		b: 2,
		c: 3,
		d: 4
	},
	reducers: {
		logIn(state, action) {
			state.login = action.payload;
			state.isLoggedIn = true;
		},
		logOut(state) {
			state.login = "";
			state.isLoggedIn = false;
		}
	}
});

// Selectors--------
export const getLoggedStatus = state => state.user.isLoggedIn;
export const getUserLogin = state => state.user.login;

export const persistedUserReducer = persistReducer(
	persistConfig,
	userSlice.reducer
);

export const { logIn, logOut } = userSlice.actions;
