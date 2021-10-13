/*
 * @author: xiejiaxin
 * @Date: 2021-10-12 20:07:37
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-12 20:54:52
 * @description: file content
 */
// mvc/mvvm模式
// -- mvc：model、view、controller，传统软件采用模式
// -- mvvm：model、view、viewModel，区别在于c->vm，model和view不进行交互，全部通过vm层来进行处理，实现model和view层自动同步功能，也就是数据的双向绑定

//==================================================================================================
// vue的通讯方式：
// -- props、$emit
// -- $parent $children 获取当前组件的父组件和当前组件的子组件
// -- $attrs $listener
// --$ref
// --vuex
// -- event bus
// -- provider inject
// -- pubsub.js

//==================================================================================================
// vue的生命周期
// --beforeCreate：实例创建之前，这个时候watcher什么的都还没有绑定，data、watch等钩子函数都拿不到值
// --created：实例创建完成，这个时候数据观测结束，event/watch完成，但是还不能还没有生成dom，所以无法访问$vm
// --beforeMount：生成dom之前的生命周期
// --mounted：完成了dom的渲染，这个时候数据绑定也完成了
// --beforeUpdate：数据更新时调用，在虚拟dom重新渲染之前，这个时候还可以对数据进行修改
// --updated：数据更新完成，这个时候不能再进行数据修改，否则容易引起死循环
// --beforeDestroy：实例销毁之前，这个时候可以进行一些垃圾回收动作，比如清楚事件绑定、清除定时器等
// --destroyed：实例销毁完成，vue相关所有绑定都被移除
// --activated：keep-alive使用，组件被激活
// --deactivated：keep-alive使用，组件被销毁

//==================================================================================================