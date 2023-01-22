// REACT
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// COMPONENTS
import Homepage from "./pages/Homepage.js";
import AllEnrich from "./pages/AllEnrich.js";
import MySchedule from "./pages/MySchedule.js";
import EnrichCreator from "./pages/EnrichCreator.js";
import MyInfo from "./pages/MyInfo.js";
import TeacherLocator from "./pages/TeacherLocator.js";
// CSS
import "./App.css";

function App() {
	return (
		<Router>
			<div id="app-container">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/enrichments" element={<AllEnrich />} />
					<Route path="/schedule" element={<MySchedule />} />
					<Route path="/create" element={<EnrichCreator />} />
					<Route path="/student-info" element={<MyInfo />} />
					<Route
						path="/teacher-locator"
						element={<TeacherLocator />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
