import React from "react";
import Search from "./Search";
import Navigation from "./Navigation";

function Header() {
	return (
		<>
			<header>
				<div className="bg-secondary">
					<div className="container">
						<nav className="navbar navbar-light ">
							<a href="/" className="navbar-brand">
								Novel
							</a>
							<Search />
						</nav>
					</div>
				</div>
			</header>
			<Navigation />
		</>
	);
}
export default Header;
