import React from "react";
import { NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { getLoggedStatus } from "../redux/userSlice";

export default function AppBar() {
	const isLoggedIn = useSelector(getLoggedStatus);
	return (
		<header
			style={{
				display: "flex",
				justifyContent: "space-between",
				borderBottom: "1px solid black",
				marginBottom: 10
			}}
		>
			<div>
				<nav
					style={{
						padding: 8,
						fontSize: "30px",
						textDecoration: "none",
						marginRight: 10
					}}
				>
					<NavLink to='home'>Home</NavLink>
					{!isLoggedIn && <NavLink to='login'>Login</NavLink>}
					<NavLink to='counter'>Counter</NavLink>
					<NavLink to='todos'>Todos</NavLink>

					{isLoggedIn && <NavLink to='dashboard'>Dashboard</NavLink>}
				</nav>
			</div>
			<div>{isLoggedIn && <UserMenu />}</div>
		</header>
	);
}
