import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    const savedMessage = localStorage.getItem("welcomeMessage");

    if (savedMessage) {
      setWelcomeMessage(savedMessage);
    } else {
      const defaultMessage =
        "Welcome to group 8 Garage. We offer professional automotive repair and maintenance services.";
      localStorage.setItem("welcomeMessage", defaultMessage);
      setWelcomeMessage(defaultMessage);
    }
  }, []);

  return (
    <div className="page">
      <h1>group 8 Garage</h1>
      <p>{welcomeMessage}</p>
    </div>
  );
}

export default Home;

