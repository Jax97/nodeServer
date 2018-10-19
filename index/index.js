var server = require('../server/server')
var router = require('../router/route')
var requestHandlers = require('../requestHandlers/requestHandlers')

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route,handle);