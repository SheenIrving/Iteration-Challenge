//Challenge 1
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people
  .filter((person) => {
    if (person.age <= 25)
      return {
        person,
      };
  })
  .map(function (person) {
    return {
      name: person.firstName + ' ' + person.lastName,
      email: person.email,
    };
  });
console.log(youngPeople);
//Challenge 2

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((num) => {
    if (num > 0)
      return {
        num,
      };
  })
  .reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

console.log(positiveSum);

//Challenge 3

const words = ['coder', 'programmer', 'developer'];

words.forEach((word) =>
  console.log(word.charAt(0).toUpperCase() + word.slice(1))
);
