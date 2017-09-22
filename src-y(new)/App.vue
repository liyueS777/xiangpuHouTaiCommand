<template>
  <div id="app">
    <!--<transition :name="transitionName">-->
    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated zoomOut">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
  name: 'app',
  data(){
      return {
        transitionName: 'slide-left'
      }
  },
  created(){

  },
  methods: {

  },

  watch:{
      $route:{
        handler(newRoute){
            const that=this;
            if(!JSON.parse(sessionStorage.getItem('userInfo'))){
              that.$message({
                message: '该用户信息已失效，请重新登录',
                type: 'warning',
                duration: 1500,
                showClose: true,
              });
              that.$router.push('/login');
            }
        },
        deep:true
      },
//    '$route' (to, from) {
//      if(to.path == '/home'){
//        this.transitionName = 'slide-right';
//      }else{
//        this.transitionName = 'slide-left';
//      }
//    }
  }
}
</script>

<style lang="scss">
  @import "./style/base.css";
  body,html {
    height: 100%;
    min-width:1200px;
  }
  .animated {
    animation-duration: .5s;
    animation-fill-mode: both;
  }
  @keyframes bounceInLeft {
    from, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }

    75% {
      transform: translate3d(-10px, 0, 0);
    }

    90% {
      transform: translate3d(5px, 0, 0);
    }

    to {
      transform: none;
    }
  }

  .bounceInLeft {
    animation-name: bounceInLeft;
  }


  @keyframes zoomOut {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    to {
      opacity: 0;
    }
  }

  .zoomOut {
    animation-name: zoomOut;
  }
#app {
  font-family: 'Aveznir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height:100%;
  .child-view {
    transition: all .5s cubic-bezier(.55,0,.1,1);
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
</style>
