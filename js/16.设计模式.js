/*
 * @author: xiejiaxin
 * @Date: 2021-10-15 16:45:57
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-18 10:44:27
 * @description: file content
 */
// 工厂模式：将实例化动作放到入口函数内部，可以隐藏内部实现，比如vue中的虚拟dom，就是根据不同的参数返回不同的dom结构的
class Factory {
    constructor(val) {
        return new Exp(val);
    }
}
class Exp {
    constructor(val) {
        console.log(val);
    }
}
// console.log(new Factory(4))
// 单例模式：不管实例化多少次，实体永远是同一个，比如vuex、vue-router的插件机制，或者是node中import一个文件，也是永远只加载一次
function test () {
    let fn = null;
    class SingleFactory {
        init() {
            return function () {
                if (!fn) {
                    fn = new SingleFn();
                    return fn;
                }
                console.log(111)
                return fn;
            }
        }
    }
    class SingleFn {
        constructor() {
            console.log(new Date().getTime());
        }
    }
    const single = new SingleFactory();
    single.init()();
    single.init()();
    single.init()();
    single.init()();
}
// test();


// 观察者模式：订阅发布模式，比如vue的事件绑定机制、响应式绑定等
function bus() {
    // 观察者e
    class Watcher {
        constructor(cb) {
            this.id = new Date().getTime();
            this.cb = cb;
        }
        run() {
            this.cb();
        }
    }
    // 发布订阅
    class Dep {
        constructor() {
            this.collet = [];
        }
        addSub(watcher) {
            this.collet.push(watcher);
        }
        notify() {
            this.collet.forEach(v => {
                v.run();
            });
        }
        delSub(watcher) {
        }
    }
    let dep = new Dep();
    let obj = {};
    var a = 'a';
    var b = 'b';
    Object.defineProperty(obj, 'a', {
        get: () => {
            const watcher = new Watcher(() => {
                console.log(a);
            });
            dep.addSub(watcher);
            return a;
        },
        set: (val) => {
            a = val;
            dep.notify();
        }
    });
    Object.defineProperty(obj, 'b', {
        get: () => {
            const watcher = new Watcher(() => {
                console.log(b);
            });
            dep.addSub(watcher);
            return b;
        },
        set: (val) => {
            b = val;
            dep.notify();
        }
    });
    
    console.log(obj.a, obj.b);
    obj.a = '3';
    obj.b = '33';
}
// bus();

// 策略模式：策略模式指对象有某个行为,但是在不同的场景中,该行为有不同的实现方案；比如选项的合并策略；表单校验，比如为空、必须是数字等
