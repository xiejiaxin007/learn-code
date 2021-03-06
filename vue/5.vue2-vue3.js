


// 数据绑定方式修改：defineProperty->Proxy
// -- Proxy：直接代理整个数据，不需要递归进行绑定
// -- -- 对于数组，可以直接同步更新通过修改下标进行的改变，vue2是7种数组方法，vue3是13种，很完善
// -- -- 对于新增的属性，不需要手动observe
// -- 使用composition api，可以做到相关代码在一起展示，很清晰，而且可以直接对某一个功能点进行封装，vue2想要封装某个功能点，需要封装成一个组件，而vue3可以只提取js功能代码，生命周期也可以放进去
// -- vue相关api，vue3是按需加载的，减少打包体积
// -- 修改功能：废弃一部分、修改一部分
// -- 组件可以有多个根节点
// -- v-model变化：可以自定义绑定的变量名字，vue2的话，就只能是value，而vue3可以自己进行绑定，而且v-mode可以在一个组件上绑定多个
// -- 新增组件
// -- 更快的构建工具vite

// 对于diff有什么优化：
// -- 1、在构成vnode的时候，会添加静态节点标记，咋比对的时候只对有PatchFlag的节点进行比对
// -- 2、render阶段的静态提升：vue2的话是有更新就直接重新渲染整个node，但是vue3会对vnode进行一部分的提升（不会有变成的节点），如果一些根本不会变的node，在render的时候就不用重新渲染，直接用就OK了
// -- 3、函数绑定会有缓存，以前函数绑定也会参与比对