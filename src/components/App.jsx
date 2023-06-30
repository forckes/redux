import React from "react";
import Counter from "./Counter";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import { DashboardPage, LoginPage, Home, Todos } from "../pages";
import PrivateRoute from "../hoc/PrivateRoute";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Navigate to='home' replace />}></Route>
				<Route path='home' element={<Home />}></Route>
				<Route path='login' element={<LoginPage />}></Route>
				<Route path='counter' element={<Counter />}></Route>
				<Route
					path='todos'
					element={
						<PrivateRoute>
							<Todos />
						</PrivateRoute>
					}
				></Route>
				<Route
					path='dashboard'
					element={
						<PrivateRoute>
							<DashboardPage />
						</PrivateRoute>
					}
				></Route>
			</Route>
		</Routes>
	);
}

export default App;
