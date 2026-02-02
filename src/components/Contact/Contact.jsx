import useContact from "../../hooks/useContact";

function Contact() {
  const { phone, email, location } = useContact();

  return (
    <div>
      <h2>CONTACT US</h2>

      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

export default Contact;
