import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import Header from "./Header";
import Sidebar from "./Sidebar";

// Pages
import Home from "../pages/Home";
import Account from "../pages/Account";
import Reglages from "../pages/Reglages";
import Communaute from "../pages/Communaute";
import Unknown from "../pages/Unknown";

import "../styles/App.css";
const fakeData = 0;

function App() {
	return (
		<React.StrictMode>
			<div>
				<Router>
					<Header />
					<div className="main-container">
						<Sidebar />
						<Routes>
							<Route path="/" element={<Home fake={fakeData} />} />
							<Route path="/:id" element={<Home fake={fakeData} />} />
							<Route path="/home" element={<Home fake={fakeData} />} />
							<Route path="/home/:id" element={<Home fake={fakeData} />} />
							<Route path="/account" element={<Account fake={fakeData} />} />
							<Route path="/reglages" element={<Reglages fake={fakeData} />} />
							<Route path="/communaute" element={<Communaute fake={fakeData} />} />
							<Route path="*" element={<Unknown fake={fakeData} />} />
						</Routes>
					</div>
				</Router>
			</div>
		</React.StrictMode>
	);
}

export default App;
