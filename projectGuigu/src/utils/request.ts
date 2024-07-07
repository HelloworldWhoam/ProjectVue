//进行axios二次封装，目的是使用请求拦截器和响应拦截器
import axios from 'axios';
import { ElMessage } from 'element-plus';
//第一步：利用axios.create()方法创建axios实例(其他的配置：基础路径、超时时间等)
let request=axios.create({
    //基础路径
    baseURL:import.meta.env.VITE_APP_BASE_API,//基础路径上会携带/api
    //超时时间
    timeout:5000
});//request接收axios创建的实例

//第二步：request添加请求与响应拦截器
request.interceptors.request.use((config)=>{
    //请求拦截器中处理请求头
    //1.获取token
    const token=localStorage.getItem('token');
    //2.判断token是否存在
    if(token){
        //3.设置请求头
        config.headers.Authorization=token;
    }
    return config;//返回config配置对象
    //config配置对象中包含请求头headers、经常给服务器端携带公共参数
});//使用请求拦截器

//第三步：响应拦截器
request.interceptors.response.use(
    //成功响应拦截器
    (response)=>{
    //响应拦截器中处理响应数据
    return response.data;//返回响应数据,简化的数据
},
    //失败的回调，一般处理http网络错误
    //HTTP状态码不是200的情况
    (error)=> {
        //定义一个变量用于存储错误信息
        let message = '';//默认值为空
        //http状态码
        let status = error.response.status;
        switch (status) {
            case 401:
                message = 'token过期，请重新登录';
                break;
            case 403:
                message = '登录过期';
                break;
            case 404:
                message = '请求地址错误';
                break;
            case 500:
                message = '服务器错误';
                break;
            default:
                message = '未知错误/网络错误';
                break;
        }
//提示错误信息
        ElMessage({
            type: 'error',
            message
        });
//返回一个失败的promise对象，来终止promise链
        return Promise.reject(error);


    });//使用响应拦截器

//对外暴露
export default request;