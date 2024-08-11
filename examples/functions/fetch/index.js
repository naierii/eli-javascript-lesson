
// GET
const todo1 = fetch('https://e5ff-136-158-27-48.ngrok-free.app/stage-girls', {
  headers: {
    'ngrok-skip-browser-warning': true,
  },
});

todo1
  .then(function(responseData){
    return responseData.json();
  })
  .then(function(jsonData){
    console.log('jsonData', jsonData);
  })
  .catch(function(){
    console.error('fetch error!');
  });


// POST
// const postSampleUrl = 'http://localhost:5000/todo';
// fetch(postSampleUrl, {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'Paliguan si doggo',
//     description: 'Para mabango na yung doggo',
//   }),
// })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));