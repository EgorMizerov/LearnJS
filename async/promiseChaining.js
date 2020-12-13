// Цепочка Промисов
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
  
}).then(function(result) { // (**)
  
    alert(result); // 1
    return result * 2;
  
}).then(function(result) { // (***)
  
    alert(result); // 2
    return result * 2;
  
}).then(function(result) {
  
    alert(result); // 4
    return result * 2;
  
});

// Возвращаем промисы
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);
  
}).then(function(result) {
  
    alert(result); // 1
  
    return new Promise((resolve, reject) => { // (*)
        setTimeout(() => resolve(result * 2), 1000);
    });
  
}).then(function(result) { // (**)
  
    alert(result); // 2
  
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
  
}).then(function(result) {
  
    alert(result); // 4
  
});

// =================================================================================================
/*
Если быть более точными, обработчик может возвращать не именно промис, а любой объект,
содержащий метод .then, такие объекты называют «thenable», и этот объект будет обработан как промис.
*/
// =================================================================================================
class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        alert(resolve); // function() { native code }
        // будет успешно выполнено с аргументом this.num*2 через 1 секунду
        setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
}
  
  new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result); // (*)
    })
.then(alert); // показывает 2 через 1000мс