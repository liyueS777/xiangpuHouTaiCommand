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

Vue.filter('convertSevenAxis',function (num,type) {
  if(type.indexOf('PC')>-1){
    return (Vue.prototype.axisSeven.find((value)=>{
      return num == value.value
    })).label
  }
  else if(type.indexOf('iPad')>-1){
    return (Vue.prototype.axisSeven.find((value)=>{
      return num == value.value
    })).label
  }
  else {
    return (Vue.prototype.axisSevenApp.find((value)=>{
      return num == value.value
    })).label
  }

});


Vue.filter('convertPosition',function (params1,params2) {
  if(params2.slice(0,params2.length-1) == 'PC'){
    return (Vue.prototype.optionPc.find(function (value,index,arr) {
        return  value.label == params1
    })).value
  }else if(params2.slice(0,params2.length-1) == 'Android'||params2.slice(0,params2.length-1) == 'IOS'){
    return (Vue.prototype.optionApp.find(function (value,index,arr) {
      return  value.label == params1
    })).value
  }else if(params2.slice(0,params2.length-1) == 'iPad'){
    return (Vue.prototype.optioniPad.find(function (value,index,arr) {
      return  value.label == params1
    })).value
  }
});


