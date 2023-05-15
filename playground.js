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
 Looping Array, Break and Continue
/--------------------------------*/

/*const scottArray = [
    'Scott',
    'Balun',
    2023 - 1971,
    'dreamer',
    ['RB','Darren','Poppy']
];
for(let i=0;i<scottArray.length;i++){
    console.log(scottArray[i]);
};

for(let i=0; i<100;i++){
    if (i == 90) break
}*/

/*for(let exercise = 4; exercise >= 1; exercise--){
    console.log(`-----------------------Exercise #${exercise}-----------------------`)
    for(let lesson = 5; lesson >= 1; lesson--){
        console.log(`   Lesson #${lesson}`);
    }
}
let x = 5;
while(x !=0){
    console.log("Scott wuz here");
    x--;
}*/

let die = Math.trunc(Math.random()*6)+1;
console.log("Keep rolling this die until you roll a six");
while(die !== 6){
    console.log(`You rolled a ${die}`);
    die = Math.trunc(Math.random()*6)+1;
    if(die===6) console.log('you rolled a 6. Game over, bruh');
}
