import React, { Component, useContext } from "react";
import { NerdModal } from "./NerdModal";
import { Context } from "../store/appContext.js";
// import PropTypes from "prop-types";

export const CharacterCard = ({widget}) =>{
const {store, actions}= useContext(Context);
// const {people, planets, vehicles, films} = store

return( 
<div className="overflow-auto d-flex">
    {store[widget]?.map(item=>(
            <div key={item.uid} className="wholecard card">
                <img src="https://fastly.picsum.photos/id/965/400/200.jpg?hmac=pUxpiyGtnQOmA8jpiS9pzxoiFMbLfAX7d590H8q-OOI" className="card-img-top mx-0 p-0" alt="CharacterImg"></img>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    {/* <h5 className="card-title">{people.name}</h5> */}
                    <p className="card-text">Nerdy stuffs</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Trait 1</li>
                    <li className="list-group-item">Trait 2</li>
                    <li className="list-group-item">Trait 3</li>
                </ul>
                <div className="card-body ms-auto px-auto">
                    <a href="#" className="btn btn-outline-info mx-4" data-bs-toggle="modal" data-bs-target="#nerdModal">Nerd Mode</a>
                    <a href="#" className="btn btn-outline-warning">♡</a>
                </div>
            </div>
    ))|| <p>loading...</p>}
        
</div>
)};
export default CharacterCard;

// CharacterCard.protoTypes = {
//     name: PropTypes.string,
//     uid: PropTypes.string,
//     url: PropTypes.string
// }

// (store.people)?.map(widget => ( 
//  {store.people.map = (people) => (