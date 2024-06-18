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
  employeeInfoLogger(employees[i]);
  fireIncompetentEmployees(employees[i]);
}

var visitorEmployee = {
  firstName: 'John Cena',
  age: 50,
  role: 'We cannot see him',
};

employeeInfoLogger(visitorEmployee);
employeeInfoLogger();