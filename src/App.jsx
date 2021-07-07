import React from 'react';
import Cat from "./Components/CatImageAPI";
import Card from './Components/Card';
import CatName from './Components/CatName';
import Description from './Components/Decription';
import CatPrice from './Components/CatPrice';
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
        <CatPrice />
        <Description />
        <Card

        />
      </div>
      <div className="card">
        <Cat />
        <CatName />
        <CatPrice />
        <Description />
        <Card

        />
        </div>

        <div className="card">
          <Cat />
          <CatName />
          <CatPrice />
          <Description />
          <Card
     
        />
        </div>

        <div className="card">
        <Cat />
        <CatName />
        <CatPrice />
        <Description />
        <Card
     
        />
        </div>
      </div>
    );
    
    }
  }
export default App
