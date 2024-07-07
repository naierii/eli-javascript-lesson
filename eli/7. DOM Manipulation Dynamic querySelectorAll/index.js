// ============================================
// Fill all card using the data from stage-girls-data.js
// ============================================

// FILL OUT CARD DETAILS 
// Step 1: use querySelectorAll to get all the .card elements
const allCards = document.querySelectorAll('.card');
console.log ('cardst', allCards);

// Step 2: loop through the .card elements and fill out each elements' details using the data from stage-girls-data.js

/*allCards.forEach(function(stageGirl){
    console.log(stageGirl);
    stageGirl.querySelector('img').src = stageGirl.image;
})*/

for (i=0; i<stageGirls.length; i++){
    stageGirl = stageGirls[i];
    oneCard = allCards[i];
    oneName = oneCard.querySelector('.card-name');
    bDay = oneCard.querySelector('.card-birthday');
    location = oneCard.querySelector('.card-address');
    contact = oneCard.querySelector('.card-phone');
    
    oneName.innerHTML = stageGirl.firstName;
    //  +' ' +stageGirl.lastName;
    bDay.innerHTML = stageGirl.birthday;
    locatione.innerHTML = stageGirl.address;
    contact.innerHTML = stageGirl.phone;
    console.log(stageGirl.firstName, "updated.");
}

//document.querySelectorAll('.card-name') - kumuha ng 1 item sa list
console.log(document.querySelectorAll('.card-name')[1]);
 