var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var fs = require("fs");
var a =[];
var b ;
server.listen(process.env.PORT || 3000);

app.get('/', (req, res) =>{
	console.log("done");
	res.send(a[0]+","+a[1]+","+a[2]+","+a[3]+","+a[4]+","+a[5]+"\n"+","+a[6]+","+a[7]+","+a[8]+","+a[9]+","+a[10]+","+"\n"+
		a[11]+","+a[12]+","+a[13]+","+a[14]+","+a[15]+"\n"+","+a[16]+","+a[17]+","+a[18]+","+a[19]+","+a[20]+","+"\n"+
		a[21]+","+a[22]+","+a[23]+","+a[24]+","+a[25]+"\n"+","+a[26]+","+a[27]+","+a[28]+","+a[29]+","+a[30]+","+"\n"+
		a[31]+","+a[32]+","+a[33]+","+a[34]+","+a[35]+"\n"+","+a[36]+","+a[37]+","+a[38]+","+a[39]+","+a[40]+","+"\n"+
		a[41]+","+a[42]+","+a[43]+","+a[44]+","+a[45]+"\n"+","+a[46]+","+a[47]+","+a[48]+","+a[49]+","+a[50]
		);
})
 
 app.post('/uploading')
io.sockets.on('connection', function (socket){
	b=0;
	console.log("connect roi ne");
	// io.socket.emit('serverguitinnhan', {noidung: data});
	socket.on('mess', function(data){	
		a[b]=data;
		b=b+1;
	});

});





