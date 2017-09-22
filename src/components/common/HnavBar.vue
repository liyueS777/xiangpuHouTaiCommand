<template>
    <div class="navb">
      <el-row class="tac">
        <el-col :span="24" class="f-flex">
          <el-menu default-active="2"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   @close="handleClose"
                   theme="light"
                   @select="selectNav"
                   router
                   :collapse="isCollapse"
                   unique-opened
                   :default-active="$route.path">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-share"></i>
                <span slot="title">鉴权页</span>
              </template>
              <el-menu-item index="/authList">配置列表</el-menu-item>
              <el-menu-item index="/authAdd">配置添加</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-star-on"></i>
                <span slot="title">七星页</span>
              </template>
              <el-menu-item index="/sevenStarList">配置列表</el-menu-item>
              <el-menu-item index="/sevenStarAdd">配置添加</el-menu-item>
            </el-submenu>
            <el-submenu index="3" v-if="AuthConfig">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">主页</span>
              </template>
              <el-menu-item index="/configlist">配置列表</el-menu-item>
              <el-menu-item index="/configAdd">配置添加</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <span class="flexMenuF scale" @click="toggleFlexMenu">
             <i :class="{'el-icon-d-arrow-left':!isCollapse,'el-icon-d-arrow-right':isCollapse}"></i>
          </span>
      </el-row>

    </div>
</template>
<script>
    export default {
        data() {
            return {
              AuthConfig:true,
              isCollapse: false
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
        },
        toggleFlexMenu(){
          this.isCollapse = !this.isCollapse;
        }
      }
    }
</script>
<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;

  }
  .f-flex {
    position: relative;
  }
  .flexMenuF {
    width: 30px;
    height: 30px !important;
    /*border: 1px solid #000;*/
    /*left: 0;*/
    top: 8px;
    float: left;
    position: absolute;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    box-sizing: border-box;
  }

  .scale {
    animation:bigC 2.3s 1s both infinite;
  }
  /*.scale:hover {*/
    /*border: 1px solid #000;*/
  /*}*/
  @keyframes bigC {
    /*0% {transform:scale(1) rotate3d(0,1,0,0);}*/
    /*50% {transform:scale(1.3) rotate3d(0,1,0,90deg);}*/
    /*100% {transform:scale(1) rotate3d(0,1,0,0)}*/
    0% {transform:scale(1)}
    50% {transform:scale(1.3)}
    100% {transform:scale(1)}
  }
  .el-submenu .el-menu-item {
    min-width: 100px !important;
  }
  .navb {
    height: 100%;
    position: relative;
    text-align: left;
    > div {
      height: 100%;

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
