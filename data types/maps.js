// Создание коллекции
let set = new Map();

// Методы коллекции
set.set("key", "value");    // Записывает значение "value" по ключу "key"
set.get("key");             // Возвращает значение "value" по ключу "key"
set.has("key");             // Возвращает true, если ключ "key" существует
set.delete("key");          // Удаляет элемент по ключу "key"
set.clear();                // Очищает коллекцию от всех элементов
set.size;                   // Возвращает текущее кол-во элементов

// for .. of
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50],
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
  alert(entry); // огурец,500 (и так далее)
}

// Map из Object
let obj = {
    name: "John",
    age: 30,
};

let map = new Map(Object.entries(obj));