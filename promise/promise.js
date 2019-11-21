// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
  
//     setTimeout(() => resolve(2), 1000);
//   });
  
//   promise
//   .then((result) => console.log(result));

function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(() => resolve('resolve promise'), ms));
}
  
delay(3000).then(() => console.log('выполнилось через 3 секунды'));