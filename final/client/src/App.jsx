import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Home.jsx";
import Trips from "./Trips.jsx";
import AddTrip from "./AddTrip.jsx";
import EditTrip from "./EditTrip.jsx";
import TripDetails from "./TripDetails.jsx";

// The mmain app component that sets up client-side routing using React Router
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <ToastContainer />

        <nav className="nav-bar">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/trips" className="nav-link">
            Trips
          </NavLink>
          <NavLink to="/add" className="nav-link">
            Add Trip
          </NavLink>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/add" element={<AddTrip />} />
            <Route path="/trips/:id/edit" element={<EditTrip />} />
            <Route path="/trips/:id" element={<TripDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
