// Images
import closeBtn from "../img/close_btn.png";
// React
import React from 'react'
// CSS
import './Modal.css';

const Modal = ({ name, desc, setIsOpen }) => {
  return (
    <div>
        <div id="modal-bg" onClick={ () => setIsOpen(false) } />
        <div id="modal">
            <img src={closeBtn} alt="Close button" id="modal-close-btn" onClick={ () => setIsOpen(false) } />
            <h2 id="modal-name">{name}</h2>
            <p id="modal-description">{desc}</p>
        </div>
    </div>
  )
};

export default Modal