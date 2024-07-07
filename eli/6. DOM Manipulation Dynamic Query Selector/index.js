// ============================================
// Fill out Mahiiru's ID using Javascript
// ============================================

// FILL OUT NAME
// Step 1: Find Mahiru's ID using document.getElementById
const mahi = document.getElementById('mahiru');
console.log("Mahiru's ID", mahi);

// Step 2: using the found element, find the element with the class name 'card-name'
const mahiNaem = mahi
    .querySelector('.card-body')
        .querySelector('.card-name');
console.log ('Element with card-name: ', mahiNaem);

// Step 3: using mahiru's data, replace the value inside using innerHTML
const pinili = stageGirls.find(function(starr){
    const starCircle = starr.firstName == "Mahiru";

    return starCircle;
  })
  console.log('chosen one, ', pinili);
  

  const mahihi = document.getElementById("mahiru").querySelector('.card-body');
  
  mahihi.querySelector('.card-name')
    .innerHTML = pinili.firstName+' '+pinili.lastName;

  mahihi.querySelector('.card-birthday')
    .innerHTML = pinili.birthday;

  mahihi.querySelector('.card-address')
    .innerHTML = pinili.address;

  mahihi.querySelector('.card-phone')
    .innerHTML = pinili.phone;

    document.getElementById("mahiru")
      .querySelector('.card-img-container')
        .querySelector('img')
          .src = pinili.image;
  

