// function randomNumber() {
//   let randomNumber = Math.random() // 0.5234356576543
//   return randomNumber;
// }

function randomOnes() {
  let randomNumber = Math.random(); // 0.8763525235342
  // make randomNumber one digit without decimal
  let randomNumberWithOnes = randomNumber * 10; // 8.763525235342
  // round down
  let roundedDownNumber = Math.floor(randomNumberWithOnes); // 8

  return roundedDownNumber;
}

let randomizedOnes = randomOnes();
let anotherRandom = randomOnes();

if (true) {
  let something = 'well something';

  something = 'changed';

  console.log('let something', something);
}
// console.log(something);

if (true) {
  const something = 'another something';

  // something = 'changed something';

  // console.log('const something', something);
}
// console.log('something', something);

// let randomized = randomNumber();
// console.log('randomized', randomized);

const arraySomething = [6,7,5]

for (const i = 0; i < arraySomething.length; i++) {
  console.log(i)
}

const i = 0;
i = i + 1;
