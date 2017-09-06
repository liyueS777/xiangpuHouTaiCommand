<template>
      <div class="block configAddHeader">
        <span class="wrapper">
          <el-button type="info">
            <i class="el-icon-edit"></i>
            {{title}}
          </el-button>
        </span>
      </div>
</template>
<script>
    export default {
        data()
    {
        return {}
    }
    ,
    created()
    {

    }
    ,
    methods: {

    },props:['title']
    }
</script>
<style>
  .configAddHeader {
    text-align: left;
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .block {
    text-align: left;
    margin-left: 40px;
    margin-top: 10px;
  }
</style>
