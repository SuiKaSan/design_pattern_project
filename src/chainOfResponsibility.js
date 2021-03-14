// 页面加载之初会给几个参数
// orderType：订单的类型 1——500元定金  2——200元定金  3——无定金 三类客户
// pay：boolean 表示用户是否交付定金
// stock：普通用户购买的手机数量 200元定金用户与500元定金用户没有购买限制

// 拆分三个函数来应对对应的订单类型
let order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay) {
        console.log("您以500元定金购买手机，获得100元优惠券");
    } else {
        // return "next successor"; // 不知道接下来节点是谁，反正将请求继续传递
        this.next(orderType, pay, stock);
    }
}

let order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay) {
        console.log("您以200元定金购买手机，获得50元优惠券");
    } else {
        // return "next successor"; // 不知道接下来节点是谁，反正将请求继续传递
        setTimeout(() => {
            this.next(orderType, pay, stock);
        }, 1000)
    }
}

let orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log("普通购买，无优惠券。");
    } else {
        console.log("手机库存不足。");
    }
}

// 创建 chain 对象来做职责链
const Chain = function (fn) {
    this.fn = fn;
    this.successor = null;
}

// setNextSuccessor 配置当前节点
Chain.prototype.setNextSuccessor = function (successor) {
    return this.successor = successor;
}

// passRequest 切换下一个节点
Chain.prototype.passRequest = function () {
    this.fn.apply(this, arguments);
}

// next 用于异步传递请求
Chain.prototype.next = function () {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments);
}

// 创建节点
let chainOrder500 = new Chain(order500);
let chainOrder200 = new Chain(order200);
let chainOrderNormal = new Chain(orderNormal);

// 连接节点 形成职责链
chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

// 使用职责链
chainOrder500.passRequest(1, true, 500); // 您以500元定金购买手机，获得100元优惠券
chainOrder500.passRequest(2, true, 500); // 您以200元定金购买手机，获得50元优惠券
chainOrder500.passRequest(3, true, 500); // 普通购买，无优惠券。
chainOrder500.passRequest(1, false, 0); // 手机库存不足。


