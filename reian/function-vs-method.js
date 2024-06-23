// function
// function outside of an object
function sayHello() {
  console.log('Hello');
}

sayHello();

// method
// function inside of an object
const person = {
  name: 'Eli',
  age: 29,
  isEmployed: true,
  sayHello: function() {
    console.log('Hello');
  }
}

person.sayHello();