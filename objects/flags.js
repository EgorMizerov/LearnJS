/*
Флаги свойств:
writable – если true, свойство можно изменить, иначе оно только для чтения.
enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
*/

let user = {
    name: "John",
    surname: "White",
};

// Чтобы изменить флаги, мы можем использовать метод Object.defineProperty
Object.defineProperty(user, "name", {
    value: "Egor"
});

// Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor, null, 2 ) );

// Существует метод Object.defineProperties(obj, descriptors), который позволяет определять множество свойств сразу
Object.defineProperties(user, {
    name: { value: "Egor", writable: false },
    surname: { value: "Mizerov", writable: false },
    
});

Object.preventExtensions(user); // Запрещает добавлять новые свойства в объект.
Object.seal(user);              // Устанавливает configurable: false для всех существующих свойств.
Object.freeze(user);            // Устанавливает configurable: false, writable: false для всех существующих свойств.
Object.isExtensible(user);      // Возвращает false, если добавление свойств запрещено, иначе true.
Object.isSealed(user);          // Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.
Object.isFrozen(user);          // Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.