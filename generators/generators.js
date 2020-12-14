// Генераторы могут порождать (yield) множество значений одно за другим, по мере необходимости. 
// Генераторы отлично работают с перебираемыми объектами и позволяют легко создавать потоки данных.
// Для объявления генератора используется специальная синтаксическая конструкция: function*, которая называется «функция-генератор».

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

// .next() отдаёт объект со значениями value и done
// value хранит в себе значение отданное yield, а done true, если выполнение функции завершено, иначе false
let one = generator.next();

alert(JSON.stringify(one)); // {value: 1, done: false}

// for .. of
for (let value of generator) {
    alert(value); // 2, а затем 3 если yield
}

// Для генераторов есть особый синтаксис yield*, который позволяет «вкладывать» генераторы один в другой (осуществлять их композицию).
function* generatePasswordCodes() {
    // 0..9
    yield* generateSequence(48, 57);
  
    // A..Z
    yield* generateSequence(65, 90);
  
    // a..z
    yield* generateSequence(97, 122);
}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z