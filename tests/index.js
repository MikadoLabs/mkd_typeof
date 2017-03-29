var tape = require('tape');
var typename = require('../');

tape('typename undefined gives "undefined"', function(test){
    test.plan(1);
    test.equal(typename(undefined), 'undefined'); 
    test.end();
});
