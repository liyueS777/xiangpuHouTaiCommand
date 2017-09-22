<template>
    <div>
        <h1>抱歉，找不到该类似页面信息~</h1>
      <span class="goLogin" @click="goLogin">...返回登录页</span> 或 <el-button class="button404" type="info" @click = 'goBack'>返回</el-button>

    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }, created() {

        }, methods: {
            goBack(){
                this.$router.go(-1);
            },
            goLogin(){
                this.$router.push('/login')
            }
      }
    }
</script>
<style>
  h1 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 100px;
  }
  .button404 {
    background-color: silver;
    border-color: silver;
    padding:8px 10px;
    font-size: 14px;
  }
  .goLogin {
    cursor: pointer;
  }
</style>
