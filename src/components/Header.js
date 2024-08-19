import React from "react";
import {NavLink} from "react-router-dom";

import "../styles/Header.css";

import logoHeader from "../assets/logos/logo-red.png";

import Nav from "../components/Nav";

function Header() {
	return (
		<div className="header">
			<div className="header-content">
				<div className="header-content-logo-zone">
					<NavLink to="./home">
						<img src={logoHeader} className="header-content-logo-zone-img" alt="SportSee" />
					</NavLink>
				</div>
				<div className="header-content-navigation-zone">
					<Nav />
				</div>
			</div>
		</div>
	);
}

export default Header;
