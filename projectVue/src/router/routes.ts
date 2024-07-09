//对外暴露常用的路由组件 常量路由
export const constantRoute=[
    {
        //登录的路由
        path:'/login',
        component:()=>import('../views/login/index.vue'),
        name:'login',//命名路由
        meta:{
            title:'登录'

        }
    }
    ,
    {
        //登录成功后展示数据的路由
        path:'/',
        component:()=>import('../layout/index.vue'),
        name:'layout',//命名路由
        meta:{
            title:'layout'
        },
        children:[
            {
                path:'home',//children的path不需要加/
                component:()=>import('../views/home/index.vue'),
                meta:{
                    title:'首页'

                }
            }
        ]
    },
    {
        //404
        path:'/404',
        component:()=>import('../views/404/index.vue'),
        name:'404',//命名路由
        meta: {
            title: '404'

        }
    },
    {
        //任意路由
        path:'/:pathMatch(.*)*',
        redirect:'/404',
        name:'Any',//命名路由
        meta:{
            title:'任意路由'
        }
    }
]