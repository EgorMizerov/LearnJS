// Промисификация

// Было:
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
  
    document.head.append(script);
}
  
// использование:
// loadScript('path/script.js', (err, script) => {...})

// Стало:
let loadScriptPromise = function(src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if (err) reject(err)
            else resolve(script);
        });
    })
};
  
// использование:
// loadScriptPromise('path/script.js').then(...)