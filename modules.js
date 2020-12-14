// Теория
/*
Модуль – это просто файл. Один скрипт – это один модуль.
Модули могут загружать друг друга и использовать директивы export и import, чтобы обмениваться функциональностью, вызывать функции одного модуля из другого:
export отмечает переменные и функции, которые должны быть доступны вне текущего модуля.
import позволяет импортировать функциональность из других модулей.
*/
// ==============================
// Экспорт
export function sayHi(user) { 
    alert(`Hello, ${user}!`);
}
// Имопрт
import {sayHi} from './sayHi.js';
// ==============================

// ==============================
// Экспорт отдельно от объявления
function sayHi(user) {
    alert(`Hello, ${user}!`);
}
  
function sayBye(user) {
    alert(`Bye, ${user}!`);
}
  
export {sayHi, sayBye}; // список экспортируемых переменных
// ==============================

// ==============================
// Импорт *
import * as say from './name.js';

// Экспортировать «как»
export {sayHi as hi, sayBye as bye};
import * as say from './name.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!

// Импорт «как»
import {sayHi as hi, sayBye as bye} from './name.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!
// ==============================

// ==============================
// Экспорт по умолчанию
export default class User { // просто добавьте "default"
  constructor(name) {
        this.name = name;
    }
}
import User from './user.js'; // не {User}, просто User

new User('John');
// ==============================