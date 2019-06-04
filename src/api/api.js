const BASE_URL = ''
export default {
    "login": BASE_URL+'/main/login', //登录验证
    "menu": BASE_URL + '/main/index',//
    // 用户管理
    "getUserList": BASE_URL + '/user/getUserList',//
    "userAdd": BASE_URL + '/user/userAdd',//
    "queryUserById": BASE_URL + '/user/queryUserById',//
    "userDelete": BASE_URL + '/user/delete',//
    "userUpdate": BASE_URL + '/user/userUpdate',//
    "userGroupList": BASE_URL + '/user/userGroupList',//
    "getCityList": BASE_URL + '/main/getCityList',//
    // 设备管理
    "getDevice": BASE_URL + '/deviceController/getDevice',//
    "addDevice": BASE_URL + '/deviceController/addDevice',//
    "deleteDevice": BASE_URL + '/deviceController/deleteDevice',//
    "editDevice": BASE_URL + '/deviceController/editDevice',//
    // 平台信息
    "getConfigInfo": BASE_URL + '/config/getConfigInfo',// 
    "updateConfig": BASE_URL + '/config/updateConfig',//
    "": BASE_URL + '',//
    // 厕位配置
    "toiletConfig": BASE_URL + '/deviceController/toiletConfig',//
    "getUnBindDevice": BASE_URL + '/deviceController/getUnBindDevice',// 
    "getDeviceByToiletId": BASE_URL + '/deviceController/getDeviceByToiletId',//
    "bindDevice": BASE_URL + '/deviceController/bindDevice',//
    "unBindDevice": BASE_URL + '/deviceController/unBindDevice',//
    "getToiletIds": BASE_URL + '/deviceController/getToiletIds',//
    // 数据汇总
    "getTodayAmount": BASE_URL + '/toiletController/getTodayAmount',//
    "getRecentAmount": BASE_URL + '/toiletController/getRecentAmount',//
    "getDeviceCountByToiletType": BASE_URL + '/deviceController/getDeviceCountByToiletType',//
    "": BASE_URL + '',//
    "": BASE_URL + '',//
    "": BASE_URL + '',//
}