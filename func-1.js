function createGreeting(name, age) {
    const yearOfBirth = 2020 - age;
    return `I was born in ${yearOfBirth}`;
    // return `Hi, my name is ${name} and I'm ${age} years old`;
}

const greeting1 = createGreeting('Taeil', 85);
console.log(greeting1);
