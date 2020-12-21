const express = require('express')
const app = express()
const port = 9000;

app.get('/Login',(req,res)=>{
    res.send('You are logged in');
});

app.get('/SignUp',(req,res)=>{
    res.send('Plese choose Instagram,Facebook,WhatsApp');
});

app.get('/',(req,res)=>{
    res.send('Hello World!');
});



app.listen(port,()=>{
    console.log("Server is up and runing");
});

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })