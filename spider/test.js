/**
 * Created by songjj on 2017/3/7.
 */


console.log("hello world")

//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'stock'
});

connection.connect();
//查询
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});
//关闭连接
connection.end();