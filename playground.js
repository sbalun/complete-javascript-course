/*
const age = 18;

//age >= 18 ? console.log("This one") : console.log("Other one");

const drink = age >= 18 ? "Wine, women and song" : "Juicy juice";
//console.log(drink);

console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}`)
*/


/*--------------------------------/
           Functions
/--------------------------------/
const currentYear = 2023;
const birthYear = 1971;
let currentAge;

// Function Expression
const calculateAge1 = function (birthYear){
    return currentYear - birthYear;
}
console.log("This is calculateAge1: " + (currentAge => currentYear - birthYear));

// Arrow function
const calculateAge2 = birthYear => currentYear - birthYear;
*/
/*--------------------------------/
 Functions calling other functions
/---------------------------------/
function cutFruitIntoPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitIntoPieces(apples);
    const orangePieces = cutFruitIntoPieces(oranges);
    const juice = `This juice is made with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(4,5));
*/

/*--------------------------------/
       Reviewing Functions
/--------------------------------*/

