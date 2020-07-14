# 初识Vue

## MVVM模式

- Model：负责数据存储
- View：负责页面展示
- View Model：负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示


## MVC模式
- M：模型，数据，变量
- V：视图，用户所见的界面（HTML，css）
- C：控制器，事件交互，如何根据视图与用户交互后改变数据（通过DOM对象绑定事件，将变量进行修改）


## 库与框架的区别

### 框架
框架是一套完整的解决方案。

对项目的侵入性较大，项目如果需要更换框架，则需要重新架构整个项目。但是有点也很明显：功能完善，提供了一整套的解决方案。

### 库（插件）
只是提供某一个小功能。

对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其他库实现需求。

举例：
- 从jQuery切换到zepto
- 从EJS切换到art-template


## 虚拟DOM
我们先根据真实DOM生成一颗virtual DOM，当virtual DOM某个节点的数据改变后会生成一个新的Vnode，然后Vnode和oldVnode作对比，发现有不一样的地方就直接修改在真实的DOM上，然后使oldVnode的值为Vnode。

参考

- <a href="https://www.cnblogs.com/wind-lanyan/p/9061684.html" target="_blank">详解vue的diff算法</a>

- <a href="https://github.com/aooy/blog/issues/2" target="_blank">解析vue2.0的diff算法</a>


# Vue基础

## v-if和v-show
1. 隐藏方式：v-if是通过控制dom节点的存在与否来控制元素的显隐；v-show是通过设置DOM元素的display样式，block为显示，none为隐藏；
2. 编译过程：v-if在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；v-show只是简单的基于css切换；
3. 渲染条件：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译（编译被缓存？编译被缓存后，然后再切换的时候进行局部卸载); v-show是在任何条件下（不管初始条件是什么）都会被编译，然后被缓存，而且DOM元素保留；
4. 性能消耗：v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好

## v-for列表渲染

1. 循环数组
    ```html
    <!-- 循环遍历数组 -->
    <ul>
        <li v-for="(item,index) in stars">{{item}}</li>
    </ul>
    ```

2. 循环数组中对象
    ```html
    <!-- 循环遍历对象 -->
    <ul>
        <li v-for="item in students">
            <h4>{{item.name}}</h4>
            <p>年龄：{{item.age}}-----学校：{{item.school}}</p>
        </li>
    </ul>
    ```

3. 循环对象
    ```html
    <!-- 循环对象 -->
    <ul>
        <li v-for="(value, key, index) in student">
            序号{{index}} -- 键：{{key}} -- 值：{{value}}
        </li>
    </ul>
    ```

## v-for和v-if的优先级

当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级，这意味着 v-if 将分别重复运行于每个 v-for 循环中

所以，不推荐v-if和v-for同时使用



# 看到P11
