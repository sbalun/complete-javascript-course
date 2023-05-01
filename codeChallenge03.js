let testDataDolphins01 = 96+108+89;
let testDataDolphins02 = 97+112+101;
let testDataDolphins03 = 97+112+101;

let testDataKoalas01 = 88+91+110;
let testDataKoalas02 = 109+95+123;
let testDataKoalas03 = 109+95+106;

let averageScoreDolphins = testDataDolphins03 / 3;
console.log("averageScoreDolphins: " + averageScoreDolphins)
let averageScoreKoalas = testDataKoalas03 / 3;
console.log("averageScoreKoalas: " + averageScoreKoalas)

if(averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100){
    console.log("Dolphin's win");
} else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100){
    console.log("Koala's win");
} else if (averageScoreKoalas === averageScoreDolphins && averageScoreKoalas >= 100 && averageScoreDolphins >= 100){
    console.log("It's a tie!");
} else{
    console.log("Nobody scored enough points to be declared a winner")
}
