import React, { useState } from "react";
import Cat from "./CatImageAPI";
import Button from "./Button";
import CatName from "./CatName";
import Description from "./Description";
import CatPrice from "./CatPrice";


class Product extends React.Component {
  render() {
      
    return (
        <div className="card">
          <Cat />
          <CatName />
          <CatPrice />
          <Description />
          <Button />
        </div>
        
    );
  }
}
function BasketPrice (props) {
const [CatPrice] = useState(CatPrice)
console.log(BasketPrice)
}
export default Product;

