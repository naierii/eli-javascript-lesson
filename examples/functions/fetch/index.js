
// GET
const todo1 = fetch('https://jsonplaceholder.typicode.com/todos/1');

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
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8'
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));