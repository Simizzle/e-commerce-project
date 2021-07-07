// import { CatImageAPI } from "./CatImageAPI";

const Card = (props) => {
    return (
      <div className="cardInfo">
        <h3>{props.tagLine}</h3>
        <p>Price £{props.prices}.</p>
        <button>Add to basket</button>
      </div>
    );
  };
  
  export default Card;