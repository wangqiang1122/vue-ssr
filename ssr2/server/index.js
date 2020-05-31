const express= require('express');
const Vue = require('vue');
const app = express();
const page = new Vue({
    data: {name: '测试服务端'},
    template: '<div>{{name}}</div>'
})

// 渲染器
const renderer = require('vue-server-renderer').createRenderer();

app.get('/', async function(req,res) {
   // 执行渲染
   const html = await renderer.renderToString(page);

   res.send(html);

})



app.listen('4444',()=>{
    console.log('开启了服务')
})