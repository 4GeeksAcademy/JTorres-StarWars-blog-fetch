import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="logo">
				<div className="title tc-yellow-400">Star Wars!</div>
				<div className="subtitle">A fancy Guide x.x</div>
			</div>
			<div className="dropstart btn-group ml-auto pe-5">
				<button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					<strong>Favorites UwU</strong>
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Fav1</a></li>
					<li><a className="dropdown-item" href="#">Fav 2</a></li>
					<li><a className="dropdown-item" href="#">Fav 3</a></li>
					<li><hr className="dropdown-divider"/></li>
					<li><a className="dropdown-item" href="#">Clear All</a></li>
				</ul>
				</div>
		</nav>
	);
};