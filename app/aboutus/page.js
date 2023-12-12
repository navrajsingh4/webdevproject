import React from "react";
import "../css/About.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
function About() {
  return (
    <div className="about">
      <NavBar/>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to LIV Shoes! At LIV Shoes, we're dedicated to the art of crafting stylish, comfortable, and high-quality footwear. Our passion for impeccable craftsmanship, diverse styles, and a commitment to sustainability drives us every day. We believe that every step should be a blend of fashion and comfort, and that's precisely what we offer. From timeless classics to trendy designs, our shoes are meticulously made by skilled artisans with a focus on durability and comfort. We pride ourselves on being more than just a footwear brand; we're a community that cares about the environment and giving back. Join us on this stylish journey, where each step you take reflects
        your unique style and values. Discover the LIV Shoes difference today!
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default About;