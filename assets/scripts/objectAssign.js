const person = {
  name: 'Soumitra',
  hobbies: ['Sports', 'Coding'],
};

//  new object copy
const person2 = Object.assign({}, person);

console.log(person2);

person.name = 'Koushik';

console.log(person2);
console.log(person);
