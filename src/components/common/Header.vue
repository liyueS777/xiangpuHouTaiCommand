<template>
    <div class="header">
        <div class="logo">象谱空间框架后台管理系统</div>
        <div class="user-info">
            <el-dropdown trigger="hover" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/images/s-logo.png">
                    {{name}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
  import VueConnect from '../../state/VueConnect'
    export default {
        data() {
            return {
                name: '默认~'
            }
        },
        methods: {
          handleCommand(command) {
            this.$confirm('确定退出?', '', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              if (command == 'loginout') {
                  //清除内置在Vue上存储的缓存，为了防止切换用户的时候数据篡改；
                VueConnect.compOption = {};
                VueConnect.compCode = '';
                VueConnect.version = '';
                VueConnect.envMsg = '';
                VueConnect.Subcomp = {};
                VueConnect.ifActive = '';
                this.$router.push('/login');
              }
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消退出',
                duration: this.$duration
              });
            })
          }
        },
      created(){
            if(this.$store.getters.user.grade == 1){
              this.name = this.$store.getters.user.company.comp_name;
            }else if(this.$store.getters.user.grade == 0 ) {
              this.name = '平台管理员';
            }
//        console.log(this.$store.getters.user,798976);
      }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
    }
    .header .logo{
        float: left;
        width:300px;
        text-align: center;
        color:white;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        cursor: pointer;
        vertical-align: middle;
        color:white;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
