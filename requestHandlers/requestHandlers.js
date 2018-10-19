var querystring = require('querystring'),
    fs = require('fs')

function start(response, postData) {
    console.log('request handler Start was called.');

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html";' +
        'charset = UTF-8 />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text"/>' +
        '</form>' +
        '</body>' +
        '</html>';
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log('request for Upload was called.');
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write("You've sent: " + querystring.parse(postData).text);
    response.end();
}

function show(response, postData) {
    fs.readFile("E:\TencentFile\WeChat\WeChat Files\huangjiaxian97\Image\Image\4c25915f56154552772adf021df56ded.jpg", "binary", function (error, file) {
        if(error) {
            response.writeHead(500,{'Content-Type':'text/plain'});
            response.write(error + '\n');
            response.end();
        } else {
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(file,"binary");
            response.end();
        }
    })
}

exports.start = start;
exports.upload = upload;
exports.show = show;