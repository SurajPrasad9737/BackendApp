require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send("hello guys....");
});

app.get('/twitter',(req,res)=>{
    res.send("surajkumartwitterdotcom");
})
app.get('/youtube',(req,res)=>{
    res.send("<h1>invoice mini crafts.</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening on ${port}`);
})