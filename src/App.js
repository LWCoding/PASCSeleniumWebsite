// REACT
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
// COMPONENTS
import Homepage from "./pages/Homepage.js";
import MySchedule from "./pages/MySchedule.js";
import EnrichCreator from "./pages/EnrichCreator.js";
// CSS
import "./App.css";

function App() {
  return (
      <Router>
        <div id="app-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/schedule" element={<MySchedule />} />
            <Route path="/create" element={<EnrichCreator />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
