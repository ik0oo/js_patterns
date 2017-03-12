/**
 * Created by dkw on 12/03/2017.
 */

var module = (function (sL) {
    'use strict';

    var data = 'some data'; //private variable

    return {
        //∑ public method
        someMethod: function () {
            return sL(data);
        }
    };
})(someLibrary);