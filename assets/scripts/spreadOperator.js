const person = {
  name: 'Soumitra',
  hobbies: ['Sports', 'Coding'],
};

const anotherPerson = person;
// const person2 = { ...person };

const person2 = {
  ...person,
  hobbies: [...person.hobbies],
  qualification: 'Diploma',
};

person.age = 25;

person.hobbies.push('Cooking');

console.log(person);
console.log(anotherPerson);
console.log(person2);
