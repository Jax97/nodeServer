var http = require('http')
var url = require('url')

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log('request for ' + pathname + ' received');

        //接收数据编码格式 utf-8
        request.setEncoding("utf-8");

        request.addListener('data',function(postDataChunk) {
            postData += postDataChunk;
            console.log('received POST data chunk ' + postDataChunk + '.');

        });

        //接收到所有数据后，将postData传递给理由
        request.addListener('end',function() {
            route(handle, pathname, response,postData);
        });
        

    }
    http.createServer(onRequest).listen(8888);
}

exports.start = start;