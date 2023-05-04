import React, { useState, useEffect, useContext, Component } from "react";
import { useParams } from "react-router-dom";


export const NerdModal = () =>{

  const {planetId} = useParams()

return <div className="modal fade" id="nerdModal" tabIndex="-1" aria-labelledby="nerdModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="nerdModalLabel">Item Name</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
              <h2 className="fs-5">Popover in a modal</h2>
              <p>This <button className="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</button> triggers a popover on click.</p>
              <hr/>
              <h2 className="fs-5">Tooltips in a modal</h2>
              <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
          </div>

          if(item?.description){
            <div className="modal-header">
            <h1 className="modal-title fs-5" id="nerdModalLabel">Item Name</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          }else{
            ""
          }
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">That is nuts man, thanks!</button>
      </div>
    </div>
  </div>
</div>
}