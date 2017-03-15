/**
 * 获取所有股票的信息的服务
 * Created by songjj on 2017/3/15.
 */
var loader = require('../../lib/util/ModuleLoader.js');
var http = require('http');
var config = loader.load('Config');
//get 请求外网
http.get('http://web.juhe.cn:8080/finance/stock/shall?key=' + config.JuHeApiKey + '&page=1', function (req, res) {
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

    obj.result.data.forEach(processCodeInfo);
}

function processCodeInfo(codeInfo, index, array) {
    var CodeInfoBean = loader.load('DBCodeInfoBean');
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
    var codeInfoDao = loader.load('DBCodeInfoDao');
    codeInfoDao.save(bean);
}