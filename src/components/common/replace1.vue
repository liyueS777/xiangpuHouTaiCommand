<template>
    <div>
      <el-progress type="circle" :percentage="num" :status="success">122223</el-progress>
      <button @click='start'>123</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                success:'',
                num:0
            }
        }, created() {
            console.log(this.$route.query);
            if(this.$route.query.msg=='auth'){
              this.$router.push({
                path:'/authList'
              });
            }else if(this.$route.query.msg=='index'){
              this.$router.push({
                path:'/configlist'
              });
            }
        }, methods: {
            start(){
                clearInterval(tt);
                var tt = setInterval(()=>{
                    this.num = +this.num + 1;
                    if(this.num>=100){
                        clearInterval(tt);
                      setTimeout(()=>{
                        this.success = 'success'
                      },400)
                    }
                },10);

            }
      }
    }
</script>
<style>

</style>
