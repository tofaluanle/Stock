/**
 * 字符串处理的相关工具类
 *
 * Created by songjj on 2017/3/15.
 */
String.prototype.startWith = function (str) {
    return this.indexOf(str) == 0;
}

String.prototype.endWith = function (str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
}
