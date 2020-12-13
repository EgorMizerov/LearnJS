// Расширение встроенных классов
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
arr.isEmpty();      // false
arr.splice(0, 0);   // {}
arr.isEmpty();      // true