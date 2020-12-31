//middleware assignment
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const isLoggedIn = function(req,res,next){
    console.log('Yes he is logged in..');
    next();
}

const isAdmin = function(req,res,next){
    console.log('Yes he is Admin..');
    next();
}

const sendData = function(req,res){
    res.send('Holla Admin');
}

app.get('/admin',isLoggedIn,isAdmin,sendData)

app.listen(port,()=>{
    console.log(`Listening at ${port}`);
});