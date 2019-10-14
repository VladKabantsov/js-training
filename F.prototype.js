// task 1

// task 1.1
// function Rabbit() { }
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// Rabbit.prototype = {};
// console.log(rabbit.eats); // true

// task 1.2
// function Rabbit() { }
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// Rabbit.prototype.eats = false;
// console.log(rabbit.eats); // false

// task 1.3
// function Rabbit() { }
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// delete rabbit.eats;
// console.log(rabbit.eats, rabbit.__proto__); // true

// // task 1.4
// function Rabbit() { }
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// delete Rabbit.prototype.eats;
// console.log(rabbit.eats); // undefined

// task 5
// function Obj(name) {
//   this.name = name;
// }
// let obj = new Obj('test');
// let obj2 = new obj.constructor('asd');
// console.log(obj, obj2);
function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)

let user = new User('John');
let user2 = new user.constructor('Pete');
console.log(user);
console.log(user2); // undefined