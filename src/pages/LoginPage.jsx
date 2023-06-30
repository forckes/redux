import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { getLoggedStatus } from "../redux/userSlice";

export const LoginPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const auth = useSelector(getLoggedStatus);

	const fromPage = location?.state?.from?.pathname || "/";
	// if (auth) {
	// 	navigate("fromPage", { replace: true });
	// }
	return (
		<div>
			<LoginForm fromPage={fromPage} />
			{fromPage}
		</div>
	);
};
