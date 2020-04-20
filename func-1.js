"use strict";


function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  return 2020 - age;
}

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);
  return `I was born in ${yearOfBirth}`;
  // return `Hi, my name is ${name} and I'm ${age} years old`;
}

try {
  const greeting1 = createGreeting('Taeil', 85);
  console.log(greeting1);
} catch(e) {
  console.log("It didn't work.");
}
