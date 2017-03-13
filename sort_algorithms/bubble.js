/**
 * Created by DKichigin on 13.03.2017.
 *
 * http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/
 * http://sorting.valemak.com/bubble/
 */

var arr = [34, 203, 3, 746, 200, 984, 189, 764, 9];

function bubbleSort (array) {
    var swapped;
    var len = array.length - 1;

    do {
        var next, temp;
        swapped = false;

        for (var current = 0; current < len; current++) {
            next = current + 1;

            if (array[current] > array[next]) {
                temp = array[current];
                array[current] = array[next];
                array[next] = temp;
                swapped = true;
            }
        }

    } while (swapped); // while true. on false it will finish
}

console.time('Executions time took');
bubbleSort(arr);
console.timeEnd('Executions time took');

console.log(arr);
