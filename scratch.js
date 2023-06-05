function myStrictFunction() {
  // Function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return `Hi! I'm a strict mode function! ${nested()}`;
}
function myNotStrictFunction() {
  return "I'm not strict.";
}

console.log(myNotStrictFunction());

const scott = {
  contactInfo: {
    address: 9210,
    street: "Brumbelow Crossing Way",
    zipCode: 30022,
  },
  surname: "balun",
  phone: "7707895630",
  birthYear: 1971,
  age: function () {
    return 2023 - this.birthYear;
  },
  getContactInfo: function () {
    return this.contactInfo;
  },
};
let interestedIn = prompt("What property do you want to know about?");
console.log(scott[interestedIn]);
console.log("blah blah blah");
