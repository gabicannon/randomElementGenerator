import selectedElement from "./element.js";
import getFunFact from "./funFact.js";

const whatElementAreYou = () => {
   return `You are ${selectedElement}. Here is a fun fact about that element, ${getFunFact()}.`

};

console.log(whatElementAreYou());