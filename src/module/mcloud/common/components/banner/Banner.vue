<template>
	<div class="banner-wrap">
		<el-carousel height="550px" :interval="5000" :class="{'banner-loading':banner_loading}" @change="banner_change" ref="banner" style="">
	      <el-carousel-item class="banner1">
	      </el-carousel-item>
        <el-carousel-item class="banner2">
	      </el-carousel-item>
        <el-carousel-item class="banner3">
	      </el-carousel-item>
        <el-carousel-item class="banner4">
	      </el-carousel-item>
    	</el-carousel>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        banner_loading:false
      }
    },
    methods: {
      banner_change(){
        if(this.$refs.banner.hover){
          this.banner_loading = false;
        }else{
          this.banner_loading = true;
        }
      }
    }
  }
</script>

<style lang="less">
.banner-wrap{
  // min-width:870px;
  // .el-carousel__arrow {
  // background-color: rgba(31, 45, 61, 3);
  // color:rgba(255, 255, 255, 0.7)
  // }
  // .el-carousel__arrow:hover {
  // background-color: rgba(31, 45, 61, 1);
  // color:rgba(255, 255, 255, 0.7)
  // }
  .el-carousel__item.is-animating {
  transition: transform 0.6s ease-in-out;
  }
  .el-carousel__indicator{
    .el-carousel__button {
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      position: relative;
      &:before{
        content: "";
        position: absolute;
        z-index: 55;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
      }
    }
  }
  .banner-loading{
    .el-carousel__indicator.is-active{
      .el-carousel__button{
          -webkit-animation-name: hvr-loading1;
          animation-name: hvr-loading1;
          -webkit-animation-duration: 5s;
          animation-duration: 5s;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
          &:before{
          -webkit-animation-name: hvr-loading;
          animation-name: hvr-loading;
          -webkit-animation-duration: 5s;
          animation-duration: 5s;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
          }
      }
    }
  }
  .banner1 {
  // -webkit-perspective: 40em;
  //     -ms-perspective: 40em;
  //         perspective: 40em;
  // -webkit-perspective-origin: center center;
  //     -ms-perspective-origin: center center;
  //         perspective-origin: center center;
  // overflow: hidden;
  font-size: 14px;
  background: url('../../images/banner/banner1/banner_1.png') no-repeat;
  background-size: cover;
  background-position:center center;
}
  .banner2 {
  // overflow: hidden;
  font-size: 14px;
  background: url('../../images/banner/banner2/banner_2.png') no-repeat;
  background-size: cover;
  background-position:center center;
}
  .banner3 {
  // overflow: hidden;
  font-size: 14px;
  background: url('../../images/banner/banner3/banner_3.png') no-repeat;
  background-size: cover;
  background-position:center center;
}
  .banner4 {
  // overflow: hidden;
  font-size: 14px;
  background: url('../../images/banner/banner4/banner_4.png') no-repeat;
  background-size: cover;
  background-position:center center;
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
/* loading */
@-webkit-keyframes hvr-loading {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
@keyframes hvr-loading {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
@-webkit-keyframes hvr-loading1 {
  0% {
    background: #8391a5;
  }
  99% {
   background: #8391a5;
  }
  100% {
   background: #fff;
  }
}
@keyframes hvr-loading1 {
  0% {
    background: #8391a5;
  }
  99% {
   background: #8391a5;
  }
  100% {
   background: #fff;
  }
}
/* rotate */
@-webkit-keyframes hvr-rotate {
  25% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@keyframes hvr-rotate {
  25% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
.hvr-rotate {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.hvr-rotate1 {
  -webkit-animation-name: hvr-rotate;
  animation-name: hvr-rotate;
  -webkit-animation-duration: 55s;
  animation-duration: 55s;
}
.hvr-rotate2 {
  -webkit-animation-name: hvr-rotate;
  animation-name: hvr-rotate;
  -webkit-animation-duration: 15s;
  animation-duration: 15s;
}
/* Pulse */
@-webkit-keyframes hvr-pulse {
  25% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  75% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
@keyframes hvr-pulse {
  25% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  75% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
@-webkit-keyframes hvr-pulse4 {
  25% {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
    opacity: 1;
  }
  75% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
  }
  100% {
    opacity: 1;
  }
}
@keyframes hvr-pulse4 {
  25% {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
    opacity: 1;
  }
  75% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes hvr-pulse3 {
  25% {
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
    opacity: 1;
  }
  75% {
    -webkit-transform: scale(0.92);
    transform: scale(0.92);
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
@keyframes hvr-pulse3 {
  25% {
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
    opacity: 1;
  }
  75% {
    -webkit-transform: scale(0.92);
    transform: scale(0.92);
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
.hvr-pulse {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.hvr-pulse1 {
  -webkit-animation-name: hvr-pulse;
  animation-name: hvr-pulse;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}
.hvr-pulse2 {
  -webkit-animation-name: hvr-pulse;
  animation-name: hvr-pulse;
  -webkit-animation-duration: 6s;
  animation-duration: 6s;
}
.hvr-pulse3 {
  -webkit-animation-name: hvr-pulse3;
  animation-name: hvr-pulse3;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}
.hvr-pulse4 {
  -webkit-animation-name: hvr-pulse4;
  animation-name: hvr-pulse4;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}
/* Icon Hang */
@-webkit-keyframes hvr-icon-hang {
  0% {
    -webkit-transform: translateY(76px);
    transform: translateY(76px);
  }
  50% {
    -webkit-transform: translateY(46px);
    transform: translateY(46px);
  }
  100% {
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
  }
}
@keyframes hvr-icon-hang {
  0% {
    -webkit-transform: translateY(76px);
    transform: translateY(76px);
  }
  50% {
    -webkit-transform: translateY(46px);
    transform: translateY(46px);
  }
  100% {
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
  }
}
.hvr-icon-hang {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-animation-name: hvr-icon-hang;
  animation-name: hvr-icon-hang;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-delay: .3s;
  animation-delay: .3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}
/* Wobble Horizontal */
@-webkit-keyframes hvr-wobble-horizontal {
  16.65% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }
  33.3% {
    -webkit-transform: translateX(-6px);
    transform: translateX(-6px);
  }
  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }
  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes hvr-wobble-horizontal {
  16.65% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }
  33.3% {
    -webkit-transform: translateX(-6px);
    transform: translateX(-6px);
  }
  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }
  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.hvr-wobble-horizontal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-animation-name: hvr-wobble-horizontal;
  animation-name: hvr-wobble-horizontal;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
/* Wobble vetical */
@-webkit-keyframes hvr-wobble-vetical {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  51%,
	100% {
    opacity: 1;
  }
}
@keyframes hvr-wobble-vetical {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  51%,
	100% {
    opacity: 1;
  }
}
@-webkit-keyframes hvr-wobble-vetical2 {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-70px);
    transform: translateY(-70px);
  }
}
@keyframes hvr-wobble-vetical2 {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-70px);
    transform: translateY(-70px);
  }
}
@-webkit-keyframes hvr-wobble-vetical3 {
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    opacity: 1;
  }
  75% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 1;
  }
}
@keyframes hvr-wobble-vetical3 {
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    opacity:1 ;
  }
  75% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 1;
  }
}
.hvr-wobble-vetical {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function:ease-in-out;
  -webkit-animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  animation-timing-function:cubic-bezier(0.52, 1.64, 0.37, 0.66);
   -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.hvr-wobble-vetical1 {
  -webkit-animation-name: hvr-wobble-vetical;
  animation-name: hvr-wobble-vetical;
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
}
.hvr-wobble-vetical2 {
  -webkit-animation-name: hvr-wobble-vetical2;
  animation-name: hvr-wobble-vetical2;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}
.hvr-wobble-vetical3 {
  -webkit-animation-name: hvr-wobble-vetical3;
  animation-name: hvr-wobble-vetical3;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}

.ballcloud {
  width: 25em;
  height: 25em;
  background: url('/static/images/banner/banner1/ballcloud.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 240px;
  top:60px;
}
.cloud {
  width: 25em;
  height: 25em;
  background: url('/static/images/banner/banner1/cloud.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 240px;
  top:60px;
}
.ballblue {
  width: 2.5em;
  height: 7em;
  background: url('/static/images/banner/banner1/blueball.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 130px;
  bottom:60px;
}
.ballblue2 {
  width: 2.5em;
  height: 2.5em;
  background: url('/static/images/banner/banner1/blueball2.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 620px;
  top:80px;
}
.ballyellow {
  width: 2.5em;
  height: 2.5em;
  background: url('/static/images/banner/banner1/yellowball2.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 240px;
  top:20px;
  opacity: 1;
}
.smalldot1 {
  width: 1.3em;
  height: 1.3em;
  background: url('/static/images/banner/banner1/smalldot1.png') no-repeat;
  background-size: contain;
  position: absolute;
  left: 120px;
  bottom:270px;
}
.smalldot2 {
  width: 1em;
  height: 1em;
  background: url('/static/images/banner/banner1/smalldot2.png') no-repeat;
  background-size: contain;
  position: absolute;
  left: 260px;
  bottom:60px;
}
.smalldot3 {
  width: 2em;
  height: 2em;
  background: url('/static/images/banner/banner1/smalldot6.png') no-repeat;
  background-size: contain;
  position: absolute;
  left: 600px;
  bottom:60px;
}
.smalldot4 {
  width: 2em;
  height: 2em;
  background: url('/static/images/banner/banner1/smalldot4.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 530px;
  top:245px;
}
.smalldot5 {
  width: 3em;
  height: 3em;
  background: url('/static/images/banner/banner1/smalldot.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 500px;
  bottom:320px;
}
.smalldot6 {
  width: 3.5em;
  height: 3.5em;
  background: url('/static/images/banner/banner1/smalldot6.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 160px;
  bottom:60px;
}
.smalldot7 {
  width: 1.2em;
  height: 1.2em;
  background: url('/static/images/banner/banner1/smalldot.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 130px;
  bottom:250px;
}
.titleright {
  width: 26em;
  height: 15em;
  background: url('/static/images/banner/banner1/title1.png') no-repeat;
  background-size: cotain;
  position: absolute;
  right: 140px;
  top:130px;
}
.line1 {
  width: 0.8em;
  height: 8em;
  background: url('/static/images/banner/banner1/line1.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 80px;
  bottom:200px;
}
.linemove {
  width: 4px;
  height: 0.5em;
  background: url('/static/images/banner/banner1/line.png') no-repeat;
  background-size: cover;
  opacity: 1;
}
.lineout {
  width: 1em;
  height: 0.2em;
  position: absolute;
  left: 650px;
  bottom:60px;
}
.ballsmall{
  width: 1em;
  height: 1em;
  background: url('/static/images/banner/banner1/ballsmalll.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 643px;
  bottom:130px;
  opacity:0.5 ;
}

.line2 {
  width: 0.7em;
  height: 5em;
  background: url('/static/images/banner/banner1/line2.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 560px;
  bottom:350px;
}
.linemove2 {
  width: 4px;
  height: 0.5em;
  background: url('/static/images/banner/banner1/line.png') no-repeat;
  background-size: cover;
  opacity: 1;
}
.lineout2 {
  width: 1em;
  height: 0.2em;
  position: absolute;
  left: 80px;
  bottom:300px;
}
.ballsmall2{
  width: 1em;
  height: 1em;
  background: url('/static/images/banner/banner1/ballsmalll.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 73px;
  bottom:370px;
  opacity:0.5 ;
}


.line3 {
  width: 1em;
  height: 8em;
  background: url('/static/images/banner/banner1/line3.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 650px;
  bottom:60px;
}
.linemove3 {
  width: 4px;
  height: 0.5em;
  background: url('/static/images/banner/banner1/line.png') no-repeat;
  background-size: cover;
  opacity: 1;
}
.lineout3 {
  width: 1em;
  height: 0.2em;
  position: absolute;
  left: 560px;
  bottom:350px;
}
.ballsmall3{
  width: 1em;
  height: 1em;
  background: url('/static/images/banner/banner1/ballsmalll.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 553px;
  bottom:420px;
  opacity:0.5 ;
}


.line4 {
  width: 1em;
  height: 8em;
  background: url('/static/images/banner/banner1/line4.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 800px;
  bottom:30px;
}
.linemove4 {
  width: 4px;
  height: 0.5em;
  background: url('/static/images/banner/banner1/line.png') no-repeat;
  background-size: cover;
  opacity: 1;
}
.lineout4 {
  width: 1em;
  height: 0.2em;
  position: absolute;
  left: 800px;
  bottom:30px;
}
.ballsmall4{
  width: 1em;
  height: 1em;
  background: url('/static/images/banner/banner1/ballsmalll.png') no-repeat;
  background-size: cover;
  position: absolute;
  left: 793px;
  bottom:100px;
  opacity:0.5 ;
}


.line5 {
  width: 0.8em;
  height: 5em;
  background: url('/static/images/banner/banner1/line555.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 200px;
  top:50px;
}
.linemove5 {
  width: 3px;
  height: 0.5em;
  background: url('/static/images/banner/banner1/line5.png') no-repeat;
  background-size: cover;
  opacity: 1;
}
.lineout5 {
  width: 1em;
  height: 0.2em;
  position: absolute;
  right: 188px;
  top:120px;
}
.ballsmall5{
  width: 0.8em;
  height: 0.8em;
  background: url('/static/images/banner/banner1/ballsmall5.png') no-repeat;
  background-size: cover;
  position: absolute;
  right: 205px;
  top:39px;
}
.container-ball {
  width: 30em;
  height: 30em;
  position: absolute;
  left: 160px;
  top:100px;
  -webkit-transform-style: preserve-3d;
      -ms-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-animation: rotate 12s infinite linear;
      -ms-animation: rotate 12s infinite linear;
          animation: rotate 12s infinite linear;
}

.cube {
  position: absolute;
  width: 10em;
  height: 10em;
  -webkit-transform-style: preserve-3d;
      -ms-transform-style: preserve-3d;
          transform-style: preserve-3d;
}

.side {
  position: absolute;
  width: 10em;
  height: 10em;

  border: 2px dotted transparent;
  border-radius: 50%;
  -webkit-transform-style: preserve-3d;
      -ms-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
          transform: rotateY(180deg);
}
.side:before, .side:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  box-sizing: border-box;
  border-radius: inherit;
  border: 1px solid;
  box-shadow: inset 0 0 2em, 0 0 2em;
}
.side:before {
  width: 2.5em;
  height: 2.5em;
  color: transparent;
}
.side:after {
  width: 1.5em;
  height: 1.5em;
  -webkit-transform: translateZ(-2em);
      -ms-transform: translateZ(-2em);
          transform: translateZ(-2em);
  box-shadow: inset 0 0 1em, 0 0 1em;
  /* color: #00DADA; */
  color: #f7d649;
}

.side--back {
  -webkit-transform: translateZ(-2em) rotateY(180deg);
      -ms-transform: translateZ(-2em) rotateY(180deg);
          transform: translateZ(-2em) rotateY(180deg);
}

.side--left {
  -webkit-transform: translateX(-2em) rotateY(-90deg);
      -ms-transform: translateX(-2em) rotateY(-90deg);
          transform: translateX(-2em) rotateY(-90deg);
}

.side--right {
  -webkit-transform: translateX(2em) rotateY(90deg);
      -ms-transform: translateX(2em) rotateY(90deg);
          transform: translateX(2em) rotateY(90deg);
}

.side--top {
  -webkit-transform: translateY(-2em) rotateX(90deg);
      -ms-transform: translateY(-2em) rotateX(90deg);
          transform: translateY(-2em) rotateX(90deg);
}

.side--bottom {
  -webkit-transform: translateY(2em) rotateX(-90deg);
      -ms-transform: translateY(2em) rotateX(-90deg);
          transform: translateY(2em) rotateX(-90deg);
}

.side--front {
  -webkit-transform: translateZ(2em);
      -ms-transform: translateZ(2em);
          transform: translateZ(2em);
}


@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
        -ms-transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
            transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
  }
}

@keyframes rotate {
  100% {
    -webkit-transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
        -ms-transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
            transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
  }
}

.ballall{
  width: 28em;
  height: 22em;
  background: url('/static/images/banner/banner2/ballall.png') no-repeat;
  background-size: cotain;
  position: absolute;
  right: 200px;
  top:60px;
}
.titleleft{
  width: 26em;
  height: 15em;
  background: url('/static/images/banner/banner2/title.png') no-repeat;
  background-size: cotain;
  position: absolute;
  left: 240px;
  top:140px;
  z-index: 9999;
}
.ballleft{
  width: 2.5em;
  height: 2.5em;
  background: url('/static/images/banner/banner2/ballleft.png') no-repeat;
  background-size: cover;
  position: absolute;
  right: 600px;
  top:30px;
}
.ballright{
  width: 2.5em;
  height: 2.5em;
  background: url('/static/images/banner/banner2/ballright.png') no-repeat;
  background-size: cover;
  position: absolute;
  right: 180px;
  top:120px;
}
.dotsmall1 {
  width: 1.5em;
  height: 1.5em;
  background: url('/static/images/banner/banner2/dotsmall1.png') no-repeat;
  background-size: contain;
  position: absolute;
  left:60px;
  bottom:250px;
}
.dotsmall2 {
  width: 3em;
  height: 3em;
  background: url('/static/images/banner/banner2/dotsmall6.png') no-repeat;
  background-size: contain;
  position: absolute;
  left: 210px;
  bottom:340px;
}
.dotsmall3 {
  width: 0.9em;
  height: 0.9em;
  background: url('/static/images/banner/banner2/dotsmall6.png') no-repeat;
  background-size: contain;
  position: absolute;
  left: 220px;
  bottom:150px;
}
.dotsmall4 {
  width: 3.5em;
  height: 3.5em;
  background: url('/static/images/banner/banner2/dotsmall4.png') no-repeat;
  background-size: contain;
  position: absolute;
  left: 400px;
  bottom:100px;
}
.dotsmall5 {
  width: 2em;
  height: 2em;
  background: url('/static/images/banner/banner2/dotsmall5.png') no-repeat;
  background-size: contain;
  position: absolute;
  left: 560px;
  bottom:160px;
}
.dotsmall6 {
  width: 0.9em;
  height: 0.9em;
  background: url('/static/images/banner/banner2/dotsmall6.png') no-repeat;
  background-size: contain;
  position: absolute;
  left: 650px;
  bottom:270px;
}
.dotsmall7 {
  width: 1.3em;
  height: 1.3em;
  background: url('/static/images/banner/banner2/dotsmall7.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 550px;
  bottom:90px;
}
.dotsmall8 {
  width: 1em;
  height: 1em;
  background: url('/static/images/banner/banner2/dotsmall8.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 360px;
  bottom:50px;
}
.dotsmall9 {
  width: 1em;
  height: 1em;
  background: url('/static/images/banner/banner2/dotsmall9.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 160px;
  bottom:80px;
}
.dotsmall10 {
  width: 1em;
  height: 1em;
  background: url('/static/images/banner/banner2/dotsmall6.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 100px;
  bottom:200px;
}
.dotsmall11 {
  width: 1.3em;
  height: 1.3em;
  background: url('/static/images/banner/banner2/dotsmall8.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 220px;
  top:40px;
}
.dotsmall12 {
  width: 1em;
  height: 1em;
  background: url('/static/images/banner/banner2/dotsmall12.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 480px;
  top:80px;
}
.dotsmall13 {
  width: 0.7em;
  height: 0.7em;
  background: url('/static/images/banner/banner2/dotsmall13.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 500px;
  top:260px;
}
.dotsmall14 {
  width: 1.5em;
  height: 1.5em;
  background: url('/static/images/banner/banner2/dotsmall14.png') no-repeat;
  background-size: contain;
  position: absolute;
  right: 260px;
  top:260px;
}
@media screen and (max-width: 1200px) {
  .ballcloud {
    left: 150px;
    bottom:60px;
  }
  .cloud {
    left: 150px;
    bottom:60px;
  }
  // .titleleft{
  // left: 30px;
  // top:140px;
  // }
  .titleright{
    right: 40px;
    top:130px;
  }
  .ballall{
    right: 40px;
    top:60px;
  }
  .ballright{
    right: 40px;
    top:120px;
  }
  .smalldot5 {
    right: 200px;
    bottom:320px;
  }
  .smalldot4 {
    right: 420px;
    top:245px;
  }
}
@media screen and (max-width: 1024px) {
  .ballcloud {
    left: 60px;
    bottom:60px;
  }
  .cloud {
    left: 60px;
    bottom:60px;
  }
  .smalldot1 {
    left: 20px;
    bottom:270px;
  }
  .ballblue {
    left: 20px;
    bottom:60px;
  }
  .titleleft{
  left: 40px;
  top:140px;
  }
}
@media screen and (max-width: 860px) {
  .el-carousel__container {
    height: 400px !important;
  }
}
@media screen and (max-width: 610px) {
  .el-carousel__container {
    height: 300px !important;
  }
}
@media screen and (max-width: 480px) {
  .el-carousel__container {
    height: 200px !important;
  }
}
@media screen and (max-width: 315px) {
  .el-carousel__container {
    height: 100px !important;
  }
  .el-carousel__button {
    width: 5px;
    height: 2px;
  }
}
@media screen and (min-width: 1900px) {
  .el-carousel__container {
    height: 700px !important;
  }
}

}
</style>
