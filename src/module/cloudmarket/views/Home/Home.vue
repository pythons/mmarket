<template>
  <section class="container">
    <!-- 轮播图 -->
    <div class="banner">
      <banner></banner>
    </div>
    <!-- 产品 -->
    <div class="product">

      <!-- 前端框架 -->
      <div class="qianduan">
        <index-title style="text-align: center;" :words="this.titleName1"></index-title>
        <ul>
          <li v-for="(item,index) in qianduanList" :key="item.productId" @mouseenter="isHover=false" @mouseout="isHover=true">
            <a href="javascript:void(0);" @mouseenter="changeLogo($event, index, qianduanLogoList)" @mouseleave="changeLogo($event, index, qianduanLogoList)">
              <i class="icon">
                <img v-if="item.logo[0]" :src="item.logo[0]"/>
                <img :src="defaultLogo" v-else>
              </i>
              <p class="name" ref="myhook">{{item.name}}</p>
              <div class="btn" style="display: none;" @click="$router.push('/cloudmarket/productdetail/'+item.productId)">查看详情</div>
              <star style="margin: 14px 0;" v-if="item.mark!=-1" :score="item.mark/2"></star>
              <star style="margin: 14px 0;" v-else :score="3.5"></star>
              <p class="desc" ref="myhook">{{item.introduction}}</p>
              <canvas class="canvas-hook" :class="'mycanvas'+index" style="position:absolute;top:0px;left:0px;z-index:1;"></canvas>
            </a>
          </li>
        </ul>
      </div>

      <!-- 后端框架 -->
      <div style="background-color: #f8f9f9;" class="qianduan">
        <index-title style="text-align: center;" :words="this.titleName2"></index-title>
        <ul>
          <li v-for="(item,index) in houduanList" :key="item.productId">
            <a href="javascript:void(0);" @mouseenter="changeLogo($event, index, houduanLogoList)" @mouseleave="changeLogo($event, index, houduanLogoList, 'leave')">
              <i class="icon">
                <img v-if="item.logo[0]" :src="item.logo[0]" height="100%" width="100%"/>
                <img :src="defaultLogo" v-else>
              </i>
              <p class="name">{{item.name}}</p>
              <div class="btn" style="display: none;" @click="$router.push('/cloudmarket/productdetail/'+item.productId)">查看详情</div>
              <star style="margin: 14px 0;" v-if="item.mark!=-1" :score="item.mark/2"></star>
              <star style="margin: 14px 0;" v-else :score="3.5"></star>
              <p class="desc" ref="myhook2">{{item.introduction}}</p>
              <canvas class="canvas-hook" :class="'mycanvas'+index" style="position:absolute;top:0px;left:0px;z-index:1;"></canvas>
            </a>
          </li>
        </ul>
      </div>

      <!-- 技术组件 -->
      <div class="qianduan">
        <index-title style="text-align: center;" :words="this.titleName3"></index-title>
        <ul>
          <li v-for="(item,index) in jishuList" :key="item.productId">
            <a href="javascript:void(0);" @mouseenter="changeLogo($event, index, jishuLogoList)" @mouseleave="changeLogo($event, index, jishuLogoList)">
              <i class="icon">
                <img v-if="item.logo[0]" :src="item.logo[0]" height="100%" width="100%"/>
                <img :src="defaultLogo" height="100%" width="100%" v-else>
              </i>
              <p class="name">{{item.name}}</p>
              <div class="btn" style="display: none;" @click="$router.push('/cloudmarket/productdetail/'+item.productId)">查看详情</div>
              <star style="margin: 14px 0;" v-if="item.mark!=-1" :score="item.mark/2"></star>
              <star style="margin: 14px 0;" v-else :score="3.5"></star>
              <p class="desc" ref="myhook">{{item.introduction}}</p>
              <canvas class="canvas-hook" :class="'mycanvas'+index" style="position:absolute;top:0px;left:0px;z-index:1;"></canvas>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import Title from '../../common/components/title/title.vue';
import Star from 'components/awesome/star/Star.vue';
import Banner from '../../common/components/banner/banner.vue';
import '../../common/js/clamp.js';
import * as srv from '../../api/service.js';

export default {
  name: 'home',
  mounted() {
    this.init();
  },
  data() {
    return {
      titleName1: '前端框架',
      titleName2: '后端框架',
      titleName3: '技术框架',
      qianduanList: [],
      qianduanLogoList: [],
      houduanList: [],
      houduanLogoList: [],
      jishuList: [],
      jishuLogoList: [],
      // 精髓
      defaultLogo: require('./Mmaster.png'),
      imgUrl: require('./Mmaster.png'),
    }
  },
  methods: {
    init() {
      this.requestIndexProductList();
    },

    // 初始化clamp插件的函数
    initClamp() {
      for (var i = 0, hookLength = this.$refs.myhook.length; i < hookLength; i++) {
        $clamp(this.$refs.myhook[i], { clamp: 2});
      }
      for (var i = 0, hookLength = this.$refs.myhook2.length; i < hookLength; i++) {
        $clamp(this.$refs.myhook2[i], { clamp: 2});
      }
    },

    // 更换logo图片的函数
    changeLogo(event, index, list) {
//        debugger;
      var target = event.target; // 拿到事件对象
      var DOM = target.getElementsByTagName('img')[0];
      if (event.type === 'mouseleave') {  // 判断事件类型
        if (list[index][0] && list[index][0] !== "") {
          DOM.setAttribute('src', list[index][0]);
        } else {
          this.imgUrl = require('./Mmaster.png');
          DOM.setAttribute('src', this.imgUrl);
        }
      }
      else {
        if (list[index][1] && list[index][1] !== "") {
          DOM.setAttribute('src', list[index][1]);
        } else {
          this.imgUrl = require('./Mblank.png');
          DOM.setAttribute('src', this.imgUrl);
        }
      }
      this.waveMoving(target);
    },

    // 波浪动画的函数
    waveMoving(target) {
      // 这里开始是波浪的效果
      var canvas = target.lastChild;
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      canvas.width = canvas.parentNode.offsetWidth;
      canvas.height = canvas.parentNode.offsetHeight;
      //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout
      window.requestAnimFrame = (function(){
        return window.requestAnimationFrame  ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
      })();
      // 波浪大小
      var boHeight = canvas.height / 10;
      var posHeight = canvas.height / 1.2;
      //初始角度为0
      var step = 0;
      //定义三条不同波浪的颜色
      var lines = ["rgba(255,255,255, 0.2)",
        "rgba(255,255,255, 0.1)",
        "rgba(255,255,255, 0.1)"];
      function loop(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        step++;
        //画3个不同颜色的矩形
        for(var j = lines.length - 1; j >= 0; j--) {
          ctx.fillStyle = lines[j];
          //每个矩形的角度都不同，每个之间相差45度
          var angle = (step+j*50)*Math.PI/180;
          var deltaHeight = Math.sin(angle) * boHeight;
          var deltaHeightRight = Math.cos(angle) * boHeight;
          ctx.beginPath();
          ctx.moveTo(0, posHeight+deltaHeight);
          ctx.bezierCurveTo(canvas.width/2, posHeight+deltaHeight-boHeight, canvas.width / 2, posHeight+deltaHeightRight-boHeight, canvas.width, posHeight+deltaHeightRight);
          ctx.lineTo(canvas.width, canvas.height);
          ctx.lineTo(0, canvas.height);
          ctx.lineTo(0, posHeight+deltaHeight);
          ctx.closePath();
          ctx.fill();
        }
        requestAnimFrame(loop);
      }
      loop();
    },

    // 请求首页的product列表数据
    requestIndexProductList() {
      srv.requestProductList().then(res => {
        if (res.code === 200 && res.msg === "ok") {
          this.classifyData(res.result);
          this.$nextTick(() => {
            this.initClamp();
          })
        }
      })
    },

    // 整理数据
    classifyData(data) {
      if (!data) return;
      for (var i = 0; i < data.length; i++) {
        data[i].logo = data[i].logo.split(',');
        if (data[i].cateId == 1) {
          this.qianduanList.push(data[i]);
          this.qianduanLogoList.push(data[i].logo);
        }
        else if (data[i].cateId == 2) {
          this.houduanList.push(data[i]);
          this.houduanLogoList.push(data[i].logo);
        }
        else if (data[i].cateId == 3) {
          this.jishuList.push(data[i]);
          this.jishuLogoList.push(data[i].logo);
        }
      }
    }
  },
  components: {
    'index-title': Title,
    'star': Star,
    'banner': Banner
  }
}
</script>

<style lang="less" scoped>
.container {
  .banner {
    // min-width: 870px;
    // @media screen and (max-width: 800px) {
    //   width: 800px;
    //   min-width: 800px;
    // }
  }
  .product {
    margin: 0 auto;
    width: 100%;
    /*min-width: 1200px;*/
    @media screen and (max-width: 1100px) {
      min-width: 1100px;
    }
    @media screen and (max-width: 1024px) {
      min-width: 1000px;
    }
    @media screen and (max-width: 940px) {
      min-width: 920px;
    }
    @media screen and (max-width: 800px) {
      min-width: 800px;
    }
    @media screen and (max-width: 768px) {
      min-width: 740px;
    }
    .qianduan {
      width: 100%;
      padding-top: 32px;
      padding-bottom: 30px;
      ul {
        padding: 0 12%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        @media screen and (max-width: 1100px) {
          padding: 0 8%;
        }
        @media screen and (max-width: 1000px) {
          padding: 0 6%;
        }
        @media screen and (max-width: 800px) {
          padding: 0 3%;
        }
        @media screen and (max-width: 768px) {
          padding: 0 2%;
        }
        li {
          // position: relative;
          box-sizing: border-box;
          width: 25%;
          /*min-width: 220px;*/
          height: 280px;
          padding: 0 6px 18px;
          margin-bottom: 12px;
          @media screen and (max-width: 1000px) {
            width: 33%;
          }
          @media screen and (max-width: 800px) {
            width: 33.3%;
          }
          a {
            position: relative;
            display: inline-block;
            width: 100%;
            height: 100%;
            padding-bottom: 16px;
            overflow: hidden;
            transition: all 1.5s cubic-bezier(.32,.69,.55,.99);
            text-align: center;
            border: 1px solid #e4e9f0;
            border-radius: 5px;
            color: #333;
            cursor: default;
            .icon {
              display: inline-block;
              height: 100px;
              width: 100px;
              margin-top: 26px;
              img {
                display: inline-block;
                height: 100%;
                width: 100%;
              }
            }
            .name {
              font-size: 16px;
              margin-top: 20px;
            }
            .desc {
              position: relative;
              height: 48px;
              width: 100%;
              padding: 0 20px;
              box-sizing: border-box;
              line-height: 24px;
              text-align: center;
              font-size: 14px;
              color: #999;
              overflow: hidden;
              word-break: break-all;
            }
            .btn {
              position: relative;
              z-index: 50;
              display: none;
              box-sizing: border-box;
              width: 220px / 2;
              height: 64px / 2;
              margin: 30px auto 0;
              padding: 8px 24px;
              font-size: 12px;
              text-align: center;
              border: 1px solid #fff;
              border-radius: 20px;
              color: #fff;
              background-color: transparent;
              cursor: pointer;
            }
            .canvas-hook {
              display: none;
              transform: translate3d(0,0,0);
            }
            &:hover {
              transform: translateY(-10px);
              box-shadow: 0.1px 8px 21.8px 1.2px rgba(39, 188, 215, 0.25);
              background: url("../../common/images/bg-productlist.png") no-repeat center center;
              background-size: cover;
              .name {
                color: #fff;
              }
              .desc, .star {
                display: none !important;
              }
              .btn {
                display: block !important;
              }
              .canvas-hook {
                display: block;
              }
            }
          }
        }
      }
    }
  }
}

</style>
