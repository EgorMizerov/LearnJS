function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));
  
    document.head.append(script);
}

// Теперь, если мы хотим вызвать функцию из скрипта, нужно делать это в колбэке:
loadScript('/my/script.js', function(error, script) {
    if (error) {
        // обрабатываем ошибку
    } else {
        // скрипт успешно загружен
    }
});