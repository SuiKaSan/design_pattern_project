// function isType(type) {
//     return function (obj) {
//         return Object.prototype.toString.call(obj) === `[object ${type}]`;
//     }
// }

// const isArray = isType("Array");
// const isString = isType("String");
// const isNumber = isType("Number");

// console.log(isArray([1,2,3])); // true
// console.log(isArray("string")); // false
// console.log(isString("string")); // true
// console.log(isNumber(1223)); // true


// const cost = (function () {
//     const totalCost = [];

//     return function () {
//         if (arguments.length === 0) {
//             return totalCost.reduce((pre, cur) => pre + cur);
//         } else {
//             [].push.apply(totalCost, arguments);
//         }
//     }
// })()

// cost(200, 300, 400);
// cost(200);
// cost(100);
// console.log(cost()); // 1200


Function.prototype.uncurrying = function() {
    const self = this;
    return function() {
        const obj = Array.prototype.shift.call(arguments);
        return self.apply(obj, arguments);
    }
}

const push = Array.prototype.push.uncurrying();

const obj = {
    "length":1,
    "0": 1
}

push(obj, 2);

console.log(obj); // { '0': 1, '1': 2, length: 2 }

