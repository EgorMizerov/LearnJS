// Создание класса
class User {
    name = "Аноноим";

    constructor(name) {
        this.name = name;
    }
  
    sayHi() {
        alert(this.name);
    }

    get name() {
        return this.name;
    }
    
    set name(value) {
        if (value.length < 4) {
            alert("Имя слишком короткое.");
            return;
        }
        this.name = value;
    }
}

// Использование:
let user = new User("Иван");
user.sayHi();

// класс - это функция
alert(typeof User); // function

// ...или, если точнее, это метод constructor
alert(User === User.prototype.constructor); // true

// Методы находятся в User.prototype, например:
alert(User.prototype.sayHi); // alert(this.name);

// в прототипе ровно 2 метода
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// Class Expression
let User = class {
    sayHi() {
        alert("Привет");
    }
};

// Named Class Expression
let User = class MyClass {
    sayHi() {
        alert(MyClass); // имя MyClass видно только внутри класса
    }
};

// Оператор instanceof позволяет проверить, к какому классу принадлежит объект, с учётом наследования.
// Оператор вернёт true, если obj принадлежит классу Class или наследующему от него.
user instanceof User; // true
user instanceof Object; // true