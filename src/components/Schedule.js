// REACT
import React, { useState, useEffect } from "react";
// Components
import EnrichBlock from "./enrichments/EnrichBlock.js";
import DateDivider from "./DateDivider.js";
import HeaderBlock from "./HeaderBlock.js";
// CSS
import "./Schedule.css";

// Number of enrichments to show.
const numEnrichments = 7;

/*
    Formats the provided date to MM/DD/YYYY (DAY).
*/
function getFormattedDate(date) {
	const weekdays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let d = new Date(date);
	return `${d.getMonth() + 1}/${d.getDate().toString()}/${d.getFullYear()} (${
		weekdays[d.getDay()]
	})`;
}

const Schedule = () => {
	const [enrichments, loadEnrichments] = useState([]);

	useEffect(() => {
		// We wrap this inside of a function so child components can call
		// the function. We pass this function into the EnrichBlock component with the
		// parameter `updateEnrichments`.
		function updateEnrichments() {
			var newEnrichmentList = [];
			// Find the enrichments that the user is signed up for.
			fetch("http://localhost:3000/get-enrichments", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => {
					return res.json();
				})
				.then((json) => {
					var enrich = json.enrichments;
					// Run seven days worth of enrichments.
					for (var i = 0; i < numEnrichments; i++) {
						var currDate = new Date(Date.now()); // Point of ref.
						var currEnrich = undefined; // Enrichment for current day.
						currDate.setDate(currDate.getDate() + i);
						// Find the enrichment that the user is registered to
						// if (one exists) on the same day.
						for (var j = 0; j < enrich.length; j++) {
							var e = enrich[j];
							if (
								new Date(e.date).toDateString() ===
								new Date(currDate).toDateString()
							) {
								currEnrich = e.enrichmentId;
								break;
							}
						}
						// Check if the day is a weekend.
						// If so, render special HTML.
						var isWeekend =
							currDate.getDay() === 0 || currDate.getDay() === 6;
						// If the enrichment hasn't been chosen on this day, just
						// render a default enrichment.
						if (currEnrich == null) {
							currEnrich = {
								name: "NO CLUB SELECTED",
								description:
									"Please select a club for this day.",
								hostName: "Admin",
								roomName: "Main Office",
								repeatDays: [],
							};
						}
						// Push either the selected enrichment OR an
						// empty template enrichment.
						let weekdayStr = currEnrich.repeatDays.map(
							(day) => day.day + " "
						);
						if (weekdayStr == "") {
							weekdayStr = "Does not repeat";
						}
						newEnrichmentList.push(
							!isWeekend ? (
								<div>
									<DateDivider
										key={i + 9999}
										date={getFormattedDate(currDate)}
									/>
									<EnrichBlock
										key={i + 999}
										name={currEnrich.name}
										description={currEnrich.description}
										date={currDate}
										descOverride="Click to view enrichment information."
										weekdayStr={weekdayStr}
										host={currEnrich.hostName}
										roomName={currEnrich.roomName}
										updateEnrichments={updateEnrichments}
									/>
								</div>
							) : (
								<DateDivider
									key={i + 99}
									date={getFormattedDate(currDate)}
									color="var(--orange)"
								/>
							)
						);
					}
					loadEnrichments(newEnrichmentList);
				});
		}
		updateEnrichments();
	}, []);

	return (
		<div className="mt-2" id="schedule-block">
			<HeaderBlock text="My Schedule" />
			<div className="spacer-md" />
			{enrichments}
		</div>
	);
};

export default Schedule;
