try {
    // код...
} catch (err) {
    // обработка ошибки
    err.name; // Имя ошибки
    err.message; // Сообщение о деталях ошибки
    err.stack; // Имя ошибки: сообщенеи о деталях
} finally {
    // ... выполняем всегда ...
}

// Кастомный Error
class ValidationError extends Error {
    constructor(message) {
    super(message);
    this.name = "ValidationError";
    }
}

// Создать объект ошибки
let error = new Error(message);
let syntaxerror = new SyntaxError(message);
let referenceerror = new ReferenceError(message);

// Отдать ошибку
throw error;
