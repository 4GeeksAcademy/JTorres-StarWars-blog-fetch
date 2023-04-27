import React from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";

export const Home = () => (
	<>
		<h1>Characters!</h1>
		<div className="container">
			<CharacterCard/>
		</div>
		<h1>Planets</h1>
		
	</>
);

