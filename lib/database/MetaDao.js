/**
 * Key-Value对应的数据库存储类
 * Created by songjj on 2017/3/7.
 */
function MetaDao() {
}

var loader = require('../util/ModuleLoader.js');
var SystemUtil = loader.load('System');

MetaDao.prototype.save = SystemUtil.overload({
    'object': save,
    'object,function': saveWait
});

function save(meta) {
    saveWait(meta);
}

function saveWait(meta, callback) {
    var query = 'INSERT INTO stock.s_meta VALUES (\'' + meta.getKey() + '\', \'' + meta.getValue() + '\')';
    var helper = require('../../lib/database/DbOpenHelper.js');
    helper.query(query, function (err, rows, fields) {
        if (err && err.message.indexOf('ER_DUP_ENTRY') >= 0) {
            MetaDao.prototype.update(meta, callback);
        } else if (err) {
            console.error('[ Fail ] ' + meta.getKey() + ' ' + meta.getValue());
            throw err;
        } else {
            console.log('[ S ] ' + meta.getKey() + ' ' + meta.getValue());
            if (callback instanceof Function) {
                callback();
            }
        }
    });
}


MetaDao.prototype.update = function (meta, callback) {
    var query = 'UPDATE stock.s_meta SET value = \'' + meta.getValue() + '\' WHERE s_key = \'' + meta.getKey() + '\'';
    console.log(query);
    var helper = require('../../lib/database/DbOpenHelper.js');
    helper.query(query, function (err, rows, fields) {
        if (err) {
            console.error('[ Fail ] ' + meta.getKey() + ' ' + meta.getValue());
            throw err;
        }
        console.log('[ S ] ' + meta.getKey() + ' ' + meta.getValue());
        if (callback instanceof Function) {
            callback();
        }
    });
}

module.exports = new MetaDao();