/* 
События на элементах управления:
===================================================================================================================================
submit – пользователь отправил форму <form>.
focus – пользователь фокусируется на элементе, например нажимает на <input>.

Клавиатурные события
===================================================================================================================================
keydown и keyup – когда пользователь нажимает / отпускает клавишу.

События документа
===================================================================================================================================
DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.

CSS events:
===================================================================================================================================
transitionend – когда CSS-анимация завершена.
*/

// использование атрибутов HTML
// <input value="Нажми меня" onclick="alert('Клик!')" type="button">

// Использование свойства DOM-объекта
// Добавить обработчик событий
let elem = document.getElementsByName("id");
elem.onclick = () => elem.style.backgroundColor = "gray"; // При клике меняет фон элемента на серый

// Несколько оброботчиков событий
elem.addEventListener("event", handler);
elem.addEventListener("event", handler2);

// Удаление обработчиков событий
elem.removeEventListener("event", handler);

// Объект события
elem.onclick = (event) => {
    alert(event.type); // Выводит тип события

    // Коордианат курсора в момент клика относительно окна, для событий мыши
    event.clientX;
    event.clientY;
    event.target;   // Выводит самый глубокий элемент, который вызывает событие
}

// Прекращение всплытия
elem.onclick = (event) => {
    alert("Событие обработано")
    event.stopPropagation();    // Останваливает всплытие
}

elem.closest('selector');   // Возврощает ближайшего предка, соответствующего селектору