function sumAll(...args) { // args — имя массива
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}

function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Юлий Цезарь
  
    // Оставшиеся параметры пойдут в массив
    // titles = ["Консул", "Император"]
    alert( titles[0] ); // Консул
    alert( titles[1] ); // Император
    alert( titles.length ); // 2
}

// Все аргументы функции находятся в псевдомассиве arguments под своими порядковыми номерами.
function showName() {
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );
  
    // Объект arguments можно перебирать
    // for (let arg of arguments) alert(arg);
  }