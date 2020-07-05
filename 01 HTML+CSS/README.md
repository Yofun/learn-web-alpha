# HTML笔记

## HTML和XHTML的区别

- XHTML 指的是可扩展超文本标记语言
- XHTML 与 HTML 4.01 几乎是相同的
- XHTML 是更严格更纯净的 HTML 版本
- XHTML 是以 XML 应用的方式定义的 HTML
- XHTML 是 2001 年 1 月发布的 W3C 推荐标准
- XHTML 得到所有主流浏览器的支持
- XHTML 元素是以 XML 格式编写的 HTML 元素。XHTML是严格版本的HTML，例如它要求标签必须小写，标签必须被正确关闭，标签顺序必须正确排列，对于属性都必须使用双引号等。

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
- colspab：合并列。一个行占n列

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
- background-origin：背景显示范围
- background-repeat：平铺

## 盒子塌陷解决办法

- 给父元素border-top一个边框
- 可以给父元素指定一个padding-top
- 给父元素添加overflow:hidden

## css选择器优先级（从低到高）

| 名称 | 示例 | 权重 |
| - | - | - |
| 通配符 | * | 0，0，0，0 |
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

