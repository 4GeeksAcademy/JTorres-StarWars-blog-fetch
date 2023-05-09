import React, { useState, useEffect, useContext, Component } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CharacterOverview = () =>{
    const {store, actions}= useContext(Context);
    const widget = "people";
    // const {people, planets, vehicles, films} = store
    function verifyFavorite(itemId){
        return store.favorites.some(item=>item.id==`${widget}/${itemId}`)
    }
    function imgError(e){
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }
  
    useEffect(()=>{
		actions.fetchStarWars(widget)
	}, [])

  return (
    <div className="container d-grid">
    {store[widget]?.map(item=>(
            <div key={item.uid} className="wholecard col card">
                <img src={item.img} onError={imgError} className="card-img-top mx-0 p-0 overflow-hidden" alt="CharacterImg"></img>
                <div className="cardTitle card-body">
                    <h5 className="cardTitle card-body">{item.name}</h5>
                </div>
                <div className="cardFooter card-body ms-auto px-auto">
                    <Link to={`${widget}/${item.uid}`}>
                    <button 
                    className="btn btn-outline-info mx-4" 
                    >Nerd Mode</button>
                    </Link>
                    
                    <button 
                    className={`btn btn-${verifyFavorite(item.uid)?"warning":"outline-warning"}`} 
                    onClick={()=>actions.FavoriteChecked(`${widget}/${item.uid}`, item.name)}
                    >♡</button>
                </div>
            </div>
    ))|| <h1>loading...</h1>}
    </div>
        )};


  export default CharacterOverview;