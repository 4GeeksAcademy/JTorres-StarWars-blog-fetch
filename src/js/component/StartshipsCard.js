import React, { Component, useContext, useEffect } from "react";
import { NerdModal } from "./NerdModal";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// import PropTypes from "prop-types";

export const StarshipsCard = ({widget}) =>{
    const {store, actions}= useContext(Context);
    // const {people, planets, vehicles, films} = store
    function verifyFavorite(itemId){
        return store.favorites.some(item=>item.id==`${widget}/${itemId}`)
    }
    function imgError(e){
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }
    
    
    return( 
        <div className="d-flex">
            {store[widget]?.map(item=>(
                    <div key={item.uid} className="wholecard card">
                        <img src={item.img} onError={imgError} className="card-img-top mx-0 p-0" alt="CharacterImg"></img>
                        <div className="cardTitle card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Nerdy stuffs</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Trait 1</li>
                            <li className="list-group-item">Trait 2</li>
                            <li className="list-group-item">Trait 3</li>
                        </ul>
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
export default StarshipsCard;