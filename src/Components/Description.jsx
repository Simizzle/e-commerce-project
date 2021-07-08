import CatName from "./CatName";

function Description (props) {
let desc1 = "With an insatiable appetite and love of fine dining, is high maintenance, to say the least. What is lost from your pocket, however, is more than made up for with the lashings of love this cat likes to show. Great with children, dogs and other cats – not so great with gerbils and low-flying insects.";
let desc2 = "Hunter, gatherer and bearer of gifts. I am an outdoor cat and loves to play on that innate urge to catch, toy with and decapitate various garden rodents. Sadly, I was abandoned by my owners - in their kitchen.";
let desc3 = "I am one furry ball of fun and can be kept entertained for hours by means of expressive dance. Our extensive research found that this cat's favourite moves are the 'Tree in the Wind', 'The Bemused Giraffe' and 'The Flipped Tortoise'. Full instructions are enclosed for these with your cat.";
let desc4 = "A shy but caring cat with very few needs. If you want a furry friend to snuggle on the couch with then you have found your perfect cat! *All descriptions may have been correct at the time of writing, and we probably haven't just lied to you. The chances are that this cat isn't a mentalist.";
let desc5 = "Hide your valuables, this cat has a terrible penchant for thievery. Despite this unfortunate trait, our furry friend enjoys basking in the sun, eating, and sleeping. Just don’t take your eye off the ball for too long.";
let desc6 = "The perfect furry companion for those with the time. This cat is hard work. Between the 15-mile hikes and early morning starts, this is the cat to push you to the limit.";
let desc7 = "Showing heaps of love and affection, it’s so easy to forget this cat’s problem of its tendency to get a little murderous.";
let desc8 = "With a meow reaching up to 200db, this cat thing is an ideal security cat. With previous experience as a site security guard, you have all of the peace-of-mind that your home is well and truly guarded.";
let desc9 = "Quite a strange cat with an equally strange habit. 23 hours a day, this cat chases its tail, continuously. We have tried to stop the cycle but the immense speeds reached formed a sort of vortex in centre of the cat’s path of trajectory. Losing three team members and a broom handle in the process; we thought it would be wise to pre-warn any prospective owners.";
let desc10 = "A happy cat, maybe a little too happy. What’s this cat up to? Where did it even come from? We don’t know but it’s yours for this bargain price. Please, pay caution to that overly happy personality. It can only spell trouble.";

let descArray = [desc1, desc2, desc3, desc4, desc5, desc6, desc7, desc8, desc9, desc10];

let ranDesc = Math.floor(Math.random()* descArray.length);
let catDesc = (ranDesc, descArray[ranDesc]);
return (
    <div className="catDescription">
<p>{catDesc}</p>
    </div>)
}
export default Description;
