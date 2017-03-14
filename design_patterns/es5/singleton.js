/**
 * Created by DKichigin on 13.03.2017.
 *
 * Синглтон по определению — объект, который может присутствовать в системе только в единственном числе.
 *
 * По сути любой объект в JavaScript является синглтоном ( var obj = {} )
 *
 * http://dmitrypodgorniy.com/blog/all/singlton-na-javascript/
 */

var Singleton = (function () {
    'use strict';

    var _instance;

    function Singleton () {
        if (_instance) return _instance;
        if (this instanceof Singleton) { // or this && this.constructor === Singleton
            _instance = this;
        } else {
            return new Singleton;
        }
    }

    Singleton.prototype = {
        constructor: Singleton
    };

    return Singleton;
})();

Singleton();
