/*
Связанный список - это струкутра данных, которая имеет:
value - Хранимое значение
next - ссылку на следующий элемент связанного списка
*/

// Создание связанного списка
let list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// Разделение
let secondList = list.next.next;
list.next.next = null;

// Объединение
list.next.next = secondList;

// Добовление новго элемента
list = {value: "first item", next: list}; // В начало списка
list.next = {value: "second item", next: list.next}; // Второй элемент списка

// Удаление элементов
list.next = list.next.next; // Удаление второго элемента списка