// Создание массива
let arr = new Array();
let arr2 = new Array("Egor", "Tolik", "Denis");
let arr3 = [];
let arr4 = ["Alisa", "Olga", "Yana"];
let fruits = ["Apple", "Orange", "Pineapple"];

// Изминение массива
fruits[2] = "Banana"; // Изменение массива
fruits[3] = "Pineapple"; // Добавление элемента

// Методы Array
fruits.length;              // 4 | Длинна массива
fruits.pop();               // "Pineapple" | Выводит и удаляет последний элемент
fruits.push("Pineapple");   // Добовляет элемент в конец массива
fruits.shift();             // "Apple" | Выводит и удаляет первый элемент массива
fruits.unshift("Apple");    // Добовляет элемент в начала массива
fruits.splice(1, 1);        // Удаляет второй элемент массива
fruits.slice(1, 3);         // Возвращает массив ["Banana", "Pineapple"]
arr2.concat(arr4);          // Соединяет arr2 и arr4 в arr2
arr2.reverse();             // Переворачивает массив
arr2.join(";");             // "Egor;Tolik;Denis" | Объединение массива в строку
arr2.indexOf("Denis");      // 2 | Ищет индекс элемента
arr2.includes("Egor");      // true | Проверяет существует ли "Egor" в arr2
Array.isArray(arr2);           // true | Проверяет на массив
arr2.forEach(alert);        // Запускает функцию alert для каждого элемента arr2

arr2.map(item => item.length);  // 4, 5, 5 | Выполняет действие для каждого элемента arr2
arr2.sort();                    // Сортировка списка. В скобки можно указать свою сортировку

users = [
    {id: 1, name: "Egor"},
    {id: 2, name: "Denis"},
    {id: 3, nmae: "Tolik"},
];

users.find(item => item.id == 2);   // {id: 2, name: "Denis"} | Ищет подходящий элемент
users.filter(item => item.id < 3);  // {id: 1, name: "Egor"}, {id: 2, name: "Denis"}



// for .. of
for (let fruit of fruits) {
    alert(fruit);
}
