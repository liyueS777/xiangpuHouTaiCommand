<template>
    <div class="home">
      <headervue></headervue>
      <navbar></navbar>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>{{breadcrumb1}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: breadcrumbRoute2 }">{{breadcrumb2}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content">
        <transition :name="transitionName">
          <router-view class="homeChildView"></router-view>
        </transition>
      </div>
      <div class="h-footer">版权所有©象翌微链科技发展有限公司 桂ICP备1300904号</div>
    </div>
</template>
<script>
  import AccountPower from '../../state/VueAccountPower'
  import headervue from './Header.vue'
  import navbar from './HnavBar.vue'
  import cas from './cascader.vue'
    export default {
        data() {
            return {
              msg:null,
              transitionName: 'slide-left',
              breadcrumb1:'',
              breadcrumb2:'',
//              breadcrumbRoute1:'',
              breadcrumbRoute2:''
            }
        }, created() {
        this.checkRoute(this.$route);
        }, methods: {
            checkRoute(newRoute){
              if(newRoute.fullPath=='/home'){

                this.breadcrumb1 = '首页';
                this.breadcrumb2 = '';
//                    this.breadcrumbRoute1 = '/home';
                this.breadcrumbRoute2 = '';
              }
              else if(newRoute.fullPath=='/configlist'){

                this.breadcrumb1 = '主页';
                this.breadcrumb2 = '配置列表';
//                  this.breadcrumbRoute1 = '';
                this.breadcrumbRoute2 = '/configlist';
              }
              else if(newRoute.fullPath=='/configlist'){


                this.breadcrumb1 = '主页';
                this.breadcrumb2 = '配置列表';
//                  this.breadcrumbRoute1 = '';
                this.breadcrumbRoute2 = '/configlist';
              }
              else if(newRoute.fullPath=='/configAdd'){


                this.breadcrumb1 = '主页';
                this.breadcrumb2 = '配置添加';
//                  this.breadcrumbRoute1 = '';
                this.breadcrumbRoute2 = '/configAdd';
              }
              else if(newRoute.fullPath=='/configEdit'){


                this.breadcrumb1 = '主页';
                this.breadcrumb2 = '配置编辑';
//                  this.breadcrumbRoute1 = '';
                this.breadcrumbRoute2 = '/configEdit';
              }
              else if(newRoute.fullPath=='/sevenStarAdd'){


                this.breadcrumb1 = '七星页';
                this.breadcrumb2 = '配置添加';
//                  this.breadcrumbRoute1 = '';
                this.breadcrumbRoute2 = '/sevenStarAdd';
              }
              else if(newRoute.fullPath=='/sevenStarList'){


                this.breadcrumb1 = '七星页';
                this.breadcrumb2 = '配置列表';
//                  this.breadcrumbRoute1 = '';
                this.breadcrumbRoute2 = '/sevenStarList';
              }
              else if(newRoute.fullPath=='/authAdd'){


                this.breadcrumb1 = '鉴权页';
                this.breadcrumb2 = '配置添加';
//                  this.breadcrumbRoute1 = '';
                this.breadcrumbRoute2 = '/authAdd';
              }
              else if(newRoute.fullPath=='/authList'){


                this.breadcrumb1 = '鉴权页';
                this.breadcrumb2 = '配置列表';
//                  this.breadcrumbRoute1 = '';
                this.breadcrumbRoute2 = '/authList';
              }
              else if(newRoute.fullPath=='/404'){


                this.breadcrumb1 = '首页';
                this.breadcrumb2 = '404找不到';
//                  this.breadcrumbRoute1 = '';
                this.breadcrumbRoute2 = '/404';
              }else if(newRoute.fullPath=='/indexCopy'){
                this.breadcrumb1 = '主页';
                this.breadcrumb2 = '一键复制';
//                  this.breadcrumbRoute1 = '';
                this.breadcrumbRoute2 = '/indexCopy';
              }
            }
        }
        , components:{
            headervue,
            navbar
      },watch:{
        $route:{
            handler(newRoute,oldRoute){
//                console.log(newRoute,oldRoute);
                this.checkRoute(newRoute);
            },
            deep:true
        },
//        '$route' (to, from) {
//          if(from.path == '/home'){
//            this.transitionName = 'slide-right';
//          }else{
//            this.transitionName = 'slide-left';
//          }
//        }
      }
    }
</script>

<style lang="scss">
  @import "../../style/base.css";
  body,html {
    height: 100%;
    min-width:1200px;
  }
  .home {
    font-family: 'Aveznir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    height:100%;
    > div:nth-of-type(1){
      position: fixed;
      top: 0;
      left: 0;
      /*background-color: #00d1b2;*/
      background-color: rgb(31, 81, 134);
      z-index:99;
    }
    > div:nth-of-type(2){
      width: 200px;
      position: fixed;
      left: 0;
      top: 70px;
      height: 100%;
      z-index:11;
    }
    > .el-breadcrumb {
      /*line-height: 24px;*/
      font-size: 16px;
      padding-left: 250px;
      padding-top: 90px;
    }
    > .content {
      margin-left: 220px;
      padding-top: 10px;
      padding-right: 10px;
        .homeChildView {
          transition: all .5s cubic-bezier(.55,0,.1,1);
          margin-bottom: 50px;
        }
        .slide-left-enter, .slide-right-leave-active {
          opacity: 0;
          -webkit-transform: translate(30px, 0);
          transform: translate(30px, 0);
        }
        .slide-left-leave-active, .slide-right-enter {
          opacity: 0;
          -webkit-transform: translate(-30px, 0);
          transform: translate(-30px, 0);
        }
    }
    .h-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      padding-left: 200px;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 16px;
      z-index:10;
      background-color: #eae5e5;
    }
  }
</style>
