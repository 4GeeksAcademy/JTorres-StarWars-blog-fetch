import React from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";

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
	</>
);

