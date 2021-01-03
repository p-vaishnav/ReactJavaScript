require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cokkieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors  = require('cors');
const app = express();

const authRoutes = require('./routes/auth.js');

//port
const port = process.env.PORT || 8080;

//db connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log('Connected to db');
}).catch(()=>{
    console.log('Databse not connected')
});

//using Middleware
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
// app.use(express.json());
app.use(cokkieParser());
app.use(cors());


//My Routes
app.use('/api',authRoutes);



//Listening to a particular port
app.listen(port,function(){
    console.log('app is running...');
});





