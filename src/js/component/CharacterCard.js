import React, { Component, useContext } from "react";
import { NerdModal } from "./NerdModal";
import { Context } from "../store/appContext.js";
// import PropTypes from "prop-types";

export const CharacterCard = ({widget}) =>{
const {store, actions}= useContext(Context);
// const {people, planets, vehicles, films} = store
function verifyFavorite(){
    return store.favorites.some(item=>item.id==`${widget}/${item.uid}`)
}


return( 
    <div className="overflow-auto d-flex">
        {store[widget]?.map(item=>(
                <div key={item.uid} className="wholecard card">
                    <img src={item.uid} className="card-img-top mx-0 p-0" alt="CharacterImg"></img>
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
                        <button className="btn btn-outline-info mx-4" data-bs-toggle="modal" data-bs-target="#nerdModal">Nerd Mode</button>
                        <button className={`btn ${verifyFavorite?"btn-outline-warning":"btn-warning"}`} onClick={()=>actions.FavoriteChecked(`${widget}/${item.uid}`, item.name)}>♡</button>
                    </div>
                </div>
        ))|| <h1>loading...</h1>}
            
    </div>
    )};
export default CharacterCard;

// CharacterCard.protoTypes = {
//     name: PropTypes.string,
//     uid: PropTypes.string,/
//     url: PropTypes.string
// }

// (store.people)?.map(widget => ( 
//  {store.people.map = (people) => (