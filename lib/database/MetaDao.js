/**
 * Key-Value对应的数据库存储类
 * Created by songjj on 2017/3/7.
 */
function MetaDao() {
}

MetaDao.prototype.save = function (meta) {
    var query = 'INSERT INTO stock.s_meta VALUES (\'' + meta.getKey() + '\', \'' + meta.getValue() + '\')';
    var helper = require('../../lib/database/DbOpenHelper.js');
    helper.query(query, function (err, rows, fields) {
        if (err && err.message.indexOf('ER_DUP_ENTRY') >= 0) {
            MetaDao.prototype.update(meta);
        } else if (err) {
            throw err;
        } else {
            console.log(rows);
        }
    });
}

MetaDao.prototype.update = function (meta) {
    var query = 'UPDATE stock.s_meta SET value = \'' + meta.getValue() + '\' WHERE s_key = \'' + meta.getKey() + '\'';
    console.log(query);
    var helper = require('../../lib/database/DbOpenHelper.js');
    helper.query(query, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        console.log(rows);
    });
}

module.exports = new MetaDao();