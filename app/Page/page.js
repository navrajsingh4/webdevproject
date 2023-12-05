import {React} from "react";
import Footer from "app/components/Footer.js";
import '../css/HomeStyles.css'; // Importing the CSS file\
import NavBar from 'app/components/Navbar.js';
import shoImage from '../assets/images/sho.png'; // Correct path to your image
// import testimg from '../assets/images/test.png';


function Home() {
  const handleOrderNow = () => {
    // console.log("Order Now button clicked");
  };

  // console.log(testimg.src);

  return (
    <div className="home">
    <NavBar/>
      <div className="headerContainer">
        <h1> LIV Shoes </h1>
        <p> SHOES TO FIT ANY TASTE</p>
        <button onClick={handleOrderNow()}> ORDER NOW</button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
