# scss

### 介绍
scss是sass的第三版，使用大括号来代替锁进，这样开发起来更接近css
scss是一种css的预编译语法，需要编译成css，然后再在浏览器端运行

#### 使用与特性
```scss
.parent {
    .children{
        &:last-type{

        }
    }
}
```
##### 变量
声明变量主要是`$`这个关键字，`default`关键字则表示默认值，如果在前面已经定义过`primary`，则会使用定义过的
```scc
$primary: #ff000 !default;
```

##### 混合
在一些简单场景下，我们变量只需要如上处理即可，但是总会有一些复杂的场景，需要我们使用混入的，比如`BEM`写法
混入使用的关键字是`@mixin`和`@include`
```scss
@mixin b($block){
    $block: 'el-' + $block;
    .#{$block} {
        @content;
    }
}
@mixin e($element) {
    $parent: &;
    $element: $parent +"__"+ $element;
    @at-root {
        #{$element} {
            @content;
        }
    }
}
```
其中`@content`类似于vue中的一个slot，可以将`@include`时候加入的样式也添加到`@content`的地方
还有`@at-root`，相当于将当前包括的样式提出到外层，也就是样式的作用域往外提了
`#{var}`表示引入一个变量

##### scss引入可以只引入一部分代码
scss引入其他文件，使用`@import`关键字进行
```scss
@import './scss/var'
```

##### scss可以使用条件语句
scss可以使用if、for等条件语句，还可以自己定义函数

### 跟less的区别