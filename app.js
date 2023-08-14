const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Starting Blog website building');
});

const port = process.env.PORT || 2023;
const start = async()=>{
    try{
        app.listen(port,()=>{
            console.log(`Server is listening on http://localhost:${port}`);
        })
    }catch(err){
        console.log(err);
    }
};

start();