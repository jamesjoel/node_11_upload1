var crypto = require('crypto');
module.exports=function(name){
	var x = crypto.randomBytes(12).toString('hex');

	var arr= name.split(".");
	var n = arr.length;
	var ext = arr[n-1];

	var newname = x+"."+ext;
	return newname;
}
/*

var crypto = require('crypto');
var x = crypto.randomBytes(12).toString('hex');

var name ="10.jpg.png.gif.jpg.png";
var arr= name.split(".");
var n = arr.length;
var ext = arr[n-1];

var newname = x+"."+ext;

*/