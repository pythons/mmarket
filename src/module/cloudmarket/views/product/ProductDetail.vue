<template>
  <div class="wrapper">
    <core-bread-crumb
      style=""
      :isNotCloudMarket="false"   >
    </core-bread-crumb>
    <div class="content-box">
      <el-row class="title-box">
        <el-col style="min-width: 210px;" :lg="{span:3, offset:4}" :md="{span:3, offset:3}" :sm="{span:3, offset:2}" :xs="{span:1, offset:1}">
          <div class="logo">
            <img v-if="productDetail.logo&&productDetail.logo[0]" :src="productDetail.logo[0]"/>
            <img :src="defaultLogo" v-else/>
          </div>
        </el-col>
        <el-col :push="1" :span="12">
          <div class="brief">
            <div class="name">{{productDetail.name}}</div>
            <div class="desc">{{productDetail.introduction}}</div>
            <div class="rating">
              <span>
                好评热度:
                <star v-if="briefData.mark!=-1" :score="briefData.mark/2"></star>
                <star v-else :score="3.5"></star>
                <span class="remark" @click="canIRemark"><i class="mf mf-pinglun"></i>点评</span>
                <span class="times">下载次数: <span>{{productDetail.downloadTimes}}</span>次</span>
              </span>
            </div>
            <div class="download">
              <el-button style="height: 34px;width: 100px;" type="primary" @click="openDownload(productDetail.download)">立即下载</el-button>
              <el-button type="text" @click="openGuide(productDetail.handbook)">查看使用指南</el-button>
            </div>
          </div>
        </el-col>
        <el-col :offset="4"></el-col>
      </el-row>
      <el-row class="tips">
        <!--<el-col :lg="{span:6, offset:4}" :md="{span:6, offset:3}" :sm="{span:6, offset:2}" :xs="{span:8, offset:1}" style="max-width: 272px;" >-->
        <el-col :lg="{span:20, offset:4}" :md="{span:21, offset:3}" :sm="{span:22, offset:2}" :xs="{span:23, offset:1}" style="" >
          <ul class='tips-first-ul'>
            <li class="version-box">
              <span class="tl-color">版本信息:&nbsp;</span>
              <el-tooltip v-for="(item,index) in productDetail.version" :key="index" class="item" effect="light" placement="bottom-start">
                <div style="line-height: 24px;" slot="content">版本号:{{item.seq}}<br>版本详情:{{item.detail}}<br>发布时间:{{item.publishTime}}</div>
                <span class="version">
                  <span>{{item.seq}}</span>
                </span>
              </el-tooltip>
            </li>
            <li class="os"><div class="word-break"><span class="tl-color">操作系统:</span> {{productDetail.supportOs}}</div>
            <li class="os"><div class="word-break"><span class="tl-color">发布者:</span> {{productDetail.developer}}</div>
            </li>
          </ul>
          <ul class="tips-second-ul">
            <li class="promulgator"><span class="tl-color">兼容性:</span><span>&nbsp;&nbsp;{{productDetail.compatibility}}</span></li>
            <li class="compatibility"> <span class="tl-color">最后发布时间: </span><span>&nbsp;{{productDetail.updateTime}} </span>  </li>
          </ul>
        </el-col>
      </el-row>
      <el-row class="evaluate">
        <el-col :lg="{span:16, offset:4}" :md="{span:16, offset:3}" :sm="{span:16, offset:2}" :xs="{span:16, offset:1}">
          <el-tabs style="padding-top: 8px" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="产品介绍" name="first">
              <div class="introduce-box">
                <!--<div class="introduce" id="introduce-box" v-html="descHTML"></div>-->
                <div class="introduce" id="introduce-box"></div>
              </div>
            </el-tab-pane>
            <el-tab-pane :label="'交流评价'+'('+page.total+')'" name="second">
              <!-- 循环这里，这里是遍历评论的条数 -->
              <ratings :ratingsList="ratingsList"></ratings>
              <div class="pagination-box">
                <pagination :currentPage="page.current" :pageSize="page.size" :total="page.total" @size-change="sizeChange" @current-change="currentChange"></pagination>
              </div>
            </el-tab-pane>
            <el-tab-pane label="使用概况" name="third" v-if="thirdTabShow">
              <div class="situation-box" v-for="item in productDetail.useSituation">
                <div class="department">
                  <span class="icon-box">
                    <i class="mf mf-bumen"></i>
                  </span>
                  <ul>
                    <li class="content-title">使用部门:</li>
                    <li class="content-words">{{item.depart}}</li>
                  </ul>
                </div>
                <div class="system">
                  <span class="icon-box">
                    <i class="mf mf-xitong"></i>
                  </span>
                  <ul>
                    <li class="content-title">使用系统:</li>
                    <li class="content-words">{{item.system}}</li>
                  </ul>
                </div>
                <div class="comment">
                  <span class="icon-box">
                    <i class="mf mf-pingjia"></i>
                  </span>
                  <ul>
                    <li class="content-title">使用评价:</li>
                    <li class="content-words">{{item.evaluation}}</li>
                  </ul>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </div>
    <d-rating v-if="isShow" :productDetail1="productDetail" :briefData1="briefData" @close-rating="closeRating"></d-rating>
    <router-view></router-view>
  </div>
</template>

<script>
  // 方法
  import ss from 'utils/session_storage_tool.js';
  import * as srv from '../../api/service.js';

  // 组件
  import CoreBreadCrumb from 'components/core/core_bread_crumb/CoreBreadCrumb.vue';
  import Pagination from '../../common/components/pagination/Pagination.vue';
  import Star from 'components/awesome/star/Star.vue';
  import Ratings from 'components/utils/ratings/Ratings.vue';
  import dialogRating from '../../views/comment/Ratings.vue'

  export default {
    name: 'productDetail',
    mounted() {
      this.requestProductDetail();
      this.requestProductRatings();
      this.requestMark();
    },
    data() {
      return {
        defaultLogo: require('../../common/images/Mmaster.png'),
        activeName: 'first',
        thirdTabShow: false,
        isShow: false,
        productDetail: {},
        briefData: {
        },
        ratingsList: [],
        page:{
          currentPage: 2,
          pageSize: 10,
          total: 10
        },
        projectId: ''
      }
    },
    watch: {
      ratingsList: function (val) {
        this.refreshMark();
      }
    },
    methods: {
      // 实时刷新分数以及星星的评分
      refreshMark() {
        if (!this.ratingsList.length) return;
        let mark = 0;
        for ( var i = 0, list = this.ratingsList; i < list.length; i++) {
          mark += list[i].mark;
        }
        mark /= list.length;
        this.briefData.mark = mark;
      },
      // 使用函数控制产品介绍的样式
      controlStyle(str) {
        var introBox = document.getElementById('introduce-box');
        introBox.innerHTML = str;
        var imgList = introBox.getElementsByTagName('img');
        var h1List = introBox.getElementsByTagName('h1');
        var h2List = introBox.getElementsByTagName('h2');
        // 处理h1
        for(var i = 0; i < h1List.length; i++) {
          h1List[i].style.marginTop = '30px';
          h1List[i].style.marginBottom = '12px';
          h1List[i].style.fontWeight = 'bold';
          h1List[i].style.fontSize = '22px';
          h1List[i].style.color = '#000';
        }
        // 处理h2
        for(var i = 0; i < h2List.length; i++) {
          h2List[i].style.marginTop = '10px';
          h2List[i].style.marginBottom = '10px';
          h2List[i].style.fontWeight = 'bold';
          h2List[i].style.fontSize = '18px';
          h2List[i].style.color = '#000';
        }
        // 处理图片
        var bodyWidth = introBox.clientWidth;
        for(var i = 0; i < imgList.length; i++) {
          if (imgList[i].width > bodyWidth) {
            imgList[i].setAttribute('width', '100%');
          }
        }
      },
      // 请求产品详情的数据
      requestProductDetail(productId2) {
        let productId = this.$route.params.productId || productId2;
        srv.requestProductDetail({"productId": productId}).then(res => {
          if (res.code === 200 && res.msg === 'ok') {
            res.result.logo = res.result.logo.split(',');
            this.productDetail = res.result;
            let condition = this.productDetail.useSituation[0] && this.productDetail.useSituation[0].depart !== '';
            if ( condition ) {this.thirdTabShow=true;}
            srv.requestProductionDesc(res.result.description.slice(23)).then(res => {
              // 这里写js控制样式
              this.controlStyle(res);
            })
          }
        })
      },
      // 请求产品的评分和评价个数
      requestMark(productId2) {
        let productId = this.$route.params.productId || productId2;
        srv.requestProductReview({"productId": productId}).then(res => {
          if (res.code === 200 && res.msg === 'ok') {
            this.briefData = res.result;
          }
        })
      },
      // 请求产品评价的数据
      requestProductRatings(productId,index="1",pageSize="10") {
        let params = {
          "productId": this.$route.params.productId || productId,
          "index": index,
          "pageSize": pageSize
        }
        srv.requestMarkList(params).then(res => {
          if (res.code === 200 && res.msg === 'ok') {
            this.ratingsList = res.result.list;
//            this.ratingsList = this.ratingsList.reverse();
            this.page.total = res.result.total;
          }
        })
      },
      // 关闭评论弹窗之后
      closeRating(val) {
        this.isShow = val;
      },
      // 判断点击评论去哪个页面
      canIRemark() {
        if (String(ss.getObject('user')) != 'null') {
          this.isShow = true;
        } else {
          this.$router.push('/cloudmarket/login');
        }
      },
      // 打开指南页面
      openGuide(where) {
        window.open(where,'_blank');
      },
      // 打开下载页面
      openDownload(where) {
        this.productDetail.downloadTimes++;
        window.open(where,'_blank');
        let productId = this.$route.params.productId;
        srv.requestDownloadCount({"productId": productId}).then(res => {
//          console.log(res);
        })
      },
      handleClick(tab, event) {
//        console.log(tab, event);d
      },
      // 页码大小变
      sizeChange(size) {
        this.page.size = size;
        this.requestProductRatings(true, this.page.currentPage, size);
      },
      // 跳转页
      currentChange(current) {
        this.page.current = current;
        this.requestProductRatings(true, current, this.page.pageSize);
      }
    },
    components: {
      'core-bread-crumb': CoreBreadCrumb,
      'pagination': Pagination,
      'ratings': Ratings,
      'star': Star,
      'd-rating': dialogRating
    }
  }
</script>

<style lang="less" scoped>
  .wrapper {
    width: 100%;
    overflow: hidden;
    background-color: #f1f3f5;
    .crumbs {
      background-color: #fff;
      padding-left: 140px;
      color: #666;
      @media screen and (max-width: 990px) {
        padding-left: 112px;
      }
      @media screen and (max-width: 768px) {
        padding-left: 80px;
      }
      @media screen and (max-width: 758px) {
        padding-left: 60px;
      }
    }
    .content-box {
      padding: 16px;
      .title-box {
        background-color: #fff;
        padding: (230px - 340px / 2) / 2 0;
        padding-left: 16px;
        .logo {
          width: 230px;
          height: 190px;
          overflow: hidden;
          border: 1px solid #ccc;
          border-radius: 4px;
          img {
            height: 90%;
            width: 90%;
            display: block;
            margin: 0 auto;
            padding: 10px 0;
          }
        }
        .brief {
          font-size: 14px;
          color: #666;
          width: 100%;
          .name {
            padding: 0 10px;
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
            span {
              .star {
                display: inline-block;
                margin: 0 12px 0 6px;
                vertical-align: bottom;
                @media screen and (max-width: 800px) {
                  margin: 0 6px 0 3px;
                }
              }
              .remark {
                margin-right: 60px;
                cursor: pointer;
                color: #1eb8d4;
                @media screen and (max-width: 800px) {
                  margin-right: 30px;
                }
                @media screen and (max-width: 700px) {
                  margin-right: 24px;
                }
              }
              .times {
                span {
                  color: #ffcc00;
                }
              }
            }
          }
          .download {
            margin-top: 36px;
          }
        }
      }
      .tips {
        margin-top: 16px;
        padding: 30px 0;
        padding-left: 16px;
        background-color: #fff;
        color: #333;
        line-height: 22px;
        .tips-first-ul {
          display: inline-block;
          max-width: 280px;
          padding-right: 60px;
          margin-right: 60px;
          border-right: 1px solid #e7e7e7;
          @media screen and (max-width: 1200px) {
            padding-right: 40px;
            margin-right: 40px;
          }
          @media screen and (max-width: 1024px) {
            padding-right: 20px;
            margin-right: 20px;
          }
          .word-break {
            display: inline-block;
            word-break: break-all;
          }
        }
        .tips-second-ul {
          display: inline-block;
          vertical-align: top;
        }
        .os {
          /*line-height: 22px;*/
          padding-top: 24px;
        }
        .compatibility {
          /*line-height: 22px;*/
          padding-top: 24px;
        }
        .promulgator {
          /*line-height: 22px;*/
          margin-top: 2px;
        }
        .version-box {
          /*line-height: 22px;*/
          .version {
            display: inline-block;
            box-sizing: border-box;
            padding: 4px 10px;
            border: 1px solid #e6e6e6;
            border-radius: 2px;
            margin-left: -1px;
            height: 20px;
            min-width: 50px;
            line-height: 12px;
            text-align: center;
            &:hover {
              position: relative;
              border-color: #21b8d5;
            }
          }
          .slot-content {
            line-height: 50px !important;
          }
        }
        .tl-color {
          color: #666;
        }
      }
      .evaluate {
        margin-top: 16px;
        background-color: #fff;
        font-size: 14px;
        /* 设置tabs内容的左padding */
        .el-tab-pane {
          padding: 0 16px;
          padding-bottom: 38px;
        }
        .introduce-box {
          display: flex;
          flex-direction: column;
          .introduce {
            font-size: 16px;
            line-height: 24px;
            color: #666;
            word-wrap: break-word;
          }
        }
        .pagination-box {
          overflow: hidden;
          margin-top: 148px;
        }
        .situation-box {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 20px 0;
          border-bottom: 1px dashed #bfbfbf;
          word-break: break-all;
          .department {
            flex: 1;
            display: flex;
            margin-bottom: 4px;
            min-width: 124px;
          }
          .system {
            flex: 1;
            display: flex;
            margin-bottom: 4px;
            min-width: 124px;
          }
          .comment {
            flex: 3;
            display: flex;
            margin-bottom: 4px;
          }
          /* 共享css */
          ul {
            width: 100%;
            display: inline-block;
            vertical-align: top;
          }
          .mf-xitong, .mf-bumen, .mf-pingjia {
            font-size: 20px;
            color: #666;
          }
          .content-title {
            margin-bottom: 14px;
            color: #666;
          }
          .content-words {
            display: flex;
            flex-direction: row;
            -ms-flex-direction: row;
            font-weight: 700;
            color: #333;
          }
        }
      }
    }
    .icon-box {
      display: inline-block;
      padding: 14px;
      margin-right: 14px;
      border-right: 1px solid #e3e3e3;
    }
  }
</style>
