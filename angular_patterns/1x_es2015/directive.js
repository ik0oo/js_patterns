module DirectiveComponent {
    'use strict';

    anugular
        .module('moduleName')
        .directive('directiveName', directive);

    class controller {
        constructor ($scope) {

        }

        method () {

        }
    }

    function directive () {
        return {
            restrict: 'E',
            replace: true,
            template: ``,
            controllerAs: '$ctrl',
            bindToController: true,
            controller
        }
    }
}