import { useState, useEffect } from "react";
import "./Home.css";

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    phone: "",
    email: "",
    location: "",
  });

  useEffect(() => {
    const storedContact = localStorage.getItem("contactInfo");

    if (storedContact) {
      setContactInfo(JSON.parse(storedContact));
    } else {
      const defaultContact = {
        phone: "+254 700 000 000",
        email: "blacklinegarage@email.com",
        location: "Nairobi, Kenya",
      };

      localStorage.setItem(
        "contactInfo",
        JSON.stringify(defaultContact)
      );
      setContactInfo(defaultContact);
    }
  }, []);

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Phone: {contactInfo.phone}</p>
      <p>Email: {contactInfo.email}</p>
      <p>Location: {contactInfo.location}</p>
    </div>
  );
}

export default Contact;
