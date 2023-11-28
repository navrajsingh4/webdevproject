import {React} from "react";
import './HomeStyles.css'; // Importing the CSS file\
import shoImage from 'app/pages/sho.png'; // Correct path to your image


function Home() {
  const handleOrderNow = () => {
    console.log("Order Now button clicked");
  };

  return (
    <div className="home">
    <img class="img" src={shoImage.src} alt="Background" />
      <div className="headerContainer">
        <h1> LIV Shoes </h1>
        <p> SHOES TO FIT ANY TASTE</p>
        <button onClick={handleOrderNow()}> ORDER NOW</button>
      </div>
    </div>
  );
}

export default Home;
