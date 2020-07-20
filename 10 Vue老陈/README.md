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



## 过度动画

动画状态

![](https://cn.vuejs.org/images/transition.png)

### 过渡的类名

在进入/离开的过渡中，会有 6 个 class 切换。

1. v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

2. v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

3. v-enter-to：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

4. v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

5. v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

6. v-leave-to：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。

**示例如下：**

css部分
```css
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to{
    opacity: 0;
}
```

html部分

```html
<button @click="show=!show">切换显示内容</button>
<!-- 动画类名 -->
<transition name="fade">
    <div v-show="show">这是内容</div>
</transition>
```


### 自定义过渡的类名

我们可以通过以下 attribute 来自定义过渡类名：

- enter-class
- enter-active-class
- enter-to-class (2.1.8+)
- leave-class
- leave-active-class
- leave-to-class (2.1.8+)
他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 Animate.css 结合使用十分有用。

**示例如下**

css部分：引入[animate.css](https://animate.style/)动画库

html部分：
```html
<button @click="show=!show">切换显示内容</button>
<!-- 自定义动画类名 -->
<transition enter-active-class="animate__animated animate__backInDown" leave-active-class="animate__animated animate__backOutRight">
    <div v-show="show">这是内容</div>
</transition>
```


## 生命周期

![生命周期](https://cn.vuejs.org/images/lifecycle.png)

> 生命周期还有两个隐藏的生命周期，在抽象组件`keep-alive`中，还回回调`activated`和`deactivated`生命周期函数。


### v-if的生命周期

```html
<hello-world v-if="show"></hello-world>
```
1. 当`show`为true时：`beforeCreate->created->beforeMount->mounted`

2. 当`show`切换为false时：`beforeDestroy->destroyed`

> 频繁切换时，重复以上步骤


### v-show的生命周期

```html
<hello-world v-show="show"></hello-world>
```

1. 当`show`为true时：`beforeCreate->created->beforeMount->mounted`

2. 当`show`为false时：不会触发生命周期函数，因为当组件渲染后，`v-show`指令只是单纯的修改css的显示和隐藏。所以不会触发生命周期函数，直到父组件销毁的时候才会触发`beforeDestroy`和`destroy`生命周期函数。

### keep-alive中组件的生命周期
```html
<keep-alive>
    <hello-world v-if="show"></hello-world>
    <hello-world v-show="show"></hello-world>
</keep-alive>
```
- v-if
    1. show==true：`beforeCreate->created->beforeMount->mounted->activated`
    2. show==false：`deactivated`
    3. 再次show==true：`activated`
    4. 再次show==false：执行2


- v-show
    1. show==true：`beforeCreate->created->beforeMount->mounted->activated`
    2. show==false：不触发任何生命周期



# Vue组件

## 创建组件

### 1. 声明一个组件
```js
let myCon = {
    template: '<div><h1>我是组件</h1><button @click="click">点我</button></div>',
    data: function(){
        return {
            msg: '组件1'
        }
    },
    methods: {
        click: function() {
            console.log('我是' + this.msg);
        }
    }
}
```

### 2. 引入
> 全局引入
```js
Vue.component('my-con',myCon);
```
> 本地引入
```js
new Vue({
    el: '#app',
    components: {
       myCon 
    }
});
```

### 3. 使用
```html
<my-con></my-con>
```

## 组件传值

### 1. props/$emit

父组件A通过props的方式向子组件B传递，B to A 通过在 B 组件中 $emit, A 组件中 v-on 的方式实现。

```html
<!-- 声明一个组件的template -->
<template id="hello">
    <div>
        <h1>我是子组件</h1>
        <p>我是父组件传过来的值: {{ parentData }}</p>
        <!-- 子组件只要触发失去焦点事件时，就往父组件中去传值 -->
        <input type="text" v-model="msg" @blur="onInput">
    </div>
</template>


<div id="app">
    <hello :parent-data="msg" @change="onChildChange"></hello>
    <hr>
    <h1>我是父组件</h1>
    <p>我是子组件传过来的值：{{ sonData }}</p>
    <div>
        <input type="text" v-model="msg">
    </div>
</div>
```

```js
let hello = {
    template: '#hello',
    data() {
        return {
            msg: '我是子组件信息'
        }
    },
    // 子组件使用props中的parentData来接收
    props: ['parentData'],
    methods: {
        onInput: function (e) {
            let value = e.target.value;
            // 向父组件传递 $emit(接收的时间，值)
            this.$emit('change',value);
        }
    },
};


new Vue({
    el: '#app',
    components: {
        hello
    },
    data() {
        return {
            msg: '我是父组件信息',
            sonData: ''
        }
    },
    methods: {
        // 父组件使用方法接收子组件传来的值
        onChildChange:function(value) {
            this.sonData = value;
        }
    },
});
```


### 2. $emit/$on 中央事件总线

这种方法通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。

```html
<template id="hello">
    <div>
        <h1>我是子组件</h1>
        <p>父组件中的值：{{parentData}}</p>
        <input type="text" v-model="msg" @input='onInput'>
    </div>
</template>


<div id="app">
    <hello></hello>
    <hr>
    <h1>我是父组件</h1>
    <p>子组件中的值：{{sonData}}</p>
    <input type="text" v-model="msg" @input='onInput'>
</div>
```
```js
// 事件总线对象
let Event = new Vue();


// 子组件
let hello = {
    template: '#hello',
    data() {
        return {
            msg: '',
            parentData: ''
        }
    },
    methods: {
        onInput: function (e) {
            let value = e.target.value;
            Event.$emit('sonEvent', value);
        }
    },
    mounted() {
        Event.$on('parentEvent', v => {
            this.parentData = v;
        });
    },
};


// 挂载了el的实例
new Vue({
    el: '#app',
    components: {
        hello
    },
    data() {
        return {
            msg: '',
            sonData: ''
        }
    },
    methods: {
        onInput: function (e) {
            let value = e.target.value;
            Event.$emit('parentEvent', value);
        }
    },
    mounted() {
        Event.$on('sonEvent', v => {
            this.sonData = v;
        });
    },
});
```


### 3. 父组件方法通过props方式传给子组件，子组件调用

父组件的方法名，通过props方式传递给子组件接收，子组件通过调用此父级方法达到向父级传值的目的。

```html
<template id="hello">
    <div>
        <h1>我是子组件</h1>
        <p>父组件中的值：{{parentData}}</p>
        <input type="text" v-model="msg" @input='onInput'>
    </div>
</template>


<div id="app">
    <hello :parent-method="update"></hello>
    <hr>
    <h1>我是父组件</h1>
    <p>子组件中的值：{{sonData}}</p>
    <input type="text" v-model="msg" @input='onInput'>
</div>
```

```js
let hello = {
    template: '#hello',
    data() {
        return {
            msg: '',
            parentData: ''
        }
    },
    props: {
        parentMethod: {
            type: Function
        }
    },
    methods: {
        onInput: function (e) {
            let value = e.target.value;
            this.parentMethod(value);
        }
    }
};


// 挂载了el的实例
new Vue({
    el: '#app',
    components: {
        hello
    },
    data() {
        return {
            msg: '',
            sonData: ''
        }
    },
    methods: {
        // 传给子组件的父组件方法，在子组件中被调用
        update:function(value) {
            this.sonData = value;
        }
    }
});
```

### 4. $parent / $children与 ref

- `$parent`可以获取父组件的实例

- `$children`可以获取子组件的**实例集合**

- `ref`：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例


> 缺点：无法跨级或在兄弟组件之间进行通讯。

```html
<template id="hello">
    <div>
        <h1>我是子组件</h1>
        <p>父组件中的值：{{parentData}}</p>
        <input type="text" v-model="msg" @input='onInput'>
    </div>
</template>


<div id="app">
    <hello ref="hello"></hello>
    <hr>
    <h1>我是父组件</h1>
    <p>子组件中的值：{{sonData}}</p>
    <input type="text" v-model="msg" @input='onInput'>
</div>
```

```js
let hello = {
    template: '#hello',
    data() {
        return {
            msg: '',
            parentData: ''
        }
    },
    methods: {
        onInput: function (e) {
            let value = e.target.value;
            this.$parent.update(value);
        },
        update: function (value) {
            this.parentData = value;
        }
    }
};


// 挂载了el的实例
new Vue({
    el: '#app',
    components: {
        hello
    },
    data() {
        return {
            msg: '',
            sonData: ''
        }
    },
    methods: {
        onInput: function (e) {
            let value = e.target.value;
            // console.log(this.$children);
            this.$refs.hello.update(value);
        },
        // 传给子组件的父组件方法，在子组件中被调用
        update: function (value) {
            this.sonData = value;
        }
    }
});
```

## 单向数据流

所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

1. 这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data property 并将这个 prop 用作其初始值：
    ```js
    props: ['initialCounter'],
    data: function () {
        return {
            counter: this.initialCounter
        }
    }
    ```

2. 这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：
    ```js
    props: ['size'],
    computed: {
        normalizedSize: function () {
            return this.size.trim().toLowerCase()
        }
    }
    ```

## 组件中v-model实现

```html
<div id="app">
    <!-- 组件实现了v-model -->
    <hello v-model="msg"></hello>
    <h1>{{ msg }}</h1>
</div>
```

```js
new Vue({
    el: '#app',
    components: {
        'hello': {
            template: 
            `
            <div>
                <input :value="msg" @input="$emit('input',$event.target.value)" />
            </div>
            `,
            props: ['msg']
        }
    },
    data: {
        msg: ''
    }
});
```


## 插槽

插槽使用`slot`来表示，是用来显示组件便签内的内容的。

### 1. 一个简易的插槽

```html
<div id="app">
    <hello>插槽内容</hello>
</div>
```

```js
new Vue({
    el: '#app',
    components: {
        'hello': {
            template: `
            <div>
                <h1>我是子组件</h1>
                <slot></slot>
            </div>`
        }
    }
});
```


### 2. 插槽的默认内容

```html
<div id="app">
    <!-- 当没有内容时，就会显示插槽的默认内容 -->
    <hello></hello>
    <!-- 当由内容时，就会显示已经有的内容 -->
    <hello>插槽内容</hello>
</div>
```

```js
new Vue({
    el: '#app',
    components: {
        'hello': {
            template: `
            <div>
                <h1>我是子组件</h1>
                
                <slot>我是插槽的默认内容</slot>
            </div>`
        }
    }
});
```


### 3. 多个插槽v-slot

```html
<div id="app">
    <hello>
        <!-- 此条内容会渲染到默认的slot上，即没有name属性的slot -->
        <p>电影名称</p>
        <!-- 此template里的内容，会渲染到name为image的slot里 -->
        <template v-slot:image>
            <img src="https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2591289975.webp" alt="汤姆汉克斯" />
        </template>
        <!-- 此template里的内容，会渲染到name为content的slot里 -->
        <template v-slot:content>
            <h2>汤姆汉克斯</h2>
        </template>
        <!-- 此template里的内容，会渲染到name为description的slot里 -->
        <template v-slot:description>
            <p>影片讲述二战初期，由37支盟军船只组成的护航舰队在欧内斯特·克劳斯（汤姆·汉克斯饰）舰长率领的一艘美国驱逐舰指挥下，穿越险恶的北大西洋，同时还要与德国U型潜艇狼群的周旋。</p>
        </template>
    </hello>
</div>
```

```js
new Vue({
    el: '#app',
    components: {
        'hello': {
            template:
                `
            <div>
                <h1>我是子组件</h1>
                <!-- 该slot表示name为default的slot -->
                <slot></slot>
                <slot name="image"></slot>
                <slot name="content"></slot>
                <slot name="description"></slot>
            </div>
            `,
        }
    }
});
```

注意 `v-slot` **只能添加在 `<template>`** 上，这一点和已经废弃的 slot attribute 不同。


### 4. 插槽提供props供外部使用

```html
<div id="app">
    <hello>
        <template v-slot:default="mySlot">
            <!-- 这里调用的是插槽的prop -->
            {{mySlot.content}}
        </template>
    </hello>
</div>
```

```js
new Vue({
    el: '#app',
    components: {
        'hello': {
            template:
                `
            <div>
                <h1>我是子组件</h1>
                <input type="text" v-model="msg" />
                <!-- 自定义一个prop，以供外部调用 -->
                <slot :content="msg"></slot>
            </div>
            `,
            data() {
                return {
                    msg: '我是子组件的内容'
                }
            },
        }
    }
});
```


## 自定义指令

## 过滤器


## @vue/cli

`npm install -g @vue/cli`



# 路由

## hash和history模式

hash模式url里面永远带着#号，我们在开发当中默认使用这个模式。那么什么时候要用history模式呢？如果用户考虑url的规范那么就需要使用history模式，因为history模式没有#号，是个正常的url适合推广宣传。当然其功能也有区别，比如我们在开发app的时候有分享页面，那么这个分享出去的页面就是用vue或是react做的，咱们把这个页面分享到第三方的app里，有的app里面url是不允许带有#号的，所以要将#号去除那么就要使用history模式，但是使用history模式还有一个问题就是，在访问二级页面的时候，做刷新操作，会出现404错误，那么就需要和后端人配合让他配置一下apache或是nginx的url重定向，重定向到你的首页路由上就ok啦。

## 路由跳转

1. `<router-link to="/bar">Go to Bar</router-link>`

2. `this.$router`调用方法进行跳转
    ```js
    // 1. 通过名字跳转
    this.$router.push({name: 'Me'});

    // 2. 通过名字跳转携带参数
    this.$router.push({ name: "Me", params: {name: '刘德华',age: 18} });

    // 3. 通过路径跳转
    this.$router.push({
        path: "/news", // 同时有name和path的话，以path为主
        name: "news",
        params: { name: "刘德华", age: 18 }
    });

    // 3. query
    this.$router.push({
        path: "/news/image",
        query: { name: "刘德华", age: 18 }
    });

    // 4. replace 替换当前页面
    this.$router.replace({
        path: "/news/image",
        query: { name: "刘德华", age: 18 }
    })
    ```


## 动态路由

一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。于是，我们可以更新 User 的模板，输出当前用户的 ID：

### 在path后面添加:name
```js
{
    path: '/weather/:city/:price',
    name: 'news',
    component: () => import('../views/newsCom.vue')
}
```

## 嵌套路由

```js
// 嵌套路由
  {
    path: '/news',
    name: 'news',
    component: news,
    children: [
      {
        path: 'image',
        name: 'image',
        component: newsImage
      },
      {
        path: 'content',
        name: 'content',
        component: newsContent
      }
    ]
  }
```

## 命名视图

有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 sidebar (侧导航) 和 main (主内容) 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 router-view 没有设置名字，那么默认为 default。


**1. 主视图页面**
```html
<template>
    <div>
        <h1>命名视图</h1>
        <router-view name="daohang"></router-view>
        <router-view name="cebian"></router-view>
        <router-view></router-view>
    </div>
</template>
```

**2. 三个内容视图**

导航栏
```html
<template>
    <div>
        <h1>我是导航</h1>
    </div>
</template>
```
侧边栏
```html
<template>
    <div>
        <h1>我是侧边栏</h1>
    </div>
</template>
```
内容
```html
<template>
    <div>
        <h1>我是内容</h1>
    </div>
</template>
```

**3.路由配置**
```js
// 命名视图
{
    path: '/name-router',
    component: () => import('../views/nameRouter.vue'),
    children: [
    {
        path: '',
        components: {
          default: () => import('@/views/name_router/main.vue'),
          daohang: () => import('@/views/name_router/nav.vue'),
          cebian: () => import('@/views/name_router/aside.vue')
        }
    }
    ]
}
```


## 重定向

```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```

```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: { name: 'foo' }}
  ]
})
```

```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: to => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
    }}
  ]
})
```


## 404页面

```js
const router = new VueRouter({
  routes: [
    {
        path: '*',
        component: page404
    }
  ]
})
```


## 路由守卫

1. 导航被触发。
2. 在失活的组件里调用 beforeRouteLeave 守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。


### 1. 全局守卫

**前置守卫**
```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```
**后置守卫**
```js
router.afterEach((to, from) => {
  // ...
})
```

### 2. 路由独享的守卫

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

### 3. 组件内的守卫
```js
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```

## meta

route的meta字段相当于一个存储数据的字段，可以在路由跳转的时候，获取到存储的数据



# Vuex

包含state、mutation、actions、modules


## state

### 1. 获取state内容

1. 使用`this.$store.state.xxx`

2. 在计算属性computed中获取
    ```js
    computed: {
        name: {
            get() {
                return this.$store.state.name;
            },
            // 如果数据有变动，通过commit()去调用mutation中的方法，再通过方法去修改state中的值
            set(val) {
                this.$store.commit("setName",val);
            }
        }
    }
    ```

3. mapState

    ```js
    // 首先需要导入mapState
    import { mapState } from 'vuex';
    // 在计算属性中使用
    computed: mapState(['name','msg'])
    ```


4. 在计算属性中对mapState使用扩展运算符
    ```js
    // 首先需要导入mapState
    import { mapState } from 'vuex';

    // computed
    computed: {
        ...mapState(['name','age','msg']);
    }
    ```


## getter

getter在store中相当于组件中的计算属性comuted，可以计算复杂的state变量

### 1. 引入
引入方式和mapState一样，注意是 `mapGetters`
```js
import { mapGetters } from 'vuex';
```

### 2. getter不仅能声明变量，而且还能返回函数
store
```js
 getters:{
    nameReverse(state){
      return state.name.split('').reverse().join('');
    },
    // 函数传参
    msgAdd(state){
      return function(val) {
        state.msg = val;
      }
    }
  }
```
使用
```js
computed: {
    ...mapState(['name','msg']),
    // 获取到getter中的属性
    ...mapGetters(['nameReverse','msgAdd']),
},
methods: {
    onInput:function(e) {
        // 调用getter中返回的方法
        this.msgAdd(e.target.value);
    }
}
```


## mutation

修改状态，commit()的方法会触发mutation中的方法，commit触发mutation是同步的。


### 调用mutation中的方法

1. 使用`this.$store.commit('方法名',参数)`

2. 在组件`methods`中进行结构
    ```js
    // 引入
    import { mapMutations } from "vuex";

    // 组件中结构
    methods: {
        ...mapMutations(['setName'])
    }

    // 然后直接在需要的时候调用getBanner方法即可
    ```



**store中**

```js
  mutations: {
    addNum(state){
      state.num++;
    },
    setName(state,val){
      state.name = val;
    }
  }
```

**使用**
```js
// 会触发mutation中的setName方法
this.$store.commit('setName','改变的值');

// 或者如果是结构导入的，直接调用setName方法
```


## actions
异步的修改state

### 调用actions中的方法

1. 使用`this.$store.dispatch('方法名',参数)`

2. 在组件`methods`中进行结构
    ```js
    // 引入
    import { mapActions } from "vuex";

    // 组件中结构
    methods: {
        ...mapActions(['getBanner'])
    }

    // 然后直接在需要的时候调用getBanner方法即可
    ```

3. actions中的方法
    ```js
    actions: {
        // 获取异步任务  方法名({commit,state},参数)
        getBanner({ commit }, params) {
        console.log('store中actions参数',params);
        return new Promise((resolve, reject) => {
            http.get('/banners')
            .then(response => {
                console.log(response);
                if (response.status == 200) {
                // 将获取的内容存储到state中
                let arr = response.data.data;
                commit('setBanners', arr);
                resolve(response.data);
                } else {
                reject(response.status);
                }
            })
            .catch(error => {
                reject(error);
            })
        });
        }
    }
    ```


## modules

### 新增module
moudle定义

```js
// 一个名字为user的module
const user = {
  // 命名空间
  namespaced: true,
  state: {
    name: '张学友',
    age: 20
  },
  getters: {
    subName(state) {
      return state.name + '是歌神';
    }
  },
  mutations: {
    setName: function (state, val) {
      state.name = val;
    },
    setAge: function (state) {
      state.age++;
    }
  },
  actions: {}
};

export default new Vuex.Store({
    // 将module引入
    modules: {
        // 传入一个module，名字为user
        user
    }
});
```

### 导入module中的数据

1. 直接使用`this.$store.state.模块名.属性`、`this.$store.getters.模块名.属性`、`this.$store.commit.方法名('模块名/方法名',值)`和`this.$store.dispatch.方法名('模块名/方法名',值)`


2. 使用解构的方法
    ```js
    // 导入
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
    // 解构
    computed: {
        // 在页面中直接使用 解构的值即可
        ...mapState('模块名',['解构的值']),
        ...mapGetters('模块名',['解构的值'])
    },
    methods: {
        ...mapMutations('模块名',['方法名1','方法名2']), // 在页面中直接调用解构的方法名
        ...mapActions('模块名',['方法名1','方法名2'])
    }
    ```


