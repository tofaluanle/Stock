/**
 *
 *
 * Created by songjj on 2017/3/16.
 */
var loader = require('../lib/util/ModuleLoader.js');
var SystemUtil = loader.load('System');

var Calculate = SystemUtil.overload({
    'function': save1,
    'number,object': save2,
    'number,number,string': function () {
        return arguments[0] * arguments[1] * arguments[2];
    }
});

var MetaBean = loader.load('DB/MetaBean');
console.log(Calculate(function () {
}));
console.log(Calculate(10, new MetaBean('', 12)));
console.log(Calculate(1, 2, '3'));

function save1(i) {
    return 'save1 ' + i;
}

function save2(i) {
    return 'save2 ' + i;
}