// ============================================
// Fill out Karen's ID using Javascript
// ============================================

// FILL OUT NAME
// Step 1: Find Karen's name element by ID



// Step 2: replace the value inside using innerHTML

const stageGirl = stageGirls.filter(function(stageGril){
    return stageGril.firstName === 'Karen';
});
console.log("student", stageGirl);
console.log(stageGirl[0].firstName);
console.log (Array.isArray(stageGirl)); //true if array

const gerl = stageGirl[0];
document.getElementById('karen-name').innerHTML = gerl.firstName + ' ' + gerl.lastName;
document.getElementById('karen-birthday').innerHTML = gerl.birthday;
document.getElementById('karen-address').innerHTML = gerl.address;
document.getElementById('karen-phone').innerHTML = gerl.phone;
document.getElementById('karen-image').src = gerl.image;