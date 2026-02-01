

import { useState } from "react";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import "./Home.css";

function Home() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h1>Group 8 Garage</h1>

        <ul>
          <li onClick={() => setCurrentPage("Home")}>
            <Link to="/">Home</Link>
          </li>

          <li onClick={() => setCurrentPage("Services")}>
            <Link to="/services">Services</Link>
          </li>

          <li onClick={() => setCurrentPage("Store")}>
            <Link to="/store">Store</Link>
          </li>
        </ul>
      </nav>

      {/* PAGE CONTENT */}
      <main className="page">
        <p className="status">Current Page: {currentPage}</p>

        <AboutUs />
        <Contact />
      </main>
    </>
  );
}

export default Home;
