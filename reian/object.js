var employees = [
  {
    firstName: 'Eli',
    age: 20,
    role: 'flexible role',
  },
  {
    firstName: 'Reian',
    age: 14,
    role: 'Moral support ni Eli',
  },
  {
    firstName: 'tita',
    age: 50,
    role: 'taga utos',
  }
];

for (var i = 0; i < employees.length; i++) {
  var employee = employees[i];
  var firstName = employee.firstName;
  var age = employee.age;
  var role = employee.role;
  
  console.log(firstName + ", age " + age + " is in the role of " + role);
}
