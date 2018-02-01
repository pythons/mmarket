<template>
  <section style="width:100%;">
    <el-dialog
      style="min-width: 900px;overflow: hidden;top: -4%;"
      :visible.sync="isShow"
      size="small"
      :close-on-click-modal="false"
      @close="closeRatings">
      <el-row class="title">
        <el-col style="min-width: 210px;" :span="3" :offset="1">
          <div class="logo">
            <img v-if="productDetail.logo&&productDetail.logo[0]" :src="productDetail.logo[0]"/>
            <img :src="defaultLogo" v-else>
          </div>
        </el-col>
        <el-col :push="1" :lg="{span:14}" :md="{span:10}" >
          <div class="brief">
            <div class="name">{{productDetail.name}}</div>
            <div class="desc">{{productDetail.introduction}}</div>
            <div class="rating">
              <span>
                好评热度:
                  <el-rate @change="rateChange" :colors="['#ffcc00','#ffcc00','#ffcc00']" :max="5" v-model="value1" void-color="#ffcc00"></el-rate>
                <div class="times">下载次数: <span>{{productDetail.downloadTimes}}</span>次</div>
              </span>
            </div>
          </div>
        </el-col>
        <el-col :offset="2"></el-col>
      </el-row>
      <el-row style="padding: 0 20px 20px;">
        <el-col :span="24">
          <el-form :model="ruleForm" :rules="contentRules" @submit.native.prevent ref="ruleForm">
            <el-form-item prop="ratingContent"   >
              <el-input
                type="textarea"
                :rows="10"
                placeholder="请填写您的评价"
                v-model="ruleForm.ratingContent"
                :maxlength="301"
                resize="none">
              </el-input>
              <el-button class="btn" type="primary" @click="submitRating">评论</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-dialog>
  </section>
</template>

<script>
  import * as srv from '../../api/service.js';
  import ss from 'utils/session_storage_tool.js';
  import Star from '../../common/components/star/star.vue';
  export default {
    data() {
      return {
        value1: null,
        ruleForm: {
          ratingContent: ''
        },
        contentRules: {
          ratingContent: [
            {required: true, message: '请填写评价', trigger: 'blur'},
            {
              required: true, validator: (rule, value, callback) => {
              if (value.length > 301) {
                callback(new Error("只能输入不超过300个字符"));
              } else {
                callback();
              }
            }, trigger: 'change'
            }
          ],
        },
        starRate: '',
        isShow: true,
        briefData: this.briefData1,
        productDetail: this.productDetail1,
        lock: true,
        defaultLogo: require('../Home/Mmaster.png'),
      };
    },
    methods: {
      // 给星星赋值的
      rateChange(rate) {
        this.starRate = rate;
      },
      closeRatings() {
        this.$emit('close-rating', false);
        this.value1 = 0;
        this.$refs["ruleForm"].resetFields();
      },
      //提交评论
      submitRating() {
        if (!this.starRate) {
          this.$notify({
            title: '提示',
            message: '星星不要忘记打了噢',
            type: 'warning'
          });
          return;
        }
        this.$refs.ruleForm.validate((valid) => {
          if (valid && this.lock) {
            this.lock = false
            let params = {
              productId: Number(this.$route.params.productId),
              mark: this.starRate * 2,
              markMsg: this.ruleForm.ratingContent,
            }
            srv.requestMarkProduct(params).then(res => {
              if (res.code == 200 && res.msg === 'ok') {
                this.$parent.requestProductRatings();
                this.$refs["ruleForm"].resetFields();
                this.value1 = 0;
              }
              this.lock = true;
              this.$emit('close-rating', false);
            })
          } else { return false; }
        })
      }
    },
    components: {
      'star': Star,
    },
    props: {
      briefData1: {
        type: Object,
        default() {return {}}
      },
      productDetail1: {
        type: Object,
        default() {return {}}
      },
    }
  };
</script>

<style lang="less" scoped>
  .title {
    background-color: #fff;
    padding: (230px - 340px / 2) / 2 0;
    .logo {
      width: 210px;
      height: 170px;
      overflow: hidden;
      border: 1px solid #ccc;
      border-radius: 4px;
      img {
        height: 90%;
        display: block;
        margin: 0 auto;
        padding: 10px 0;
      }
    }
    .brief {
      font-size: 14px;
      color: #666;
      .name {
        padding-top: 4px;
        font-size: 24px;
        font-weight: bold;
        color: #000;
        word-wrap: break-word;
      }
      .desc {
        word-break: break-all;
        line-height: 24px;
        padding-top: 20px;
      }
      .rating {
        padding-top: 24px;
        .el-rate {
          display: inline-block;
          vertical-align: middle;
          margin-left: 4px;
          margin-right: 60px;
        }
        span {
          .remark {
            margin-right: 60px;
            cursor: pointer;
            color: #1eb8d4;
          }
          .times {
            padding-top: 20px;
            span {
              color: #ffcc00;
            }
          }
        }
      }
    }
  }
  .btn {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: 32px;
    line-height: 0;
    z-index: 50;
  }
</style>
