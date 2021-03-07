// 统一的煮饮料类
const Beverage = function () { };

Beverage.prototype.boilWater = function () {
    console.log("把水煮沸");
}

Beverage.prototype.brew = function () {
    throw new Error("子类必须重写 brew 方法");
} // 子类重写


Beverage.prototype.pourInCup = function () {
    throw new Error("子类必须重写 pourInCup 方法");
} // 子类重写


Beverage.prototype.addCondiments = function () {
    throw new Error("子类必须重写 addCondiments 方法");
} // 子类重写

// 钩子方法
Beverage.prototype.customerWantsCondiments = function () {
    return true; // 默认需要调料
}

// 这就是模板方法
Beverage.prototype.init = function () {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
        this.addCondiments();
    }
}



// 煮咖啡
const Coffee = function () { };

// 继承饮料类
Coffee.prototype = new Beverage();


Coffee.prototype.brew = function () {
    console.log("用沸水冲咖啡");
}

Coffee.prototype.pourInCup = function () {
    console.log("把咖啡倒进杯子");
}

Coffee.prototype.addCondiments = function () {
    console.log("加糖和牛奶");
}

// 决定不要调料
Coffee.prototype.customerWantsCondiments = function() {
    return false;
}


const coffee = new Coffee();
coffee.init();


// 煮茶
const Tea = function () { };
// 继承饮料类
Tea.prototype = new Beverage();

Tea.prototype.brew = function () {
    console.log("用沸水浸泡茶叶");
}

Tea.prototype.pourInCup = function () {
    console.log("把茶水倒入杯子");
}

Tea.prototype.addCondiments = function () {
    console.log("加柠檬");
}

const tea = new Tea();
tea.init();

