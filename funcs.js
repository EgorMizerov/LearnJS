// Function Decloration
// ====================
function sayHello(name) {
    alert(`Привент, ${name}`);
}

// Function Expression
// ===================
let sayHi = function(name) {
    alert(`Привет, ${name}`);
};

// Function with Callback
// ======================
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
  
function showOk() {
    alert( "Вы согласны." );
}
  
function showCancel() {
    alert( "Вы отменили выполнение." );
}

// Arrow Function
// ==============
let sum = (a, b) => alert(a + b);
let sum2 = (a, b) => {
    res = (+a) + (+b);
    return res;
};
