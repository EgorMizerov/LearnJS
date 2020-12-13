// Потеря this
let user = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};
  
setTimeout(user.sayHi, 1000); // Привет, undefined!

// Решение 1: сделать функцию-обёртку
setTimeout(function() {
    user.sayHi(); // Привет, Вася!
}, 1000);

// Решение 2: привязать контекст с помощью bind
let funcUser = user.sayHi.bind(user);
setTimeout(funcUser(), 1000); // Привет, Вася!

// Удобный метод: bindAll
// ======================
/* Если у объекта много методов и мы планируем их активно передавать, то можно привязать контекст для них всех в цикле:

for (let key in user) {
    if (typeof user[key] == 'function') {
        user[key] = user[key].bind(user);
    }
}
*/