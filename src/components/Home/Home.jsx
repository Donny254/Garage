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

      <main className="page">
        <p className="status">Current Page: {currentPage}</p>
        <About />
        <Contact />
      </main>
    </>
  );
}

export default Home;
