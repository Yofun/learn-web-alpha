# JavaScript笔记

## JavaScript组成部分
- ECMAScript
- 文档对象模型 DOM
- 浏览器对象模型 BOM

## 命名规范

- 字母、数字、下划线、$符号
- 不能以数字开头
- 不能和`关键字`和`保留字`重名


## 逻辑运算符短路

&&  如果表达式1为真，则返回表达式2；如果表达式1为假，则返回表达式1
```javascript
console.log(0 && 333 && 444); // 0
console.log(222 && 0 && 444); // 0
console.log(222 && 333 && 444); // 444
```

||  如果表达式1为真，则返回表达式1；如果表达式1为假，则返回表达式2
```javascript
console.log(0 || 2);    // 2
console.log(1 || 2);    // 1
console.log(0 || 0);    // 0
```

扩展
```javascript
var num = 0;
console.log(123 || num++);
console.log(num); // 0
console.log(123 && num++);
console.log(num); // 1
```

## 冒泡排序算法
```js
let arr = [5,4,3,2,1];
for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr.length-1-i;j++){
        if(arr[j] > arr[j+1]){
            let tem = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tem;
        }
    }
}
console.log(arr);  
```

## Math对象

- Math.PI 圆周率
- Math.max(1,2,3) 求最大值
- Math.min(1,2,3) 求最小值
- Math.min() = Infinity
- Math.max() = -Infinity
- Math.abs(-2) = 2 求绝对值
- Math.floor() 向下取整
- Math.ceil()  向上取整
- Math.round() 四舍五入
- Math.random() 取随机数

### 写出(1,100)和[1,100]的随机整数

(1,100)

```javascript
function getRandomInt (min , max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
```

[1,100]
```javascript
function getRandomInt (min , max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```

## 数组对象

- 创建数组
    ```js
    var arr = [1,2];
    var arr = new Array(1,2,3); // 注意：参数为一个时，声明的是数组的长度
    ```

- 检测数组
    ```js
    // 利用instanceof
    var boolean = arr instanceof Array;
    // H5新增方法  IE10+
    var boolean = Array.isArray(arr);
    ```

- 添加元素
    ```js
    // 前面添加元素
    array.unshift(1,2,3);
    // 在后面添加元素
    array.push(1,2,3);
    ```
- 删除元素
    ```js
    // 在前面删除一个元素
    array.shift();
    // 在后面删除一个元素
    array.pop();
    ```
- arr.reverse() 翻转元素

- 数组排序
    ```js
    // 升序
    array.sort(function(a, b){
        return a - b;
    })

    // 降序
    array.sort(function(a, b){
        return b - a;
    });
    ```
- indexOf()、lastIndexOf() 索引查找

- join() 数组转换字符串

- 数组的slice()和splice()方法的使用
    ```javascript
    // 10、slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
    var array9 = [0,1,2,3,4,5,6]
    console.log(array9.slice(0,5)); // 包括第0个，不包括第5个  [0,1,2,3,4]
    console.log(array9);    // 原数组不变 [0,1,2,3,4,5,6]


    // 11、splice(开始索引,删除个数,替换的元素...) 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
    var array10 = [0,1,2,3,4,5,6];
    array10.splice(0,0) // 什么都没做，原数组不变
    console.log(array10); 
    array10.splice(1,0,'pink老师');
    console.log(array10); // 从第1个索引处添加pink老师 [0, "pink老师", 1, 2, 3, 4, 5, 6]
    array10.splice(0,2,'pink老师','张三','李四');
    console.log(array10);   // 从数组第0处索引删除2个元素，并在第0个索引处添加 'pink老师','张三','李四'.所以结果为["pink老师", "张三", "李四", 1, 2, 3, 4, 5, 6]
    ```

## 字符串对象

- indexOf()、lastIndexOf()  索引字符串
- charAt(index) 返回index位置的字符
- charCodeAt(index)  返回index位置字符ASCII值
- concat()  字符串拼接
- substr(startIndex,count)  截取字符串，从startIndex位置开始，截取count个
- slice(startIndex,endIndex) 截取字符串，从startIndex位置开始，到endIndex（不包含）位置
- substring(startIndex,endIndex) 同上slice
- replace(reg, 替换为的字符)
- split(',')  返回一个字符串分割为数组 新数组






