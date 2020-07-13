# DOM笔记

## 元素对象

- html元素对象
    ```js
    document.documentElement
    ```
    > 返回值：html对象
- body元素对象
    ```js
    document.body
    ```
    > 返回值：body对象
- 根据元素ID获取
    ```js
    document.getElementById('id名称');
    ```
    > 返回值：元素对象
- 根据标签名获取
    ```js
    document.getElementsByTagName('div');
    ```
    > 返回值：标签元素对象数组
- 根据类名获取
    ```js
    document.getElementsByClassName('class名字');
    ```
    > 返回值：元素对象数组

- 选择器方法
    ```js
    document.querySelector('div .class');
    ```
    > 返回值：选择器选中的第一个元素对象

- 选择器方法
    ```js
    document.querySelectorAll('div');
    ```
    > 返回值：选择器选中的元素对象数组

- 页面所有标签
    ```js
    document.querySelectorAll('*');
    ```
    > 返回值：选择器选中的元素对象数组

案例：统计页面所有元素的个数,并按照元素出现的次数排列顺序
```js
let array = Object.entries([...document.querySelectorAll('*')].map(v => v.tagName).reduce((res, a) => { res[a] = (res[a] || 0) + 1; return res; }, {})).sort((a, b) => b[1] - a[1])
console.log(array);
```

## 样式

```js
dom.style.position = 'absolute';
dom.style.left = '2px';
dom.style.backgroundColor = 'red';
```

## 元素属性
```js
img.src = '...';
img.title = '...';
img.alt = '...';
```

## 元素自定义属性
```js
// 获取属性
dom.getAttribute('name');
// 设置属性
dom.setAttribute('name','....');
```
可以获取设置自定义属性，也可以获取设置元素自带的属性


## DOM节点关系

- `element.parentNode`：最近的父亲节点。一个节点
- `element.childNodes`：子节点集合。包含文本节点和元素节点
- `element.children`：元素子节点集合
- `element.firstChild`：第一个孩子节点。包含文本节点
- `element.firstElementChild`：第一个孩子节点。
- `element.lastChild`：最后一个孩子节点。包含文本节点
- `element.lastElementChild`：最后一个孩子节点。
- `element.nextSibling`：下一个兄弟节点。包含文本节点
- `element.previousSibling`：上一个兄弟节点。包含文本节点
- `element.nextElementSibling`：下一个兄弟节点。
- `element.previousElementSibling`：上一个兄弟节点。

## 元素节点新增、删除、复制

### 新增
```js
// 创建一个li元素节点
var li = document.createElement('li');
// 1）插入到父级元素最后
ul.appendChild(li);
// 2) 插入到父级元素第一个 父级.insertChild(要插入的元素, 父级哪个子元素的前面);
ul.insertChild(li, ul.children[0]);
```

### 删除
- 父级删除
    ```js
    ul.removeChild(li);
    ```
- 自己删除自己
    ```js
    li.remove();
    ```

### 复制

- 浅拷贝。只拷贝节点
    ```js
    var newli = li.cloneNode(); // 参数默认为false
    ```

- 深拷贝。拷贝节点和节点内容
    ```js
    var newli = li.cloneNode(true);
    ```

## 快速生成元素的三种方式

### 1. document.write()

如果文档流加载完毕，使用此方法创建元素，则会导致页面重绘

### 2. innerHTML 创建元素
拼接字符串的方式添加元素，效率低，耗时长，耗内存

**解决方法：使用数组拼接，然后join转换成字符串，效率就很高**

### 3. 使用element.createElement

效率比innerHTML的数组拼接要低一点

## 绑定事件和解绑事件

### 绑定事件

```js
// 传统事件：具有唯一性，后面的事件会覆盖前面的事件
buttons[0].onclick = function () {
    console.log('点击了我1');
}
buttons[0].onclick = function() {
    console.log('点击了我2');
}
// 结果：点击了我2



// 方法监听注册方式：同一个元素可以注册多个监听事件  addEventListener(type,listener,useCapture)
// 正常浏览器
buttons[1].addEventListener('click',function() {
    console.log('点击了我1');
})
buttons[1].addEventListener('click',function() {
    console.log('点击了我2');
})
// 结果：点击了我1      点击了我2

// IE9之前
buttons[1].attachEvent('click',function() {
    console.log('点击了我1');
})
buttons[1].attachEvent('click',function() {
    console.log('点击了我2');
})
// 结果：点击了我1      点击了我2
```

### 解绑事件

```js
/* 
    1、传统解绑方式
*/
btns[0].onclick = function() {
    alert('传统方式')
    // 第二次点击就无效了
    btns[0].onclick = null
}


/* 
    2、addEventListener
*/
function fn() {
    alert(22)
    btns[1].removeEventListener('click',fn)
}
    btns[1].addEventListener('click',fn)


/* 
    3、IE9以下：detachEvent()
*/
```
## 事件对象
事件传播流程：capture->target->bubble

### event兼容
```js
var e = e || window.event;
```
### target
```js
e.target // 真正点击的对象，并非事件源对象
```

### clientX、pageX、screenX
```js
// 可视区域的距离坐标
console.log('client:' + e.clientX + ',' + e.clientY);

// 页面的距离坐标
console.log('page:' + e.pageX + ',' + e.pageY);

// 电脑屏幕坐标
console.log('screen:' + e.screenX + ',' + e.screenY);
```

### 阻止事件冒泡、阻止默认行为

阻止冒泡
```javascript
// 兼容写法
if(e.stopPropagation) {
    // 正常
    e.stopPropagation()
}else {
    // IE
    e.cancelBubble = true;
}
```

阻止默认行为
```javascript
// 兼容写法
if(e.preventDefault) {
    // 正常
    e.preventDefault();
}else {
    // IE
    e.returnValue = false
}
```

### 事件委托

给父元素添加点击事件，然后通过e.target判断具体点击的是哪个子元素，然后对子元素做相应的改变

## 常用的鼠标事件

- click：点击
- dblclick：双击
- mousemove：鼠标移动
- mousehover / mouseout：鼠标经过、鼠标离开。会冒泡，所以会触发多次。
- mouseenter / mouseleave：鼠标经过、鼠标离开。不会冒泡，只会触发一次。

- contextmenu：鼠标右键点击
- selectstart：鼠标按住托选
    ```js
    // 禁用右键菜单
    document.addEventListener('contextmenu',function(e) {
        e.preventDefault()
    })

    // 禁止选中文字
    document.addEventListener('selectstart',function(e) {
        e.preventDefault()
    })
    ```

## input事件

- focus：获取焦点时
- blur：失去焦点时
- change：input失去焦点且value值发生变化
- select：input里的内容文本被选中
- input：input里的value值发生变化

## 常用键盘事件

```js
// 1、键盘按下事件  不松开会一直触发  不区分大小写
document.addEventListener('keydown',function(e) {
    console.log('键盘按下了>>>>',e);
})


// 2、键盘弹起事件=
document.addEventListener('keyup',function(e) {
    console.log('键盘弹起了>>>>',e);
})

// 3、键盘按下的时候触发  区分大小写   不能识别功能键如 ctrl shift
document.addEventListener('keypress',function(e) {
    console.log('键盘按下了>>>>',e);
})


// 4、三个事件的执行顺序  keydown -> keypress -> keyup
```


## 7、outWidth、clientWidth、offsetWidth

### offsetParent/offsetWidth/offsetTop/offsetLeft

- offset基于父元素带有定位的盒子

- offsetParent，带有定位的父盒子元素对象，如果没有，则返回body对象

- offsetLeft/offsetTop：基于父容器是否有定位，如果父容器有定位，基于父盒子（不包含边框）的左侧/顶部；如果父盒子没有定位，则以body（包含body的边框）为准。

- offsetWidth/offsetHeight：`content+padding+border`

### client

- clientWidth/clientHeight：`content+padding区域`

- clientTop/clientLeft：`上边框大小、左边框大小`

### scroll

- scrollWidth、scrollHeight：`padding+真实内容大小（含超出部分）`

- scrollTop/scrollLeft：`拖动滚动条，内容顶部——border底部的距离`

页面监听滚动
```js
function getScroll() {
    return {
        left: window.pageXOffset || document.documentElement.offsetLeft || document.body.offsetLeft || 0,
        top: window.pageYOffset || document.documentElement.offsetTop || document.body.offsetTop ||0
    }
}

window.addEventListener('scroll',function(){
    console.log('滑动距离',getScroll().top);
    
})
```


## 缓动动画

```javascript
function animate(obj,target,callback) {
    clearInterval(obj.timmer);
    obj.timmer = setInterval(() => {
        // 需要使用等于，否则前进、后退会有问题
        if(obj.offsetLeft == target){
            clearInterval(obj.timmer);
            if(callback && typeof callback == 'function') {
                callback();
            }
        }
        var step = (target - obj.offsetLeft) / 10;
        // 如果向前进，则向上取值；如果后退，则向下取值
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 结果：当前位置 + step
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}
```

## classList

在之前添加类名，使用`ele.className = '类名'`，这样添加类名很容易覆盖已经存在的类名。
classList是一个类的数组对象，可以很轻松的通过数组来管理类

- ele.classList：查看类名，数组的形式
- ele.classList.add('类名')：添加类
- ele.classList.remove('类名')：移除某个类
- div.classList.toggle('类')：toggle某个类


## 移动端click事件延迟

移动端click事件会有300ms的延时，原因是移动端屏幕双击会缩放（double tap to zoom）页面

解决：
- 1）禁止缩放。`<meta name="viewport" content="user-scalable=no">`
- 2）利用touch时间自己封装这个事件
- 3）fastclick插件解决



# BOM笔记

## 浏览器对象常用事件

```js
// load  等页面内容加载完毕，包含页面dom元素 图片 flash css等等加载完毕
window.onload = function() {}

// DOMContentLoaded    是DOM加载完毕，不包含图片、css等就可以执行 触发时机比load早
// jquery中的ready事件就是调用DOMContentLoaded事件触发的
window.addEventListener('DOMContentLoaded',function(){})

// pageshow
window.addEventListener('pageshow', function(){})


// resize 监听窗口变化。窗口大小发生改变就会触发
window.addEventListener('resize',function() {})

```

## window对象的两个定时器

```js
// 1) setTimeout(function, 1000)  1s后执行function中的内容
var timmer = setTimeout(function(){}, 1000);
// 清除定时器
clearTimeout(timmer);


// 2) setInterval(function, 1000) 每隔1s执行一次function中的内容
var interval = setInterval(function() {}, 1000);
// 清除定时器
clearInterval(interval);

```


## window的location对象

```js
// 1. location.href 跳转，可以返回
location.href = '';

// 2. 利用location.assign(url) 跳转，可以返回
location.assign(url);

// 3. location.replace(url) 跳转，不能返回。相当于替换了当前网页
location.replace(url);

// 4. location.reload(true) // 强制刷新页面

// 5. location.search  获取页面地址的参数，包含?

```


## window的navigator对象

- 使用navigator对象获取浏览器类型

    ```js
    WhichBrowser: function(){
        var userAgent = navigator.userAgent;

        var isOpera = userAgent.indexOf("Opera") > -1;
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
        var isFF = userAgent.indexOf("Firefox") > -1;
        var isCH = userAgent.indexOf("Chrome") > -1;
        var isSafari = userAgent.indexOf("Safari") > -1;

        if (isIE){
            var IE5 = IE55 = IE6 = IE7 = IE8 = false;
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            IE55 = fIEVersion == 5.5;
            IE6 = fIEVersion == 6.0;
            IE7 = fIEVersion == 7.0;
            IE8 = fIEVersion == 8.0;
            if (IE55) {
                return "IE55";
            }
            if (IE6) {
                return "IE6";
            }
            if (IE7) {
                return "IE7";
            }
            if (IE8) {
                return "IE8";
            }
        }

        if (isFF) {
            return "Firefox";
        }
        if (isCH) {
            return "Chrome";
        }
        if (isOpera) {
            return "Opera";
        }
        if (isSafari) {
            return "Safari";
        }
    }
    ```

## window的history对象

- history.length：返回浏览器历史列表中的 URL 数量。
- history.back()：后退
- history.forword()：前进
- history.go(num|url)：可加载历史列表中的某个具体的页面


## window的sessionStorage、localStorage对象

- setItem(key,value)：设置值
- removeItem(key)：移除值
- getItem(key)：获取值
- clear()：清空

> 只能存储字符串形式的值，可以存储序列化后的对象