let message = "Вывод сообщения"; // Переменная
const pi = 3.14; // Консатнта
let displayPi = `Число Пи равно ${pi}`; // Обратные кавычки

/*
===========
ТИПЫ ДАННЫХ
===========
number - числовой тип. Так же к нему относится Infinity и NaN
BigInt - большое число с онцовкой на n
string - строка
boolean - булевый тип false и true
null - пустота
undefined - неизвестное значение
object - объект
*/

/*
===========================
ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ
===========================
undefined - NaN
null - 0
true / flase - 1 / 0
string - Число
*/

/*
========================
МАЕТМАТИЧЕСКИЕ ОПЕРАТОРЫ
========================
+ - сложение
- - разность
* - умножение
/ - деление
% - остаток
** - степень
++ - инкремент
-- - декремент
*/

alert(message); // Вывод сообщения
let age = prompt("Сколько вам лет?", "18"); // Вывод и ввод
let result = confirm("Вы хотите кушать?"); // Принять вывод

let accessAllowed = (+age >= 18) ? true : false; // Тернарный оператор

// if, else, else if
if (+age < 3) {
    alert("Привет, малыш!");
} else if (+age < 18) {
    alert("Привет!");
} else {
    alert("Здравствуйте");
}

/*
&& - И
|| - ИЛИ
! - НЕ
*/

alert(null ?? "Антон"); // Антон
alert("Ваня" ?? "Антон"); // Ваня

// Циклы while, do while, for
let count = 0;
while (true) {
    if (count == 5) break;
    count++;
    alert(count);
    
}

do {
    if (count == 10) break;
    count++;
    alert(count);
} while (true);

for (let i = 1; i <= 3; i++) {
    alert(i)
}

// switch / case
let x = prompt("Введите цифру от 1 до 3", "1")
switch(x) {
    case '1': alert(1); break;
    case '2': alert(2); break;
    case '3': alert(3); break;
    default: alert(x);
}