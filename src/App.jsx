import React, {useState} from "react";
import Card from "./Components/Product";
import "./App.css";


class App extends React.Component {
  render()
   {
    return (
      <div className="container">
        <h1 className="title">CATS CATS CATS</h1>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
};

export default App;
