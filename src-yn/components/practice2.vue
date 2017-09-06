<template>
    <div>
      <h2>bbb</h2>
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
                console.log(this.$store.getters.aTodos);
            }
        }
    }
</script>
<style>

</style>
