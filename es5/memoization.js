/**
 * Created by dkw on 12/03/2017.
 *
 * Это один из способов оптимизации,
 * применяемый для увеличения скорости выполнения компьютерных программ.
 * Перед вызовом функции проверяется, вызывалась ли функция ранее.
 */

function memoization (memo) {
    var cache = [] || memo;

    return function (x, y) {
        var key = x + '' + y;
        var result;

        if (cache[key]) return cache[key];

        result = x + y;
        cache[key] = result;
        return result;
    };
}


/***
 * use case
 * */

var memo = memoization();

console.log(memo(2,2)); // return 4
console.log(memo(2,2)); // return 4 from cache
