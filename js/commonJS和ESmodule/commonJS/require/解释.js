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
// ! require源码大致理解---我这是默背，可以不用看
// * require接收唯一参数，这个参数可以是node的核心模块比如fs，也可以是相对路径和绝对路径，也可以是自定义模块，如果是自定义模块，那需要遵循一个查找规则：先找自己评级的node_modules，如果找不到则往上层找，知道没有，那就是package.json里头的main，如果package.json都没有，则找node对应的index.js和各种后缀文件
// ? require是引入即执行的哦、而且require是不会进行重复引用的哦！！！！如果多次引入，则第二次到之后的引入，都只会给代码做一个module，不会进行代码的执行
// ? require执行的时候，会经过几个操作：
// ? 1、对比一下cache目录，如果已经引入过，则不需要进行再次引入，直接将存好的module的exports返回即可
// ? 2、如果没有在cache目录中，则需要新生成一个module，此时需要做两步，一步是对require文件的内容进行一个包括，然后做一个立即执行的操作，第二步是对这个module进行缓存
// ? 2-* 我们可以看到在文件中，我们可以直接使用exports关键字，就是因为require在包裹的时候其实是给传入了module、module.exports等参数的