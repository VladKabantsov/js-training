const sum = (a) => {
    return (b) => a + b; 
}

const inBetween = (min, max) => {
    return (value) => value >= min && value <= max;
}
const inArray = (availableList) => {
    return (value) => availableList.includes(value);
}

const byFieldName = (name) => {
    return (a, b) => a[name] > b[name] ? 1 : -1;
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

console.log(...users.sort(byFieldName('name')));
console.log(...users.sort(byFieldName('age')));
console.log(...users.sort(byFieldName('surname')));