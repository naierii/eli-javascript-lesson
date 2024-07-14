// const naniKore = this;

const sampleObject = {
  firstName: "Nana",
  lastName: "Daiba",
  age: 17,
  sampleMethod: function(){
    return {
      childFirstName: 'Futaba',
      childLastName: 'Isurugi',
      childAge: 16,
      childSampleMethod: function(){
        console.log('this.childFirstName', this.childFirstName); // Futaba
        console.log('this', this); // { firstName: 'Futaba', lastName: 'Isurugi', age: 16, sampleMethod: [Function: sampleMethod] }
      }
    };
  },

  reverseTime: function() {
    this.age = this.age - 1;
  }
};

// const childDetails = sampleObject.sampleMethod();
// console.log('childDetails', childDetails);

// execute child method
// sampleObject.sampleMethod().childSampleMethod();

sampleObject.reverseTime();
sampleObject.reverseTime();
sampleObject.reverseTime();
console.log('sampleObject.age', sampleObject.age); // 17
console.log('sampleObject.age', sampleObject.age); // 14

const someFunction = () => {
  
}
