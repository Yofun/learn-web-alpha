# Vue学习笔记

学习地址：https://www.bilibili.com/video/BV1YE411A746

## 简介
Vue 是一套用于构建用户界面的**渐进式的js框架**，发布于2014年2月。与其他大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库，（如：vue-router、vue-resource、vuex）或既有项目整合.

Vue是一个渐进式的js框架，只注重视图层，结合了html+css+js，非常易用，并且有很好的生态系统，而且vue体积很小，速度很快，优化很到位。

ssm的整合，搞定了后端一套：增删改查。



## MVVM

- M：model数据
- V：view视图
- VM：viewmodel 连接视图和数据的中间件

在MVVM架构中，是不允许`数据`和`视图`直接通讯的，只能通过viewmodel来通讯，而viewmodel就是定义了一个`Observer`观察者
- viewmodel能够观察到数据的变化，并对视图对应的内容进行更新
- viewmodel能够监听到视图的变化，并能够通知数据发生改变

vue中内置了一个观察者，这个观察者观察两个维度
1. 观察视图变化：当视图变了，就通知数据进行变化
2. 观察数据的变化：当数据变了，就通知视图进行变化

MVVM通过VM实现了双向数据绑定。


## CDN
内容分发网络

- 这是一种加速策略，能够从离自己最近的服务器上快速的获得外部的资源。

## vue快速起步

1. 引入`vue.js`文件
2. 在页面中使用vue
    - html：`<div id="app"></div>`
    - 在js中新建一个vue对象实例
3. vue对象里有哪些东西，分别有什么用？
    - el：表示该vue对象绑定在哪个元素作用域上
    - data：提供数据的
4. 在HTML中的vue作用域中，通过差值表达式`{{}}`来获取vue中的数据


## 插值表达式

插值表达式不能用在HTML标签的属性中

## vue指令
- `v-model`：将标签中的`value`值与实例中的data属性值进行绑定
- `v-on`：通过配合具体的事件名，来绑定具体的函数。如`v-on:click="click"`。v-on可以简写为@，如：@click
    ```js
    // 1. 不传参数调用
    v-on:click='click'

    // 2. 传递参数调用
    v-on:click='click("这是参数")'

    // 3. 带有event对象的传参调用
    v-on:click='click(event, "这是参数")'
    
    ```
    > `v-on`可以简写，如：`v-on:click`可以写为`@click`

- `v-bind`：插值表达式不能直接写在html的标签的属性内的，那如果一定要用vue中的属性，作为html标签的属性值，就可以通过v-bind进行属性绑定.
    > `v-bind`可以简写，如`v-bind:src`可以写为`:src`


- `v-once`：此时该标签中的插值表达式，只获取一次数据。之后数据的变化不影响此差值表达式的值

- `v-html`和`v-text`
    - `v-html`会将vue中的属性值作为html的元素来使用
    - `v-text`会将vue中的属性的值只作为纯文本来使用。


## vue中的事件

### 1. vue中如何使用事件

- `@click`:点击事件
- `@click`:点击事件

### 2. 事件的参数传递
```js
sayHi: function (message) {
    alert(message)
},
// 有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法
event: function (message, event) {
    console.log(message, event);
},
```

### 3. vue中的事件修饰符

1. 事件修饰符
    - .stop
    - .prevent
    - .capture
    - .self
    - .once
    - .passive
2. 按键修饰符
    - .enter
    - .tab
    - .delete (捕获“删除”和“退格”键)
    - .esc
    - .space
    - .up
    - .down
    - .left
    - .right
3. 系统修饰符
    - .ctrl
    - .alt
    - .shift
    - .meta
4. 鼠标按钮修饰符
    - .left
    - .right
    - .middle


## 计算属性

计算属性突出在`属性`两字上，首先它是个`属性`，其次这个属性有计算的能力，这里的`计算`就是一个函数；简单说，**它就是一个能够将计算结果缓存起来的属性（将行为转换为了静态的属性）**，仅此而已。


调用方法时，每次都需要进行计算，既然有计算过程则必定产生系统开销，那如果这个结果是不经常变化的呢？此时就可以考虑将这个结果缓存起来，采用计算属性可以很方便的做到这一点；**计算属性的主要特性就是为了将不经常变化的计算结果进行缓存，以节约我们的系统开销**



## watch

通过watch里给属性绑定函数，当属性的值发生变化时，该函数就会被调用。调用时可以接收两个参数，`newVal`和`oldVal`。


## :class可以传入的参数

- 字符串。`:class="'myclass'"`,可以传入类字符串
- 字符串数组。`:class="['myclass1','myclass2','myclass3',{类名: 控制类名是否显示的boolean变量}]"`
- 对象。`:class="{类名: 控制类名是否显示的boolean变量}"`


## 内嵌的:style

- 示例一
    ```html
    <!-- 冒号签名为css的属性值，可以不加引号；冒号后面可以跟vue的属性，也可以跟字符串 -->
    <div :style="{backgroundColor:'red',width: customWidth+'px',height: customHeight + 'px'}"></div>
    ```

- 示例二
    ```js
    // html元素中
    <div :style="myStyle"></div>

    // vue的data声明的属性或者计算属性中
    data: {
        myStyle:{
            backgroundColor: 'red',
            width: '400px',
            height: '400px',
            fontSize: '16px'
        }
    },
    // 或者
    computed:{
       myStyle: function() {
           return {
               backgroundColor: 'red',
                width: '400px',
                height: '400px',
                fontSize: '16px'
           }
       }
    }
    ```

- 示例三
    ```html
    <!-- html中 -->
    <div :style="[myStyle1,myStyle2]"></div>
    ```
    ```js
    // js中
    data: {
        myStyle1: {
            backgroundColor: 'green'
        },
        myStyle2: {
            widht: '200px',
            height: '200px'
        }
    }
    ```

## vue的diff算法

我们先根据真实DOM生成一颗virtual DOM，当virtual DOM某个节点的数据改变后会生成一个新的Vnode，然后Vnode和oldVnode作对比，发现有不一样的地方就直接修改在真实的DOM上，然后使oldVnode的值为Vnode。

参考

- <a href="https://www.cnblogs.com/wind-lanyan/p/9061684.html" target="_blank">详解vue的diff算法</a>

- <a href="https://github.com/aooy/blog/issues/2" target="_blank">解析vue2.0的diff算法</a>


## v-if和v-show

1. 隐藏方式：v-if是通过控制dom节点的存在与否来控制元素的显隐；v-show是通过设置DOM元素的display样式，block为显示，none为隐藏；
2. 编译过程：v-if在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；v-show只是简单的基于css切换；
3. 渲染条件：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译（编译被缓存？编译被缓存后，然后再切换的时候进行局部卸载); v-show是在任何条件下（不管初始条件是什么）都会被编译，然后被缓存，而且DOM元素保留；
4. 性能消耗：v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好

## Vue的实例属性

可以通过对象的方式直接调用vue的属性和方法

- `vue实例.属性名`访问的来自于vue的data和computed中的属性
- `vue实例.方法名()`方式调用的是vue的methods中的方法

但vue对象的$attrs、$children、$refs、$data等这些也称为属性，这些属性就是vue对象的`实例属性`。

### ref的使用

1. 在vue页面中，可以给每个元素添加一个`ref="xxx"`的属性，值类似于元素id
2. 通过`this.$refs.xxx`就能获取到这个元素的dom对象，然后可以做相应的操作。

### mount的使用

- 实现页面的元素和vue的绑定
    ```js
    var vue = new Vue({
        data() {
            return {
                msg: 'hello world！'
            }
        },
    })
    // 使用mount绑定vue
    vue.$mount('#app');
    ```

## 组件

### 注册组件
- 全局注册
    ```js
    Vue.component('组件名',{});
    ```
- 本地注册
    ```js
    new Vue({
        el: '#app',
        components: {
            'hello': {
                template: "<div><p>{{msg}}</p><button @click='click'>点我</button></div>",
                data() {
                    return {
                        msg: '我是组件的标题'
                    }
                },
                methods: {
                    click: function () {
                        console.log(this.msg);
                    }
                }
            }
        }
    });
    ```

### 使用组件

在被vue绑定了的html元素中才能使用组件。如果一个div没有被vue绑定，那么这个div中不能使用之前注册的组件


### 作为组件的vue对象

- vue组件中的data必须返回一个对象方法。

    当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。

- template是将内容展现在页面上的一个键。值是一个字符串。template里必须有且只能有一个根元素。


## vue的生命周期
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- activated
- deactivated
- beforeDestroy
- destroyed

关于`activated`和`deactivated`

    如keep-alive包裹两个组件：组件A和组件B。当第一次切换到组件A时，组件A的created和activated生命周期函数都会被执行。在切换到组件B，这时组件A的deactivated的生命周期函数会被触发。在切换回组件A，组件A的activated生命周期函数会被触发，但是它的created生命周期函数不会被触发了。



# 看到P33





