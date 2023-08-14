require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.use('/',require('./server/routes/main'));

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