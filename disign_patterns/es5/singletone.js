/**
 * Created by DKichigin on 13.03.2017.
 *
 * �������� �� ����������� � ������, ������� ����� �������������� � ������� ������ � ������������ �����.
 *
 * �� ���� ����� ������ � JavaScript �������� ���������� ( var obj = {} )
 *
 * http://dmitrypodgorniy.com/blog/all/singlton-na-javascript/
 */

var Singletone = (function () {
    'use strict';

    var _instance;

    function Singletone () {
        if (_instance) return _instance;
        if (this && this.constructor === Singletone) {
            _instance = this;
        } else {
            return new Singletone;
        }
    }

    Singletone.prototype = {
        constructor: Singletone
    };

    return Singletone;
})();

Singletone();
