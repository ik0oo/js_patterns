/**
 * Created by dkw on 12/03/2017.
 */

var chain = {
    value: 0,
    up: function () {
        this.value++;
        return this;
    }
};

/***
 * use case
 * */

chain
    .up()
    .up()
    .up();

console.log(chain.value); // return 3
