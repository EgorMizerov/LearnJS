// Создаём материнский объект
let animal = {
    eats: true
};

// Создаём конструктор Rabbit
function Rabbit(name) {
    this.name = name;
}

// Устанавливаем прототип для конструктора Rabbit
Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true

// F.prototype по умолчанию, свойство constructor
function Lion() {}

/* прототип по умолчанию
Lion.prototype = { constructor: Lion };
*/

let lion = new Lion();
lion.constructor == Lion ? alert("Прототип Lion") : alert("Другой прототип"); // Прототип Lion
let lion2 = new lion.constructor();