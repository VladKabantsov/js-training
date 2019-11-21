// task 1
let promise = new Promise((resolve, reject) => {
    resolve();
});

setTimeout(() => console.log('setTimeout'), 0);
promise.then(() => console.log('promise'));
console.log('console');
// console, promise, setTimeout

// task 2
const arr = [null, Object, NaN, , undefined,]
console.log(arr.map((el) => typeof el).join());
// object,function,number,,undefined
// null - приводится к object, Object - function, NaN - number, empty - не имеет никакого типа, undefined - undefined

// task 3
console.log([, 1, 2,].length + [, 12,,].length)
// 6
// Массивы можно переписать в виде [emtpy, 1, 2] [empty, 12, empty], следовательно длинна каждого равна 3