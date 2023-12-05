const express = require('express');
const ejs = require('ejs')
const path = require("path")
const port = 3000
const mysql = require("mysql")
const dotenv = require("dotenv");

dotenv.config({ path: '../.env' })

const app = express()
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: '8889',
    user: 'root',
    password: 'root',
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public');
app.set('view engine', 'ejs');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MySQL Connected...")
    }
})

app.use(express.static('public'))
app.use('/auth', require('./routes/auth'))

//Routes
app.use('/', require('./routes/pages'))
app.use('/auth', require('./routes/auth'))


app.listen(port, () =>
    console.log(`Server has started on port: ${port}`))