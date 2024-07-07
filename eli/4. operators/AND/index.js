// AND operator is this symbol: &&
// It is used to check if two or more conditions are true

const eli = {
  firstName: 'Eli',
  lastName: 'Ayase',
  age: 29,
}

const reian = {
  firstName: 'Reian',
  lastName: 'Kun',
  age: 27,
}

// if (eli.age > 20) {
//   console.log('Eli is older than 20');
// }

// if (reian.age > 20) {
//   console.log('Reian is older than 20');
// }

if (eli.age > 20 && reian.age > 30) {
  console.log('Both are older than 20');
}
