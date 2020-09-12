# Promise学习

## 1. 回调函数的分类
```js
// 1. 同步回调函数
const arr = [1,2,3];
arr.forEach(item=>{
    console.log(item);
})
console.log('forEach之后');
// 结果：
// 1
// 2
// 3 
// forEach之后

// 2. 异步回调函数
setTimeout(() => { // 异步回调函数的 宏任务
    console.log('setTimeout');
}, 0);
console.log('setTimeout之后');
// 结果：
// setTimeout之后 
// setTimeout
```

## 2. JS中的错误

### 2.1 错误的类型
- Error：所有错误的父类型
- ReferenceError：引用的变量不存在
- TypeError：数据类型不正确的错误
- RangeError：数据值不在其所允许的范围内
- SyntaxError：语法错误  

        
        
### 2.2 错误处理
- 捕获错误：try...catch...
- 抛出错误：throw error

### 2.3 错误对象
- message属性：错误相关信息
- stack属性：函数调用栈记录信息



**错误处理示例**
```js
// 2. 错误处理

// 捕获错误：try...catch...
try {
    console.log(b);
} catch (error) {
    console.log(error.message);
    console.log(error.stack);
}

// 抛出错误
function error() {
    throw new Error('错误了');
}
try {
    error()
} catch (error) {
    console.log(error.message);
    console.log(error.stack);
}
```


## 3. Promise

Promise 是异步编程的一种解决方案，比传统的解决方案（回调函数和事件）更合理和更强大。

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。

### 3.1 Promise的特点

- 对象的状态不受外界影响。
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果。

### 3.2 Promise的三种状态及改变

状态
1. pedding：一旦Promise创建，就会立即执行，进入pedding状态
2. resolved：表示成功状态
3. rejected：表示失败状态

改变
1. pedding -> resolved
2. pedding -> rejected

### 3.3 Promise缺点

1. 无法取消Promise，一旦新建它就会立即执行，无法中途取消

2. 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。

3. 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。



该看p7