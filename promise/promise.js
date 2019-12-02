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

function User() { }
User.prototype = { admin: false };
let user = new User();
User.prototype = { admin: true };
console.log(user.admin);

for(var i=0; i<10; i++)  {
}
console.log(i);