import './Modal.css'
import React from 'react'

const Modal = (props) => {
  return(<>
    <div className="modal">
        <div className="modal-body">
            <button type="button" 
                className="btn-close" 
                aria-label="Close"
                onClick={props.closeModal}
            />
            <input 
                className="mt5" 
                type="text" 
                placeholder="Enter name"
                value={props.value}
                onChange={props.handleChange}
            />
            <button 
                className="btn btn-success mt5"
                onClick={props.addItem}
                >Add Element</button>
        </div>
    </div>
    </>)  
}

export default Modal;