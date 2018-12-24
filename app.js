var express=reqire('express');
var path=require('path');

var app=express();
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'src')));

app.get('/');
app.get('/')
app.post();

app.listen();


