// task 1
let animal = {
    jumps: null,
    eat() {
        this.full = true;
    }
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // true
delete rabbit.jumps;
console.log(rabbit.jumps); // null
delete animal.jumps;
console.log(rabbit.jumps); // undefined

// task 2
let head = {
    glasses: 1
};
let table = {
    __proto__: head,
    pen: 3
};
let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};
let pockets = {
    __proto__: bed,
    money: 2000
};

// task 5
console.log('task 5');
let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
};
let speedy = {
    stomach: [],
    __proto__: hamster
};
let lazy = {
    stomach: [],
    __proto__: hamster
};
// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple
// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple