/**
 * Created by DKichigin on 13.03.2017.
 *
 * simple example
 * .register function as .component or .controller and etc of AngularJS
 * more information - http://devacademy.ru/posts/uglublyaemsya-vo-vnedrenie-zavisimostej-v-angularjs/
 */

var object = {
    /***
     * create some parent object
     */

    dependencies: {
        /***
         * some depenecies for inject
         * this only singletons
         * if function is constructor then it needs to create it with singleton pattern
         */

        $timeout: function (callback, timer) {

            /***
             * simple example with singleton object (all of JS object are singletons)
             */

            return setTimeout(callback, timer);
        }
    },

    register: function (name, fn) {
        /****
         * function for wrap creating objects and for inject dependencies
         */

        var self = this;
        var pattern = /^function\s*[^\(]*\(\s*([^\)]*)\)/m; // patter fot find data between '(' and ')' of function literal
        var annotations = [];

        fn // find injections in function - function ($http, $timeout, $state) => return ['$http', '$timeout', '$state']
            .toString()
            .match(pattern)[1]
            .split(',')
            .forEach(function (match) {
                annotations.push(match.replace(/\s+/, ''));
            });

        fn.apply(null, annotations.map(function (annotation) {
            return self.dependencies[annotation]; // easy realization. If we will have constructors then it needs to change logic
        }))
    }
};


/***
 * how to use
 */

object.register('test', function ($timeout) {
    $timeout(function () {
        console.log('test');
    }, 3000)
}); // write 'test' to console after 3 seconds