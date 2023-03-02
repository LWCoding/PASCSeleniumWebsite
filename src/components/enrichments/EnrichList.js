// REACT
import React, { useState, useEffect } from "react";
// COMPONENTS
import EnrichBlock from "./EnrichBlock.js";
// CSS
import "./EnrichList.css";

/*
  Credit to https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook
  for help with useState and useEffect.
*/

const EnrichContainer = () => {
	const [enrich, loadEnrich] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/get-all-enrichments")
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				loadEnrich(json.enrichments);
			});
	}, []);

	// Call while there's no enrichments loaded
	if (!enrich) return <div id="enrichment-container">Loading...</div>;

	let i = 0; // For counting keys
	return (
		<div id="enrichment-container">
			{enrich.map((e) => (
				<EnrichBlock
					key={i++}
					name={e.name}
					description={e.description}
					date={e.date}
					weekdayStr={e.weekdayStr}
					host={e.hostName}
					roomName={e.roomName}
				/>
			))}
		</div>
	);
};

export default EnrichContainer;
