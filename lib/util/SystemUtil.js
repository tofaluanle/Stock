/**
 * 提供一些js所不具备的系统级功能
 *
 * Created by songjj on 2017/3/16.
 */

/**
 * 并不好使，貌似因为js只有一个线程，会导致数据库无法操作
 * @param sleepTime
 */
exports.sleep = function sleep(sleepTime) {
    var dt = 0;
    for (var start = new Date(); dt <= sleepTime; dt = new Date() - start) {
        // console.log(dt);
    }
}

///////////////////模拟重载 start
var map = function (arr, callback, pThis) {
    var len = arr.length;
    var rlt = new Array(len);
    for (var i = 0; i < len; i++) {
        if (i in arr) rlt[i] = callback.call(pThis, arr[i], i, arr);
    }
    return rlt;
}
/**
 * 函数参数重载方法 overload，对函数参数进行模式匹配。默认的dispatcher支持*和...以及?，"*"表示一个任意类型的参数，"..."表示多个任意类型的参数，"?"一般用在",?..."表示0个或任意多个参数
 * @method overload
 * @static
 * @optional {dispatcher} 用来匹配参数负责派发的函数
 * @param {func_maps} 根据匹配接受调用的函数列表
 * @return {function} 已重载化的函数
 */
exports.overload = function (dispatcher, func_maps) {
        if (!(dispatcher instanceof Function)) {
            func_maps = dispatcher;
            dispatcher = function (args) {
                var ret = [];
                return map(args, function (o) {
                    return typeof o
                }).join();
            }
        }

        return function () {
            var key = dispatcher([].slice.apply(arguments));
            for (var i in func_maps) {
                var pattern = new RegExp("^" + i.replace("*", "[^,]*").replace("...", ".*") + "$");
                if (pattern.test(key)) {
                    return func_maps[i].apply(this, arguments);
                }
            }
        }
    };
///////////////////模拟重载 end
