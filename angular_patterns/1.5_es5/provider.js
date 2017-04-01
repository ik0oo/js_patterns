/**
 * Created by dkw on 14/03/2017.
 */

;(function (angular) { // eslint-disable-line no-extra-semi
    'use strict';

    angular
        .module('')
        .provider('', () => {
            'njInject';

            return {
                property: 'any data',

                $get: function () {
                    return factory();
                }
            }

        });

    function factory () {
        'ngInject';

        var service = {

        };

        return service;
    }

})(angular);
