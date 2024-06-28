const rowAndColumns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Challenge 1
// console.log the second row

// Challenge 2
// console.log number 5 only using the rowAndColumns array

// Challenge 3
// add all the values in the rowAndColumns array and console.log the result
let total = 0;

for (let i = 0; i < rowAndColumns.length; i++) {
  const row = rowAndColumns[i];
  for (let j = 0; j < row.length; j++) {
    const columnItem = row[j];
    console.log('added item: ', columnItem);
    total += columnItem;
  }
}

console.log('total', total);

// Challenge 4
// console.log the second columnn

for (let i = 0; i < rowAndColumns.length; i++) {
  const row = rowAndColumns[i];
  console.log('second column item: ', row[1]);
}