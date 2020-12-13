function slow(x) {
    // здесь могут быть ресурсоёмкие вычисления
    for (let i = 0; i < 10000000;i++) {
        x++;
    }
    return x;
}
  
function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
        let key = hash(arguments);
        if (cache.has(key)) {    // если кеш содержит такой x,
            return cache.get(key); // читаем из него результат
        }
  
        let result = func.apply(this, arguments); // иначе, вызываем функцию
  
        cache.set(key, result); // и кешируем (запоминаем) результат
        return result;
    };
}

function hash(args) {
    return [].join.call(arguments);
}

slow = cachingDecorator(slow, hash);

slow(5); // Кешируем
slow(5); // Возвращаем кеш
