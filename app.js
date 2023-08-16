require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

const connectDB = require('./server/config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(session({
    secret: 'Blogwebsite making',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    }),
    //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
}));
app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));

const port = process.env.PORT || 2023;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Database Connected');
        app.listen(port, () => {
            console.log(`Server is listening on http://localhost:${port}`);
        })
    } catch (err) {
        console.log(err);
    }
};

start();