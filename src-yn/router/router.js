
// 将所有页面组件一次性加载是一个很浪费资源和考验用户耐心的做法，尤其在移动端。

// webpack 提供了code splitting，你可以按照下面写法实现当切换到特定路由时才加载代码。

// {
//   path: '/somepath',
//     component: function (resolve) {
//   require(['./demos/somepath.vue'], resolve)
// }
// }


// import configlist from '../components/indexConfig/configlist.vue'
// import configAdd from '../components/indexConfig/configAdd.vue'
// import configEdit from '../components/indexConfig/configEdit.vue'
// import configCascader from  '../components/common/cascader.vue'
// import sevenStarAdd from '../components/sevenStar/sevenStarAdd.vue'
// import sevenStarList from '../components/sevenStar/sevenStarList.vue'
// // import login from '../components/LoginVue.vue'
// import home from '../components/common/homeVue.vue'
// import authAdd from '../components/auth/authAdd.vue'
// import authList from '../components/auth/authList.vue'
// import dirty from '../components/common/404.vue'

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: function (resolve) {
      require(['../components/LoginVue.vue'], resolve)
    }
  },
  {
    path:'/home',
    // name:'home',
    component:function (resolve) {
      require(['../components/common/homeVue.vue'], resolve)
    },
    children:[
      {
        path: '/configlist',
        // name: 'configlist',
        component: function (resolve) {
          require(['../components/indexConfig/configlist.vue'], resolve)
        },
      },
      {
        path: '/configAdd',
        // name: 'configAdd',
        component: function (resolve) {
          require(['../components/indexConfig/configAdd.vue'], resolve)
        },
      },
      {
        path: '/configEdit',
        // name: 'configEdit',
        component: function (resolve) {
          require(['../components/indexConfig/configEdit.vue'], resolve)
        }
      },
      {
        path: '/configCascader',
        // name: 'configCascader',
        component: function (resolve) {
          require(['../components/common/cascader.vue'], resolve)
        },
      },
      {
        path: '/sevenStarAdd',
        // name: 'sevenStarAdd',
        component: function (resolve) {
          require(['../components/sevenStar/sevenStarAdd.vue'], resolve)
        },
      },
      {
        path: '/sevenStarList',
        // name: 'sevenStarList',
        component: function (resolve) {
          require(['../components/sevenStar/sevenStarList.vue'], resolve)
        }
      },
      {
        path: '/authAdd',
        // name: 'sevenStarList',
        component: function (resolve) {
          require(['../components/auth/authAdd.vue'], resolve)
        }
      },
      {
        path: '/authList',
        // name: 'sevenStarList',
        component: function (resolve) {
          require(['../components/auth/authList.vue'], resolve)
        }
      },
      {
        path: '/indexCopy',
        // name: 'sevenStarList',
        component: function (resolve) {
          require(['../components/indexConfig/copy.vue'], resolve)
        }
      },
      {
        path: '/r',
        // name: 'sevenStarList',
        component: function (resolve) {
          require(['../components/common/replace1.vue'], resolve)
        }
      }
    ]
  },
  {
    path: '/404',
    // name: 'sevenStarList',
    component:function (resolve) {
      require(['../components/common/404.vue'], resolve)
    }
  },
  {
    path: '*',
    // name: 'sevenStarList',
    redirect:'/404'
  }
  ]

