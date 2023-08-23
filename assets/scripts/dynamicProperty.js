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

// Dynamic property

const keyName = 'first Name';
console.log(person2[keyName]);

//  wrong way
// console.log(person2.keyName); output : undefined

const keyName2 = 'age';
console.log(person2.keyName2); // undefined
console.log(person2.age); // direct property access
console.log(person2['age']); // special key
console.log(person2[keyName2]); // special key

const userChosenKeyName = 'level';

let person3 = {
  'first Name': 'Koushik',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  },
  // [userChosenKeyName]: '...',
  1.5: 'RAHA',
  0: 'Technologies',
};
