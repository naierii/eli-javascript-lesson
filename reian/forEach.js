let people = ['reian', 'Eli', 'Matsuri'];

console.log('for loop');

for (let i = 0; i < people.length; i++){
  let person = people[i];
  console.log('Hello', person);
}

console.log('=============');
console.log('forEach loop');

people.forEach(function(person, index) {
  console.log(index, 'Hello', person);
});
