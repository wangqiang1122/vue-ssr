// 创建vue实例 并且做首屏渲染

import { createApp  } from './app.js';

export default context => {
    return new Promise((res,rej)=>{
       const { app, router } = createApp(content);
       // 跳转首屏
       router.push(context.url)
       router.onReady(()=>{
        res(app)
       },rej )
    })
}