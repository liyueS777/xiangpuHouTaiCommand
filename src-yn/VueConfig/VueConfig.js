import Vue from 'vue'

//访问后台地址
//测试
Vue.prototype.Host = 'http://172.19.6.104:8091/NVRCT';
//本地
// Vue.prototype.Host = 'http://172.19.5.228:8080/NVRCT';
//正式
// Vue.prototype.Host = 'http://xp.weilian.cn:8199/NVRCT';

//翌能 正式地址
// Vue.prototype.Host = 'http://xp.yn.weilian.cn:8199/NVRCT';


// 翌能 测试地址
// Vue.prototype.Host = 'http://172.19.6.104:8092/NVRCT';

//登录
//测试
Vue.prototype.HostLogin = 'http://172.19.6.104:8086/UAMS';

//正式
// Vue.prototype.HostLogin = 'http://openplatform.weilian.cn/UAMS';


Vue.prototype.$duration = 2000;
Vue.prototype.$FileUpload ='/FileUpload/uploadIcon';
//将位置环境配到全局
Vue.prototype.optionApp = [
  {
    value: '头部1-移动端',
    label: '1'
  }, {
    value: '头部2-移动端',
    label: '2'
  }, {
    value: '头部3-移动端',
    label: '3'
  }, {
    value: '头部4-移动端',
    label: '4'
  }, {
    value: '焦点圈-移动端',
    label: '5'
  }, {
    value: '定子链-移动端',
    label: '6'
  },
  {
    value: '转子链-移动端',
    label: '7'
  }, {
    value: '粒子链-移动端',
    label: '8'
  }, {
    value: '学习中心-移动端',
    label: '9'
  }, {
    value: '时空圈-移动端',
    label: '10'
  }, {
    value: '汇能器-移动端',
    label: '11'
  }, {
    value: '聚能器-移动端',
    label: '12'
  }, {
    value: '赋能器-移动端',
    label: '13'
  }, {
    value: '焦点圈数据链接接口-移动端',
    label: '14'
  }
];
Vue.prototype.optionPc = [
  {
    value: '商业中心-PC端',
    label: '1'
  }, {
    value: '总控中心-PC端',
    label: '2'
  }, {
    value: '时空中心-PC端',
    label: '3'
  }, {
    value: '视点观-PC端',
    label: '4'
  }, {
    value: '活流观-PC端',
    label: '5'
  }, {
    value: '场景观-PC端',
    label: '6'
  },{
    value: '定子链-PC端',
    label: '7'
  },{
    value: '转子链-PC端',
    label: '8'
  }, {
    value: '粒子链-PC端',
    label: '9'
  }, {
    value: '汇能器-PC端',
    label: '10'
  }, {
    value: '聚能器-PC端',
    label: '11'
  }, {
    value: '赋能器-PC端',
    label: '12'
  }, {
    value: '学习中心-PC端',
    label: '13'
  }
];
//正式

// Vue.prototype.envOption = [
//                             {
//                               value: 'IOS1',
//                               label: 'IOS正式'
//                             },
//                             // {
//                             //   value: 'IOS2',
//                             //   label: 'IOS测试'
//                             // },
//                             // {
//                             //   value: 'IOS3',
//                             //   label: 'IOS本地'
//                             // },
//                             {
//                               value: 'Android1',
//                               label: 'Android正式'
//                             },
//                             // {
//                             //   value: 'Android2',
//                             //   label: 'Android测试'
//                             // },
//                             // {
//                             //   value: 'Android3',
//                             //   label: 'Android本地'
//                             // },
//                             {
//                               value: 'PC1',
//                               label: 'PC正式'
//                             },
//                             // {
//                             //   value: 'PC2',
//                             //   label: 'PC测试'
//                             // },
//                             // {
//                             //   value: 'PC3',
//                             //   label: 'PC本地'
//                             // }
//                           ];

//测试

Vue.prototype.envOption = [
  {
    value: 'IOS1',
    label: 'IOS正式'
  },
  {
    value: 'IOS2',
    label: 'IOS测试'
  },
  {
    value: 'IOS3',
    label: 'IOS本地'
  },
  {
    value: 'Android1',
    label: 'Android正式'
  },
  {
    value: 'Android2',
    label: 'Android测试'
  },
  {
    value: 'Android3',
    label: 'Android本地'
  },
  {
    value: 'PC1',
    label: 'PC正式'
  },
  {
    value: 'PC2',
    label: 'PC测试'
  },
  {
    value: 'PC3',
    label: 'PC本地'
  }
];

// 产业轴

Vue.prototype.axisSeven = [
  {
    value: 1,
    label: '1-环境'
  }, {
    value: 2,
    label: '2-农业'
  }, {
    value: 3,
    label: '3-工业'
  }, {
    value: 4,
    label: '4-健康'
  }, {
    value: 5,
    label: '5-商贸'
  }, {
    value: 6,
    label: '6-公共'
  },
  {
    value: 7,
    label: '7-文化'
  }
]

Vue.config.productionTip = false
