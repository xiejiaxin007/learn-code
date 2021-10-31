/*
 * @author: xiejiaxin
 * @Date: 2021-10-30 16:04:42
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-31 10:42:33
 * @description: file content
 */
// 发布订阅和观察者模式不完全一样
// 最大的区别就是，发布订阅模式会有一个统一的调度中心，而观察者模式是两个角色之间直接触发的
// 发布订阅：事件机制
// 观察者模式：vue的依赖收集
// 区别：
// -- 1、发布订阅更加解耦，发布方和订阅放都不需要知道是否有彼此存在，全过程是通过调度中心进行通知，而观察者是知道有一个发布者的，耦合性比较强
// -- 2、发布订阅比观察者多一个调度中心
// -- 3、观察者大多是同步的，而观察者可能更多适用于异步的

class EventEmitter {
    constructor() {
        // 缓存列表
        this.cache = {};
    }
    on(name, fn) {
        if (!this.cache[name]) {
            this.cache[name] = [];
        }
        this.cache[name].push(fn);
    }
    off(name, fn) {
        if (!this.cache[name]) {
            return false
        }
        // 没有fn，则把该事件下的所有fn都清空
        if (!fn) {
            this.cache[name] = [];
        }
        for (let i = 0; i < this.cache[name].length; i++) {
            if (this.cache[name][i] == fn || this.cache[name][i].fn == fn) {
                this.cache[name].splice(i, 1);
            }
        }
    }
    once(name, fn) {
        let on = () => {
            this.off(name, on);
            fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(name, on);
    }
    emit(name, param) {
        if (this.cache[name].length > 0) {
            this.cache[name].forEach(cb => {
                cb(param)
            });
        }
    }
}

let a = new EventEmitter();
function aa(x) {
    console.log(x);
}
a.on("kak", aa)
a.once("kak", (data) => {
    console.log("1", data);
});
a.emit('kak', 'ok');
a.off('kak', aa);
a.emit('kak', 'hahahah');