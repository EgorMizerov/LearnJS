// Создание коллекции
let set = new Set();

// Методы коллекции
set.add("Egor");            // Записывает новое значение
set.has("Egor");            // Возвращает true, если значение "Egor" существует
set.delete("Egor");         // Удаляет элемент и возвращает true, если он был
set.clear();                // Очищает коллекцию от всех элементов
set.size;                   // Возвращает текущее кол-во элементов

// WeakSet
// ====================================================================

// Создание WeekSet
let weakset = new WeakSet();
weakmap.set(obj) // Элементом в WeakSet может ыбть только объект

/*
В WeakSet пристуствуют тольк следующие значения:
WeakSet.add(value)
WeakSet.delete(key)
WeakSet.has(key)
*/

// ====================================================================