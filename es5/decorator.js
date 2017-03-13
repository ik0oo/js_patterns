/**
 * Created by DKichigin on 13.03.2017.
 *
 * —уть паттерна в том, что есть класс с фактической функциональностью (компонент)
 * и опциональными классами-обертками,
 * которые дополн€ют основной функционал (декораторы).
 * ј фишка в том, что декораторов может быть сколько угодно,
 * совмещатьс€ они могут в произвольном пор€дке и (поскольку требуют от компонента только интерфейса)
 * Ч могут работать с разными компонентами.
 *
 * https://habrahabr.ru/post/132472/
 */

var Ball = (function () {
    'use strict';

    function Ball (params) {
        this.radius = params.radius;
        this.color = params.color;
    }

    Ball.prototype = {
        constructor: Ball,
        INCREMENTATION_STEP: 5,
        draw: function () {
            console.log('ball drawn with radius: ' + this.radius + ' and color: ' + this.color);
        },
        inc: function () {
            this.radius += this.INCREMENTATION_STEP;
        }
    };

    return Ball;
})();

/***
 * decorator type 1
 * in this case we need to duplicate all methods
 *  */
var StrippedBall = (function () {
    'use strict';

    function StrippedBall (ball) {
        this.ball = ball;
    }

    StrippedBall.prototype = {
        constructor: StrippedBall,
        draw: function () {
            this.ball.draw();
            console.log('and with stripes')
        },
        inc: function () {
            return this.ball.inc();
        }
    };

    return StrippedBall;
})();

//use case
var strippedBall = new StrippedBall(
    new Ball({
        radius: 10,
        color: 'red'
    })
);
strippedBall.draw();

/***
 * decorator type 2
 * lite method without duplicate all methods
 * */
function MakeStrippedBall (ball) {
    var method = 'draw';
    var parentMethod = ball[method];

    ball[method] = function () {
        //decorated method
        parentMethod.apply(this, arguments);
        console.log('and with stripes');
    };

    return ball;
}

// use case
var makeStrippedBall = MakeStrippedBall(
    new Ball({
        radius: 15,
        color: 'blue'
    })
);

makeStrippedBall.draw();
