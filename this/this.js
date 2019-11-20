// task 1

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: this
//   };
// };

// let user = makeUser();

// console.log(user.ref.name); // Каким будет результат? = undefined

// task 2
// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// task 3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // показывает текущую ступеньку
    console.log(this.step);
    return this;
  }
};

ladder.up().up().down().showStep();