// Создание объекта
let user = new Object;
user = {
    name: "Egor",
    age: 17,
};

// Добавление свойств
user.isAdmin = true;
user.height = 175;

// Изминение и удаление свойств
user.isAdmin = false;
delete user.height;

// Проверка сушествования
nameIsExists = "name" in user;

// цикл for .. in для копирования объекта
let clone = new Object;

for (let key in user) {
    clone[key] = user[key];
}

// Object.assign
let newUser = {name: "Egor"};
let age = {age: 17};
let height = {height: 175};
Object.assign(newUser, age, height); // newUser = {name: "Egor", age: 17, height: 175}

// Методы объекта
let animal = {
    name: "Lion",
    roar() {
        alert(`Я ${this.name}!`);
    },
    eat() {
        alert(`${this.name} кушает`)
    }
}

// Конструкторы
function User(name = "Egor") {
    if (!new.target) { // Еслии вызов функции происходит без new
        console.log(new.target)
        console.log("Автодобовление new")
        return new User(name);
    }
    this.name = name;
    this.isAdmin = false;
    this.sahyHi = function() {
        alert(`Привет! Меня зовут ${this.name}`)
    };
}

// Symbol.iterator
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                    return {done: false, value: this.current++};
                } else {
                    return {done: true};
                }
            }
        }
    }
};

// Symbol.toPrimitive
let person = {
    name: "Egor",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: ${this.name}}` : this.money;
    }
};

// toString и valueOf
let person2 = {
    name: "Egor",
    money: 1000,

    toString() {
        return `name: "${this.name}"`;
    },

    valueOf() {
        return this.money;
    }
}