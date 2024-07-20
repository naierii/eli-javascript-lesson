function checkAnimals(orderList) {
  const findCat = orderList.find((order) => order === 'Cat');

  return findCat !== undefined;
}

// Success example
const orderPromise = new Promise(function(resolve, reject){
  const orders = [ 'Pizza', 'Burger', 'Pasta', 'Cat' ];
  if (checkAnimals(orders)){
    reject('Your order has a live animal');
  } else {
    resolve(orders);
  }
});

orderPromise
  .then(function(order) {
    console.log('Orders of Eli:', order);
  })
  .catch(function(error) {
    console.error(error)
  });
