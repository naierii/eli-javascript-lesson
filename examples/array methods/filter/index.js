// use .filter method to filter stageGirls array with HP greater 50

// uncomment the code below

// The goal is to check which stageGirls has an HP greater than 50
const filteredStageGirls = stageGirls.filter(function(oneItem) {
  return oneItem.hp > 50;
});

console.log('filteredStageGirls', filteredStageGirls);