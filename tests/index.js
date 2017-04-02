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
var mkd_typeof = require('../');

tape('mkd_typeof 0 gives "number"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(1), 'number'); 
    test.end();
});
tape('mkd_typeof new Number(0) gives "number"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(new Number(0)), 'number'); 
    test.end();
});
tape('mkd_typeof NaN gives "nan"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(NaN), 'nan'); 
    test.end();
});
tape('mkd_typeof Infinity gives "infinity"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(Infinity), 'infinity'); 
    test.end();
});
tape('mkd_typeof -Infinity gives "infinity"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(-Infinity), 'infinity'); 
    test.end();
});
tape('mkd_typeof "0" gives "string"', function(test){
    test.plan(1);
    test.equal(mkd_typeof("0"), 'string'); 
    test.end();
});
tape('mkd_typeof new String("0") gives "string"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(new String("0")), 'string'); 
    test.end();
});
tape('mkd_typeof false gives "boolean"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(false), 'boolean'); 
    test.end();
});
tape('mkd_typeof true gives "boolean"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(true), 'boolean'); 
    test.end();
});
tape('mkd_typeof new Boolean(false) gives "boolean"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(new Boolean(false)), 'boolean'); 
    test.end();
});
tape('mkd_typeof function(){} gives "function"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(function(){}), 'function'); 
    test.end();
});
tape('mkd_typeof new Function("return 1;") gives "function"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(new Function("return 1;")), 'function'); 
    test.end();
});
tape('mkd_typeof undefined gives "undefined"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(undefined), 'undefined'); 
    test.end();
});
tape('mkd_typeof null gives "null"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(null), 'null'); 
    test.end();
});
tape('mkd_typeof [] gives "array"', function(test){
    test.plan(1);
    test.equal(mkd_typeof([]), 'array'); 
    test.end();
});
tape('mkd_typeof new Array() gives "array"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(new Array()), 'array'); 
    test.end();
});
tape('mkd_typeof new Date() gives "date"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(new Date()), 'date'); 
    test.end();
});
tape('mkd_typeof new Error("e") gives "error"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(new Error("e")), 'error');
    test.end();
});
tape('mkd_typeof /a/ gives "regexp"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(/a/), 'regexp'); 
    test.end();
});
tape('mkd_typeof new RegExp("a") gives "regexp"', function(test){
    test.plan(1);
    test.equal(mkd_typeof(new RegExp("a")), 'regexp'); 
    test.end();
});
/* TODO: if there is Map run Map test. */
/* TODO: if there is WeakMap run WeakMap test. */
/* TODO: if there is Set run Set test. */
/* TODO: if there is WeakSet run WeakSet test. */
