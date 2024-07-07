/**
 * The find() method in JavaScript returns the value 
 * of the first element in the provided array that 
 * satisfies the provided testing function. If no values 
 * satisfy the testing function, undefined is returned.
 */

// Example #1
const arrayOfNumbers = [1, 2, 3, 4, 5];

const foundNumber = arrayOfNumbers.find(function(numberItem) {
  return numberItem > 3;
});

console.log('foundNumber', foundNumber); // 4

// Example #2
const candidates = [
  {
    firstName: 'Eli',
    lastName: 'Taeza',
    job: 'Maimai tester',
    age: 20,
  },
  {
    firstName: 'Reian',
    lastName: 'Viloria',
    job: 'Mahalin ka, yieeeee',
    age: 21,
  },
  {
    firstName: 'Nana',
    lastName: 'Daiba',
    job: 'Stage girl',
    age: 13,
  },
  {
    firstName: 'Karen',
    lastName: 'Aijo',
    job: 'Stage girl',
    age: 25,
  },
  {
    firstName: 'Mahiru',
    lastName: 'Tsuyuzaki',
    job: 'Stage girl',
    age: 32,
  },
];

const firstQualifiedCandicate = candidates.find(function(candidate) {
  const qualification1 = candidate.job === 'Stage girl';
  const qualification2 = candidate.age > 18;

  return qualification1 && qualification2;
});

console.log('firstQualifiedCandicate', firstQualifiedCandicate);
// { firstName: 'Karen', lastName: 'Aijo', job: 'Stage girl', age: 25 }