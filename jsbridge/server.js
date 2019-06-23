/**
 * Created by dfzq on 2018/2/12.
 */
var path = require('path');
var proxy = require('http-proxy-middleware');
var express = require('express');
var app = express();

// 静态资源映射
app.use(express.static(path.join(__dirname, '')));
// 代理映射
app.use('/message/transport', proxy({
    target: 'http://itest.dfzq.com.cn',
    changeOrigin: false,
}));

app.listen(3300, function () {
    console.log('app listening on port 3300');
});