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
        default:
            return nativeName;
        }
    };

    typename.noConflict = function(){
        root.typename = previous;
        return typename;
    };

}).call(this);
