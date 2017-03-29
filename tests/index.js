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
tape('typename false gives "boolean"', function(test){
    test.plan(1);
    test.equal(typename(false), 'boolean'); 
    test.end();
});
tape('typename true gives "boolean"', function(test){
    test.plan(1);
    test.equal(typename(true), 'boolean'); 
    test.end();
});
tape('typename function(){} gives "function"', function(test){
    test.plan(1);
    test.equal(typename(function(){}), 'function'); 
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
tape('typename Infinity gives "infinity"', function(test){
    test.plan(1);
    test.equal(typename(Infinity), 'infinity'); 
    test.end();
});
tape('typename -Infinity gives "infinity"', function(test){
    test.plan(1);
    test.equal(typename(-Infinity), 'infinity'); 
    test.end();
});
tape('typename null gives "null"', function(test){
    test.plan(1);
    test.equal(typename(null), 'null'); 
    test.end();
});
tape('typename [] gives "array"', function(test){
    test.plan(1);
    test.equal(typename([]), 'array'); 
    test.end();
});
tape('typename new Array() gives "array"', function(test){
    test.plan(1);
    test.equal(typename(new Array()), 'array'); 
    test.end();
});
tape('typename /a/ gives "regexp"', function(test){
    test.plan(1);
    test.equal(typename(/a/), 'regexp'); 
    test.end();
});
tape('typename new RegExp("a") gives "regexp"', function(test){
    test.plan(1);
    test.equal(typename(new RegExp("a")), 'regexp'); 
    test.end();
});
