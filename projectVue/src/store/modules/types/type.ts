import type {RouteRecordRaw} from "vue-router";//路由类型

//定义小仓库数据的state类型
export interface UserState{
    token:string|null;
    menuRoutes:RouteRecordRaw[];
}