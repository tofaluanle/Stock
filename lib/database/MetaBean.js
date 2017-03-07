/**
 * Created by songjj on 2017/3/7.
 */
function MetaBean(key, value) {
    this._key = key;
    this._value = value;
}

MetaBean.prototype.getKey = function () {
    return this._key;
}

MetaBean.prototype.getValue = function () {
    return this._value;
}

MetaBean.prototype.setKey = function (key) {
    this._key = key;
}

MetaBean.prototype.setValue = function (value) {
    this._value = value;
}

module.exports = MetaBean;