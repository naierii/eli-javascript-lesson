/**
 * Description: The filter() method creates a new array 
 * with all elements that pass the test implemented by the provided function.
 */

const filteredStageGirls = stageGirls.filter(function(oneItem) {
  return oneItem.hp > 50;
});

console.log('filteredStageGirls', filteredStageGirls);