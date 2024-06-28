const rowAndColumns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Challenge 1
// console.log the second row
console.log('i. second row:', rowAndColumns[1]);

// Challenge 2
// console.log number 5 only using the rowAndColumns array
console.log('ii. just 5: ', rowAndColumns[1][1]);

// Challenge 3
// add all the values in the rowAndColumns array and console.log the result
let total = 0;
console.log('iii. add all items in array');
rowAndColumns.forEach(function(nyeh){
  nyeh.forEach(function(addend){
    // console.log("addend: ", addend);
    total=total+addend;
  })
})
console.log("total: ", total);

// Challenge 4
// console.log the second columnn
console.log("iv. second rows only...");
rowAndColumns.forEach(function(nyeh){
  console.log ("row ", nyeh, ": ", nyeh[1]);
})