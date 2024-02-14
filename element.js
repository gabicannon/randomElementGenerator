const element = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", 
"Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", 
"Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", 
"Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", 
"Scandium", "Titanium", "Vanadium", "Chromium", "Manganese"]

//generate a random number to pull from the element array
const pickRandomElement = () => {
    //generates a random number to pull from the element array
    const randomNumberGenerator = Math.floor(Math.random()* 25);
    return element[randomNumberGenerator];
};

const selectedElement = pickRandomElement()
//console.log(selectedElement)

//tests if the pickRandomElement function randomly pulls an element from the element array
//console.log(pickRandomElement())

export default selectedElement;