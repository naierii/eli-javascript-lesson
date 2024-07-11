const bestGirl = 'Eli';
const myBalance = 1000;
const isStudent = true;

const daibaNana = {
  firstName: "Nana",
  lastName: "Daiba",
  age: 17,
  school: "Seisho Music Academy",
  likes: ['Frogs', 'Cooking', 'Pork miso soup'],
  isStudent: true,
  isAlcoholic: false,
  isIdol: 'true',
  stats: {
    vocal: 80,
    dance: 60,
    visual: 30,
    character: 90,
    specialSkill: 'Dual sword',
  },
  reverseTime: function() {
    this.age = this.age - 1;
  },
}

console.log(bestGirl);
console.log(myBalance);
console.log(isStudent);

console.log(daibaNana.firstName);
console.log(daibaNana.lastName);
console.log(daibaNana.age);
console.log(daibaNana.school);
console.log(daibaNana.likes);
console.log(daibaNana.isStudent);
console.log(daibaNana.isAlcoholic);
console.log(daibaNana.isIdol);
console.log(daibaNana.stats);
console.log(daibaNana.reverseTime);

console.log(daibaNana.likes[0]);
console.log(daibaNana.likes[1]);

console.log(daibaNana.stats.vocal);
console.log(daibaNana.stats.dance);
console.log(daibaNana.stats.visual);
