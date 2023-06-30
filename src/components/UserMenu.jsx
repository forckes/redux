import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userSlice";
import { getUserLogin } from "../redux/userSlice";

export default function UserMenu() {
	const login = useSelector(getUserLogin);
	const dispatch = useDispatch();
	return (
		<div style={{ fontSize: "30px" }}>
			{login}
			<button onClick={() => dispatch(logOut())}>Log Out</button>
		</div>
	);
}
