import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div class="logo">
				<div class="title tc-yellow-400">star</div>
				<div class="subtitle">A VISUAL GUIDE</div>
				<div class="title tc-yellow-400">wars</div>
			</div>
			<div class="dropstart btn-group ml-auto pe-5">
				<button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Action
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
					<li><hr class="dropdown-divider"/></li>
					<li><a class="dropdown-item" href="#">Separated link</a></li>
				</ul>
				</div>
		</nav>
	);
};