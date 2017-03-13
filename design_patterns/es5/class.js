/**
 * Created by dkw on 12/03/2017.
 */

var SomeClass = (function () {
    'use strict';

    function SomeClass (name) {
        this.name = name;
    }

    SomeClass.prototype = {
        constructor: SomeClass,
        getName: function () {
            return this.name;
        },
        otherPublicMethod: function () {
            return _somePrivateMethod(this.name);
        }
    };

    function _somePrivateMethod () {

    }

    SomeClass.someStaticMethod = function () {};

    return SomeClass;
})();


/***
 * use case
 * */

//initalization
var someClass = new SomeClass('petia');

//use method
someClass.getName();

//use static method
SomeClass.someStaticMethod();
