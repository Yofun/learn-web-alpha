# jQuery学习笔记

## ready和onload的区别

- ready，表示文档结构已经加载完成（不包含图片等非文字媒体文件）
- onload，指示页面包含图片等文件在内的所有元素都加载完成。

## ready的几种写法

```js
// 方式1
$(function(){ 
// do something 
}); 

// 方式2
$(document).ready(function(){ 
//do something 
});

// 方式3
$().ready(function(){ 
//do something 
});
```
`$`符号替换成`jQuery`也是一样的

## jQuery和DOM对象互相转换

DOM转jQuery
- $(选择器)
- $(dom原生对象)

jQuery转DOM
- $(选择器)[0]
- $(选择器).get(0)

## 筛选选择器

```js
// 选择ul第一个li
$('ul li:first').css('color','red');

// 选择ul中的最后一个li
$('ul li:last').css('color','red');

// 选择ul中的第n个,索引从0开始
$('ul li:eq(1)').css('color','green');

// 索引号基数行
$('ol li:odd').css('color','red')

// 索引号偶数行
$('ol li:even').css('color','green')
```

## 筛选方法

```js
// 查找父级
$('.son').parent();

// 查找所有父级
$('.son').parents('selector');

// 查找儿子.children(selector) selector可填可不填,不填写表示选择全部子元素
$('ul').children('li').css('color','red')

// find(selector)查找子节点
$('ul').find('.active').css('color','green')

// siblings(selector)    兄弟节点，不包含自己
$('ul .active').siblings().css('color','purple')

// 当前元素之后的所有兄弟元素，除了自己
$('ol .zhongjian').nextAll().css('color','red')

// 当前元素之前的所有兄弟元素，除了自己
$('ol .zhongjian').prevAll().css('color','green')

// eq
$('ol li').eq(2).css('color','purple')
```

## 类操作方法

- addClass('类名')：添加类
- removeClass('类名')：移除类
- toggleClass('类名')：切换


## 操作属性

```js
// 1、prop()    获取标签元素的自带属性，如：href、src、id...
// 1）获取属性
$(this).prop('src');
// 2）设置属性
$(this).prop('src','123445');



// 2、attr()    获取标签元素的自带属性和自定义属性
// 1）获取属性
$(this).attr('custom');
// 2）设置属性
$(this).attr('custom','123445');



// 3、data() 获取HTML5中的data-开头的属性值，获取和设置存储在元素对象上的值
 // 存储自定义的值
$('span').data('hello','我是存储的值');
// 获取存储的值
var hello = $('span').data('hello');
console.log(hello);
// 获取HTML5中的data-自定义属性
var custom = $('span').data('custom');
console.log(custom);
```

## 内容文本操作

```js
// 1、html()
// html() 获取元素内容
console.log($('div').html()); 
// html() 设置元素内容
$('div').html('<h2>我是一个标题</h2>')


// 2、text()
// 获取文本内容
console.log($('div').text());
// 设置文本内容
$('div').text('<h2>我是text()修改后的内容</h2>');


// 3、获取表单值
console.log($('input').val());
// 修改
$('input').val('我是修改后的input值');
```

## 遍历
```js
// 1、遍历元素
$('div').each(function(index,ele){
    console.log(ele);
})


// 2、遍历任何对象
$.each([1,2,3],function(index,value) {
    console.log(index,value);
})
$.each({name:'pink'},function(index,value) {
    console.log(index,value);   // name pink
})
```


## DOM操作

```js
// 1、内部添加
// 在最后面添加元素
$('ul').append($('<li>我是在后面添加的li</li>'));
// 在最前面添加
$('ul').prepend($('<li>我是在前面添加的li</li>'));

// 2、外部添加
// 后面
$('.myDiv').after($('<div>我是你后边的兄弟</div>'));
// 前面
$('.myDiv').before($('<div>我是你前边的哥哥</div>'));


// 3、删除元素
// empty() 清空子元素
// remove() 移除自己
// html('') 清空子元素
```


## 绑定事件on()

- on()绑定一个事件类型
    ```js
    $('div').on('click',function() {
        console.log('on一个事件:::div被点击了3');  
    });
    ```

- on()绑定多个事件

    ```js
    $('div').on({
    mouseenter:function() {
        console.log('on多个事件:::鼠标进来了');
    },
    mouseleave:function() {
        console.log('on多个事件:::鼠标离开了');
    },
    click:function() {
        console.log('on一个事件:::div被点击了4');  
    }
    ```

- on()多个事件类型触发一个函数

    ```js
    $('div').on('mouseenter mouseleave',function(){
        console.log('mouseenter mouseleave');
    })
    ```

- on()事件委托。给动态添加的元素绑定事件

    ```js
    // 使用click()绑定事件
    $('ol li').click(function () {
        console.log('click>>>>您点击了ol下的li');   // 未触发点击方法
    })

    // 使用on()的事件委托
    $('ol').on('click', 'li', function () {
        console.log('on>>>>您点击了ol下的li');      // 点击方法被触发了
    })


    // 创建元素
    $('ol').append($('<li>我是ol动态创建的li</li>'));
    ```

## 绑定事件one()

- 使用one绑定的事件只会执行一次，下次不会执行了



## 事件解绑off()

- 解绑所有事件：off()
- 解绑某些事件：off('事件类型1 事件类型2')


## 自动触发事件

- $('元素').click() : 就会立即执行click的点击事件
- $('元素').trigger('事件类型') : 就会立即执行相应的事件类型
- $('元素').triggerHandler('事件类型') : 就会立即执行相应的事件类型，不会触发元素的默认行为。


## jQuery事件对象event

- 阻止默认行为
    ```js
    event.preventDefault()
    ```
    或者
    ```js
    return false
    ```
- 阻止冒泡
    ```js
    event.stopPropagation()
    ```


## 其他方法

- 对象拷贝
    ```js
    // 第一个参数默认为false
    $.extend(false, target, obj1, obj2...)
    ```

- 多库共存。解决$符号和jQuery变量命名冲突问题
    ```js
    // 1、使用jQuery全称解决问题
    jQuery(function() {

    })
    // 2、更改jQuery的使用方法
    var sb = jQuery.noConflict();   // 这个时候sb就相当于是$符号或者jQuery了
    console.log(sb(document));
    ```
    
## 尺寸获取

```js
// 1、width() 和 height() 用法      content
// 获取大小 width() 
console.log($('div').width());   // 200 
console.log($('div').height());   // 200 

// 设置大小
$('div').width(300)
$('div').height(300)


// 2、innerWidth() 和 innerHeight()    content + padding
console.log($('div').innerWidth());     // 340
console.log($('div').innerHeight());    // 340


// 3、outerWidth() 和 outerHeight()     content + padding + border
console.log($('div').outerWidth()); // 360
console.log($('div').outerHeight());    // 360


// 4、outerWidth(true)   content + padding + border + margin
console.log($('div').outerWidth(true)); // 400
```


## 位置获取

```js
// 1、offset    获取的是基于文档位置的坐标

// 获取
console.log($('.father').offset())  // {top: 100, left: 100}
console.log($('.son').offset())  // {top: 100, left: 100}

// 修改
$('.son').offset({top:200,left:200})



// 2、position()  获取带有定位父级的偏移坐标，相当于DOM中的offsetLeft、offsetTop
console.log($('.son').position());


// 3、scrollTop()、scrollLeft()  相当于DOM中的 ele.scrollTop、ele.scrollLeft
$(window).on('scroll',function(){
    var top = $(this).scrollTop();
    var sonTop = $('.son').offset().top;
    if(top > sonTop) {
        // 显示返回
        $('.back').show();
    }else {
        $('.back').hide();  
    } 
})

// 带动画返回顶部
$('.back').on('click',function() {
    // 这样不带动画
    // $(window).scrollTop(0);

    // 使用animate带动画的
    $('body,html').stop().animate({
        scrollTop: 0
    });
})
```