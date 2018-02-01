<template>
  <div class="mask">
    <div class="login-window">
      <div slot="title" class="tl">
        <h3>用户登录</h3>
        <span class="mf mf-close" @click="closeLoginWindow"></span>
      </div>
      <div class="avatar"></div>
      <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
          <el-form-item prop="account" style="height: 30px;">
            <i class="acc-icon mf mf-yonghu"></i>
            <input type="text"  @keydown="enterLogin" class="myaccount" v-model="ruleForm.account" auto-complete="off" placeholder="请输入用户名">
          </el-form-item>
          <el-form-item prop="checkPass"  style="height: 30px;">
            <i class="pwd-icon mf mf-mima"></i>
            <input type="password" @keydown="enterLogin" class="mypassword" ref="pwdValue" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请输入密码">
          </el-form-item>
          <el-form-item v-if="isPinCode" prop="checkCode" style="height: 30px;" >
            <i class="acc-icon mf mf-authenticate"></i>
            <input type="text"  @keydown="enterLogin" class="myaccount mycode" v-model="ruleForm.checkCode" auto-complete="off" placeholder="请输入验证码">
            <img id="code-png" :src="pinCodeUrl" @click="pinCodeClick"/>
          </el-form-item>
          <el-form-item style="width:100%;height: 30px;">
            <el-button type="primary" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import * as srv from '../../api/service.js';
  export default {
    data() {
      return {
        logining: false,
        isPinCode: false, //是否需要验证码
        pinCodeUrl:process.env.url.pin_code_url,
        ruleForm: {
          account: '',
          checkPass: '',
          checkCode: ''
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
          checkCode: [
            { required: true, message: '请输入正确的验证码', trigger: 'blur' },
          ],
        }

      };
    },
    mounted() {
      if (!!window.ActiveXObject || "ActiveXObject" in window) {
        this.capsOff();  // 禁用ie下的大小写提示
      }
    },
    methods: {
      handleSubmit() {
        var _this = this;
        _this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.logining = true;
            var loginParams = { userName: this.ruleForm.account.trim(), password: this.ruleForm.checkPass.trim()};
            if(this.isPinCode){
              loginParams.pinCode = this.ruleForm.checkCode.trim();
            }
            srv.requestLogin(loginParams).then(res => {
              if (res.code === 200 && res.msg === "ok") {
                this.logining = false;
                this.closeLoginWindow();
              }
              else if (res.code === 401) {
                this.$notify({
                  title: '提示',
                  message: '账号或者密码错误',
                  type: 'error'
                });
                this.pinCodeClick();
                this.logining = false;
              }
              else if (res.code === 404) {
                this.isPinCode=res.result.isPinCode;
                this.$notify({
                  title: '提示',
                  message: '请填写正确的验证码',
                  type: 'error'
                });
                this.pinCodeClick();
                this.logining = false;
              }
              else {
                this.isPinCode=res.result.isPinCode;
                this.logining = false;
              }
            },err=>{
              this.logining = false;
            });
          } else {
            return false;
          }
        });
      },
      // 回车登录
      enterLogin(event) {
        var e = event || window.event;
        var keyCode = e.keyCode || e.which;
        if(keyCode == 13) {
          this.handleSubmit();
        }
      },
      /**
       * 验证码点击事件
       */
      pinCodeClick(){
        this.pinCodeUrl = (process.env.url.pin_code_url + `? r = ` + Math.random());
      },
      // 关闭登录窗口的逻辑
      closeLoginWindow() {
        if (window.location.hash.indexOf('productdetail')) {
          this.$router.go(-1);
        }
        else {
          this.$router.push('/home');
        }
      },
      // 禁用IE下的大小写提示
      capsOff() {
        if (document.msCapsLockWarningOff) return;
        if (document.msCapsLockWarningOff == false) {
          document.msCapsLockWarningOff = true;
        } else {
          document.msCapsLockWarningOff = false;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 200;
    background-color: rgba(0, 0, 0, .5);
    overflow: hidden;
    .login-window {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 465px;
      width: 470px;
      padding: 20px 20px 16px;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
      box-sizing: border-box;
      background-color: white;
      .tl{
        overflow: hidden;
        h3{
          float: left;
          font-size: 18px;
          color: #333;
        }
        span{
          float: right;
          font-size: 24px;
          font-weight: normal;
          color: #c2c2c2;
        }
        margin-bottom: 30px;
      }
      .avatar {
        width: 120px;
        height: 120px;
        margin: 0 auto;
        border: 1px solid #e4e4e4;
        border-radius: 50%;
        background: url("../../common/images/cloudlogo.png") no-repeat center center;
        background-size: 58%;
        background-color: #fcfcfc;
      }
      .form {
        margin-top: 30px;
        .el-form-item {
          margin-bottom: 24px;
          padding: 0 20%;
          .el-form-item__content {
            position: relative;
            height: 30px !important;
            line-height: 30px !important;
            .myaccount, .mypassword {
              width: 260px;
              height: 32px;
              line-height: 32px;
              padding: 3px 10px 3px 30px;
              font-size: 12px;
              border: 1px solid #e4e4e4;
              border-radius: 5px;
              box-sizing: border-box;
              background-color: #fcfcfc;
              color: rgba(33, 30, 46, .9);
              outline: none;
              &::-ms-clear, &::-ms-reveal {
                display:none;
              }
              &:focus {
                outline: none;
                box-shadow: 0 0 6px 0px #bbbbbe;
              }
              &::-webkit-input-placeholder { /* WebKit browsers */
                color: rgba(33, 30, 46, 0.4);
                font-size: 12px;
              }
              &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color: rgba(33, 30, 46, 0.4);
                font-size: 12px;
              }
              &::-moz-placeholder { /* Mozilla Firefox 19+ */
                color: rgba(33, 30, 46, 0.4);
                font-size: 12px;
              }
              &:-ms-input-placeholder { /* Internet Explorer 10+ */
                color: rgba(33, 30, 46, 0.4);
                font-size: 12px;
              }
            }
            .mycode {
              width: 68%;
              margin-right: 4%;
            }
            .capslock-reminder {
              position: absolute;
              left: 0;
              top: -86px;
              margin-top: 3px;
              z-index: 50;
              width: 100%;
              height: 26px;
              line-height: 26px;
              border: 1px solid #fff;
              border-radius: 4px;
              padding: 0 3px;
              text-align: left;
              background: #302e46;
              font-size: 12px;
              box-sizing: border-box;
              padding-left: 15px;
              color: rgba(255, 255, 255, .8);
              opacity: 0;
              &.fade-enter-active, &.fade-leave-active {
                transition: opacity 500ms 1400ms ease-out;
              }
              &.fade-enter, &.fade-leave-active {
                opacity: 0;
              }
              &.fade-enter, &.fade-leave {
                opacity: 1;
              }
              .triangle {
                position: absolute;
                left: 28%;
                bottom: -30%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 8px solid #302e46;
              }
              .message-box {
                /*position: absolute;*/
              }
            }
            .code-box {
              box-sizing: border-box;
              height: 30px;
              width: 30%;
              border: 1px solid red;
            }
            #code-png {
              position: absolute;
              width: 26%;
              height: 36px;
            }
            .acc-icon, .pwd-icon {
              position: absolute;
              /*left: 22%;*/
              left: 12px;
              top: 12px;
              /*margin-top: 9px;*/
              z-index: 1;
              content: '';
              font-size: 12px;
              color: #666
            }
            button {
              /*position: absolute;*/
              /*left: 50%;*/
              /*transform: translateX(-50%);*/
              width: 260px;
              height: 32px;
              font-size: 12px;
              border: none;
              border-radius: 5px;
              background: #1eb8d4;
              color: #fff;
              &:active {
                background: linear-gradient(to bottom, #1eb8d4 0%,#67d8ed 100%);
                color: #fff;
                -webkit-tap-highlight-color: transparent;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
              }
            }
          }
        }
      }
    }
  }
  .el-form-item__error {

  }
</style>
