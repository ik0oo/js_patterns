/**
 * Created by dkw on 12/03/2017.
 */

function bind (fn, context) {
    var boundedArgs  = [].slice.call(arguments, 2);

    return function () {
        var args = [].slice.call(arguments);
        return fn.apply(context, boundedArgs.concat(args));
    }
}

if (Function.prototype.bind !== 'function') {
    Function.prototype.bind = function (context) {
        var $this = this;
        var boundArgs = [].slice.call(arguments, 1);

        return function () {
            var args = [].slice.call(arguments);
            return $this.apply(context, boundArgs.concat(args));
        }
    }
}

/***
 * use case
 * */

function add (x, y) {
    return x + y;
}

var standardBind = bind(add, null, 2);
console.log(standardBind(3));

var polifilledBind = add.bind(null, 2);
console.log(polifilledBind(3));
