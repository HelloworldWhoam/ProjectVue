//封装本地存储数据与读取数据的方法
export const SET_TOKEN=(token:string)=>{
    localStorage.setItem("TOKEN",token);
}
//本地存储获取数据
export const GET_TOKEN=()=>{
    return localStorage.getItem("TOKEN");
}