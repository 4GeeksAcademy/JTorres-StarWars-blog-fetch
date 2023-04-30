import React, { Component, useContext } from "react";
import { NerdModal } from "./NerdModal";
import { Context } from "../store/appContext.js";
// import PropTypes from "prop-types";

export const FilmCard = ({widget}) =>{
const {store, actions}= useContext(Context);
// const {people, planets, vehicles, films} = store

return( 
    <div className="overflow-auto d-flex">
        {store[widget]?.map(item=>(
                <div key={item.uid} className="wholecard card">
                    <img src={item.uid} className="card-img-top mx-0 p-0" alt="CharacterImg"></img>
                    <div className="cardTitle card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Trait 1</li>
                        <li className="list-group-item">Trait 2</li>
                        <li className="list-group-item">Trait 3</li>
                    </ul>
                    <div className="cardFooter card-body ms-auto px-auto">
                        <a href="#" className="btn btn-outline-info mx-4" data-bs-toggle="modal" data-bs-target="#nerdModal">Nerd Mode</a>
                        <a href="#" className="btn btn-outline-warning">♡</a>
                    </div>
                </div>
        ))|| <h1>loading...</h1>}
            
    </div>
    )};
export default FilmCard;
