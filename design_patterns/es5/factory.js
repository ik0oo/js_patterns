/**
 * Created by DKichigin on 13.03.2017.
 *
 * Фабрика может проводить какую-то первичную инициализацию объектов
 *
 * Например, предположим, у нас есть объекты Daddy, Mammy, и lad,
 * создавая их с помощью фабрики мы можем просто сказать —familyfactory.createLad(); familyfactory.createDaddy(),
 * а уж то, что они оба рыжие и 210см. роста, за нас решит фабрика — эти параметры мы не задаем.
 *
 * https://habrahabr.ru/post/132472/
 */

var Shapes = {
    Circle: function (params) {
        console.log('new ' + params.color + ' circle created with radius ' + params.radius + 'px');
    },
    Square: function (params) {
        console.log('new ' + params.color + ' square created with ' + params.side + 'px on a side');
    },
    Triangle: function (params) {
        console.log('new ' + params.color + ' triangle created with ' + params.side + 'px on a side');
    }
};

// factory
var ShapeFactory = (function () {
    'use strict';

    function ShapeFactory (size, color) {
        this.size = size;
        this.color = color;
    }

    ShapeFactory.prototype = {
        constructor: ShapeFactory,
        makeCircle: function () {
            return new Shapes.Circle({
                radius: this.size / 2,
                color: this.color
            });
        },
        makeSquare: function () {
            return new Shapes.Square({
                side: this.size,
                color: this.color
            });
        },
        makeTriangle: function () {
            return new Shapes.Triangle({
                side: this.size,
                color: this.color
            });
        }
    };

    return ShapeFactory;
})();


/***
 * use case
 * */

var factory = new ShapeFactory(100, 'red');
factory.makeCircle();
factory.makeSquare();
factory.makeTriangle();

