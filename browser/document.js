let elem = document.getElementById("id");

document.getElementById("id");              // Найти объект по id
document.getElementsByClassName("class");   // Найти объекты по классу
document.getElementsByTagName("tag");       // Найти объекты по тэгу
document.getElementsByName("name");         // Найти объект по имени

document.querySelectorAll('ul > li:last-child');    // Найти элементы удовлетворяющие CSS-селектору
document.querySelector("css");                      // Найти первый элемент удовлетворяющий CSS-селектору

elem.mathces("css"); // Проверяет удовлетворяет ли элемент CSS-селектору, если да, то возвращает true, иначе false

// Свойства
document.body.innerHTML = "Новый body";     // Свойство innerHTML позволяет получить или изменить HTML-содержимое элемента в виде строки.
document.body.outerHTML;                    // Свойство outerHTML позволяет получить или изменить HTML-содержимое элемента.
elem.textContent;                           // Свойство textContent позволяет получить или изменить текст содержимого
elem.hidden;                                // Свойство hidden позволяет получить или изменить HTML свойство hidden
elem.type;                                  // Свооство type позволит получить или изменить HTML свойство type                         
elem.id;                                    // Свооство id позволит получить или изменить HTML свойство id
elem.value;                                 // Свооство value позволит получить или изменить HTML свойство value

// HTML Атрибуты
elem.hasAttribute("name");          // проверяет наличие атрибута.
elem.getAttribute("name");          // получает значение атрибута.
elem.setAttribute("name", "value"); // устанавливает значение атрибута.
elem.removeAttribute("name");       // удаляет атрибут.
elem.attributes;                    // получить все атрибуты.

// Изменение документа
// ===================================================================================

// Создание элемента
document.createElement('tag');      // Создаёт новый элемент с заданным тегом
document.createTextNode("text");    // Создаёт новый текстовый узел с заданным текстом

// Методы вставки элементов
node.apppend(...nodes or strings);       // добавляет узлы или строки в конец node
node.prepend(...nodes or strings);       // вставляет узлы или строки в начало node
node.before(...nodes or strings);        // вставляет узлы или строки до node
node.after(...nodes or strings);         // вставляет узлы или строки после node
node.replaceWith(...nodes or strings);   // заменяет node заданными узлами или строками

// insertAdjacentHTML/Text/Element
elem.insertAdjacentHTML(where, html);   // вставляет HTML
elem.insertAdjacentText(where, text);   // вставляет text
elem.insertAdjacentElement(where, elem);// вставляет элемент
/*
Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку.
Значение должно быть одним из следующих:
"beforebegin" – вставить html непосредственно перед elem
"afterbegin" – вставить html в начало elem
"beforeend" – вставить html в конец elem
"afterend" – вставить html непосредственно после elem
*/

// Удаление узлов
node.remove();

// Клонирование узлов
elem2 = elem.cloneNode(true);   // Вызов elem.cloneNode(true) создаёт «глубокий» клон элемента – со всеми атрибутами и дочерними элементами.
elem2 = elem.cloneNode(false);  // Если мы вызовем elem.cloneNode(false), тогда клон будет без дочерних элементов.