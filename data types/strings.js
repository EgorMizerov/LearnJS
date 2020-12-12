/* Спецсимволы
\n - перевод строки
\"\' - ковычки
\\ - обратный слеш
\t - табуляция
\uXX - Unicode
*/

let str = "Hello, World!";
str.length;             // 13 | Длина строки
str[0];                 // H  | Доступ к символам
str.indexOf("World");   // 7  | Поиск позиции строки
str.includes("Hello");  // true | Существование строки
str.slice(7, 12);       // World | Срез строкип
str.toUpperCase;        // "HELLO, WORLD!"
str.toLowerCase;        // "hello, world!"
