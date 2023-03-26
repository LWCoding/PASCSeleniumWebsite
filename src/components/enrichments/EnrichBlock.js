// React
import React, { useState } from "react";
// CSS
import "./EnrichBlock.css";
// Components
import Modal from "../Modal.js";

/* Max length of Enrichment description comment before truncation. */
var maxDescriptionLength = 250;

function EnrichBlock(props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<div
				className="enrichment-block p-3"
				onClick={() => {
					setIsOpen(true);
				}}
			>
				<h2 className="enrichment-title">
					{props.name} <br className="d-sm-none d-block" />
					<span className="enrichment-add-info ps-1">
						{props.weekdayStr}
					</span>
				</h2>
				<p className="enrichment-description ps-3 my-1">
					{props.descOveride ? (
						<i>{props.descOverride}</i>
					) : props.description.length > maxDescriptionLength ? (
						props.description.substring(0, 200).trim() + "..."
					) : (
						props.description
					)}
				</p>
				<p className="enrichment-about my-0">
					Enrichment led by {props.host} in {props.roomName}.
				</p>
			</div>
			{isOpen && (
				<Modal
					name={props.name}
					desc={props.description}
					date={props.date}
					setIsOpen={setIsOpen}
					allowEnrichmentChange={true}
					updateEnrichments={props.updateEnrichments}
				/>
			)}
		</div>
	);
}

export default EnrichBlock;
