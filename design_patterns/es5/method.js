/**
 * Created by dkw on 12/03/2017.
 */

if (typeof Function.prototype.method !== 'function') {
    Function.prototype.method = function (name, fn) {
        this.prototype[name] = fn;
        return this;
    };
}

/***
 * use case
 * */

var SomeClass = function (name) {
    this.name = name;
};
SomeClass
    .method('getName', function () {return this.name})
    .method('setName', function (name) {this.name = name;});


var someClass = new SomeClass('vasia');
console.log(someClass.getName()); // return vasia

someClass.setName('petia');
console.log(someClass.getName()); // return petia
