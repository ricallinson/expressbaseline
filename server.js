const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const express = require('express');

if (cluster.isMaster) {
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	});
	console.log('Server started, using ' + numCPUs + ' cores and ' + (numCPUs*2) + ' processes...');
} else {
	var app = express();
	app.disable('x-powered-by');
	app.disable('etag');
	app.get('/', function (req, res) {
		res.send('<h1>Hello world</h1>');
	});
	app.listen(8080);
}
