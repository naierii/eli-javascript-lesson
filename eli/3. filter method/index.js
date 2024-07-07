// use .filter method to filter stageGirls array with HP greater 50
//'.filter' method will return an array.

// uncomment the code below

// The goal is to check which stageGirls has an HP greater than 50
const filteredStageGirls = stageGirls.filter(function(oneItem){
  return oneItem.speed > 50 && oneItem.hp > 50;
  // return something
});

console.log('filteredStageGirls', filteredStageGirls);