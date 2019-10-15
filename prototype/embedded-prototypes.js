// task 1
// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// }

// function f() {
//   console.log('test');
// }

// f.defer(2000);

// task 2
Function.prototype.defer = function (ms) {
  return (...args) => setTimeout(this, ms, ...args);
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2);