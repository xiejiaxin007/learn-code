/*
 * @author: xiejiaxin
 * @Date: 2021-10-24 20:44:25
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-24 20:59:30
 * @description: file content
 */
var obj = {
    name: 'xjx',
    getName: function() {
        console.log(this.name)
    }
}

let fn = obj.getName;
// fn.bind(obj)();

Function.prototype.newBind = function(obj, ...args) {
    // 返回一个函数
    let fn = this;
    return function() {
        return fn.apply(obj)
    }
}
