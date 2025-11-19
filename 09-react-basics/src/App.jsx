import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home.jsx";
import About from "./About.jsx";
import ApiPage from "./RandomDogs.jsx";

// Main app component that sets up client-side routing using React Router.
function App() {

  return (
    <>
      <BrowserRouter>
        
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            padding: "20px",
            fontSize: "20px"
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/api">Dog API</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/api" element={<ApiPage />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
