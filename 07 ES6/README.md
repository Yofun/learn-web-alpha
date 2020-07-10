# ES6笔记

## 面向过程和面向对象

### 面向过程
就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用就可以了。

- 优点

    性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就是采用面向过程编程

- 缺点

    没有面向对象易维护，易复用、易扩展


### 面向对象

是把事务分解成为一个个对象，然后由对象之间分工与合作。

- 优点

    易维护、易复用、易扩展，由于面向对象有封装继承和多态的特性，可以设计出低耦合的系统，使系统更加灵活，更加易于维护

- 缺点

    性能比面向过程低

- 特性
    - 封装
    - 继承
    - 多态


## super关键字

- super在子类中表示父亲的实例对象
- super可以调用父类的方法，如`super.父类方法名()`
- `super.父类属性`会返回undefined


## 使用new关键字创建类做的事情

1. 在内存中创建一个新的空对象。
2. 让this指向这个新的对象。
3. 执行构造函数里面的代码，给这个新对象添加属性和方法。
4. 返回这个新对象（所以构造函数里面不需要return）。


## 构造函数的实例成员和静态成员

- 实例成员：在构造函数中通过`this`关键字添加的成员。需要使用构造函数的实例对象来进行访问的。

- 静态成员：使用构造函数本身添加的成员，如`Persion.sex`。只能有构造函数本身来访问。


## 对象的原型、构造函数的原型对象

- 每个构造函数、普通函数和Function都有自己的prototype属性
- 每个构造函数、普通函数和Function的prototype.contructor指向的是构造函数本身
- 每个实例的__proto__指向构造函数的prototype
- Object对象是Function创建的
- Function.proto指向Object.prototype,Object.prototype的proto指向null

## ES5继承

- 利用call()方法修改父构造函数中的this指向子实例对象，可以使子构造函数继承父亲的实例成员。缺点：无法继承prototype的属性和方法

- 为了解决以上问题：
    ```js
    // 子类原型对象设置为父构造函数的实例
    Son.prototype = new Father();
    // 利用construtor再指向原来的构造函数s
    Son.prototype.construtor = Son;
    ```

完整的继承代码如下
```js
function Father(name, age) {
    this.name = name;
    this.age = age;
    this.sing = function () {
        console.log('唱歌~');
    }
}
Father.prototype.money = 1000;
Father.prototype.song = function () {
    console.log('我是爸爸，我会唱歌');
}
function Son(name, age) {
    Father.call(this, name, age);
}
// 子类原型对象设置为父构造函数的实例
Son.prototype = new Father();
// 利用construtor再指向原来的构造函数s
Son.prototype.construtor = Son;
var son = new Son('刘德华', 18);
console.log(son);
console.log(son.sing());
console.log(son.money);
console.log(son.song());
```


## 数组中的遍历方法

- forEach() 方法对数组的每个元素执行一次给定的函数。
    ```js
    var arr = [1,2,3,4,5];
    // forEach(当前值，当前索引，数组)
    arr.forEach(function(value, index, arr) {
    });
    ```

- map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
    ```js
    var arr = [1,2,3,4];
    var newArr = arr.map(function(value, index, arr) {
        return value * 2;
    })
    console.log(newArr); // [2,4,6,8]
    ```

- filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
    ```js
    var arr = [1,2,3,4];
    var newArr = arr.filter(function(value, index, arr) {
        return value > 3;
    })
    console.log(newArr); // [4]
    ```

- reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
    ```js
    // 用法：统计数组中的数字的出现次数，并按照次数的从高到底进行排序
    var ar = [1, 4, 5, 5, 2, 3, 4, 4, 2, 4, 5, 3, 3, 5, 5]
    var arrO = ar.reduce(function (reslut, value) {
        reslut[value] = (reslut[value] || 0) + 1;
        return reslut;
    }, {});
    var arrResult = Object.entries(arrO).sort((a, b) => b[1] - a[1]);
    console.log(arrResult);
    ```

- some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
    ```js
    // 通常用于检测数组中是否包含某一元素
    // 例如：判断数组中是否有 >10 的数
    var arr = [1,2,3,13];
    var flag = arr.some(function(value, index, arr) {
        return value > 10;
    });
    console.log(flag); // true  // 数组中有大于10的数——13，所以返回true
    ```




