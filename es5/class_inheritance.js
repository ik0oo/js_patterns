/**
 * Created by dkw on 12/03/2017.
 */

var Parent = (function () {
    'use strict';

    function Parent (name) {
        this.name = name;

        this.init();
    }

    Parent.prototype = {
        constructor: Parent,
        init: function () {
            this.greeting = 'Hello ' + this.name;
        },
        getName: function () {
            return this.name;
        },
        getGreeting: function () {
            return this.greeting;
        }
    };

    return Parent;
})();

var Child = (function () {
    'use strict';

    function Child (name) {
        // call parent constructor
        Parent.apply(this, arguments);
    }

    //get copy of parent prototype
    Child.prototype = Object.create(Parent.prototype);
    // set new constructor name to prototype
    Child.prototype.constructor = Child;

    //change parent method
    Child.prototype.init = function () {
        this.greeting = 'Hello world';
    };

    return Child
})();

/***
 * use case
 * */

var parent = new Parent('vasia');
console.log('**************** parent');
console.log(parent.getName()); // return vasia
console.log(parent.getGreeting()); // return Hello vasia

var child = new Child('petia');
console.log('**************** child');
console.log(child.getName()); // return petia
console.log(child.getGreeting()); // return Hello world
