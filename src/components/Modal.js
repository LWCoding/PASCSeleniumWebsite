// Images
import closeBtn from "../img/close_btn.png";
// React
import React, { useState, useEffect } from "react";
import Select from "react-select";
// CSS
import "./Modal.css";

const Modal = ({ nameInput, descInput, setIsOpen, allowEnrichmentChange }) => {
    const [enrich, loadEnrich] = useState([]);
    const [name, setName] = useState(nameInput);
    const [desc, setDesc] = useState(descInput);

    function handleEnrichmentChange(event) {
        fetch("http://localhost:3000/find-enrichment?name=" + event.value)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                // Handle if enrichment is selected
                setName(json.enrichment.name);
                setDesc(json.enrichment.description);
            });
    }

    useEffect(() => {
        fetch("http://localhost:3000/get-all-enrichments")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                loadEnrich(json.enrichments);
            });
    }, []);

    return (
        <div>
            <div className="modal-bg" onClick={() => setIsOpen(false)} />
            <div className="modal">
                <img
                    src={closeBtn}
                    alt="Close button"
                    className="modal-close-btn"
                    onClick={() => setIsOpen(false)}
                />
                <h2 className="modal-name">{name}</h2>
                <p className="modal-description">{desc}</p>
                {allowEnrichmentChange && (
                    <Select
                        className="modal-select"
                        onChange={(e) => handleEnrichmentChange(e)}
                        options={enrich.map((enr) => ({
                            value: enr.name,
                            label: enr.name,
                        }))}
                    ></Select>
                )}
            </div>
        </div>
    );
};

export default Modal;
