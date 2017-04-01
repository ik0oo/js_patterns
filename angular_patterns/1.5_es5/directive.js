/**
 * Created by dkw on 14/03/2017.
 */

;(function (angular) { // eslint-disable-line no-extra-semi
    'use strict';

    angular
        .module('')
        .directive('', directive);

    function directive () {
        'ngInject';

        return {
            restrict: 'A',
            /***
             * 'A' - only matches attribute name
             * 'E' - only matches element name
             * 'C' - only matches class name
             * 'M' - only matches comment
             * 'AEC' - matches either attribute or element or class name
             */

            template: ``, // or templateUrl

            scope: {
                //some bindings
            },

            transclude: true, // or hide property

            require: {
                ngModel: '^ngModel'
            },

            priority: 0,

            terminal: false,

            replace: false,

            compile (templateElements, templateAttrs) {
                return {
                    pre (scope, element, attr) {},
                    post (scope, element, attr) {}
                }
            },

            link (scope, element, attributes, controller) {},

            controller ($scope, $element, $attrs, $transclude, otherInjectables) {}
        }
    }
})(angular);
