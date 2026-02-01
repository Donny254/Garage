import { useState, useEffect } from "react";

function Contact() {
  const [contactDetails, setContactDetails] = useState("");

  useEffect(() => {
    const savedContact = localStorage.getItem("group8_contact");

    if (savedContact) {
      setContactDetails(savedContact);
    } else {
      const defaultContact =
        "Contact Group 8 Garage on +254 700 000 000 orwrite and email to group8garage@gmail.com or visit us in WESTLANDS Nairobi, Kenya.";

      localStorage.setItem("group8_contact", defaultContact);
      setContactDetails(defaultContact);
    }
  }, []);

  return (
    <section>
      <h2>Contact</h2>
      <p>{contactDetails}</p>
    </section>
  );
}

export default Contact;
