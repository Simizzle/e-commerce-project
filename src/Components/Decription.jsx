function Description (props) {
let desc1 = "With an insatiable appetite and love of fine dining, is high maintenance, to say the least. What is lost from your pocket, however, is more than made up for with the lashings of love this cat likes to show. Great with children, dogs and other cats – not so great with gerbils and low-flying insects.";
let desc2 = "Hunter, gatherer and bearer of gifts. {name} is an outdoor cat and loves to play on that innate urge to catch, toy with and decapitate various garden rodents. Sadly, {name} was abandoned by its owners - in their kitchen.";
let desc3 = "{name} is one furry ball of fun and can be kept entertained for hours by means of expressive dance. Our extensive research found that this cat's favourite moves are the 'Tree in the Wind', 'The Bemused Giraffe' and 'The Flipped Tortoise'. Full instructions are enclosed for these with your cat.";
let desc4 = "A shy but caring cat with very few needs. If you want a furry friend to snuggle on the couch with then you have found your perfect cat! *All descriptions may have been correct at the time of writing, and we probably haven't just lied to you. The chances are that this cat isn't a mentalist.";
let descArray = [desc1, desc2, desc3, desc4];

let ranDesc = Math.floor(Math.random()* descArray.length);
let catDesc = (ranDesc, descArray[ranDesc]);
return (
    <div className="catDescription">
<p>{catDesc}</p>
    </div>)
}
export default Description;