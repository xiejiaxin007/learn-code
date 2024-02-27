// * require机制：当 require 方法执行的时候，接收的唯一参数作为一个标识符 ，Commonjs 下对不同的标识符，处理流程不同，但是目的相同，都是找到对应的模块。
// * require('fs')、require('./a')、require('element')
// * 加载node底层核心模块、根据文件路径进行加载、加载第三方库（跟上一行一一对一个）
// *首先像 fs ，http ，path 等标识符，会被作为 nodejs 的核心模块。
// * ./ 和 ../ 作为相对路径的文件模块， / 作为绝对路径的文件模块。
//  *非路径形式也非核心模块的模块，将作为自定义模块。

// ? 自定义模块处理:
// ? 在当前目录下的 node_modules 目录查找。
// ? 如果没有，在父级目录的 node_modules 查找，如果没有在父级目录的父级目录的 node_modules 中查找。
// ? 沿着路径向上递归，直到根目录下的 node_modules 目录。
// ? 找到对应的node_modules后，会找起内部的 package.json 下 main 属性指向的文件，如果没有 package.json ，在 node 环境下会以此查找 index.js ，index.json ，index.node。

 // * id 为路径标识符
 // * require 加载原理（别人的）
 function require(id) {
  /* 查找  Module 上有没有已经加载的 js  对象*/
  const  cachedModule = Module._cache[id]
  
  /* 如果已经加载了那么直接取走缓存的 exports 对象  */
 if(cachedModule){
   return cachedModule.exports
 }

 /* 创建当前模块的 module  */
 const module = { exports: {} ,loaded: false , ...}

 /* 将 module 缓存到  Module 的缓存属性中，路径标识符作为 id */  
 Module._cache[id] = module
 /* 加载文件 */
 runInThisContext(wrapper('module.exports = "123"'))(module.exports, require, module, __filename, __dirname)
 /* 加载完成 */
 module.loaded = true 
 /* 返回值 */
 return module.exports
}

// * require 加载原理（我的版本）
function require(id) {
  const thisModule = Module._cache[id];
  if (thisModule) {
    return cacheModules[id].exports;
  }
  const module = {
    exports: {},
    loaded: false,
    ...
  }
  Module._cache[id] = module;
  runInThisContext(wrapper('')(module.exports, require, __filename, __dirname))
  module.loaded = true;
  return module.exports;
}