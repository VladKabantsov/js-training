function log(data) {
    console.log(data);
}

function debounce(fn, period) {
    let date;
    return function() {
        if (!date || (Number(new Date()) - Number(date) > period)) {
            date = new Date();
            fn.apply(this, arguments);
        }
    }
}


let f = debounce(log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
