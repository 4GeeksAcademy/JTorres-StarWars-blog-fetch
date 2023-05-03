import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store, actions} = useContext(Context);

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
					{store.favorites.map((favorite, index)=>{
						return(
							<li key={index}><a className="dropdown-item"  href="#">{favorite.itemName}</a>
							<button onClick={()=>{actions.deleteFavorite(favorite.itemName)}} type="button" className="btn btn-dark">X</button>
							</li>
						)
					})}
				</ul>
				</div>
		</nav>
	);
};
{/* <li><a className="dropdown-item" href="#">Fav1</a></li>
<li><a className="dropdown-item" href="#">Fav 2</a></li>
<li><a className="dropdown-item" href="#">Fav 3</a></li>
<li><hr className="dropdown-divider"/></li>
<li><a className="dropdown-item" href="#">Clear All</a></li> */}