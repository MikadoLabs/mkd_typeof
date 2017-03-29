var tape = require('tape');
var typename = require('../');

tape('typename 0 gives "number"', function(test){
    test.plan(1);
    test.equal(typename(1), 'number'); 
    test.end();
});
tape('typename "0" gives "string"', function(test){
    test.plan(1);
    test.equal(typename("1"), 'string'); 
    test.end();
});
tape('typename undefined gives "undefined"', function(test){
    test.plan(1);
    test.equal(typename(undefined), 'undefined'); 
    test.end();
});
tape('typename NaN gives "nan"', function(test){
    test.plan(1);
    test.equal(typename(NaN), 'nan'); 
    test.end();
});
tape('typename null gives "null"', function(test){
    test.plan(1);
    test.equal(typename(null), 'null'); 
    test.end();
});
