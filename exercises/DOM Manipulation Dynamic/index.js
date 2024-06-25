// ============================================
// Fill out Karen's ID using Javascript
// ============================================

// FILL OUT NAME
// Step 1: Find Karen's name element by ID



// Step 2: replace the value inside using innerHTML

let karenData;

for (let i = 0; i < stageGirls.length; i++) {
  if (stageGirls[i].firstName === 'Nana'){
    karenData = stageGirls[i];
  }
}

// just like forEach loop, this will have a parameter
const data = stageGirls.filter(function(stageGirl) {
  return stageGirl.councilMember === 'Yes';
});

console.log('data', data)
// console.log(karenData);