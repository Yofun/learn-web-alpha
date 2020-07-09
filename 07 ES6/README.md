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




