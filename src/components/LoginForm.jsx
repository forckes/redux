import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ fromPage }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(logIn(form.elements.login.value));
		form.reset();
		navigate(`${fromPage}`, { replace: true });
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' name='login' />
				<button type='submit'>Log in</button>
			</form>
		</div>
	);
}
