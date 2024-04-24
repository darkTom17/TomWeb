// @ 类的创建
1. js方式
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
2 ts方式
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
}
3 ts简写
class Person {
    constructor(public name: string, public age: number) {}
}
  
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

4 构造函数

// 定义一个构造函数
function Person(name, age) {
    this.name = name; // 对象的名称属性
    this.age = age; // 对象的年龄属性
    
    // 定义对象的方法
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
}

// 使用构造函数创建对象实例
var person1 = new Person('Alice', 30);
var person2 = new Person('Bob', 25);

// 调用对象的方法
person1.greet(); // 输出：Hello, my name is Alice and I'm 30 years old.
person2.greet(); // 输出：Hello, my name is Bob and I'm 25 years old.

// @ 基本类型限制：你可以使用基本的 JavaScript 数据类型，例如 number、string、boolean、null、undefined 等。例如：
let age: number = 30;
let name: string = "Alice";
let isAdult: boolean = true;

// @ 数组类型限制：你可以使用数组类型来限制数组中元素的类型。例如：
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// @ 元组类型限制：元组类型允许你指定数组中每个位置的元素类型。例如：
let person: [string, number] = ["Alice", 30];

// @ 枚举类型限制：枚举类型允许你定义一组命名的常量。例如：
// ! 例 1
enum Direction {
    Up,
    Down,
    Left,
    Right
}
let direction: Direction = Direction.Up;
// ! 例2
//# 定义一个枚举类型 ApiResponse，表示 API 响应代码
enum ApiResponse {
    Success = 200,         // 成功响应，关联的数值为 200
    NotFound = 404,        // 未找到资源，关联的数值为 404
    InternalServerError = '500', // 内部服务器错误，关联的字符串为 '500'
}

//# 声明一个变量，类型为 ApiResponse 枚举
let responseCode: ApiResponse;

//# 将响应代码设置为 Success
responseCode = ApiResponse.Success;
console.log("Response code is:", responseCode); // 输出: Response code is: 200

//# 将响应代码设置为 NotFound
responseCode = ApiResponse.NotFound;
console.log("Response code is:", responseCode); // 输出: Response code is: 404

//# 将响应代码设置为 InternalServerError
responseCode = ApiResponse.InternalServerError;
console.log("Response code is:", responseCode); // 输出: Response code is: 500


// @ 对象类型限制：你可以使用对象类型来限制对象的结构和属性类型。例如：
type Person = {
    name: string;
    age: number;
}
let person: Person = { name: "Alice", age: 30 };

// @ 联合类型限制：你可以使用联合类型来指定一个值可以是多种类型之一。例如：
let value: string | number = "hello";
value = 123;

// @ 交叉类型限制：你可以使用交叉类型来组合多个类型为一个类型。例如：
type Dog = {
    bark: () => void;
}
type Bird = {
    fly: () => void;
}
type DogBird = Dog & Bird;
let pet: DogBird = { bark: () => { }, fly: () => { } };

// @ 类型断言 允许开发者告诉编译器某个值的类型，从而绕过类型检查器的检查。
// ! 这三种语法都可以用于类型断言，它们的效果是一样的。通常推荐使用 as 语法进行类型断言，因为尖括号语法可能会与 JSX 的语法产生歧义。
// # 尖括号语法：使用 <Type> 这样的尖括号语法进行类型断言。例如：
// # 这里的 <string> 表示将 someValue 断言为 string 类型，然后通过 .length 属性获取字符串的长度。
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;


// # as 语法：使用 as Type 这样的 as 语法进行类型断言。例如：
// # 这里的 (someValue as string) 表示将 someValue 断言为 string 类型，然后通过 .length 属性获取字符串的长度。
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;


// # 假设你有一个可能为 null 或 undefined 的变量，但你确定在某个上下文中它一定不会为空。你可以使用感叹号断言来告诉 TypeScript 编译器忽略空值检查，而将该值视为非空。
// # 在这里，我们明确知道 someValue 不会为 null，但 TypeScript 会报错
// # 因为它无法确定 someValue 是否为 null
// # 使用感叹号断言告诉 TypeScript 忽略空值检查
let someValue: string | null = "hello";
let strLength: number = someValue.length; // Error: Object is possibly 'null'.
let strLength2: number = someValue!.length; // OK
console.log(strLength2); // 输出字符串的长度

