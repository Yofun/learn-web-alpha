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