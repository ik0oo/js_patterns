/**
 * Created by DKichigin on 13.03.2017.
 *
 * https://habrahabr.ru/post/132472/
 */

var observer = (function () {
    'use strict';

    function subscribe (channel, fn) {
        if (!observer.channels[channel]) observer.channels[channel] = [];

        observer.channels[channel].push({
            context: this,
            callback: fn
        });
    }

    function unsubscribe (fn, context, channel) {
        var channels = observer.channels;
        if (channel) {
            for (var i in channels) {
                if (i === channel) delete channels[i];
            }
            return;
        }

        for (var i in channels) {
            channels[i] = channels[i].filter(function (cn) {
                return channels[i].callback === fn && channels[i].context === context;
            });
        }
    }

    function publish (channel) {
        if (!observer.channels[channel]) return false;

        var args = [].slice.call(arguments, 1);
        observer.channels[channel].forEach(function (cn) {
            cn.callback.apply(cn.context, args);
        });

        return this;
    }

    return {
        channels: {},
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        publish: publish
    };
})();

/****
 * use case
 * */

var name = 'Petia';
var changeName = function (data) {
    console.log('before update', name);
    name = data;
    console.log('after update', name);
};

observer.subscribe('changeName', changeName);
observer.publish('changeName', 'Vasia');
observer.unsubscribe(changeName, observer);
observer.publish('changeName', 'Gena');
