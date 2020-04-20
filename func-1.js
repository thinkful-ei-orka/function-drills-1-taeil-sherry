"use strict";


function getYearOfBirth(age) {

  return 2020 - age;
}

function createGreeting(name, age) {
  if (typeof name === 'undefined' || typeof age === 'undefined') {
      throw new Error("Arguments not valid.");
  }
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  if (typeof name !== 'string' || typeof age !== 'number') {
      throw new TypeError('Name must be a string and age must be a number.');
  }

  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name}, and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
  const greeting1 = createGreeting('Taeil', 85);
  console.log(greeting1);
} catch(e) {
  console.log(e.message);
}
