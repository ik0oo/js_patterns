/**
 * Created by DKichigin on 13.03.2017.
 *
 * ��� �������, ����� ������������ ��� �������� ��������� ����������,
 * ���������� �� ����� ���������� ���� ����������.
 * ������� ������ ������������ ������� ��������������� ��������� ��� ������� ������ ����,
 * ������� �� ����� �� �������� ���������.
 * ���������� � ������, ��� � ����������� API, ������� �� ������� � ����������� ������ �������������.
 *
 * http://largescalejs.ru/the-facade-pattern/
 */

var module = (function () {
    var _private = {
        value: 5,
        get: function () {
            console.log('Current value:' + this.value);
        },
        set: function (value) {
            this.value = value;
        },
        run: function () {
            console.log('Process has executed');
        },
        jump: function () {
            console.log('Process has changed');
        }
    };

    return {
        facade: function (args) {
            _private.set(args.value);
            _private.get();
            if (args.run) {
                _private.run();
            }
        }
    }
})();

module.facade({run: true, value: 10});

