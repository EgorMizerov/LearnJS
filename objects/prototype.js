// Создаём главный объект
let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};

let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

// Создаём объект с прототипным наследованием
let rabbit = {
    jumps: true,
    __proto__: animal,
};

let admin = {
    __proto__: user,
    isAdmin: true
};

rabbit.eats; // true

// Операция записи не использует прототип
rabbit.walk = function() {
    alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!

// Значение «this»

rabbit.sleep();
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)

// Цикл for .. in
// Цикл for..in проходит не только по собственным, но и по унаследованным свойствам объекта.
for(let prop in rabbit) alert(prop); // jumps, затем eats

/* 
==================================================================
Свойство __prop__ считается устаревшим и не стоит его использовать
==================================================================
Современные же методы это:
Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.
*/

// Создаём новый объект с проотипом animal
let rabbit = Object.create(animal);
alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit
Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}