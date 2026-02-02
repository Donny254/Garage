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
        <h1>GROUP 88 GARAGE</h1>
      </nav>

      <main className="page">
      
        <About />
        <Contact />
      </main>
    </>
  );
}

export default Home;
