export const getTime=()=>{//封装一个函数，用来获取当前时间，早上好，下午好，晚上好

    let message='';
    //通过内置对象Date获取当前时间
    let time=new Date().getHours();
    if(time>=6&&time<12){
        message= '早上';
    }else if(time>=12&&time<18){
        message='下午'
    }else{
        message= '晚上'
    }
    return message;
}