import React from 'react';

function CatName (props) {
let names = ["Oliver", "Leo", "Milo", "Charlie", "Simba", "Max", "Jack", "Loki", "Tiger", "Jasper", "Ollie", "Oscar", "George", "Rudi", "Gertrude", "Toby", "Smokey", "Finn", "Felix"];
let randomName = Math.floor(Math.random() * names.length);
let catNames = (randomName, names[randomName]);

return(
    <div className="catName">
        <h3>{catNames}</h3>
    </div>
    )
}

export default CatName