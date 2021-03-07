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


// Function.prototype.uncurrying = function() {
//     const self = this;
//     return function() {
//         const obj = Array.prototype.shift.call(arguments);
//         return self.apply(obj, arguments);
//     }
// }

// const push = Array.prototype.push.uncurrying();

// const obj = {
//     "length":1,
//     "0": 1
// }

// push(obj, 2);

// console.log(obj); // { '0': 1, '1': 2, length: 2 }




// class Animal {
//     constructor(type) {
//         console.log("type", type)
//         this.type = type;
//     }

//     static getInstance(type) {
//         if(!this.instance) {
//             this.instance = new Animal(type);
//         }
//         return this.instance;
//     }
// }

// let animal1 = Animal.getInstance("dog");
// let animal2 = Animal.getInstance("cat");

// console.log(animal1 === animal2); // true

// // 只创建一个节点
// const CreateDiv = function (html) {
//     this.html = html;
//     this.init();
// }

// CreateDiv.prototype.init = function () {
//     let div = document.createElement("div");
//     div.innerHtml = this.html;
//     document.body.appendChild('div');
// }


// const ProxySingletonCreate = (function () {
//     let instance;
//     return function () {
//         if (!instance) {
//             instance = new CreateDiv(html);
//         }

//         return instance;
//     }
// })()

// let div1 = new ProxySingletonCreate();
// let div2 = new ProxySingletonCreate();

// console.log(div1 === div2); // true



// function createDiv() {
//     let div = document.createElement("div");
//     div.innerHtml = "我是登录浮窗";
//     document.body.appendChild('div');
//     return div;
// }


// const getSingleInstance = function(fn) {
//     let result;
//     return result || (result = fn.apply(this, arguments));
// }

// let div1 = getSingleInstance(createDiv);
// let div2 = getSingleInstance(createDiv);

// console.log(div1 === div2); // true




// // 策略类———封装具体算法
// let performanceS = function () { };
// performanceS.prototype.calculate = function (salary) {
//     return 5 * salary;
// }

// let performanceA = function () { };

// performanceA.prototype.calculate = function (salary) {
//     return 4 * salary;
// }


// let performanceB = function () { };
// performanceB.prototype.calculate = function (salary) {
//     return 3 * salary;
// }


// // 设置环境类
// const Bonus = function () {
//     this.salary = 0;
//     this.bonus = 0;
// }
// Bonus.prototype.setSalary = function (salary) {
//     this.salary = salary;
// }

// Bonus.prototype.setStrategy = function (performance) {
//     this.bonus = performance.calculate(this.salary)
// }

// Bonus.prototype.getBonus = function () {
//     return this.bonus;
// }


// // 设置工资
// const bonus = new Bonus();
// bonus.setSalary(1000);

// bonus.setStrategy(new performanceA);
// console.log(bonus.getBonus()); // 4000


// bonus.setStrategy(new performanceS);
// console.log(bonus.getBonus()); // 5000


// // 策略类———封装具体算法
// let performanceS = function () { };
// performanceS.prototype.calculate = function (salary) {
//     return 5 * salary;
// }

// let performanceA = function () { };

// performanceA.prototype.calculate = function (salary) {
//     return 4 * salary;
// }


// let performanceB = function () { };
// performanceB.prototype.calculate = function (salary) {
//     return 3 * salary;
// }


// // 设置环境类
// const Bonus = function () {
//     this.salary = 0;
//     this.bonus = 0;
// }
// Bonus.prototype.setSalary = function (salary) {
//     this.salary = salary;
// }

// Bonus.prototype.setStrategy = function (performance) {
//     this.bonus = performance.calculate(this.salary)
// }

// Bonus.prototype.getBonus = function () {
//     return this.bonus;
// }


// // 设置工资
// const bonus = new Bonus();
// bonus.setSalary(1000);

// bonus.setStrategy(new performanceA);
// console.log(bonus.getBonus()); // 4000


// bonus.setStrategy(new performanceS);
// console.log(bonus.getBonus()); // 5000



// let strategies = {
//     "S": function (salary) {
//         return salary * 5;
//     },
//     "A": function (salary) {
//         return salary * 4;``
//     },
//     "B": function (salary) {
//         return salary * 3;
//     }
// }

// function calculateBonus(salary, performance) {
//     return strategies[performance](salary);
// }

// console.log(calculateBonus(1000, "S")); // 5000
// console.log(calculateBonus(1000, "A")); // 4000
// console.log(calculateBonus(1000, "B")); // 3000


// const Flower = function () { };

// // 小明作为发起人
// let xiaoming = {
//     sendFlower: function(target) {
//         let flower = new Flower();
//         target.sendFlower(flower, girl);
//     }
// }

// // 女孩作为接收对象
// let girl = {
//     receiveFlower: function(flower) {
//         console.log(`I've receive the flower.`);
//     }
// }

// // 代理接收请求并请求对应对象
// let agent = {
//     sendFlower: function(flower, target) {
//         // do something or not
//         target.receiveFlower(flower);
//     }
// }

// xiaoming.sendFlower(agent); // I've receive the flower



// function each(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback.call(array[i], i, array);
//     }
// }


// each([1, 2, 3], function (arr, index, array) {
//     console.log("🚀 ~ arr", arr)
//     console.log("🚀 ~ index", index)
//     console.log("🚀 ~ array", array)
// });


// let Iterator = function(obj) {
//     let current = 0;

//     let next = function() {
//         current += 1;   
//     }

//     let isDone = function() {
//         current >= obj.length;
//     }

//     let getCurrentItem = function() {
//         return obj[current]
//     }

//     return {
//         next,
//         isDone,
//         getCurrentItem,
//         length: obj.length
//     }
// }


// let salesOffice = {};

// salesOffice.clientList = {};

// salesOffice.listen = function (key, fn) {

//     if (!this.clientList[key]) {
//         this.clientList[key] = [];
//     }

//     this.clientList[key].push(fn);
// }

// salesOffice.trigger = function () {
//     let key = Array.prototype.shift.call(arguments);
//     let fns = this.clientList[key];

//     if(!fns || fns.length === 0) {
//         return false;
//     }

//     for (let i = 0, fn; fn = fns[i++];) {
//         fn.apply(this, arguments);
//     }
// }


// salesOffice.listen("squareMeter99", function (price) { // 订阅者1
//     console.log(`the house's price is ${price}, and the size is squareMeter99`);
// });

// salesOffice.listen("squareMeter120",function (price) { // 订阅者2
//     console.log(`the house's price is ${price}, and the size is squareMeter120`);
// });

// salesOffice.trigger("squareMeter99", 200);
// // the house's price is 200, and the size is squareMeter99
// salesOffice.trigger("squareMeter120", 500);
// // the house's price is 500, and the size is squareMeter120


const subscribe = {
    clientList: {},
    listen: function (key, fn) {

        if (!this.clientList[key]) {
            this.clientList[key] = [];
        }

        this.clientList[key].push(fn);
    },

    trigger: function () {
        let key = Array.prototype.shift.call(arguments);
        let fns = this.clientList[key];

        if (!fns || fns.length === 0) {
            return false;
        }

        for (let i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    },

    // 取消事件监听
    remove: function (key, fn) {
        let fns = this.clientList[key];

        if (!fns) {
            return false;
        }

        if (!fn) { // 如果没有传入回调函数代表删除所有订阅
            fns && (fns.length = 0); 
        } else {
            for (let i = fns.length - 1; i >= 0; i--) {
                let _fn = fns[i];
                if (_fn === fn) {
                    fns.splice(i, 1); // 删除对应回调函数的订阅
                }
            }
        }

        this.clientList[key] = [];
    },
}

// 注册事件
function installEvent(obj) {
    for (let i in subscribe) {
        obj[i] = subscribe[i];
    }
}


let salesOffice = {};

installEvent(salesOffice);

const squareMeter99 = function (price) {
    console.log(`the house's price is ${price}, and the size is squareMeter99`);
}

const squareMeter120 = function (price) { 
    console.log(`the house's price is ${price}, and the size is squareMeter99`);
}


salesOffice.listen("squareMeter99", squareMeter99);

salesOffice.listen("squareMeter120", squareMeter120);

salesOffice.trigger("squareMeter99", 200);
// the house's price is 200, and the size is squareMeter99
salesOffice.trigger("squareMeter120", 500);
// the house's price is 500, and the size is squareMeter120

salesOffice.remove("squareMeter99", squareMeter99)
salesOffice.remove("squareMeter120", squareMeter120)

salesOffice.trigger("squareMeter99", 200); // 无反应
salesOffice.trigger("squareMeter120", 500); // 无反应










