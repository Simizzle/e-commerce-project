import React,  { useState } from 'react';

function CatPrice (props) {
let price = ["20", "25", "200", "40", "400", "600", "125", "55", "550", "500", "80", "320", "370", "420", "230", "90", "240", "260", "100"];
let randomPrice = Math.floor(Math.random() * price.length);
let catPrice = (randomPrice, price[randomPrice]);

return(
    <div className="catPrice">
        <h4>Price: £{catPrice}</h4>

    </div>
  
    )
    
}

export default CatPrice