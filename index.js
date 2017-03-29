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
(function(){
    'use strict';
    var root = this;
    var previous = root.typename;
    
    var typename = function(data){
        var nativeName = typeof data;

        switch (nativeName){
        case 'object':
            if (data === null)
              return 'null';
            if (data.constructor === Array)
              return 'array';
            if (data.constructor === RegExp)
              return 'regexp';
            return 'object';
        case 'number':
            if (isNaN(data))
                return 'nan';
            if (data === Infinity || data === -Infinity)
                return 'infinity';
            return 'number';
        default:
            return nativeName;
        }
    };

    typename.noConflict = function(){
        root.typename = previous;
        return typename;
    };

    if (typeof exports !== 'undefined'){
        if (typeof module !== 'undefined' && module.exports){
            exports = module.exports = typename;
        }
        exports.typename = typename;
    }else{
        root.typename = typename;
    }

}).call(this);
