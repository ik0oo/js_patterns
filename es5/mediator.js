/**
 * Created by dkw on 13/03/2017.
 *
 * Медиатор выступает в качестве посредника в общении между различными модулями,
 * инкапсулируя их взаимодействие.
 * Кроме того, этот шаблон проектирования,
 * предотвращая прямое взаимодействие различных компонентов системы,
 * способствует ослаблению связей в коде.
 * В нашей системе он также помогает в решении проблем, связанных с зависимостями модулей.
 *
 * http://largescalejs.ru/the-mediator-pattern/
 */

var mediator = (function () {
    'use strict';

    function subscribe (channel, fn) {
        if (!mediator.channels[channel]) mediator.channels[channel] = [];

        mediator.channels[channel].push({
            context: this,
            callback: fn
        });

        return this;
    }

    function publish (channel) {
        if (!mediator.channels[channel]) return false;

        var args = [].slice.call(arguments, 1);
        mediator.channels[channel].forEach(function (cn) {
            cn.callback.apply(cn.context, args);
        });

        return this;
    }

    return {
        channels: {},
        publish: publish,
        subscribe: subscribe,
        installTo: function (obj) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };
})();


/***
 * use case
 * */

//Pub/sub on a centralized mediator
var name = 'Jonny';

mediator.subscribe('changeName', function (arg) {
    console.log(name);
    name = arg;
    console.log(name);
});

mediator.publish('changeName', 'Frank');


//Pub/sub via third party mediator
var obj = {name: 'Sam'};
mediator.installTo(obj);

obj.subscribe('updateName', function (arg) {
    console.log(this.name);
    this.name = arg;
    console.log(this.name);
});

obj.publish('updateName', 'Bobby');
