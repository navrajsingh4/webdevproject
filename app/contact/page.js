import React from "react";
import "../css/Contact.css";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

function Contact() {
  return (
    <div className="contact">
      <NavBar/>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;