// ============================================
// Fill out Mahiiru's ID using Javascript
// ============================================

// FILL OUT NAME
// Step 1: Find Mahiru's ID using document.getElementById
const mahiruCard = document.getElementById('mahiru');

// Step 2: using the found element, find the element with the class name 'card-name'
const mahiruCardName = mahiruCard.querySelector('.card-name');
const mahiruCardBirthday = mahiruCard.querySelector('.card-birthday');
const mahiruCardAddress = mahiruCard.querySelector('.card-address');
const mahiruCardPhone = mahiruCard.querySelector('.card-phone');

const mahiruCardImg = mahiruCard
  .querySelector('.card-img-container')
  .querySelector('img');

// Step 3: using mahiru's data, replace the value inside using innerHTML
const mahiruData = stageGirls.find(function(actress){
  return actress.firstName === 'Mahiru';
});

mahiruCardName.innerHTML = mahiruData.firstName + ' ' + mahiruData.lastName;
mahiruCardBirthday.innerHTML = mahiruData.birthday;
mahiruCardAddress.innerHTML = mahiruData.address;
mahiruCardPhone.innerHTML = mahiruData.phone;

mahiruCardImg.src = mahiruData.image;