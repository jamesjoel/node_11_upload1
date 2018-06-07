var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var upload = require('express-fileupload');
var changename = require('./changename');

// console.log(x);
app.use(bodyParser());
app.use(upload());

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});
app.post("/", function(req, res){
	var file = req.files.myfile;
	var newname = changename(file.name);
	file.mv(__dirname+"/uploades/"+newname, function(err){
		if(err){
			console.log("Somthing error", err);
			return;
		}
		res.send("<h1>File Uploaded<h1>");
	});
});

app.listen(3000);