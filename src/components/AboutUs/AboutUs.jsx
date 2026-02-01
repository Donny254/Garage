import { useState, useEffect } from "react";

function AboutUs() {
  const [aboutInfo, setAboutInfo] = useState("");

  useEffect(() => {
    const savedAbout = localStorage.getItem("group8_about");

    if (savedAbout) {
      setAboutInfo(savedAbout);
    } else {
      const defaultAbout =
        "Group 8 Garage is a professional automotive company offering vehicle servicing, engine diagnostics, repairs, inspections, and maintenance. Our goal is to provide reliable and affordable garage services.";

      localStorage.setItem("group8_about", defaultAbout);
      setAboutInfo(defaultAbout);
    }
  }, []);

  return (
    <section>
      <h2>About Us</h2>
      <p>{aboutInfo}</p>
    </section>
  );
}

export default AboutUs;
