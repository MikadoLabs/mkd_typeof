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
