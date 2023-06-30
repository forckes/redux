import React from "react";
import { useSelector } from "react-redux";
import { getLoggedStatus } from "../redux/userSlice";
import { useLocation, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
	const location = useLocation();
	const auth = useSelector(getLoggedStatus);

	if (!auth) {
		return <Navigate to='/login' state={{ from: location }} />;
	}

	return children;
}
