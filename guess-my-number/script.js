"use strict";
const secretNumber = Math.floor(Math.random() * 20) + 1;
let numberOfGuesses = 0;
// dis where you be typin' yo guess
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Gonna guess asshole?";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You guessed it fucktard!";
    document.querySelector(".highscore").textContent = numberOfGuesses;
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high shit stick!";
    numberOfGuesses += 1;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low fatass";
    numberOfGuesses += 1;
  }
});
