var express=reqire('express');
var path=require('path');
var accounts=require('./route/accounts')

var app=express();

app.set('view engine','jade');
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'src')));
app.use('/accounts',accounts);

app.get('/');
app.get('/')
app.post();

app.listen();


