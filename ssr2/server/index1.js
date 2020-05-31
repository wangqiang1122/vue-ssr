const fs = require("fs");
const path = require("path");
const express = require('express')
const app = express()

const resolve = dir => {
    return path.resolve(__dirname, dir)
}

// 静态文件加载
app.use(express.static(resolve('../dist/client'), {index: false}));


const { createBundleRenderer } = require("vue-server-renderer");
const bundle = require(resolve("../dist/server/vue-ssr-server-bundle.json"));

// bundle是服务包
const renderer = createBundleRenderer(bundle, {
    runInNewContext: false,
    template: fs.readFileSync(("../public/index.tmpl.html"), "utf-8"), 
    clientManifest: require(("../dist/client/vue-ssr-client-manifest.json")) 
});

app.get('*',async (req,res)=>{ 
    console.log(req.url)
    // /admin
    const context = {
        title:'ssr test',
    url:req.url }
    const html = await renderer.renderToString(context);
res.send(html) })

const port = 4444; app.listen(port, function() {
    console.log(`server started at localhost:${port}`); 
});