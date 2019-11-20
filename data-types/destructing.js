let user = {
  name: 'Vlad',
  size: {
    width: 123,
    height: 100,
  },
}

let user2 = { ...user };
user2.size.width = 100;

console.log(
  JSON.stringify(user) === JSON.stringify(user2)
)