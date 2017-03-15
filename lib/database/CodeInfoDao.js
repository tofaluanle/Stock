/**
 * 股票信息对应的数据库存储类
 * Created by songjj on 2017/3/15.
 */
function CodeInfoDao() {
}

CodeInfoDao.prototype.save = function (codeInfo) {
    var query = 'INSERT INTO stock.s_code_info VALUES (\''
        + codeInfo.symbol + '\', \''
        + codeInfo.name + '\', '
        + codeInfo.trade + ', '
        + codeInfo.pricechange + ', '
        + codeInfo.changepercent + ', '
        + codeInfo.buy + ', '
        + codeInfo.sell + ', '
        + codeInfo.settlement + ', '
        + codeInfo.open + ', '
        + codeInfo.high + ', '
        + codeInfo.low + ', '
        + codeInfo.volume + ', '
        + codeInfo.amount + ', \''
        + codeInfo.code + '\', \''
        + codeInfo.ticktime + '\')';
    var helper = require('../../lib/database/DbOpenHelper.js');
    helper.query(query, function (err, rows, fields) {
        if (err && err.message.indexOf('ER_DUP_ENTRY') >= 0) {
            CodeInfoDao.prototype.update(codeInfo);
        } else if (err) {
            throw err;
        } else {
            console.log(rows);
        }
    });
}

CodeInfoDao.prototype.update = function (codeInfo) {
    var query = 'UPDATE stock.s_code_info SET '
        + 'name = \'' + codeInfo.name
        + '\', trade = ' + codeInfo.trade
        + ', pricechange = ' + codeInfo.pricechange
        + ', changepercent = ' + codeInfo.changepercent
        + ', buy = ' + codeInfo.buy
        + ', sell = ' + codeInfo.sell
        + ', settlement = ' + codeInfo.settlement
        + ', open = ' + codeInfo.open
        + ', high = ' + codeInfo.high
        + ', low = ' + codeInfo.low
        + ', volume = ' + codeInfo.volume
        + ', amount = ' + codeInfo.amount
        + ', code = \'' + codeInfo.code
        + '\', ticktime = \'' + codeInfo.ticktime + '\''
        + ' WHERE symbol = \'' + codeInfo.symbol + '\'';
    var helper = require('../../lib/database/DbOpenHelper.js');
    helper.query(query, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        console.log(rows);
    });
}

module.exports = new CodeInfoDao();