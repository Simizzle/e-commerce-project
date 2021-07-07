import React from 'react';
import Cat from "./Components/CatImageAPI";
import Card from './Components/Card';
import CatName from './Components/CatName';
import Description from './Components/Decription';
import CatImageAPI from './Components/CatImageAPI';
import "./App.css";

class App extends React.Component {
  render() {
  
   
    return (
      
      <div className="container">
        <h1 className="title">CATS CATS CATS</h1>
     <div className="card">
        <Cat />
        <CatName />
        <Description />
        <Card
          tagLine=""
          prices="79"
        />
      </div>
      <div className="card">
        <Cat />
        <CatName />
        <Description />
        <Card

          pictureAlt="floof"
          prices="129"
        />
        </div>

        <div className="card">
          <Cat />
          <CatName />
          <Description />
          <Card
           pictureAlt="floof"
           prices="99"
        />
        </div>

        <div className="card">
        <Cat />
        <CatName />
        <Description />
        <Card
          pictureAlt="floof"
          prices="109"
        />
        </div>
      </div>
    );
    
    }
  }
export default App
