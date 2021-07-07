import React from 'react';
import Cat from "./Components/CatImageAPI";
import Card from './Components/Card';
import CatImageAPI from './Components/CatImageAPI';
import "./App.css";

class App extends React.Component {
  render() {
  
   
    return (
      
      <div className="container">
        <h1 className="title">CATS CATS CATS</h1>
     <div className="card">
        <Cat />
        <Card
          tagLine="Princess Tunafish"
          prices="79"
        />
      </div>
      <div className="card">
        <Cat />
        <Card

          pictureAlt="floating hotel"
          tagLine="Monseur Fluffypants"
          prices="129"
        />
        </div>

        <div className="card">
          <Cat />
        <Card
          picture={ CatImageAPI }
          pictureAlt="wood cabin"
          tagLine="Gertrude"
          prices="99"
        />
        </div>

        <div className="card">
        <Cat />
        <Card
          picture={ CatImageAPI }
          pictureAlt="Pug on a blanket"
          tagLine="Fredrique"
          prices="109"
        />
        </div>
      </div>
    );
    
    }
  }
export default App
