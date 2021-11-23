class Person {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} says Hi!`);
    }
}

const p = new Person('Lisa');

console.log(typeof p);
console.log(p instanceof Person);

p.sayHi();