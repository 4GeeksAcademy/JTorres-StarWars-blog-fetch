import React, { Component, useContext } from "react";
import { NerdModal } from "./NerdModal";
import { Context } from "../store/appContext.js";


export const CharacterCard = ({itemUrlTail}) =>{
const {store, actions}= useContext(Context);

return <div className="overflow-auto d-flex">
        {store[itemUrlTail]?.map(widget=>(
            <>
                <div key={widget.uid} className="wholecard card px-3">
                    <img src="https://fastly.picsum.photos/id/965/400/200.jpg?hmac=pUxpiyGtnQOmA8jpiS9pzxoiFMbLfAX7d590H8q-OOI" className="card-img-top" alt="CharacterImg"></img>
                    <div className="card-body">
                        <h5 className="card-title">{widget.name}</h5>
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
            </>
        ))}
        
    </div>
};