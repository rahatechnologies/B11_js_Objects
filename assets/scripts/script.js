let person = {
  name: 'Koushik',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  },
};

// person.greet();

// person = {
//   name: 'Soumitra',
//   age: 24,
//   hobbies: ['Sports', 'Cooking'],
//   greet: function () {
//     alert('Hi there!');
//   },
//   isAdmin: true,
// };

person.age = 31;
person.age = undefined;

person.isAdmin = true;

delete person.age;
console.log(person);

let person2 = {
  'first Name': 'Koushik',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  },

  1.5: 'RAHA',
  0: 'Technologies',
};

console.log(person2['first Name']);
// console.log(person2.1.5);
console.log(person2[1.5]);
console.log(person2[0]);
console.log(person2['1.5']);
console.log(person2);

const numbers = { 5: 'Koushik', 1: 'Soumitra' };
console.log(numbers);

// Dynamic property
