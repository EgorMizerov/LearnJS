// Создание Даты
let now = Date(); // "Sun Dec 13 2020 00:33:19 GMT+0500 (Екатеринбург, стандартное время)"
let date = new Date("2017-01-26"); // Thu Jan 26 2017 05:00:00 GMT+0500 (Екатеринбург, стандартное время)

// new Date(year, month, date, hours, minutes, seconds, ms)
let Dec31_2019 = new Date(2019, 11, 31, 11, 59, 10); // Tue Dec 31 2020 11:59:10 GMT+0500 (Екатеринбург, стандартное время)

// Методы Date
Dec31_2019.getFullYear();   // 2019 | Получить год
Dec31_2019.getMonth();      // 11   | Получить месяц
Dec31_2019.getDate();       // 31   | Получить дату
Dec31_2019.getHours();      // 11   | Поулчить час
Dec31_2019.getMinutes();    // 59   | Получить минуты
Dec31_2019.getSeconds();    // 10   | Получить секунды
Dec31_2019.getMilliseconds(); // 0  | Получить миллисекунды
Dec31_2019.getDay();        // 2    | Получить день недели

Dec31_2019.setFullYear(2020);   // Установить год
Dec31_2019.setMonth(11);        // Установить месяц
Dec31_2019.setDate(13);         // Установить день
Dec31_2019.setHours(0);         // Установить час
Dec31_2019.setMinutes(52);      // Установить минуты
Dec31_2019.setSeconds(10);      // Установить секунды
Dec31_2019.setMilliseconds(10); // Установить миллисекунды

// Date.now()
now = Date.now(); // Возвращает текущую дату и время

// Date.parse(str)
let Dec13_2020 = Date.parse('2020-12-13T01:02')