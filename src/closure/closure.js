// const closure = function() {
//     let a = 1;
//     return function () {
//         a++;
//         return a;
//     }
// }()

// console.log(closure()); // 2
// console.log(closure()); // 3
// console.log(closure()); // 4
// console.log(closure()); // 5
// console.log(closure()); // 6
// console.log(closure()); // 7

// function multi() {
//     const args = Array.prototype.slice.call(arguments);
//     return args.reduce((pre, cur) => pre * cur);
// }

// console.log(multi(1, 2, 3)); // 6


// const multi = function () {
//     const cache = {};
//     return function () {
//         // 使用闭包之后变量 cache 作为闭包中的局部变量会被保存下来，发挥缓存的作用
//         let args = Array.prototype.join.call(arguments);
//         if (args in cache) {
//             console.log("我使用缓存了");
//             return cache[args];
//         }

//         const newArg = Array.prototype.slice.call(arguments);
//         cache[args] = newArg.reduce((pre, cur) => pre * cur);
//         return cache[args];
//     }
// }();

// console.log(multi(1, 2, 3)); // 6
// console.log(multi(1, 2, 3)); // 我使用缓存了 6
// console.log(multi(2, 2, 3)); // 12
// console.log(multi(3, 2, 3)); // 18
// console.log(multi(4, 2, 3)); // 24
// console.log(multi(2, 2, 3)); // 我使用缓存了 12
// console.log(multi(3, 2, 3)); // 我使用缓存了 18


// let closure = function () {
//     let value = 0;
//     return {
//         call: function () {
//             value++;
//             console.log(value);
//         }
//     }
// }()

// closure.call(); // 1
// closure.call(); // 2
// closure.call(); // 3
// closure.call(); // 4
// closure.call(); // 5

let obj = {
    value: 0,
    call: function() {
        this.value ++;
        console.log(this.value);
    }
}

obj.call(); // 1
obj.call(); // 2
obj.call(); // 3
obj.call(); // 4
obj.call(); // 5