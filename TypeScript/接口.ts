// ! 在 TypeScript 中，除了 implements 和 extend，还有一些其他关键字用于类和接口之间的关联和继承。

// @ implements：用于类实现接口，确保类满足接口的要求，即实现了接口中定义的结构和行为。
// @ extends：用于类继承另一个类，子类可以继承父类的属性和方法，并且可以扩展或覆盖父类的行为。
// @ readonly：用于定义只读属性，一旦赋值就不能再修改。
// @ abstract：用于定义抽象类和抽象方法，抽象类不能被实例化，只能被子类继承，抽象方法必须在子类中实现。
// @ public/private/protected：用于定义成员的访问修饰符，控制成员的访问权限。
// @ static：用于定义静态属性和方法，静态成员属于类本身而不是类的实例。
// @ super：用于在子类中调用父类的构造函数或方法。
// @ instanceof：用于检查一个对象是否是一个类的实例。
// #这些关键字都是 TypeScript 中用于面向对象编程的重要概念，它们可以帮助你更好地组织和设计代码，提高代码的可读性、可维护性和可扩展性。

// ! 创建接口

// @定义一个接口 Person，描述人的基本信息
interface Person {
    name: string;
    age: number;
    greet: () => void;
}
// # 使用 Person 接口来约束一个人对象
let person: Person = {
    name: "Alice",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};
// # 使用接口来约束一个类
class Student implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// # 调用 greet 方法，打印人的问候语
person.greet();