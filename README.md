# JavaScript初级知识点总结

## 1、逻辑运算符短路

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


## 2、写出(1,100)和[1,100]的随机整数

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

## 3、数组的slice()和splice()方法的使用

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

## 4、DOM节点关系

[节点操作](./041DOM节点操作.html)

## 5、JavaScript中的变量提升

[JavaScript中的预解析](./025js预解析-变量提升.html)

## 6、DOM创建元素的三种方式对比

[DOM创建元素的三种方式对比](./046DOM创建元素的三种方式.html)
