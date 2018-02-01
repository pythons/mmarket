/**
 * Created by CHENRC2 on 2017-7-25.
 */
import axios from 'utils/http.js';
import * as api from "./api.js";
import storage from "utils/local_storage_tool.js";
import ss from "utils/session_storage_tool.js";
import * as utils from "utils/utils.js"
import VueCookie from "vue-cookie";

/**
 * 用户登录
 * @param params
 * @returns {*}
 */
export const requestLogin = params => {
  let stamp=new Date().getTime(),domain=utils.getDomain();
  params.username= params.account;
  params.password = utils.aesEncrypt(params.password,stamp);
  params.stamp = stamp;
  return axios.post(api.login, params ).then(res => {
    let { errorCode, result } = res.data;
    //登录成功后设置session和cookie
    if(errorCode === "600000"){
      VueCookie.set("JSESSIONID",result.jsession,{expires: 1, domain: domain});
      VueCookie.set("OAM_ID",result.oamid,{expires: 1, domain: domain});
      VueCookie.set("mideatest_sso_token",result.mipssotoken,{expires: 1, domain: domain});
      let user={
        email:result.email,
        nickName:result.nickName,
        userId: result.userId
      };
      storage.removeItem("project");
      ss.addItem("user",user);
    }
    return res.data;
  });
  // return axios.post(api.login, {
  //   username: params.account,
  //   password: params.password,
  // }).then(res => {
  //   let { code, data } = res.data;
  //   if(code.toString() === "200"){
  //     //设置token
  //     delete params.password;
  //     storage.removeItem("project");
  //     storage.addItem("token",data.token);
  //     storage.addItem("user",params);
  //   }
  //   return res.data;
  // });
};

/**
 * 退出登录
 * @param params
 * @returns {*}
 */
export const requestLogout = () => {
  return axios.post(api.logout).then(res => {
    let { code, data } = res.data;
    if(code.toString() === "200"){
      ss.removeAll();
      storage.removeAll();
    }
    return res.data;
  });
};

/**
 * 用户登录之后进行是否有项目判断
 * @param params
 * @returns {*}
 */
export const checkProject = () => {
    const user = storage.getObject("user");
    const params = {
      account: user.account
    };
    return axios.post(api.checkPorject,params).then(res => {
      let { errorCode, result } = res.data;
      if(errorCode == "200"){
        user["projectId"]=result.projectId;
        storage.addItem("user",user);
      }
      return res.data;
    });
};

/**
 * 获取用户角色
 * @returns {*}
 */
export const getUserRole = (updatelocalstorage, account, projectId) => {
  const user = storage.getObject("user");
  const params = {
    account: account || user.account,
    projectId: projectId || user.projectId
  };
  return axios.post( api.getUserRole,params).then(res=> {
    let { errorCode, result } = res.data;
    if(errorCode == "200"&& updatelocalstorage){
      user["role"]=result.role;
      user["roleFormat"]=utils.roleFormatter(result.role);
      storage.addItem("user", user);
    }
    return res.data;
  });
};
