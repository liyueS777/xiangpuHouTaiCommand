<template>
    <div class="navb">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="light" @select="selectNav" router unique-opened :default-active="$route.path">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-share"></i>鉴权页</template>
              <el-menu-item index="/authList">配置列表</el-menu-item>
              <el-menu-item index="/authAdd">配置添加</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-star-on"></i>七星页</template>
              <el-menu-item index="/sevenStarList">配置列表</el-menu-item>
              <el-menu-item index="/sevenStarAdd">配置添加</el-menu-item>
            </el-submenu>
            <el-submenu index="3" v-if="AuthConfig">
              <template slot="title"><i class="el-icon-menu"></i>主页</template>
              <el-menu-item index="/configlist">配置列表</el-menu-item>
              <el-menu-item index="/configAdd">配置添加</el-menu-item>
            </el-submenu>
            <!--<el-menu-item index="/login">退出登录</el-menu-item>-->
          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
              AuthConfig:true
            }
        }, created() {
//            if(this.$store.getters.user.company.isGroup === 'Y'){
////                this.AuthConfig = false;
//            }
        }, methods: {
        selectNav(key, keyPath){
          console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>
<style lang="scss">
  .navb {
    height: 100%;
    > div {
      height: 100%;
      text-align: left;
      >div{
        height: 100%;
        >ul {
          height: 100%;
        }
        .el-menu--dark {
          background-color: rgb(238, 246, 246);
        }
      }
    }
  }
</style>
