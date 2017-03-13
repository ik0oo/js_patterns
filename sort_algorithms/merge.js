/**
 * Created by DKichigin on 13.03.2017.
 *
 * http://www.stoimen.com/blog/2010/07/02/friday-algorithms-javascript-merge-sort/
 * http://sorting.valemak.com/merge/
 */

var arr = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function mergeSort (array) {
    var len = array.length;
    var middle, left, right;

    if (len < 2) return array;

    middle = parseInt(len / 2);
    left   = array.slice(0, middle);
    right  = array.slice(middle, len);

    return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    return result;
}

console.time('Executions time took');
var mergeResult = mergeSort(arr);
console.timeEnd('Executions time took');

console.log(mergeResult);
