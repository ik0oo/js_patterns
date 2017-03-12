/**
 * Created by dkw on 12/03/2017.
 *
 * Карринг (currying) или каррирование – термин функционального программирования,
 * который означает создание новой функции путём фиксирования аргументов существующей.
 *
 * https://learn.javascript.ru/bind#карринг
 */

function multiply (x, y) {
    return x * y;
}

// create carring function
function doubleFn (x) {
    return multiply(2, x);
}
// or
var double = multiply.bind(null, 2);


/***
 * use case
 * */

console.log(multiply(3,2));

//carring functions
console.log(doubleFn(3));
console.log(double(3));

