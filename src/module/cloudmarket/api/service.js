/**
 * Created by wenZerrrrrr on 2017/10/9.
 */
import axios from 'utils/http.js';
import * as api from "./api.js";
import * as utils from "utils/utils.js"
import VueCookie from "vue-cookie";
import storage from "utils/session_storage_tool";

/**
 * 登陆
 * @param params
 * @returns {*}
 */
export const requestLogin = params => {
  let stamp=new Date().getTime(),domain=utils.getDomain();
  params.password = utils.aesEncrypt(params.password,stamp);
  params.stamp = stamp;
  return axios.post(api.login, params ).then(res => {
    let { code, result } = res.data;
    //登录成功后设置session和cookie
    if(code === 200 ){
      VueCookie.set("JSESSIONID",result.jsession,{expires: 1, domain: domain});
      // 到时候下面的cookie要自己封装成一个方法js
      if (VueCookie.get("JSESSIONID")) {
        var d = new Date();
        d.setTime(d.getTime()+(24*60*60*1000));
        var exp = d.toGMTString();
        document.cookie = `JSESSIONID=${result.jsession}; expires=${exp}; path=/`;
        document.cookie = `OAM_ID=${result.oamid}; expires=Thu, 18 Dec 2018 12:00:00 GMT; path=/`;
        document.cookie = `mideatest_sso_token=${result.mipssotoken}; expires=Thu, 18 Dec 2018 12:00:00 GMT; path=/`;
      }
      VueCookie.set("OAM_ID",result.oamid,{expires: 1, domain: domain});
      VueCookie.set("mideatest_sso_token",result.mipssotoken,{expires: 1, domain: domain});
      let user={
        email:result.email,
        nickName:result.nickName,
        userId: result.userId
      };
      storage.addItem("user",user);
    }
    return res.data;
  });
};

/**
 * 产品详情
 * @param params
 * @returns {*}
 */
export const requestProductDetail = params => {
  return axios.post(api.productDetail, params).then(res => res.data);
};

/**
 * 获取评分，下载次数，评价个数
 * @param params
 * @returns {*}
 */
export const requestProductReview = params => {
  return axios.post(api.productReview, params).then(res => res.data);
};

/**
 * 发布或者修改产品的接口
 * @param params
 * @returns {*}
 */
export const requestPublishProduct = params => {
  return axios.post(api.publishProduct, params).then(res => res.data);
};

/**
 * 获取发布的产品列表
 * @param params
 * @returns {*}
 */
export const requestPublishProductList = params => {
  return axios.post(api.publishProductList, params).then(res => res.data);
};

/**
 * 获取产品列表（首页）
 * @param params
 * @returns {*}
 */
export const requestProductList = params => {
  return axios.get(api.productList, params).then(res => res.data);
};

/**
 * 批量删除产品
 * @param params
 * @returns {*}
 */
export const requestDeleteProduct = params => {
  return axios.post(api.deleteProduct, params).then(res => res.data);
};

/**
 * 获取产品的评价列表
 * @param params
 * @returns {*}
 */
export const requestMarkList = params => {
  return axios.post(api.markList, params).then(res => res.data);
};

/**
 * 删除评价
 * @param params
 * @returns {*}
 */
export const requestDeleteMark = params => {
  return axios.post(api.deleteMark, params).then(res => res.data);
};

/**
 * 退出登录
 * @param params
 * @returns {*}
 */
export const requestLogout = params => {
  return axios.get(api.logout, params).then(res => res.data);
};

/**
 * 上传文件
 * @param params
 * @returns {*}
 */
export const requestUpload = params => {
  return axios.post(api.upload, params).then(res => res.data);
};

/**
 * 发表评论
 * @param params
 * @returns {*}
 */
export const requestMarkProduct = params => {
  return axios.post(api.markProduct, params).then(res => res.data);
};

/**
 * 下载次数累加
 * @param params
 * @returns {*}
 */
export const requestDownloadCount = params => {
  return axios.post(api.downloadCount, params).then(res => res.data);
};


/**
 * 产品描述的单独的请求
 * @param api
 * @returns {*}
 * */
export const requestProductionDesc = api => {
  return axios.get(api).then(res => res.data);
}
