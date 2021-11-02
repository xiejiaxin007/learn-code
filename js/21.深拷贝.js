/*
 * @author: xiejiaxin
 * @Date: 2021-11-01 20:06:34
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-11-01 21:37:03
 * @description: file content
 */
// 深拷贝：完全是两个数据
// 浅拷贝：第一层可以不同步，或者是同一个引用地址

let obj = {
    name: 'xjx',
    love: ['sing', 'dance'],
    address: [{
        val: 111
    }, {
        val: 222
    }],
    color: {
        name: 'red'
    }
}

let arr = [1, 2, 3]

// 深拷贝
// var deepClone = function (val) {
//     if (!val) {
//         return null;
//     }
//     let newData = Array.isArray(val) ? [] : {};
//     if (typeof val === 'object') {
//         if (val instanceof Array) {
//             val.forEach((v, i) => {
//                 newData[i] = deepClone(v);
//             });
//         } else if (val instanceof Date) {
//             newData = new Date(val);
//         } else if (val instanceof RegExp) {
//             newData = new RegExp(val);
//         } else {
//             Object.keys(val).forEach(v => {
//                 newData[v] = deepClone(val[v]);
//             })
//         }
//     } else {
//         return val;
//     }
//     return newData;
// }

// 解决循环引用的问题（WeakMap）
function deepCopy(data, hash = new WeakMap()) {
    if (typeof data !== 'object' || data === null) {
        throw new TypeError('传入参数不是对象')
    }
    // 判断传入的待拷贝对象的引用是否存在于hash中
    if (hash.has(data)) {
        return hash.get(data)
    }
    let newData = {};
    const dataKeys = Object.keys(data);
    dataKeys.forEach(value => {
        const currentDataValue = data[value];
        // 基本数据类型的值和函数直接赋值拷贝 
        if (typeof currentDataValue !== "object" || currentDataValue === null) {
            newData[value] = currentDataValue;
        } else if (Array.isArray(currentDataValue)) {
            // 实现数组的深拷贝
            newData[value] = [...currentDataValue];
        } else if (currentDataValue instanceof Set) {
            // 实现set数据的深拷贝
            newData[value] = new Set([...currentDataValue]);
        } else if (currentDataValue instanceof Map) {
            // 实现map数据的深拷贝
            newData[value] = new Map([...currentDataValue]);
        } else {
            // 将这个待拷贝对象的引用存于hash中
            hash.set(data, data)
            // 普通对象则递归赋值
            newData[value] = deepCopy(currentDataValue, hash);
        }
    });
    return newData;
}
const newObj = deepCopy(obj)
console.log(newObj);
