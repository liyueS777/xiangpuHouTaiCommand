<template>
    <div>
        <h2>aaa</h2>
      <el-button type="success" @click="add">确定</el-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }, created() {

        }, methods: {
            add(){
              this.$store.dispatch("onAddTodo",{
                  value:'111',
                  id:1
              });
              console.log(11);
            }
      }
    }
</script>
<style>

</style>
