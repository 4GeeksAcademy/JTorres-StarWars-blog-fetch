import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { VehicleCard } from "../component/VehicleCard";
import { FilmCard } from "../component/FilmCard";
import { NerdModal } from "../component/NerdModal";
import { Context } from "../store/appContext.js"

export const Home = () => {
	const {store, actions} = useContext(Context)

	useEffect(()=>{
		actions.fetchStarWars("vehicles")
		actions.fetchStarWars("people")
		actions.fetchStarWars("planets")
		actions.fetchStarWars("films")
		actions.fetchStarWars("species")
		actions.fetchStarWars("starships")
	}, [])
	return(
	<>
		<h1>Characters!</h1>
		<div className="container-fluid overflow-scroll">
			<CharacterCard 
			widget="people"
			/>
		</div>
		<h1>Planets!</h1>
		<div className="container-fluid overflow-scroll my-3">
			<PlanetCard 
			widget="planets"
			/>
		</div>
		<h1>Vehicles!</h1>
		<div className="container-fluid overflow-scroll my-3">
			<VehicleCard 
			widget="vehicles"
			/>
		</div>
		<h1>Films!</h1>
		<div className="container-fluid overflow-scroll my-3">
			<FilmCard 
			widget="films"
			/>
		</div>
		<NerdModal/>
	</>
);}

