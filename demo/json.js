/**
 * Created by songjj on 2017/3/16.
 */
var str = "{\"error_code\":0,\"reason\":\"SUCCESSED!\",    \"result\":{\"totalCount\":\"1220\",\"page\":\"1\",\"num\":\"20\",\"data\":[{\"symbol\":\"sh600000\",\"name\":\"浦发银行\",\"trade\":\"16.430\",\"pricechange\":\"0.020\",\"changepercent\":\"0.122\",\"buy\":\"16.430\",\"sell\":\"16.440\",\"settlement\":\"16.410\",\"open\":\"16.380\",\"high\":\"16.450\",\"low\":\"16.370\",\"volume\":93198,\"amount\":152969168,\"code\":\"600000\",\"ticktime\":\"15:00:00\"}]}}";


var obj = JSON.parse(str);
// console.log(obj);
// console.log(obj.result.data);