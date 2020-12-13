// Защищённые свойства обычно начинаются с префикса _
class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
        if (value < 0) throw new Error("Отрицательное количество воды");
        this._waterAmount = value;
    }
  
    get waterAmount() {
        return this._waterAmount;
    }
  
    constructor(power) {
        this._power = power;
    }

}

// создаём новую кофеварку
let coffeeMachine = new CoffeeMachine(100);

// устанавливаем количество воды
coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды

// Приватные свойства и методы должны начинаться с #
class CoffeeMachine {

    #waterAmount = 0;
  
    get waterAmount() {
        return this.#waterAmount;
    }
  
    set waterAmount(value) {
        if (value < 0) throw new Error("Отрицательный уровень воды");
        this.#waterAmount = value;
    }
}

let coffeeMachine = new CoffeeMachine();

// снаружи  нет доступа к приватным методам класса
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error
coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды
coffeeMachine.waterAmount = 100; // #waterAmount = 100