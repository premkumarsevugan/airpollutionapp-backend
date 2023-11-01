const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("Hello from API");
})

app.listen(3000,()=>{
    console.log("App is running on prt 3000");
})