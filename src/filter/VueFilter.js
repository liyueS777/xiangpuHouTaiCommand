import Vue from 'vue'


Vue.filter('convertEnv',function (paramsValue) {
  return Vue.prototype.envOption.find(function (value,index,arr) {
    return value.value ==paramsValue;
  }).label;
});


Vue.filter('convertAuthEnv',function (paramsValue) {
  return Vue.prototype.envOption.find(function (value,index,arr) {
    return value.value ==paramsValue;
  }).label;
});


Vue.filter('convertPattern',function (params) {
  if(params=='Company'){return '子公司'}
  if(params=='Label'){return '标题'}
});


Vue.filter('convertPosition',function (params1,params2) {
  if(params2.slice(0,params2.length-1) == 'PC'||params2.slice(0,params2.length-1) == 'Pad'){
    return (Vue.prototype.optionPc.find(function (value,index,arr) {
        return  value.label == params1
    })).value
  }else if(params2.slice(0,params2.length-1) == 'Android'||params2.slice(0,params2.length-1) == 'IOS'){
    return (Vue.prototype.optionApp.find(function (value,index,arr) {
      return  value.label == params1
    })).value
  }
});


