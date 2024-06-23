// finds the HTML element by ID and stores it in a variable
const alertMeButton = document.getElementById('alert-me');
const greetingMessage = document.getElementById('greetings');

// stores the classList of the element in a variable
const greetingMessageClasses = greetingMessage.classList;

// adds a function on execution of an event
alertMeButton.onclick = function() {
  // DOM manipulation
  // adds class to the element
  greetingMessageClasses.add('green');
  alert('Alerts Eli!');
}

console.log('greetingMessageClasses', greetingMessageClasses);
