/**
 * Created by songjj on 2017/3/16.
 */

var async = require('async');
var tasks = [function (callback) {
    console.log('1');
    callback();
}, function (callback) {
    console.log('2');
    callback();
}, function (callback) {
    console.log('3');
    callback();
}, function (callback) {
    console.log('4');
    callback();
}];
var tasks2 = [];
for (var i = 0; i < 5; i++) {
    tasks2[i] = getCodeInfoByPage;
    // tasks2[i] = function (callback) {
    //     getCodeInfoByPage(i);
    //     callback();
    // };
    setTimeout(getCodeInfoByPage, 1000);
}
async.series(tasks2, function (err, results) {
    console.log('end');
});
var index = 0;
function getCodeInfoByPage(callback) {
    console.log('getCodeInfoByPage ' + new Date());
    // callback();
}