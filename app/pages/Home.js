import {React} from "react";
import './HomeStyles.css'; // Importing the CSS file\
import shoImage from '../assets/images/sho.png'; // Correct path to your image
// import testimg from '../assets/images/test.png';


function Home() {
  const handleOrderNow = () => {
    // console.log("Order Now button clicked");
  };

  // console.log(testimg.src);

  return (
    <div className="home">
      <div className="headerContainer">
        <h1> LIV Shoes </h1>
        <p> SHOES TO FIT ANY TASTE</p>
        <button onClick={handleOrderNow()}> ORDER NOW</button>
      </div>
    </div>
  );
}

export default Home;
