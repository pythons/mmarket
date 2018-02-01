<template>
  <div class="title">
    <h3>{{this.words}}</h3>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      words: {
        type: String
      }
    }
  }
</script>

<style lang="less" scoped>
  .title {
    margin: 0 0 30px;
    h3 {
      margin-bottom: 20px;
      letter-spacing: 2px;
      font-size: 24px;
      color: #333;
    }
    .line {
      height: 2px;
      width: 48px;
      background-color: #cecece;
      margin: 0 auto;
    }
  }
</style>
