<template>
  <div class="login_container">
<!--    我是一级路由登录 xs 屏幕小于768时，只显示右侧的文字，左侧不显示-->
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
            <h1>欢迎登录</h1>
            <h2>欢迎来到MAO的后台管理系统</h2>
<!--          <el-form-item>-->
<!--          </el-form-item>-->
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="请输入用户名" ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" @click="login" >登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import{User,Lock} from '@element-plus/icons-vue'
import {reactive,ref} from 'vue';
import {useRouter} from 'vue-router';
//引入用户相关的小仓库
import useUserStore from "../../store/modules/user";
import {ElNotification} from "element-plus";
//引入获取当前时间的函数
import {getTime} from "../../utils/time";
let useStore= useUserStore();
//
let loginForms=ref();
//获取路由器
let $router=useRouter();
//定义变量控制按钮加载效果
let loading=ref(false);

//收集账号与密码的数据
let loginForm = reactive({username:'admin',password:'111111'})
//登录按钮的回调
const login=async ()=>{
  //保证全部表单校验通过之后再发请求
  await loginForms.value.validate();
  //
  //点击登录按钮以后干什么?
  //开始加载效果
  loading.value=true;
  //通知仓库发登录请求
  //请求成功->首页展示数据的地方
  //请求失败->弹出登录失败信息
  try {
    //可以书写.then的语法
    //保证登录成功
    await useStore.userLogin(loginForm);
    //编程式导航跳转到展示数据首页
    $router.push('/')
    //登录成功以后，弹出登录成功的信息
    ElNotification({
      title:`Hi,${getTime()}好！`,//这里是反引号
      message:'欢迎来到MAO的后台管理系统',
      type:'success'
    })
    //登录成功以后，取消加载效果
    loading.value=false;
  }catch (error){
    //登录失败以后，取消加载效果
    loading.value=false;
//登录失败以后，弹出登录失败的信息
    ElNotification({
      title:'登录失败',
      message:'用户名或密码错误',
      type:'error'
    })
  }
}
//定义表单校验需要的配置对象
let rules={
  //required:true表示该字段是必须要校验的
  //min max表示最小长度和最大长度
  username:[
      // {required:true,message:'请输入用户名',trigger:'blur'},
    {required: true,min:3,max:10,message: "账号长度至少3位，小于10位",trigger: 'change'}],
  //message:'请输入用户名',表示错误的提示信息   trigger:'blur'触发时机，blur表示失去焦点时触发
  password:[
      {required:true,min:6,message:'密码长度至少六位',trigger:'change'}]
}

</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("../../assets/images/background.jpg")no-repeat;
  background-size: cover;
}
.login_form{
  position: relative;
  width: 60%;
  top: 30vh;
  background: url("../../assets/images/login_form.png")no-repeat;
  //background: rgba(255, 255, 255, 0.5);
  background-size: cover;
  padding: 40px;
  h1 {
    color: white;
    font-size: 40px;
  }

  h2 {
    font-size: 20px;
    color: white;
    font-weight: lighter;
    margin: 20px 0px;
  }
  .login_btn{
    width: 100%;
  }
}
</style>