var people = [
  { name: 'John', age: 20, city: 'Manila' },
  { name: 'Manny', age: 15, city: 'Baguio' },
  { name: 'Samsung', age: 27, city: 'Makati' },
];

var richPeople = [
  { name: 'Susan', age: 18, city: 'Manila' },
  { name: 'Jenny', age: 19, city: 'Baguio' },
  { name: 'Karen', age: 12, city: 'Makati' },
]

people.forEach(function(person, i) {
  console.log('hello', person.name);

  console.log('meet', richPeople[i].name);

  console.log('=============');
})


















// for (var i = 0; i < richPeople.length; i++) {
//   people.push(richPeople[i]);
// }

// for (var i = 0; i < people.length; i++) {
//   const isLegalAge = isLegalAgeHandler(people[i]);
//   if (isLegalAge) {
//     people[i].isAdult = true;
//   } else {
//     people[i].isAdult = false;
//   }
// }

// function isLegalAgeHandler(person) {
//   if (person.age > 17) {
//     console.log(person.name + ' is of legal age');
//     return true;
//   } else {
//     console.log(person.name + ' is not legal age');
//     return false;
//   }
// }

// var eli = {
//   firstName: 'Eli',
//   lastName: 'Taeza',
// }

// eli.isYayamanin = true;
// console.log('eli', eli);

// console.log('people', people)

// // var goods = [
// //   'burger',
// //   'pizza',
// //   'chicken',
// //   'pork',
// //   'pork',
// //   'pork',
// //   'pork',
// //   'liempo',
// //   'liempo',
// //   'chicken',
// //   'beef',
// // ];

// // function getPoultry() {
// //   var onlyPoultry = 'chicken';
// //   var listOfPoultry = [];

// //   for (var i = 0; i < goods.length; i++) {
// //     if (goods[i] === onlyPoultry) {
// //       listOfPoultry.push(goods[i]);
// //     }
// //   }

// //   console.log(listOfPoultry);

// //   return listOfPoultry;
// // }

// // var filteredPoultry = getPoultry();
// // console.log('filteredPoultry',filteredPoultry)

// // add values of richPeople variable into people variable using for loop and array push method
// // Then console.log people variable