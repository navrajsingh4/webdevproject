import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ 
        backgroundImage: `url(${image})`,
        width: '100%', 
        height: '200px',
        backgroundSize: 'auto',
        backgroundPosition: 'center' 
      }}> </div>
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  );
}
export default MenuItem;
