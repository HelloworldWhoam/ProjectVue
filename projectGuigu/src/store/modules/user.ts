//创建用户相关的小仓库
import{defineStore} from "pinia";
//引入接口
import{reqLogin} from "../../api/user";
//引入数据类型
import type{loginForm,loginResponseData} from "../../api/user/type";
import type {UserState} from "./types/type";
//引入操作本地存储的工具方法
import {SET_TOKEN,GET_TOKEN} from "../../utils/token";
//引入常量路由
import {constantRoute} from "../../router/routes";

//创建一个用户小仓库
let useUserStore=defineStore('User',{
    //小仓库，存储数据的地方
    state:():UserState=> {   //state是一个函数
        return {
            token:GET_TOKEN(),//用户唯一标识token
            menuRoutes:constantRoute,//仓库存储生成菜单需要的数组（路由）
        }
    },
    //处理异步/逻辑的地方，/存储方法的地方
    actions:{
        //用户登录的方法
        async userLogin(data:loginForm) {
            //登录请求
            let result :loginResponseData= await reqLogin(data);
            //登录成功，200->token存储到小仓库
            //登录请求失败:201->提示错误信息
            if (result.code === 200) {
                //由于pinia|vuex仓库存储数据其实利用js对象存储
                this.token = (result.data.token as string);//pinia仓库存储token
                //所以要本地化存储token
                SET_TOKEN(result.data.token as string);
                //能保证当前的async函数返回一个成功的promise对象
                return "ok";
            }else {
                //提示错误信息
                return Promise.reject(new Error(result.data));
            }
        }
    },
    getters:{}
})
//对外暴露获取用户小仓库的方法
export default useUserStore;