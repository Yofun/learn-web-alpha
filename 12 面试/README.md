# CSS笔记

## 什么是语义化标签

什么样的标签做什么样的事，起什么样的作用

## 都有哪些标签
块级元素

行内元素

行内块元素

## 如何转换

display：block|inline|inlineblock

## display还有什么值

none|table|flex|inherit

## 让元素隐藏

display：none；
visibility：hidden；

## 区别
display：none隐藏会不会占据页面上的空间，空余部分其他元素标签会填上

visibility：hidden：也会隐藏元素标签，但是会占据页面上的空间。

## 盒子居中

1. 定位：定位+margin（有宽高）   定位+left+top+right+right+margin（有宽高） 定位+transform：translate（-50%,-50%）（没有宽高，但有兼容问题）


2. 弹性布局：flex  just-content  align-items

3. js方案 

4. 父级设置table-cell，样式为text-aligin：center；vertical-algin：middle；盒子变为inline或者inline-block（父元素要指定宽高）


## 盒子模型

w3c盒模型和怪异盒模型

w3c:content+padding+border+margin

怪异盒模型内容：content+padding+border

盒模型可以通过box-sizing进行改变


## 几大经典布局

左右固定，中间自适应


# JS


