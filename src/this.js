// let obj = {
//     a: 1,
//     callA() {
//         console.log(this.a);
//     }
// }

// obj.callA(); // 1

// A = 1;

// function callA() {
//     console.log(this.A);
// }

// callA(); // 1

// let ClassA = function () {
//     this.a = 1;
//     return {
//         a: 2
//     }
// }

// let b = new ClassA();

// console.log(b.a); // 2


// let obj1 = {
//     name: "seven",
//     getName: function() {
//         return this.name;
//     }
// }

// let getName = obj1.getName;


// console.log(obj1.getName()); // seven
// console.log(getName.apply(obj1)); // seven


// Function.prototype.bind = function () {
//     let self = this, // 保存 this 对象
//         context = [].shift.call(arguments), // 切割出第一个参数作为 this 指向
//         args = [].slice.call(arguments); // 剩余的参数作为参数使用

//     return function () {
//         const newArgs = [].concat.call(args, [].slice.call(arguments)); // 将旧参数与新参数组合起来
//         return self.apply(context, newArgs);  // 改变指向并执行
//     }
// }

// let obj = {
//     name: 'seven'
// }

// let func = function (a, b, c, d) {
//     console.log(this.name) // seven
//     console.log([a, b, c, d]) // [1, 2, 3, 4]
// }.bind(obj, 1, 2);

// func(3, 4);


// Function.prototype.bind = function(){
//     let self = this;
//     let context = [].shift.call(arguments);
//     let args = [].slice.call(arguments);

//     return function() {
//         const newArgs = [].concat.call(args, [].slice.call(arguments));
//         return self.apply(context, newArgs);
//     }
// }

// let obj1 = {
//     name: "tom",
//     getName(hobbit) {
//         console.log(`my name is ${this.name} and my hobbit is ${hobbit}`);
//     }
// }

// let obj2 = {
//     name: "jim",
// }

// obj1.getName("swimming"); // my name is tom and my hobbit is swimming
// obj1.getName.call(obj2, "coding"); // my name is jim and my hobbit is coding


let FuncA = function (name) {
    this.name = name;
}

let FuncB = function () {
    FuncA.apply(this, arguments);
    Array.prototype.slice.call(arguments)
}

FuncB.prototype.getName = function () {
    return this.name;
}

let b = new FuncB("tim");
console.log(b.getName()); // tim