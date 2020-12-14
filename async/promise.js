// Синтаксис создания Promise:
let promise1 = new Promise(function(resolve, reject) { // {state: "pending", result: undefined}
    // эта функция выполнится автоматически, при вызове new Promise
    // функция-исполнитель (executor)

    // через 10 секунду сигнализировать, что задача выполнена с результатом "done"
    setTimeout(() => resolve("done"), 10000); // {state: "fullfilled", result: "done"}
});

let promise2 = new Promise(function(resolve, reject) { // {state: "pending", result: undefined}
    // спустя 10 секунду будет сообщено, что задача выполнена с ошибкой
    setTimeout(() => reject(new Error("Whoops!")), 10000); // {state: "rejected", result: error}
});

// =======================================================================================================================================
// Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:
// resolve(value) — если работа завершилась успешно, с результатом value.
// reject(error) — если произошла ошибка, error – объект ошибки.

// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
// 1. state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно»)
// при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
// 2. result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).
// =======================================================================================================================================

// ========================================
// Функции-потребители могут быть зарегистрированы (подписаны) с помощью методов .then, .catch и .finally.

promise.then(
    function(result) { /* обработает успешное выполнение */ },
    function(error) { /* обработает ошибку */ }
);

promise1.then(
    result => alert(result), // выведет "done!" через одну секунду
    error => alert(error) // не будет запущена
);

promise2.catch(alert); // выведет "Error: Whoops!" спустя 10 секунду
promise2.finally(() => alert("Промис завершён")); // Выведет сообщение, после завершения промиса

// =======================================================================================================================================

// Статические методы
// ===============================================================================================

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.all([ // Запуск множества промисов одновременно
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert);

Promise.allSettled(urls.map(url => fetch(url))) // Запуск множества промисов
.then(results => { // хранит в себе массив результатов промисов
    results.forEach((result, num) => {
        if (result.status == "fulfilled") {
            alert(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
            alert(`${urls[num]}: ${result.reason}`);
        }
    });
});

Promise.race([ // ждёт только первый промис, из которого берёт результат (или ошибку)
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1