# HTML笔记

## HTML和XHTML的区别

1. 所有的标记都必须要有一个相应的结束标记
2. 所有标签的元素和属性的名字都必须使用小写
3. 所有的XML标记都必须合理嵌套
4. 所有的属性必须用引号""括起来
5. 把所有<和&特殊符号用编码表示【比如<用<代替，>用>代替等】
6. 给所有属性赋一个值
7. 图片必须有说明文字 【每个图片标签都必须有ALT说明文字】

## 文本格式标签

- 加粗：`<b></b>`、`<strong></strong>`
- 倾斜：`<i></i>`、`<em></em>`
- 删除线：`<s></s>`、`<del></del>`
- 下划线：`<u></u>`、`<ins></ins>`
- 格式化文本标签：`<pre></pre>`

## a链接打开方式（target属性）

单个标签
- 当前页打开：`_self`
- 另起页打开：`_blank`

全局页设置：在header中设置`<base target="_blank" />`

## 表格

表格中的元素
- table：最外层
- caption：表头标题，一般写在table中的第一行
- thead：表格头部结构
- tbody：表格身体结构
- tfoot：表格尾部结构
- tr：行
- th：表头标题列，会加粗显示
- td：正常的列

设置在`table`标签上的几个属性
- width：表格宽度
- height：表格高度
- align：整个表格的位置
- cellspacing：表格单元格之间的间距，一般设置为0
- cellpadding：单元格内容间距
- border：边框大小

合并单元格，设置在`th`|`td`中的属性
- rowspan：合并行。一个列占n行
- colspan：合并列。一个行占n列

## 列表

- 有序列表：`ol——>li`
- 无序列表：`ul——>li`
- 自定义列表：`dl——>dt+dd...`

## 表单input类型
- text：文本
- password：密码
- number：数字
- radio：单选
- checkbox：多选
- button：按钮
- reset：重置按钮
- file：文件

HTML5

- email：邮箱
- url：网址
- date：日期
- time：时间
- month：月份
- week：星期
- tel：电话
- color：选择颜色
- search：搜索框
- submit：提交按钮

## label搭配input标签使用

```html
<!-- 方法一：用label标签直接包裹input标签 -->
<label> 用户名：<input type="text" /> </label>

<!-- 方法二：用for属性绑定元素的id -->
<input type="radio" name="sex" id="sex_nan"><label for="sex_nan">男</label>

```

# CSS笔记

## css三种引入方式
- 行内式
- 内部样式表
- 外链式

# css三大特性

- 层叠性
- 继承性
- 优先级

## 块级元素、行内元素、行内块元素

- 块级元素：div,h1~h6,p,ul,ol,li,dl
- 行内元素：a,span,i,em,b,strong,s,del,u,ins
- 行内块元素：img,input,td

## 背景

- background-color：背景颜色
- background-size：背景大小
- background-image：背景图片
- background-position：背景位置
- background-clip：背景裁剪，如设为`content-box`，只显示content这块区域的背景，裁剪只显示content区域的背景
- background-origin：背景图片的显示范围
- background-repeat：平铺

## 盒子塌陷解决办法

- 给父元素border-top一个边框
- 可以给父元素指定一个padding-top
- 给父元素添加overflow:hidden

## css选择器优先级（从低到高）

| 名称 | 示例 | 权重 |
| - | - | - |
| 通配 | * | 0，0，0，0 |
| 标签、伪元素 | div、::before、::after | 0，0，0，1 |
| 类、伪类、属性、结构伪类 | .class、div:hover、div[type='']、:nth-child() | 0，0，1，0 |
| ID | #myDiv | 0，1，0，0 |
| 行内式 | style="" | 1，0，0，0 |
| !important | !important | +∞ |

## box-shadow

- 盒子阴影：水平阴影 垂直阴影 模糊距离 阴影尺寸(可省略) 阴影颜色 内/外阴影

## 浮动

- 子元素浮动，会浮动在父元素的`content`中，不含`border`和`padding`

清除浮动

- 给父元素设置高度
- 隔墙法
    ```css
    /* 清除浮动第二种方法：额外标签法。（隔墙法） */
    .clear {
        clear: both;
    }
    ```
- 给父元素添加overflow:hidden样式
- 伪元素after(推荐)
    ```css
    /* 清除浮动第四种方法：伪元素清除浮动 */
    .clearfix::after {
        content: '';
        display: table;
        height: 0;
        visibility: hidden;
        clear: both;
    }
    /* IE 6 IE 7专门清除浮动 */
    .clearfix{
        *zoom: 1;
    }
    ```
- 双伪元素
    ```css
    /* 清除浮动第四种方法：伪元素清除浮动 */
    .clearfix::before,
    .clearfix::after {
        content: "";
        display: table;
    }
    .clearfix::after{
        clear: both;
    }
    /* IE 6 IE 7专门清除浮动 */
    .clearfix{
        *zoom: 1;
    }
    ```

## 定位

- static
- relative
- absolute：绝对定位相对于文档定位时，bottom 为 0 会在浏览器`可视窗口`的底部，而不是在文档页面的底部
- fixed

## 鼠标常用样式cursor

- default：默认的箭头
- pointer：小手
- move：十字准心移动
- text：文本
- not-allowed：不允许，禁止
- wait:等待
- help:帮助


## 几个css技巧

- outline: none; 去除input，button边框
- resize: none; 禁止重新设置拉伸textarea的宽高
- vertical-align: middle; 去除图片1像素空白
- 文字溢出省略号
    - overflow: hidden;
    - white-space: nowrap;
    - text-overflow: ellipsis;

## CSS图片下面产生间隙的6种解决方案

- 将图片转换为块级对像
- 设置图片的垂直对齐方式
- 设置父对象的文字大小为0px
- 改变父对象的属性：如果父对象的宽、高固定，图片大小随父对像而定，那麽可以设置：
overflow:hidden;
- 设置图片的浮动属性
- 取消图片标签和其父对象的最後一个结束标签之间的空格。


## HTML5语义化标签

- header
- nav
- article
- section
- aside
- footer

## 选择器

### 通配选择器
```css
*{
    padding:0;
    margin:0;
}
```

### 元素选择器

```css
h1 {}
div {}
p {}
```

### 伪元素选择器
```css
p::before {}
p::after {}
```
注：伪元素必须要使用`content:''`才会生效。

### 类选择器

```css
.clearfix {}
.title {}
.nav {}
```

### 属性选择器

- `[class]`：含有class属性的标签
- `[属性名^='n']`：以n开头的属性
- `[属性值$='n']`：以n结尾的属性
- `[属性值*='n']`：属性值包含有n的标签
- `[属性值~='n']`：表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表。如：`[class~='icon']`选中的是`class='icon icon-help'`

### 伪类选择器
```css
/* 链接文字 */
a:link {}

/* 链接点击过后的状态 */
a:visited {}

/* 鼠标悬浮的时候 */
a:hover {}

/* 鼠标点击的状态 */
a:active {}
```

### 结构为类选择器
```css
/* 第一个为div的孩子 */
div:first-child {}

/* 最后一个为div的孩子 */
div:last-child {}

/* 第n个为div的孩子 */
div:nth-child(n) {}

/* 第n个为div的孩子 */
div:nth-of-type(n) {}
```

## 过度transition

```css
div{
    /* 过渡属性，一般填写all */
    transition-property: width|all;
    /* 过渡时间 取值：s|ms*/
    transition-duration: 1s|300ms;
    /* 过渡延迟 */
    transition-delay: 1s|300ms;
    /* 过渡曲线 */
    transition-timing-function: ease;

    /* 通用写法 transition: 属性 时间 曲线 延迟 */
    transition: all 1s ease 300ms;
    /* 通用多个属性,多个属性使用逗号分隔 */
    transition: width 2s ease 200ms,height 2s ease 200ms;
}
```

## 变换transform
```css
div {
    /* 多个属性用空格分隔 */
    transform: translateX(100px) translateY(100px) translateZ(100px) translate(100px,200px) scale(0.3) scaleX(0.5) scaleY(0.5) scaleY(0.5) scale3d(0.5,0.5,0.5) rotate(30deg) rotateX(30deg) rotateY(30deg) rotateZ(30deg);
}
```

## 动画
```css
div {
    /* 动画名称 */
    animation-name: move;
    /* 动画时间 */
    animation-duration: 2s;
    /* 动画曲线 */
    animation-timing-function: linear;
    /* 动画延迟 */
    animation-delay: 1s;
    /* 动画播放次数
        默认值为 1，如果想不断重复播放，可使用值：infinite
    */
    animation-iteration-count: infinite;
    /* 动画播放方向
            normal 正方向
            alternate 正方向一次，反方向一次
            reverse 反方向
    */
    animation-direction: alternate;
    /* 动画保持结束
        默认值：backwards
        保持最后状态：forwards
    */
    animation-fill-mode: forwards;

    /* 简写 */
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    animation: move 2s linear 1s infinite alternate backwards;
}

div:hover {
    /* 动画暂停 */
    animation-play-state: paused;
}

/* 动画名称 */
@keyframes move {
    0% {
        transform: translate(0, 0);
    }

    25% {
        transform: translate(800px, 0);
    }

    50% {
        transform: translate(800px, 500px);
    }

    75% {
        transform: translate(0, 500px);
    }

    100% {
        transform: translate(0, 0);
    }
}

```
`animation-timing-function`也可以取值`step(n)`表示分步动画，

## 3D设置
- perspective:500 : 开启3D透视。设置此属性，会开启3D的视觉效果
- transform-style: preserve-3d; 变换样式，让子元素保持立体空间。一般设置在父级元素上

## viewport

```html
<meta name="viewport" content="width=device-width;user-scalable=no;initial-scale=1.0;minimum-scale=1.0;maximum-scale=1.0">
```

## Flex布局

父级常见属性
```css
div {
    display: flex;
    width: 80%;
    height: 800px;
    background-color: pink;
    /* 默认主轴方向 */
    /* flex-direction: row; */
    /* 主轴翻转 */
    /* flex-direction: row-reverse; */
    /* 改变主轴方向 */
    /* flex-direction: column; */
    /* flex-direction: column-reverse; */

    /* 主轴子元素排列位置 */
    /* 默认左侧对齐 */
    /* justify-content: flex-start; */
    /* 右侧对齐 顺序不变 */
    /* justify-content: flex-end; */
    /* 居中对齐 */
    /* justify-content: center; */
    /* 平分剩余空间 */
    /* justify-content: space-around; */
    /* 先两边贴边，再分配剩余的空间 */
    /* justify-content: space-between; */

    /* flex换行:默认为nowrap 不换行，会缩小子每个元素的宽度 */
    flex-wrap: wrap;

    /* 侧轴位置 */
    /* 侧轴居中 */
    /* align-items: center; */
    /* 默认值 开始 */
    /* align-items: flex-start; */
    /* align-items: flex-end; */
    /* 不给盒子高度，会沿着侧轴方向拉伸 */
    /* align-items: stretch; */


    /* 侧轴多行内容位置 */
    align-content: flex-start;
    align-content: flex-end;
    align-content: center;
    align-content: space-around;
    align-content: space-between;
}
```

子级常见属性
```css
/* 
    子项常见属性
        flex 子项目占的份数
        align-self  控制子项自己在侧轴的排列顺序
        order  属性定义子项的排列顺序
*/
```

## 