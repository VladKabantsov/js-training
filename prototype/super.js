let human = {
    name: 'human',
    superName: 'human super',
    superLink() {
        console.log(this.name);
    }
}

let user = Object.create(human);

console.log('human', human.__proto__);
console.log('user', user.__proto__);

user.superName = 'user super';
user.name = 'user name';
user.superLink = function() {
    this.__proto__.superLink.call(this);
}

user.superLink();

