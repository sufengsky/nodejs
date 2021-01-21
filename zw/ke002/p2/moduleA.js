// moduleB.js
define(function (require) {
    var m = require('moduleB');
    setTimeout(() => console.log(m), 1000);
});