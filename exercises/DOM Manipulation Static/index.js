// ============================================
// Fill out Karen's ID using Javascript
// ============================================

// FILL OUT NAME
// Step 1: Find Karen's name element by ID



// Step 2: replace the value inside using innerHTML

// just like forEach loop, this will have a parameter
const data = getStageGirlByName('Nana');

console.log('data', data)
// console.log(karenData);

function getStageGirlByName(name) {
  return stageGirls.filter(stageGirl => stageGirl.firstName === name)[0];
}

const stageGirl = [
  {
    "firstName": "Karen",
    "lastName": "Aijo",
    "birthday": "Oct 1, 2001",
    "address": "Japan",
    "phone": "333-333-3333",
    "image": "./../../resources/images/karen.png",
    "hp": 47,
    "attack": 24,
    "defense": 55,
    "spAttack": 85,
    "spDefense": 24,
    "speed": 82
  },
];

console.log(stageGirl); // [{}]

const names = ['Junna'];
console.log('names', names);
console.log('name', names[0]);
