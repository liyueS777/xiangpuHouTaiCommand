<template>
  <div class="login-wrap">
    <div class="ms-title">象谱空间框架后台管理系统</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submit"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click.native.prevent="submit">登&nbsp;录</el-button>
        </div>
        <!--<p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>-->
      </el-form>
    </div>
    <div class="h-footer">版权所有©象翌微链科技发展有限公司 桂ICP备1300904号</div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
//        radio2: 3,
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },created(){
//        console.log(this.$store.getter.user);
    },
    methods: {
      submit(){
        const that = this;
        that.$refs.ruleForm.validate((valid) => {
            //临时
//          that.$store.commit('updateUser',that.ruleForm);
//          that.$router.push({path: that.$route.query.redirect ? that.$route.query.redirect : '/home'});
//          return;
          if (valid) {
            let reqData = {
              "account":that.ruleForm.username,
              "password":that.ruleForm.password
            };
            that.$Ajax.post(that.HostLogin+'/Auth/adminLogin', reqData).then(function (res) {
              if (res.data.success ==true) {
                  if(res.data.data.grade == 2){
                    that.$message({
                      type: 'warning',
                      message: '该账号不是平台管理员或者集团管理员，没有该权限~',
                      duration: 2000
                    });
                    return;
                  }
                that.$store.commit('updateUser',res.data.data);
                sessionStorage.setItem('userInfo',JSON.stringify(res.data.data));
                that.$router.push({path: that.$route.query.redirect ? that.$route.query.redirect : '/home'});
              } else {
                that.$message({
                  type: 'warning',
                  message: res.data.msg,
                  duration: 2000
                });
              }
            }).catch(function (error) {
              that.logining = false;
              that.$message.err(error);
            });
          } else {
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
  .login-wrap{
    position: relative;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.7);
  }
  .ms-title{
    position: absolute;
    top:50%;
    width:100%;
    margin-top: -210px;
    text-align: center;
    font-size:30px;
    color:rgba(255,255,255,0.8);
    /*text-shadow: 0 0 1px white,0 0 3px white,0 0 5px white;*/
    text-shadow: 0 0 1px white;
    animation:TextShadow 3s infinite alternate;
  }
  @keyframes TextShadow {
    from {text-shadow: 0 0 1px white;}
    to{text-shadow: 0 0 10px white;}
  }
  .ms-login{
    position: absolute;
    left:50%;
    top:50%;
    width:300px;
    height:160px;
    margin:-150px 0 0 -190px;
    padding:40px;
    border-radius: 8px;
    background-color: #d3eed6;
    /*box-shadow: 0 0 8px white;*/
    box-shadow: 0 0 1px white;
    animation: BgShadow 3s infinite alternate;
  }
  @keyframes BgShadow {
    from {box-shadow: 0 0 1px white;}
    to{box-shadow: 0 0 20px white;}
  }
  .login-btn{
    text-align: center;
    margin-top: 20px;
  }
  .login-btn button{
    width:100%;
    height:36px;
  }
  .h-footer {
    position: absolute;
    left:50%;
    top:68%;
    font-size: 16px;
    margin-left: -204px;
    color:rgba(255,255,255,0.8);
    text-shadow: 0 0 1px white;
  }
</style>
