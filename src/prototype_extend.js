let obj1 = new Object();
let obj2 = {};

console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true
console.log(Object.getPrototypeOf(obj2) === Object.prototype); // true

let obj = { name: "tim" };
console.log(obj.prototype);
let A = function () { };
A.prototype = obj;

let a = new A();
console.log(a.name); // tim


class Animal {
    constructor(type) {
        this.type = type;
    }

    getName() {
        return this.type;
    }
}

class Dog extends Animal {
    constructor(type) {
        super(type);
        this.type = type;
    }

    bark() {
        return this.type;
    }
}


let dog = new Dog("dog");

console.log(dog.bark());
console.log(dog.getName());