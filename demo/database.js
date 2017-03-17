/**
 * Created by songjj on 2017/3/16.
 */
var loader = require('../lib/util/ModuleLoader.js');

var CodeInfoBean = loader.load('DB/CodeInfoBean');
var codeInfo = new CodeInfoBean('symbol', 'test3');
codeInfo.trade = 1.2;
codeInfo.pricechange = 1.3;
codeInfo.changepercent = 1.4;
codeInfo.buy = 1.5;
codeInfo.sell = 1.6;
codeInfo.settlement = 1.7;
codeInfo.open = 1.8;
codeInfo.high = -0.1;
codeInfo.low = -0.2;
codeInfo.volume = 3;
codeInfo.amount = 4;
codeInfo.code = '123456';
codeInfo.ticktime = '15:33:11';
// console.log(meta);
var codeInfoDao = loader.load('DB/CodeInfoDao');
// codeInfoDao.save(codeInfo);

var MetaBean = loader.load('DB/MetaBean');
var meta = new MetaBean('page4', 3);
// console.log(meta);
var metaDao = loader.load('DB/MetaDao');
// metaDao.save(meta);
metaDao.save(meta, function () {
    console.log("save after");
});

var helper = loader.load('DB/DbOpenHelper');
helper.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err;
    // console.log('The solution is: ', rows[0].solution);
});
