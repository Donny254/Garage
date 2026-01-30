import { useState, useEffect } from "react";
import "./Home.css";

function AboutUs() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const storedServices = localStorage.getItem("garageServices");

    if (storedServices) {
      setServices(JSON.parse(storedServices));
    } else {
      const defaultServices = [
        "Engine repairs",
        "Brake services",
        "Suspension work",
        "Oil changes",
        "Electrical diagnostics",
        "General vehicle maintenance",
      ];

      localStorage.setItem(
        "garageServices",
        JSON.stringify(defaultServices)
      );
      setServices(defaultServices);
    }
  }, []);

  return (
    <div className="page">
      <h1>About Us</h1>
      <p>
        group 8 Garage is a full-service automotive garage offering the
        following services:
      </p>

      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default AboutUs;

