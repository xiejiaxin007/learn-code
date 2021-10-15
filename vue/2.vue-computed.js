/*
 * @author: xiejiaxin
 * @Date: 2021-10-14 20:20:49
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-14 20:56:45
 * @description: file content
 */
// computed和watch相比，是有惰性的
// computed适用于多个data值影响某一个模板中的值，而watch适用于一个绑定值影响多个其他值
// computed主要用作计算，watch一般适用于数据量比较大，或者是有异步操作的时候使用
// watch可以限制操作频率，这个computed是无法做到的

// vue源码中，computed相关方法
function initComputed(vm, computed) {
    const watchers = {};
    // 循环传入的computed
    for (key in computed) {
        // 这个地方需要进行一波判断，因为computed有两种写法，一种是直接函数，另外一种是自定义get和set方法，所以这个地方需要进行区别，我们主要使用的是getter，因为computed主要是取值
        // 其他set方式这里不写了
        const getter = computed[key];
        // ...
        // 1、生成一系列的watcher，这个地方跟data生成watcher不一样，这个地方是先生成，然后在响应式绑定的是直接找到对应的watcher
        watchers[key] = new Watcher({
            // ....
            computed: true
        });


        // 2、因为没有在data中定义，所以需要单独进行响应式的绑定
        if (!vm[key]) {
            computedDefine(vm, key, getter)
        }
    }
}

// 绑定响应式
function computedDefine(vm, key, getter) {
    // 给getter进行一些重写
    const computedGetter = getter;
    // 重写成为大概这样
    computedGetter = {
        get() {
            // const watcher = ....
            // 这个地方只需要找到对应的watcher
            const watcher = watcher[key];
            if (watcher) {
                watcher.depend();
                return watcher.evaluate();
            }
        }
    }
    // 关键地方
    Object.defineProperties(vm, key, computedGetter);
}

class Watcher {
    constructor(option) {
        // 转换成bool类型
        this.computed = !!option.computed;
        // 表示属于computed watcher
        if (this.computed) {
            // 进行依赖配置
            this.dep = new Dep();
        }
    }
    // 更新方法
    update() {
        // 这个地方就注意一些dirty字段
        // 如果发生了更新，dirty字段会变成true
        this.dirty = true;
    }
    // 计算
    evaluate() {
        // 需要注意的就是dirty如果是true，代表依赖值发生了变化，可以重新计算了
        if (this.dirty) {
            this.value = this.get();
            this.dirty = false;
        }
        return this.value;
    }
}

class Dep {
    constructor() {}
}