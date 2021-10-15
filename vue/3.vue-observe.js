/*
 * @author: xiejiaxin
 * @Date: 2021-10-13 17:45:21
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-14 11:23:33
 * @description: file content
 */
// 数据绑定以及依赖收集
// -- 给传入的data进行defineProperty数据劫持，这个过程中，会给每一个data中的属性循环递执行observe方法，其实最主要就是在进行数据的劫持，在这个过程中，会判断某一个要绑定的属性是否是对象，如果是对象则继续递归，如果是数组则需要单独处理，vue还会给数组进行7个方法的数据重写
// -- 使用Observe的时候，需要进行重复判断、关键字判断等哦！
// -- 使用defineProperty的get和set方法进行依赖的监听
// -- 分区数组和对象，如果是对象，正常递归进行绑定，如果是对象，则需要单独处理，遍历数组递归处理
// -- -- 对象处理的时候，还需要判定是否跟props有冲突，有冲突会发出警告
// -- -- data上每一个属性，都需要进行一遍observe
// -- 数组新增删除处理：重写了数组的七个方法来进行绑定处理：push、pop、shift、unshift、splice、sort、reverse

// -- 数组其实是可以正常监听到的，只不过不会自动更新视图

function Observe(value, asRootData) {
    // data每一个属性都会走一遍这个方法
    // 判断是否是一个对象，如果不是，则直接中断了
    if (!isObject(value)) {
        return
    }
    // ... 
    ob = new Observer(value)
}

class Observer {
    constructor(value) {
        this.value = value
        this.dep = new Dep()
        this.vmCount = 0
        // 如果是数组，则不需要绑定defineProperty，所以直接修改某一个索引值的时候，打印是变化了的，但是视图不会更新
        if(isArray(value)) {
            // 走数组方法
            // 这个地方还会重写数组的七个方法，然后放到proto里头，也就是为什么我们使用push等那七个方法的时候，不需要手动更新视图，因为在触发这些方法的时候，会自动帮我们dep.notify()进行通知
            // 七个方法：push、pop、shift、unshift、splice、reverse、sort
        } else {
            // 走对象方法
        }
    }
}

function isArray(val) { return true }
// 判断是否是一个对象
function isObject(val) {
    // ....
    return true;
}