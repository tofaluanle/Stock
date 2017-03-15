/**
 * Created by songjj on 2017/3/15.
 */
function CodeInfoBean(symbol, name) {
    this.symbol = symbol;
    this.name = name;
    this.trade = 0;
    this.pricechange = 0;
    this.changepercent = 0;
    this.buy = 0;
    this.sell = 0;
    this.settlement = 0;
    this.open = 0;
    this.high = 0;
    this.low = 0;
    this.volume = 0;
    this.amount = 0;
    this.code = '000000';
    this.ticktime = '1:2:3';
}

module.exports = CodeInfoBean;