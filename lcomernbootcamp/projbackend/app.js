require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log('Connected to db');
}).catch(()=>{
    console.log('Databse not connected')
});

app.get('/',function(req,res){
    res.send('Patience');
});

app.listen(port,function(){
    console.log('app is running...');
});





