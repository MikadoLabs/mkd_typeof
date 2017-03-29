/*
   Copyright 2017 Mikado labs S.A.S.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var tape = require('tape');
var typename = require('../');

tape('typename 0 gives "number"', function(test){
    test.plan(1);
    test.equal(typename(1), 'number'); 
    test.end();
});
tape('typename new Number(0) gives "number"', function(test){
    test.plan(1);
    test.equal(typename(new Number(0)), 'number'); 
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
tape('typename "0" gives "string"', function(test){
    test.plan(1);
    test.equal(typename("0"), 'string'); 
    test.end();
});
tape('typename new String("0") gives "string"', function(test){
    test.plan(1);
    test.equal(typename(new String("0")), 'string'); 
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
tape('typename new Boolean(false) gives "boolean"', function(test){
    test.plan(1);
    test.equal(typename(new Boolean(false)), 'boolean'); 
    test.end();
});
tape('typename function(){} gives "function"', function(test){
    test.plan(1);
    test.equal(typename(function(){}), 'function'); 
    test.end();
});
tape('typename new Function("return 1;") gives "function"', function(test){
    test.plan(1);
    test.equal(typename(new Function("return 1;")), 'function'); 
    test.end();
});
tape('typename undefined gives "undefined"', function(test){
    test.plan(1);
    test.equal(typename(undefined), 'undefined'); 
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
tape('typename new Error("e") gives "error"', function(test){
    test.plan(1);
    test.equal(typename(new Error("e")), 'error');
    test.end();
});
