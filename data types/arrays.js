// Создание массива
let arr = new Array();
let arr2 = new Array("Egor", "Tolik", "Denis");
let arr3 = [];
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

// for .. of
for (let fruit of fruits) {
    alert(fruit);
}
