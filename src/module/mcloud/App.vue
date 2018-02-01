<template>
  <div id="app">
      <div :class="['head',{'headbackground':headbackground}]">
        <market-head></market-head>
      </div>
      <div class="content">
       <router-view></router-view>
      </div>
      <div class="foot">
        <market-foot></market-foot>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MarketHead from './common/components/market_head/MarketHead.vue';
  import MarketFoot from './common/components/foot/Foot.vue';
  export default {
    name: 'media_cloud',
    components: {
      'market-head': MarketHead,
      'market-foot': MarketFoot
    },
    data(){
        return {
          headbackground:false
        }
    },
    watch:{
      $route(newval){
           window.scrollTo(0, 0);
           this.handleScroll()
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.handleScroll)
        this.handleScroll()
      });
    },
    beforeDestroy() {
      if (this.$el){
        window.removeEventListener('scroll', this.handleScroll)
      }
    },
    methods:{
      handleScroll(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(this.$route.path === '/home'){
          if(window.outerWidth < 860 && scrollTop > 400){
            this.headbackground = false;
          }else if(window.outerWidth < 610 && scrollTop > 300){
            this.headbackground = false;
          }else if(window.outerWidth < 480 && scrollTop > 200){
            this.headbackground = false;
          }else if(window.outerWidth < 315 && scrollTop > 100){
            this.headbackground = false;
          }else if(window.outerWidth < 1900 && scrollTop > 550){
            this.headbackground = false;
          }else if(window.outerWidth > 1900 && scrollTop > 700){
            this.headbackground = false;
          }else{
            this.headbackground = true;
          }
        }else{
          this.headbackground = false;
        }
      }
    }
  }
</script>

<style lang="less">
  #app{
    .head{
      position: fixed;
      width: 100%;
      height: 60px;
      z-index: 50;
      border-bottom: 1px solid #37445c;
      background-color: #1d293f;
      transition: background-color 0.5s linear;
      &:hover{
        background-color: #1d293f;
        transition: background-color 0.5s linear;
        .el-menu--dark {
          background-color: #1d293f;
          transition: background-color 0.5s linear;
        }
        .el-menu--dark .el-menu-item:hover,
        .el-menu--dark .el-submenu__title:hover {
          background-color: #1d293f;
          transition: background-color 0.5s linear;
        }
      }
    }
    .content {
      padding-top: 60px;
      .ecs-wrap{
        min-height:1000px;
        .text{
          .more{
            margin:20px 0 15 0;
            width:150px;
            height: 30px;
            border-radius: 15px;
            padding:4px;
          }
          &:hover{
            .more{
              -webkit-animation-name: swivelChair;
              animation-name: swivelChair;
              -webkit-animation-duration: 2s;
              animation-duration: 2s;
            }
          }
        }
        .col1{
          .more{
            margin-bottom: 20px;
            text-align: center;
            a{
              color:rgb(85, 26, 139);
            }
          }
          .linkno{
            cursor: not-allowed;
            color:#999 !important;
            &:active{
              color:#999 !important;
            }
          }
          -webkit-transform: perspective(1px) translateZ(0);
          transform: perspective(1px) translateZ(0);
          box-shadow: 0 0 1px transparent;
          position: relative;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
          -webkit-transition-property: transform;
          transition-property: transform;
          &:before {
            pointer-events: none;
            position: absolute;
            z-index: -1;
            content: '';
            top: 100%;
            left: 5%;
            height: 10px;
            width: 90%;
            opacity: 0;
            background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, transparent 80%);
            background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, transparent 80%);
            /* W3C */
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform, opacity;
            transition-property: transform, opacity;
          }
          img{
              -webkit-transform: perspective(1px) translateZ(0);
              transform: perspective(1px) translateZ(0);
              box-shadow: 0 0 1px transparent;
            }
          &:hover{
            -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
            img{
              -webkit-animation-name: hvr-bob-float, hvr-bob;
              animation-name: hvr-bob-float, hvr-bob;
              -webkit-animation-duration: .3s, 3s;
              animation-duration: .3s, 3s;
              -webkit-animation-delay: 0s, .3s;
              animation-delay: 0s, .3s;
              -webkit-animation-timing-function: ease-out, ease-in-out;
              animation-timing-function: ease-out, ease-in-out;
              -webkit-animation-iteration-count: 1, infinite;
              animation-iteration-count: 1, infinite;
              -webkit-animation-fill-mode: forwards;
              animation-fill-mode: forwards;
              -webkit-animation-direction: normal, alternate;
              animation-direction: normal, alternate;
            }
            .more{
              -webkit-backface-visibility: visible !important;
              backface-visibility: visible !important;
              -webkit-animation-name: rotateRight;
              animation-name: rotateRight;
              -webkit-animation-duration: 1s;
              -moz-animation-duration: 1s;
              -o-animation-duration: 1s;
              animation-duration: 1s;
              -webkit-animation-fill-mode: both;
              -moz-animation-fill-mode: both;
              -o-animation-fill-mode: both;
              animation-fill-mode: both;
            }
            &:before{
              opacity: 1;
              -webkit-transform: translateY(5px);
              transform: translateY(5px);
            }
          }
        }

      }
    }
    .foot{
      height:320px;
      padding:45px 0 20px 0;
      background-color: #1d293f;
    }
    .headbackground{
      background-color: #0d1e4f;
      transition: background-color 0.5s linear;
      .el-menu--dark {
        background-color: #0d1e4f;
        transition: background-color 0.5s linear;
      }
      .el-menu--dark .el-menu-item:hover,
      .el-menu--dark .el-submenu__title:hover {
        background-color: #0d1e4f;
        transition: background-color 0.5s linear;
      }
    }

    /* deley */
    .deley1{
      -webkit-animation-delay: 0.1s;
      animation-delay: 0.1s;
    }
    .deley2{
      -webkit-animation-delay: 0.6s;
      animation-delay: 0.6s;
    }
    .deley3{
      -webkit-animation-delay: 1.1s;
      animation-delay: 1.1s;
    }
    .deley4{
      -webkit-animation-delay: 1.5s;
      animation-delay: 1.5s;
    }
    .deley5{
      -webkit-animation-delay: 1.8s;
      animation-delay: 1.8s;
    }
    /* 阴影 */
    .hvr-float-shadow {
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px transparent;
      position: relative;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
    }
    .hvr-float-shadow:before {
      pointer-events: none;
      position: absolute;
      z-index: -1;
      content: '';
      top: 100%;
      left: 5%;
      height: 10px;
      width: 90%;
      opacity: 0;
      background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, transparent 80%);
      background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, transparent 80%);
      /* W3C */
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform, opacity;
      transition-property: transform, opacity;
      }
      .hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        /* move the element up by 5px */
      }
      .hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {
        opacity: 1;
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
        /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
      }

      @-webkit-keyframes chameleon {

        0% {
          color: red;
        }

        14.2999% {
          color: orange;
        }

        28.5999% {
          color: yellow;
        }

        42.8998% {
          color: green;
        }

        57.1996% {
          color: blue;
        }

        71.4995% {
          color: indigo;
        }

        85.7994% {
          color: violet;
        }
        100% {
          color: red;
        }
      }
      @keyframes chameleon {

        0% {
          color: red;
        }

        14.2999% {
          color: orange;
        }

        28.5999% {
          color: yellow;
        }

        42.8998% {
          color: green;
        }

        57.1996% {
          color: blue;
        }

        71.4995% {
          color: indigo;
        }

        85.7994% {
          color: violet;
        }
        100% {
          color: red;
        }
      }

      .chameleon {
        -webkit-animation-name: chameleon;
        animation-name: chameleon;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-duration: 5s;
        animation-duration: 5s;
      }

      @-webkit-keyframes swivelChair {
        from {
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
          transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          opacity: 1;
        }

        40% {
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
          transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }

        60% {
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
          transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
          opacity: 1;
        }

        80% {
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
          transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
        }

        to {
          -webkit-transform: perspective(400px);
          transform: perspective(400px);
        }
      }
      @keyframes swivelChair {
        from {
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
          transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          opacity: 1;
        }

        40% {
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
          transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }

        60% {
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
          transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
          opacity: 1;
        }

        80% {
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
          transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
        }

        to {
          -webkit-transform: perspective(400px);
          transform: perspective(400px);
        }
      }

      .swivelChair {
        -webkit-animation-name: swivelChair;
        animation-name: swivelChair;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
      }

      /* Bob */
    @-webkit-keyframes hvr-bob {
      0% {
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
      }
      50% {
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
      }
      100% {
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
      }
    }
    @keyframes hvr-bob {
      0% {
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
      }
      50% {
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
      }
      100% {
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
      }
    }
    @-webkit-keyframes hvr-bob-float {
      100% {
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
      }
    }
    @keyframes hvr-bob-float {
      100% {
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
      }
    }
    .hvr-bob {
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px transparent;
    }
    .hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {
      -webkit-animation-name: hvr-bob-float, hvr-bob;
      animation-name: hvr-bob-float, hvr-bob;
      -webkit-animation-duration: .3s, 3s;
      animation-duration: .3s, 3s;
      -webkit-animation-delay: 0s, .3s;
      animation-delay: 0s, .3s;
      -webkit-animation-timing-function: ease-out, ease-in-out;
      animation-timing-function: ease-out, ease-in-out;
      -webkit-animation-iteration-count: 1, infinite;
      animation-iteration-count: 1, infinite;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-direction: normal, alternate;
      animation-direction: normal, alternate;
    }

    @-webkit-keyframes rotateRight {
      0% {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        -webkit-transform: perspective(800px) rotateY(0deg) translate3d(0px);
      }

      99% {
        opacity: 0;
        transform-origin: 50% 0;
        transform: perspective(800px) rotateY(-180deg) translateZ(150px);
      }
      100% {
        opacity: 1;
        transform-origin: 0 0;
        transform: perspective(800px) rotateY(0deg) translate3d(0px);
      }
    }
    @keyframes rotateRight {
      0% {
        opacity: 1;
        transform-origin: 0 0;
        transform: perspective(800px) rotateY(0deg) translate3d(0px);
      }

      99% {
        opacity: 0;
        transform-origin: 50% 0;
        transform: perspective(800px) rotateY(-180deg) translateZ(150px);
      }
      100% {
        opacity: 1;
        transform-origin: 0 0;
        transform: perspective(800px) rotateY(0deg) translate3d(0px);
      }
    }
    .rotateRight {
      -webkit-backface-visibility: visible !important;
      backface-visibility: visible !important;
      -webkit-animation-name: rotateRight;
      animation-name: rotateRight;
    }

  }
</style>
