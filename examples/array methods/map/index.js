/**
 * The map() method in JavaScript creates a new array populated with 
 * the results of calling a provided function on every 
 * element in the calling array. It does not change the original array.
 */

const arrayOfNumbers = [1, 2, 3, 4, 5];

const doubledNumbers = arrayOfNumbers.map(function(oneNumber) {
  return oneNumber * 2;
});

const tripledNumbers = arrayOfNumbers.map(function(oneNumber) {
  return oneNumber * 3;
});

const uwu = arrayOfNumbers.map(function(oneNumber) {
  return 'uwu';
});

console.log('doubledNumbers', doubledNumbers); // [2, 4, 6, 8, 10]
console.log('tripledNumbers', tripledNumbers); // [3, 6, 9, 12, 15]
console.log('uwu', uwu); // ['uwu', 'uwu', 'uwu', 'uwu', 'uwu']