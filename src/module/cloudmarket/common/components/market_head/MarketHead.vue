<template>
  <div class="header-wrapper">
    <div class="left">
      <div class="logo" @click="$router.push('/home')">美的云市场</div>
    </div>
    <ul class="right">
      <li class="login" v-if="this.loginWord==='登录'" @click="goToLogin">{{loginWord}}</li>
      <li class="login pointer" v-else>
        <el-dropdown class="user" @command="settingItemClick" menu-align="start">
          <span class="user-name">Hi&nbsp;,&nbsp;&nbsp;{{loginWord}}</span>
          <el-dropdown-menu slot="dropdown" class="user-operation">
            <!-- 这个是小三角形，不想用图片 这个任何样式都选中不了，所以只能行内式了 -->
            <div style="position: absolute;
                        left: 50%;
                        top: -6px;
                        transform: translateX(-8px);
                        width: 0;
                        height: 0;
                        border-left: 8px solid transparent;
                        border-right: 8px solid transparent;
                        border-bottom: 6px solid #2b3c5a;">
            </div>
            <el-dropdown-item v-for="(item, index) in settings" :command="index.toString()">
              {{item.setItem}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <!--<li class="publish" @click="goToPublish"><i class="mf mf-pinglun"></i> 我要发布</li>-->
    </ul>
  </div>
</template>

<script>
  import ss from 'utils/session_storage_tool.js';
  import * as srv from '../../../api/service.js';
  export default {
    created() {
      this.refreshTitle();
    },
    data() {
      return {
        loginWord: '登录',
        settings:[
          {
            setItem:'管理后台',
//            roles:['admin'],
            url:'/module/management.html#/market/product_management'
          },{
            setItem:'退出登录',
//            roles:['*'],
            type: 'method',
            method:'logout'
          }
        ]
      }
    },
    methods: {
      goToLogin() {
        if (window.location.hash.indexOf('/home') != -1) {
          this.$router.push('/home/login');
        } else {
          this.$router.push('/cloudmarket/login');
        }
      },
      // 登录后下拉菜单的逻辑
      settingItemClick(id){
        let item = this.settings[id];
        if(item.type === "method"){
          this[item["method"]]();
        }else{
          let curUrl=window.location.pathname + window.location.hash;
          if(curUrl === item.url){
            this.$router.go(0);
          }else{
            window.location.href = item.url;
          }
        }
      },
      /**
       * 退出登录
       */
      logout() {
        srv.requestLogout().then((res) => {
          if(res.code === 200 && res.msg === 'ok'){
            ss.removeAll();
            this.$router.go(0);
          }else{
            this.$notification.error("退出登录失败，"+res.data);
          }
        });
      },
//      goToPublish() {
//        window.location.href = "/module/management.html#/market/product_launch";
//      }
      refreshTitle() {
        if (String(ss.getObject('user')) != 'null') {
          this.loginWord = ss.getObject('user').nickName;
        }
      }
    },
    watch: {
      "$route": "refreshTitle"
    }
  }
</script>

<style lang="less" scoped>
  @import "~styles/vars.less";
  .header-wrapper {
    position: fixed;
    width: 100%;
    height: 64px;
    box-sizing: border-box;
    z-index: 1;
    padding: 12px 64px;
    min-width: 630px;
    .left {
      margin-top: 10px;
      float: left;
      .logo {
        width: 128px;
        height: 23px;
        line-height: 23px;
        padding-left: 36px;
        letter-spacing: 2px;
        font-size: 16px;
        color: #cadfff;
        margin-top: -4px;
        background: url("/static/images/marketHomeLogo/cloudmarketlogo.png") no-repeat left center;
        background-size: contain;
        cursor: pointer;
      }
    }
    .right {
      margin-top: -1px;
      float: right;
      font-size: 15px;
      font-weight: bold;
      color: #cadfff;
      .login, .publish {
        box-sizing: border-box;
        cursor: pointer;
        float: left;
        padding: 12px 0 16px 16px;
        /*margin-right: 28px;*/
      }
      .publish {
        margin-right: 0;
      }
      .pointer {
        cursor: default;
      }
    }
  }
  .user-operation {
    margin-top: 40px;
  }
  .el-dropdown {
    font-size: 14px;
    color: #cadfff;
    padding-left: 30px;
  }
  .el-dropdown-menu {
    transform: translate(10%, 12px);
    border: none;
    box-shadow: none;
    padding: 6px;
    margin: 0;
    background: #2b3c5a;
    border-radius: 5px;
    .el-dropdown-menu__item {
      text-align: center;
      color: #a5acbe;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .el-dropdown-menu__item:hover {
      color: white;
      background: #34486c;
    }
  }
</style>
                                                                                                                                                                             
