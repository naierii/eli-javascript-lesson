
// Success example
const fulfilledPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!'); // The promise is fulfilled after 2 seconds
  }, 2000);
});

fulfilledPromise
  .then(value => {
    console.log(value); // Output: 'Success!'
  })
  .catch(error => {
    console.error('Promise rejected:', error); // This won't be called in this case
  });

// Failure example
const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Something went wrong!'); // The promise is rejected
  }, 2000);
});

failedPromise
  .then(value => {
    console.log(value); // This won't be called since the promise is rejected
  })
  .catch(error => {
    console.error('Promise rejected:', error); // Output: 'Promise rejected: Something went wrong!'
  });