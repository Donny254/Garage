import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserContext from "./UserContext.jsx";

import DarkMode from "./components/DarkMode/DarkMode";
import SignupForm from "./components/SignUpForm/SignUp";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Store from "./components/Store/Store";
import About from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";

import "./App.css";

function App() {
  const [user, setUser] = useState("ken");
  const [total, setTotal] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
      {/* Toggle dark class here */}
      <div className={darkMode ? "dark" : ""}>
        <UserContext.Provider
          value={{ user, setUser, total, setTotal }}
        >
          {/* Navigation */}
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/services">Service</Link>
            <Link to="/store">Store</Link>
            <Link to="/contact">Contact</Link>

            {/*Dark Mode Button */}
            <DarkMode
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <SignupForm />
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
