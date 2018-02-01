/**
* Created by CHENRC2 on 2017-10-1.
*/
<template>
  <section class="container">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-row :gutter="3">
        <template v-for="(c,index) in condition">
        <el-col :md="6"  v-if="c.type == 'el-input'&&(index<3||showMore==true)" >
          <el-form-item :label="c.label">
            <el-input v-model="condition[index].model" :placeholder="c.placeholder"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="6"  v-else-if="c.type == 'el-select'&&(index<3||showMore==true)" >
          <el-form-item :label="c.label">
            <el-select v-model="condition[index].model" :placeholder="c.placeholder" >
              <el-option v-for="i in c.items" :label="i.label" :value="i.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :md="8" v-else-if="c.type == 'el-date-picker'&&(index<3||showMore==true)" >
          <el-form-item :label="c.label">
            <el-date-picker
              v-model="condition[index].model"
              :type="c.pickType"
              align="right"
              :editable="false"
              placeholder="创建时间"
              :picker-options="c.pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </template>
        <el-col v-if="md<3?showMore==false:showMore==true" :md="2" class="text-center" >
          <el-button type="text" size="small" @click="toggle">{{showMore ? "折叠":"展开"}}<i :class="[showMore ? 'mf mf-top':'mf mf-bottom']"></i></el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="text-center">
        <el-col>
          <el-button  size="small"  type="primary" class="w90" @click="submit">提交</el-button>
          <el-button  size="small" class="w90" @click="reset">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
  </section>
</template>
<style lang="less" scoped>

</style>
<script>
  export default{
    props:{
      condition:{
        type: Array,
        default(){
          return [];
        }
      },
    },
    data() {
      return {
        showMore:false,
      }
    },
    methods:{
      toggle(){
          this.showMore = !this.showMore;
      },
      submit(){
          this.$emit("submit",this.condition);
      },
      reset(){
        this.condition.map(item=>{
          item.model="";
          return item;
        });
        this.$emit("submit",this.condition);
      }
    }
  }
</script>
