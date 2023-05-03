import React, { useState, useEffect, useContext, Component } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const CharacterDetail = () =>{
  const {store, actions}= useContext(Context);
  const {widget, peopleId} = useParams()
  const itemUrlTail = widget+"/"+peopleId;
  const index = store.people.findIndex(item=>item.id==peopleId)

  useEffect(()=>{
    actions.fetchStarWars(widget)
		actions.fetchStarWars(itemUrlTail)
	}, [])
  
  return (
    <div className="container">
       {store[index].map(item=>(
        <div>
          <h1>{item.name}</h1>
          <img src={item.img}></img>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">Trait 1</li>
              <li className="list-group-item">Trait 2</li>
              <li className="list-group-item">Trait 3</li>
          </ul>
          <div className="cardFooter card-body ms-auto px-auto">
              {/* <Link to="/">
              <button 
              className="btn btn-outline-info mx-4" 
              data-bs-toggle="modal" 
              data-bs-target="#nerdModal"
              >Noob Mode</button>
              </Link> */}
          </div>
        </div>    
    ))|| <h1>loading...</h1>};
    </div>
  )};
   
    
    export default CharacterDetail;
    //   <div className="modal-dialog">
    //   <div className="modal-content">
    //     <div className="modal-header">
    //       <h5 className="fs-1 modal-title" id="nerdModalLabel">Item Name ID:{planetId}</h5>
    //       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //     </div>
    //     <div className="modal-body">
    //             <h2 className="fs-5">Popover in a modal</h2>
    //             <p>This <button className="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</button> triggers a popover on click.</p>
    //             <hr/>
    //             <h2 className="fs-5">Tooltips in a modal</h2>
    //             <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
    //         </div>
    //     <div className="modal-footer">
    //       <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">That is nuts man, thanks!</button>
    //     </div>
    //   </div>
    // </div>