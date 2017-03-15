/**
 * 专门用来加载其他模块的工具类
 *
 * Created by songjj on 2017/3/15.
 */

exports.load = function load(moduleName) {
    var module;
    require('./StringUtil.js');
    if (moduleName.startWith('DB')) {
        module = loadFromDB(moduleName);
    }

    if (module == null) {
        switch (moduleName) {
            case 'Config':
                module = require('../../config/Config.js');
                break;
            default:
                throw new Error('Cannot find module \'' + moduleName + '\'');
        }
    }

    return module;
};

function loadFromDB(moduleName) {
    var module;

    switch (moduleName) {
        case 'DBCodeInfoBean':
            module = require('../database/CodeInfoBean.js');
            break;
        case 'DBCodeInfoDao':
            module = require('../database/CodeInfoDao.js');
            break;
        default:
            throw new Error('Cannot find module \'' + moduleName + '\'');
    }

    return module;
};