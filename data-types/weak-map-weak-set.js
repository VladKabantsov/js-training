// task 1
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMessage = new WeakMap();
const read = (message) => readMessage.set(message, true);