<template>
  <div>
    <div class="ratings-box" v-for="(item,index) in ratingsList">
      <div class="user-name">{{item.userName}}:</div>
      <div class="comment">
        <p class="comment-words">
          {{item.markMsg}}
        </p>
        <p class="comment-stars">
          <star :score="item.mark/2"></star><span class="publish-time">{{item.markTime | format}}</span>
        </p>
        <el-button v-if="isNeedDelete" class="delete" type="text" @click="deleteRating(item.markId, index)">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Star from '../../awesome/star/Star.vue';
  export default {
    data() {
      return {

      }
    },
    methods: {
      deleteRating(id, index) {
        this.ratingsList.splice(index, 1);
        this.$emit('deleteRating',id,index);
      }
    },
    props: {
      // 父组件传入的数据
      ratingsList: {
        type: Array,
        default() {
          return [];
        }
      },
      // 是否需要删除的按键
      isNeedDelete: {
        type: Boolean,
        default: false
      },
    },
    components: {
      'star': Star
    },
    filters: {
      format: (str) => {
        var a = new Date(str);
        var year = a.getFullYear(); // 年
        var month = a.getMonth() + 1; // 月
        month = month < 10 ? '0' + month : month;
        var day = a.getDate(); // 日
        day = day < 10 ? '0' + day : day;
        var hour = a.getHours(); // 小时
        hour = hour < 10 ? '0' + hour : hour;
        var min = a.getMinutes(); // 分钟
        min = min < 10 ? '0' + min : min;
        var sec = a.getSeconds(); // 秒
        sec = sec < 10 ? '0' + sec : sec;
        let formatData = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
        formatData = formatData.toString();
        return formatData;
      }
    }
  }
</script>

<style lang="less" scoped>
  .ratings-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 24px 0;
    border-bottom: 1px dashed #bfbfbf;
    .user-name {
      flex: 1;
      color: #1eb8d4;
    }
    .comment {
      flex: 9;
      display: inline-block;
      position: relative;
      .comment-words {
        padding-right: 10px;
        margin-top: -6px;
        line-height: 26px;
        color: #333;
        word-break: break-all;
      }
      .comment-stars {
        margin-top: 8px;
        .star {
          display: inline-block;
          vertical-align: bottom;
        }
        .publish-time {
          margin-left: 30px;
          color: #666;
        }
      }
      .delete {
        position: absolute;
        right: 16px;
        top: 0;
      }
    }
  }
</style>
