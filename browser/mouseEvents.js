/*
События мышки
===================================================================================================================================
mouseover / mouseout – когда мышь наводится на / покидает элемент.
mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
mousemove – при движении мыши.

Комплексные события
===================================================================================================================================
click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
Порядок действий: mousedown => mouseup => click

dbclick - происходит, когда два рааз кликнули на элемент левой кнопкой мыши
Порядок действий: mousedown => mouseup => click => mousedown => mouseup => click => dbclick

contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
Порядок действий: mousedown => contextmenu => mouseup

relatedTarget
===================================================================================================================================
Для события mouseover:
event.target – это элемент, на который курсор перешёл.
event.relatedTarget – это элемент, с которого курсор ушёл (relatedTarget → target).
Для события mouseout наоборот:
event.target – это элемент, с которого курсор ушёл.
event.relatedTarget – это элемент, на который курсор перешёл (target → relatedTarget).
*/

let elem = document.getElementsByName("id");
elem.onclick = (event) => {
    // Поулчение информации о кнопке: which
    event.which;    // Определяет нажатую кнопку мыши. 1 - левая, 2 - средняя, 3 - правая
    // Модификаторы: shift, alt, ctrl и meta
    if (event.ctrlKey && event.altKey && event.metaKey) {
        alert("Вы нажали ctrl + alt + win + click")
    }
}

// предотврощение копирования
elem.oncopy = () => alert("Копирование запрещено!"); return false