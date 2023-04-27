import React from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { VehicleCard } from "../component/VehicleCard";
import { FilmCard } from "../component/FilmCard";

export const Home = () => (
	<>
		<h1>Characters!</h1>
		<div className="container overflow-scroll my-3">
			<CharacterCard/>
		</div>
		<h1>Planets</h1>
		<div className="container overflow-scroll my-3">
			<PlanetCard/>
		</div>
		<h1>Vehicles</h1>
		<div className="container overflow-scroll my-3">
			<VehicleCard/>
		</div>
		<h1>Films</h1>
		<div className="container overflow-scroll my-3">
			<FilmCard/>
		</div>
	</>
);

