let username = {name: "Egor"};
let userage = {age: 17};
let userheight = {height: 175.5};

// Object.assign
let user = new Object();
Object.assign(user, username, userage, userheight); // Объединяет username, userage и userheight с user

// Object.keys/values/entries
let userKeys = Object.keys(user);       // Возвращает ключи объекта user ["username", "userage", "userheight"]
let userValues = Object.values(user);   // Возвращает значения объекта user ["Egor", 17, 175.5]
let userKeysAndValues = Object.entries(user); // Возвращает пару ключ и значение объекта user [["username", "Egor"], ["userage", 17], ["userheight", 175.5]]

// Object.fromEntries
let newuser = Object.fromEntries(userKeysAndValues); // Возвращает объект из массива ключ/значение