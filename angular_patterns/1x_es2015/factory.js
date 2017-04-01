module Service {
    'use strict';

    angular
        .module('moduleName')
        .factory('factoryName', ['$http', ($http) => new Factory($http)]);

    class Factory {
        constructor ($http) {

        }

        method () {
            return this.$http.get('someUrl');
        }
    }
}
