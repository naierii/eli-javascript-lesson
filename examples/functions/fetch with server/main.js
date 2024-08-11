import { backendBaseUrl } from "./constant";

/**
 * GET request
 * This API will return a list
 */
const todo1 = fetch(`${backendBaseUrl}/stage-girls`, {
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


/**
 * POST request
 * This API will return the data you posted
 */
fetch(`${backendBaseUrl}/todo`, {
  method: 'POST',
  headers: {
    'ngrok-skip-browser-warning': true,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Paliguan si doggo 4',
    description: 'Para mabango na yung doggo',
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));