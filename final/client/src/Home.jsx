import { Link } from "react-router-dom";

function Home() {
  const heroUrl =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";

  return (
    <>
      <div className="home-hero">
        <img src={heroUrl} alt="a beach with Waves" />
        <div className="home-hero-overlay">
          <h1>Plan your next adventure</h1>
          <p>Keep all your trips, dates, and memories in one place.</p>
        </div>
      </div>

      <div className="page-container">
        <div className="home-card">
          <h2>TravelBook</h2>
          <p>
            Plan, track, and remember your trips. Add destinations, dates, notes,
            and photos so you can keep your travels organized in one place.
          </p>
          <p>
            Get started by viewing your{" "}
            <Link to="/trips">Trips</Link> or{" "}
            <Link to="/add">Add a new trip</Link>.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
