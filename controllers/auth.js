const mysql = require("mysql")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")



const db = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'apollo_coffee'
});

exports.signup = async(req, res) => {
    console.log(req.body);

    const { name, email, password, passwordConfirm } = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], async(error, result) => {
        if (error) {
            console.log(error);
            return;
        }

        if (result.length > 0) {
            return res.render('signup', {
                message: 'That email is already in use'
            });
        } else if (password !== passwordConfirm) {
            return res.render('signup', {
                message: 'Passwords do not match'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);


    });
};