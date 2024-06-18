// The functionality of this function is to log the information of a single employee.
function employeeInfoLogger(employee) {
  var firstName = employee.firstName;
  var age = employee.age;
  var role = employee.role;
  
  console.log(firstName + ", age " + age + " is in the role of " + role);
}

function fireIncompetentEmployees(employee) {
  console.log('fireIncompetentEmployees function has been executed!')
  var age = employee.age;
  var firstName = employee.firstName;

  if (age < 17) {
    console.warn(firstName + ' has been fired!');
  }
}