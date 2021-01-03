const express = require('express');
const app = express();
const port = 8080;

const requestTime = function(req,res,next){
    req.requestTime = new Date();
    next();
}

app.use(requestTime);

app.get('/tryOut',function(req,res){
    let responseText = `<h1>Requested Time is = ${req.requestTime}</h1>`;
    res.send(responseText);
});

app.listen(port,function(){
    console.log(`Listening at : ${port}`);
});