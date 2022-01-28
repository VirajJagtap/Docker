var exp=require('express');
var app=exp();
app.listen(9000,function(){
	console.log("Server started on 9000")});
	app.get('/',function(req,res){
	res.send("<h1> Welcome To Web App</h1>");
	});
	