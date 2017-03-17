/**
 * 获取所有股票的信息的服务
 * Created by songjj on 2017/3/15.
 */
var loader = require('../../lib/util/ModuleLoader.js');
var http = require('http');
var config = loader.load('Config');

http.get('http://web.juhe.cn:8080/finance/stock/shall?key=' + config.JuHeApiKey + '&page=1&type=4', function (req, res) {
    var html = '';
    req.on('data', function (data) {
        html += data;
    });
    req.on('end', function () {
        processResponse(html);
    });
});

function processResponse(data) {
    // console.info(data);
    var obj = JSON.parse(data);
// console.log(obj);
//     console.log(obj.result.data);

    processMeta(obj.result);
    obj.result.data.forEach(processCodeInfo);

    var totalPage = Math.ceil(obj.result.totalCount / 80);
    setTimeout(function () {
        getCodeInfoByPage(2, totalPage);
    }, 1000);
}

function getCodeInfoByPage(page, total) {
    if (page > total) {
        return;
    }
    http.get('http://web.juhe.cn:8080/finance/stock/shall?key=' + config.JuHeApiKey + '&page=' + page + '&type=4', function (req, res) {
        var html = '';
        req.on('data', function (data) {
            html += data;
        });
        req.on('end', function () {
            console.log('page: ' + page + '\n' + html);
            var obj = JSON.parse(html);
            obj.result.data.forEach(processCodeInfo);
        });
    });
    setTimeout(function () {
        getCodeInfoByPage(++page, total);
    }, 1000);
}

function processMeta(result) {
    var MetaBean = loader.load('DB/MetaBean');
    var meta = new MetaBean('totalCount', result.totalCount);
// console.log(meta);
    var metaDao = loader.load('DB/MetaDao');
    metaDao.save(meta);
}

function processCodeInfo(codeInfo, index, array) {
    var CodeInfoBean = loader.load('DB/CodeInfoBean');
    var bean = new CodeInfoBean(codeInfo.symbol, codeInfo.name);
    bean.trade = codeInfo.trade;
    bean.pricechange = codeInfo.pricechange;
    bean.changepercent = codeInfo.changepercent;
    bean.buy = codeInfo.buy;
    bean.sell = codeInfo.sell;
    bean.settlement = codeInfo.settlement;
    bean.open = codeInfo.open;
    bean.high = codeInfo.high;
    bean.low = codeInfo.low;
    bean.volume = codeInfo.volume;
    bean.amount = codeInfo.amount;
    bean.code = codeInfo.code;
    bean.ticktime = codeInfo.ticktime;
    var codeInfoDao = loader.load('DB/CodeInfoDao');
    codeInfoDao.save(bean);
}