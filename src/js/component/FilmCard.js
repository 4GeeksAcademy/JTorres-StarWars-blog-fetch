import React, { Component } from "react";

export const FilmCard = () =>(
    <div className="wholecard card w-50 h-25">
        <img src="https://fastly.picsum.photos/id/965/400/200.jpg?hmac=pUxpiyGtnQOmA8jpiS9pzxoiFMbLfAX7d590H8q-OOI" className="card-img-top" alt="CharacterImg"></img>
        <div className="card-body">
            <h5 className="card-title">Film Name</h5>
            <p className="card-text">Nerdy stuffs</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Trait 1</li>
            <li className="list-group-item">Trait 2</li>
            <li className="list-group-item">Trait 3</li>
        </ul>
        <div className="card-body ms-auto px-auto">
            <a href="#" className="btn btn-outline-info mx-4">Nerd Mode</a>
            <a href="#" className="btn btn-outline-warning">♡</a>
        </div>
    </div>
);