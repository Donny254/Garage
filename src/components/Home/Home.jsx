import About from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <nav className="navbar">
        <h1>GROUP 8 GARAGE</h1>
        <li>Car Garage</li>
      </nav>

      <main className="page">
        <p className="status">Current Page: {currentPage}</p>
        <About />
        <Contact />
      </main>
    </>
  );
}

export default Home;
