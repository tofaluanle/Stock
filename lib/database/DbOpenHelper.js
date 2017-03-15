/**
 * 数据库连接的单例类
 * Created by songjj on 2017/3/7.
 */
function DbOpenHelper() {
    var mysql = require('mysql');
    this._connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'stock'
    });
    this._connection.connect();
}

DbOpenHelper.prototype.query = function (query, cb) {
    this._connection.query(query, cb);
}

module.exports = new DbOpenHelper();